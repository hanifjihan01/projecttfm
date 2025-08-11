'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function CamAttandanceFeatures() {
  const features = [
    'High-performance SOC chip-based facial recognition system running on Linux OS.',
    'Equipped with a 2.0MP camera and 4.3mm lens, capable of face recognition in under 1 second with ≥99.7% accuracy.',
    'Recognition distance range from 0.3 to 2 meters, supporting up to 5,000 stored faces.',
    'Features a 5-inch IPS LCD touchscreen with 1280x720 resolution.',
    'Supports TCP/IP, Wi-Fi, USB, RS485, and Wiegand Output connectivity.',
    'Built-in speaker, white LED, IR light, and upgrade & recovery buttons.',
    'Wall-mountable design with dimensions of 154x154x20 mm and weight of 730g.',
    'Powered by DC 12V 2A and operates within -20℃ to 60℃ temperature range and 10-90% humidity.',
  ];

  return (
    <section
      id="face-features94"
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
              src="/assets/images/project/camattandance.png"
              alt="Facial Recognition Device"
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
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-10 lg:px-0"
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
