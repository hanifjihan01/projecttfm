'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartSwitchFeatures() {
  const features = [
    'Available in 1-way, 2-way, or 3-way switch variants under the Dynamax brand.',
    'Supports operating voltage from AC 96V to 264V.',
    'Capable of handling loads up to 300W per switch channel.',
    'Can be installed with either live & neutral wiring or live wire only.',
    'Supports wireless communication with a range of up to 50 meters in open areas.',
    'Consumes less than 0.1W power in standby mode.',
    'Compact dimensions: 86mm x 86mm x 35mm, ideal for smart home installations.',
  ];

  return (
    <section
      id="face-features40"
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
              src="/assets/images/project/smartswitch.png"
              alt="Smart Switch"
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
