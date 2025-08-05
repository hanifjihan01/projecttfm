'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function InteractiveFeatures() {
  const features = [
    'Layar sentuh berukuran 24 inci untuk tampilan yang luas dan nyaman.',
    'Menjalankan sistem operasi Android untuk fleksibilitas dan kompatibilitas tinggi.',
    'Memberikan pengalaman interaktif yang modern dan responsif.',
    'Cocok untuk berbagai kebutuhan seperti check-in mandiri atau informasi interaktif.',
    'Desain elegan yang mendukung estetika ruangan.',
  ];

  return (
    <section
      id="face-features25"
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
              src="/assets/images/project/layarinteractivelcd.png"
              alt="Interactive Display"
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
