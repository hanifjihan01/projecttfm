'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LcdStandingFeatures() {
  const features = [
    'Available in various screen sizes: 32, 43, 49, 55, 65, and 75 inches, with a 16:9 aspect ratio and 89° viewing angle from all directions.',
    'Supports Full HD (1920x1080) and 4K (3840x2160) resolutions, with 400 nits brightness, 1000:1 contrast ratio, and <6ms response time.',
    'Uses LED backlight with a service life of up to 100,000 hours.',
    'Screen Select: non-touch, infrared touch, dan capacitive touch.',
  ];

  return (
    <section
      id="face-features21"
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
              src="/assets/images/project/lcdstanding.png"
              alt="LCD Standing Display"
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
