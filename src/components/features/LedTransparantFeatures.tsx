'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LedTransparantFeatures() {
  const features = [
    'Available in various module sizes, ranging from 816x384 mm (P6) to 1000x400 mm (P6.25-P20).',
    'Pixel pitch options from 6 mm (P6) to 20 mm (P20), all using R1G1B1 pixel composition for full-color display.',
    'Higher pixel density with smaller pitch — P6 offers 8,704 pixels per module and 27,777 px/m², while P20 has 1,000 pixels per module and 2,500 px/m².',
    'Brightness up to 4000 nits with a wide 160° viewing angle for visibility from multiple directions.',
    'High refresh rate of 3840Hz and 16-bit grayscale for smooth, flicker-free visuals ideal for video playback.',
    'Transparency increases with pixel pitch — from 90% (P6) to 95% (P20), suitable for transparent LED or window displays.',
    'Operates on AC 110-240V, 50/60Hz, with maximum power from 400W/m² to 600W/m² (P6.25) and average power at 200W/m².',
  ];

  return (
    <section
      id="face-features65"
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
              src="/assets/images/project/ledtransparant.png"
              alt="LED Transparent"
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
