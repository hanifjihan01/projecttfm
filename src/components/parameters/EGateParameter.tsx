'use client';

import { motion } from 'framer-motion';

export function EGateParameter() {
  const parameters = [
    { label: 'Power', value: 'AC 90–264V, 47–63Hz' },
    { label: 'Torque', value: '57N·m' },
    { label: 'Noise Level', value: '≤ 40dB' },
    { label: 'Sensor', value: '48 infrared sensors' },
    { label: 'Camera', value: '2MP binocular face recognition' },
    { label: 'Recognition Rate', value: '99% success, 0.01% error' },
    { label: 'Display', value: '8-inch HD IPS' },
    { label: 'Access', value: 'QR & RFID ISO 14443-A/B, 13.56MHz' },
    { label: 'Communication', value: 'TCP/IP' },
    { label: 'MCBF', value: '220 million cycles' },
    { label: 'Channel Width', value: '600–1200mm' },
    { label: 'Dimensions', value: '1500×150×1000mm' },
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
