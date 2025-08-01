'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Features', 'Specification', 'Accessories', 'Download'];

export function AutogateDualDetail() {
  const [activeTab, setActiveTab] = useState('Features');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Features':
        return (
          <motion.ul
            key="features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="list-inside list-disc space-y-3 pl-4 text-sm text-gray-300 sm:text-base"
          >
            <li>
              <strong className="text-white">Fungsi Utama:</strong> Pemeriksaan
              keamanan dalam ruangan.
            </li>
            <li>
              <strong className="text-white">Deteksi:</strong> Deteksi logam &
              identitas (ICAO9303), barcode 1D/2D, wajah & tubuh (opsional).
            </li>
            <li>
              <strong className="text-white">Keamanan Tambahan:</strong> Alarm
              dan pembukaan pintu otomatis saat kondisi darurat.
            </li>
            <li>
              <strong className="text-white">Standar Keselamatan:</strong>{' '}
              Sesuai GB15208 dengan dosis sinar-X mikro.
            </li>
          </motion.ul>
        );

      case 'Specification':
        return (
          <motion.div
            key="specs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 text-sm text-gray-300 sm:text-base"
          >
            <p>
              <strong className="text-white">Ukuran:</strong> 4700 × 3840 × 2300
              mm
            </p>
            <p>
              <strong className="text-white">Material:</strong> Stainless steel
              304 & pelat baja canai dingin
            </p>
            <p>
              <strong className="text-white">Kapasitas Deteksi:</strong>{' '}
              Maksimum 160 kg
            </p>
            <p>
              <strong className="text-white">Saluran Pemeriksaan:</strong> 650 ×
              500 mm
            </p>
            <p>
              <strong className="text-white">Konsumsi Daya:</strong> 4000W
            </p>
            <p>
              <strong className="text-white">Tegangan Input:</strong> AC 220V
            </p>
            <p>
              <strong className="text-white">Sistem Pengukuran:</strong> Suhu &
              kelembapan dengan akurasi tinggi
            </p>
          </motion.div>
        );

      case 'Accessories':
        return (
          <motion.ul
            key="accessories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="list-inside list-disc space-y-3 pl-4 text-sm text-gray-300 sm:text-base"
          >
            <li>Prosesor Intel Core i5</li>
            <li>RAM 16GB DDR4</li>
            <li>SSD 256GB</li>
            <li>Port USB, PCI, dan jaringan</li>
          </motion.ul>
        );

      case 'Download':
        return (
          <motion.div
            key="download"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3 text-sm text-gray-300 sm:text-base"
          >
            <a href="#" className="text-primary-400 hover:underline">
              🧰 Information Item (PDF)
            </a>
          </motion.div>
        );
    }
  };

  return (
    <section className="relative bg-accent-900 px-4 py-12 text-white sm:px-6 md:px-12 lg:px-20">
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="font-secondary text-lg font-semibold uppercase leading-tight md:text-xl lg:text-2xl">
          Integrated Boom Gate With Smart
          <br className="hidden sm:block" />
          <span className="text-primary-400"> AI Camera</span>
        </h1>
      </motion.div>

      {/* Image */}
      <div className="relative z-0 mx-auto  mb-24 w-full max-w-[450px]">
        <div className="pointer-events-none overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/assets/images/project/autogatedual3.png"
            alt="Face Recognition Thermal MVNT-86"
            width={450}
            height={400}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative z-10 mx-auto -mt-24 max-w-7xl rounded-xl bg-white/5 p-6 shadow-lg md:p-10">
        {/* Tab Buttons */}
        <div className="mb-6 flex flex-wrap gap-4 border-b border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? 'border-b-2 border-white text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content (Fixed Height + Scroll) */}
        <div className="h-[380px] overflow-y-auto">
          <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
}
