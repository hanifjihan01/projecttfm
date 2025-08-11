'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MiniFeatures() {
  const features = [
    '8-inch IPS display with 1280x800 resolution and 10-point touch support.',
    'Powered by Allwinner A523 Octa-core Cortex-A55 processor (1.8GHz).',
    'Runs Android 13 operating system.',
    '4GB RAM plus 4GB virtual memory, and 64GB ROM.',
    'Supports microSD expansion up to 512GB.',
    '5MP front camera and 5MP rear camera with autofocus.',
    'Bluetooth 5.0 and dual-band Wi-Fi (2.4GHz + 5GHz).',
    'Gravity sensor for enhanced functionality.',
    'USB Type-C port with OTG support, charging, and data transfer.',
  ];

  return (
    <section
      id="face-features90"
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

        {/* Image + List */}
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
              src="/assets/images/project/mini.png"
              alt="Tablet Device"
              width={260}
              height={200}
              className="h-auto w-full rounded-lg object-contain shadow-md"
            />
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-8 lg:px-0"
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
