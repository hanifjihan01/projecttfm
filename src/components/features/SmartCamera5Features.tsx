'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartCamera5Features() {
  const features = [
    'Uses a 1/1.8-inch CMOS sensor with up to 3072x1728 resolution at 25fps, supporting H.265/H.264 compression.',
    'Features an effective 5MP resolution with lens viewing angles of 110.8° (4mm) and 66.6° (6mm).',
    'Equipped with 6 warm lights with adaptive dimming for night illumination.',
    'Image features include contrast and brightness adjustment, face mode, and defog enhancement.',
    'Supports two-way audio with G711A/U encoding, enabling voice monitoring and intercom.',
    'Allows access by up to 8 clients simultaneously via Cloud Video 2.0, compatible with ONVIF, RTSP, and other protocols.',
    'Includes RJ45 port, TF card slot, RS485, audio input/output, and alarm input/output.',
  ];

  return (
    <section
      id="face-features105"
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
              src="/assets/images/project/kameraoutdor.png"
              alt="Security Camera"
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
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-1 lg:px-0"
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
