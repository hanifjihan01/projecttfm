'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Features', 'Specification', 'Accessories', 'Download'];

export function EGateDetail() {
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
              <strong className="text-white">Swing Gate Indoor:</strong> gerbang
              ayun khusus untuk penggunaan dalam ruangan.
            </li>
            <li>
              <strong className="text-white">Adjustable Speed:</strong> Deteksi
              Kecepatan buka/tutup hingga 515ms.
            </li>
            <li>
              <strong className="text-white">Low Noise:</strong> Tingkat
              kebisingan ≤ 40dB.
            </li>
            <li>
              <strong className="text-white">Face Recognition:</strong> Kamera
              binokular 2MP, akurasi 99%.
            </li>
            <li>
              <strong className="text-white">Infrared Sensors:</strong> 48
              sensor inframerah presisi tinggi.
            </li>
            <li>
              <strong className="text-white">8-inch IPS Display:</strong> Layar
              HD untuk tampilan data pengguna.
            </li>
            <li>
              <strong className="text-white">Card & QR Access:</strong> Dukungan
              ISO 14443-A/B & pembaca kode 1D/2D.
            </li>
            <li>
              <strong className="text-white">Long Lifespan:</strong> MCBF hingga
              220 juta siklus.
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
            className="text-sm text-gray-300 sm:text-base"
          >
            <p>
              <strong className="text-white">Power:</strong> AC 90–264V, 47–63Hz
            </p>
            <p>
              <strong className="text-white">Torque:</strong> 57N·m
            </p>
            <p>
              <strong className="text-white">Noise Level:</strong> ≤ 40dB
            </p>
            <p>
              <strong className="text-white">Sensor:</strong> 48 infrared
              sensors
            </p>
            <p>
              <strong className="text-white">Camera:</strong> 2MP binocular face
              recognition
            </p>
            <p>
              <strong className="text-white">Recognition Rate:</strong> 99%
              success, 0.01% error
            </p>
            <p>
              <strong className="text-white">Display:</strong> 8-inch HD IPS
            </p>
            <p>
              <strong className="text-white">Access:</strong> QR & RFID ISO
              14443-A/B, 13.56MHz
            </p>
            <p>
              <strong className="text-white">Communication:</strong> TCP/IP
            </p>
            <p>
              <strong className="text-white">MCBF:</strong> 220 million cycles
            </p>
            <p>
              <strong className="text-white">Channel Width:</strong> 600–1200mm
            </p>
            <p>
              <strong className="text-white">Dimensions:</strong>{' '}
              1500×150×1000mm
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
            className="list-inside list-disc space-y-2 pl-4 text-sm text-gray-300 sm:text-base"
          >
            <li>Wall Mount Bracket</li>
            <li>Power Adapter (12V/2A)</li>
            <li>RJ45 LAN Cable</li>
            <li>Relay Output Cable</li>
            <li>User Manual & Quick Guide</li>
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
          E-Gate Single MVCM-2108-JZ
          <br className="hidden sm:block" />
          <span className="text-primary-400"></span>
        </h1>
      </motion.div>

      {/* Image */}
      <div className="relative z-0 mx-auto mt-10 w-full max-w-[450px]">
        <div className="pointer-events-none overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/assets/images/project/egate.png"
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
