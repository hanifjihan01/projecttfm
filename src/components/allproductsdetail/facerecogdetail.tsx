'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Features', 'Specification', 'Accessories', 'Download'];

export function FaceRecogDetail() {
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
              <strong className="text-white">8-inch HD IPS Display:</strong>{' '}
              Resolusi 1280 x 800 piksel untuk tampilan tajam.
            </li>
            <li>
              <strong className="text-white">Dual 2MP WOR Cameras:</strong>{' '}
              Deteksi wajah dalam jarak 0.2 – 3 meter.
            </li>
            <li>
              <strong className="text-white">
                Quad-Core Processor + 1GB RAM / 8GB Storage:
              </strong>{' '}
              Performa efisien.
            </li>
            <li>
              <strong className="text-white">Up to 50,000 Faces:</strong>{' '}
              Kapasitas besar untuk berbagai skenario penggunaan.
            </li>
            <li>
              <strong className="text-white">Accuracy &gt; 99%:</strong> FAR
              &lt; 0.01%, Matching &lt; 100 ms.
            </li>
            <li>
              <strong className="text-white">Connectivity:</strong> LAN, RS232,
              dan relay output.
            </li>
            <li>
              <strong className="text-white">Weatherproof IP55:</strong> Tahan
              suhu -20°C hingga 60°C.
            </li>
            <li>
              <strong className="text-white">Compact:</strong> 235 x 30 x 20 mm,
              pemasangan gantung.
            </li>
            <li>
              <strong className="text-white">Power:</strong> DC 12V/2A.
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
            <p className="mb-2">
              <strong className="text-white">Display:</strong> 8 IPS 1280x800
            </p>
            <p className="mb-2">
              <strong className="text-white">Camera:</strong> Dual 2MP (WOR)
            </p>
            <p className="mb-2">
              <strong className="text-white">Recognition Range:</strong> 0.2 – 3
              meters
            </p>
            <p className="mb-2">
              <strong className="text-white">CPU:</strong> Quad-core ARM
            </p>
            <p className="mb-2">
              <strong className="text-white">Memory:</strong> 1GB RAM, 8GB ROM
            </p>
            <p className="mb-2">
              <strong className="text-white">OS:</strong> Linux Embedded
            </p>
            <p className="mb-2">
              <strong className="text-white">Interfaces:</strong> LAN, RS232,
              Relay Out
            </p>
            <p className="mb-2">
              <strong className="text-white">Working Temp:</strong> -20°C to
              60°C
            </p>
            <p>
              <strong className="text-white">Protection:</strong> IP55 certified
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
          Face Recognition Thermal
          <br className="hidden sm:block" />
          <span className="text-primary-400">MVNT-86</span>
        </h1>
      </motion.div>

      {/* Image */}
      <div className="relative z-0 mx-auto mt-10 w-full max-w-[450px]">
        <div className="pointer-events-none overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/assets/images/project/kt5.png"
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
