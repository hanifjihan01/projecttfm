'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HelmetFeatures() {
  const features = [
    'Dimensions: 294 x 273 x 186 mm, weight approximately 1080 g.',
    'AR display with a 35° field of view, equivalent to watching a 74-inch TV from 3 meters away.',
    'Main camera: 13 MP, F2.0 aperture, 48° field of view, supports 1080p@30fps recording.',
    'Supports navigation systems: GPS, Galileo, GLONASS, and BeiDou.',
    'Battery life: up to 5 hours in temperature measurement mode',
    'Battery capacity: 5000 mAh, supports 2A fast charging.',
    'Thermal imaging resolution: 384 x 288, FOV 33.4°, temperature range -20~120°C, accuracy ±0.3°C.',
    'Operating temperature: -10°C to 50°C, storage temperature: -20°C to 60°C.',
  ];

  return (
    <section
      id="face-features91"
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
              src="/assets/images/project/smarthelmet.png"
              alt="Smart Helmet Device"
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
