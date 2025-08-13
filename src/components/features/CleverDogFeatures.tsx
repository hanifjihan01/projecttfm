'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function CleverDogFeatures() {
  const features = [
    'Supports alarm mode via mobile notifications.',
    'Equipped with a microphone and speaker for two-way audio.',
    'Uses High Profile video compression for efficient streaming.',
    'Features a 108° lens angle and infrared (IR) range up to 8 meters.',
    'Storage options available via cloud service or TF card.',
    'Compatible with Android devices.',
    'Supports standard 802.11 b/g/n Wi-Fi connection.',
    'Camera can rotate horizontally up to 350° and vertically up to 110°.',
    'Powered via micro USB cable (5V=1A).',
    'Supports WEP, WAP, and WPA2 wireless encryption for secure connection.',
  ];

  const firstColumn = features.slice(0, 6);
  const secondColumn = features.slice(6);

  return (
    <section
      id="face-features121"
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
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-start lg:pl-60">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px]"
          >
            <Image
              src="/assets/images/project/cleverdog.png"
              alt="CleverDog Camera"
              width={260}
              height={200}
              className="h-auto w-full rounded-lg object-contain shadow-md"
            />
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-2 text-base leading-relaxed text-gray-100 sm:text-lg lg:mt-5 lg:flex lg:gap-12 lg:px-0"
          >
            <ul className="space-y-5 lg:text-[16px]">
              {firstColumn.map((text, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 mt-2 h-px w-6 bg-gray-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            {secondColumn.length > 0 && (
              <ul className="mt-6 space-y-5 lg:mt-0 lg:text-[16px]">
                {secondColumn.map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 mt-2 h-px w-6 bg-gray-400" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
