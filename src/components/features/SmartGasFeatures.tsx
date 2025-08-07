'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartGasFeatures() {
  const features = [
    'Utilizes photoelectric sensor technology to detect smoke concentration in real-time.',
    'Designed for low power consumption and ultra-long standby operation.',
    'Equipped with a clear power indicator for easy battery monitoring and timely replacement.',
    'Specially designed to detect natural gas with alarm activation at 10%LEL ± 3%LEL concentration.',
    'Delivers alarm sound volume of over 85dB at a distance of 1 meter.',
    'Supports wireless signal output for flexible integration.',
  ];

  return (
    <section
      id="face-features53"
      className="w-full bg-accent-900 px-4 py-10 sm:px-6 lg:px-24"
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Heading */}
        <div className="mb-6 w-full text-center lg:w-1/4 lg:pl-32 lg:text-left">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Introduction
          </h2>
          <h3 className="mt-2 text-base font-medium text-gray-100 sm:text-lg">
            Features
          </h3>
        </div>

        {/* Image and List */}
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-start lg:pl-40">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px]"
          >
            <Image
              src="/assets/images/project/smartgassensor.png"
              alt="Smart Gas Sensor"
              width={260}
              height={200}
              className="mt-6 h-auto w-full rounded-lg object-contain shadow-md"
            />
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-20 lg:px-0"
          >
            <ul className="list-none space-y-5 lg:text-[16px]">
              {features.map((text, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 mt-2 h-px w-6 bg-gray-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
