'use client';

import { motion } from 'framer-motion';

export function ScanPasportParameter() {
  const parameters = [
    {
      label: 'Scanning Element & Printing',
      value:
        'Document scanner equipped with a CMOS scanning element and supports personal document printing.',
    },
    {
      label: 'Color Depth & Resolution',
      value:
        'Scans with 24-bit color depth and an optical resolution of 1280 x 1080.',
    },
    {
      label: 'Scanning Speed',
      value: 'High-speed scanning performance of up to 200 scans per second.',
    },
    {
      label: 'Special Features',
      value: 'Includes OCR Processing and Auto Sensor features.',
    },
    {
      label: 'Supported Code Types',
      value:
        'Capable of reading multiple code types: 1D, 2D, QR Code, Data Matrix, PDF417, and OCR Symbologies.',
    },
    {
      label: 'Light Source',
      value: 'Uses red LED light source for scanning.',
    },
    {
      label: 'Interfaces',
      value: 'Supports USB and RS232 interfaces.',
    },
    {
      label: 'Operating Mode',
      value: 'Operates in automatic scanning mode (Auto Sense).',
    },
    {
      label: 'Dimensions',
      value: '152 x 149 x 80 mm.',
    },
    {
      label: 'Application Areas',
      value:
        'Suitable for kiosks, airports, customs, hotels, and border access control.',
    },
  ];

  return (
    <section className="w-full bg-accent-900 px-4 py-10 sm:px-6 md:px-10 lg:px-24">
      <div className="mx-auto w-full max-w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6 text-lg font-semibold text-white sm:text-xl md:text-2xl"
        >
          Parameters
        </motion.h2>

        <div className="overflow-hidden rounded-xl border border-white/10">
          {parameters.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 px-4 py-4 text-sm sm:flex-row sm:items-start sm:gap-4 sm:text-base ${
                index % 2 === 0
                  ? 'bg-white/10 hover:bg-white/10'
                  : 'bg-white/5 hover:bg-white/20'
              } transition-colors duration-200`}
            >
              <div className="w-full font-medium text-gray-300 sm:w-1/3 md:w-1/4">
                {item.label}
              </div>
              <div className="w-full text-gray-100 sm:w-2/3 md:w-3/4">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
