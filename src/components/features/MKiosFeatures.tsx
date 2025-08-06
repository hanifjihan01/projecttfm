'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MKiosFeatures() {
  const features = [
    'Smart front desk machine with 27 inch touch screen and 16:9 aspect ratio.',
    'Designed for self-check-in at hotels with integration to security, visitor management and HR systems.',
    '82 / 5,000Equipped with fast code and face scanning features for easy operation.',
    'Can be used as access control to certain floors or rooms.',
    'Operating 24 hours, it supports self-check-in for individual guests, groups, online bookers, and even without an Identity Card.',
  ];

  return (
    <section
      id="face-features24"
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

        {/* Gambar dan List */}
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-start lg:pl-40">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px]"
          >
            <Image
              src="/assets/images/project/mkios.png"
              alt="Smart Vending Machine"
              width={260}
              height={200}
              className="h-auto w-full rounded-lg object-contain shadow-md"
            />
          </motion.div>

          {/* List fitur */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-7 lg:px-0"
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
