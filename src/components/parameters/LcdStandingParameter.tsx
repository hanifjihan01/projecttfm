'use client';

import { motion } from 'framer-motion';

export function LcdStandingParameter() {
  const parameters = [
    {
      label: 'Size & Viewing Angle',
      value:
        'Available in various screen sizes: 32, 43, 49, 55, 65, and 75 inches, with a 16:9 aspect ratio and 89° viewing angle from all directions.',
    },
    {
      label: 'Resolution & Image Quality',
      value:
        'Supports Full HD (1920x1080) and 4K (3840x2160) resolutions, with 400 nits brightness, 1000:1 contrast ratio, and <6ms response time.',
    },
    {
      label: 'Backlighting',
      value:
        'Equipped with LED backlight with a lifespan of up to 100,000 hours.',
    },
    {
      label: 'Touchscreen Options',
      value:
        'Available in non-touch, infrared touch, and capacitive touch options.',
    },
    {
      label: 'Android System',
      value:
        'Default Android system (version 5.1/6.0/7.1/8.1) with RK3128, RK3288, or RK3399 processors.',
    },
    {
      label: 'Android Memory Capacity',
      value: 'RAM options: 1GB, 2GB, up to 4GB; ROM options: 8GB up to 32GB.',
    },
    {
      label: 'Windows System',
      value:
        'Also available with Windows (Win7/8/10) using Intel i3/i5/i7 processors, 4GB–16GB DDR3 RAM, and 128GB–512GB SSD.',
    },
    {
      label: 'Connectivity',
      value:
        'Supports LAN (10/100M or 1000M), Wi-Fi, and optional 3G/4G connectivity.',
    },
    {
      label: 'Input/Output Ports',
      value: 'Includes USB, RJ45, HDMI, and audio ports.',
    },
    {
      label: 'Media Formats',
      value:
        'Supports media formats: images (JPG, PNG, BMP, GIF), audio (MP3, WMA, FLAC, etc.), and video (MP4, AVI, MKV, MOV, etc.).',
    },
    {
      label: 'Built-in Applications',
      value:
        'Comes with built-in apps such as video player, image viewer, browser, and file manager.',
    },
    {
      label: 'Usage',
      value: 'Suitable for interactive or commercial digital display needs.',
    },
  ];

  return (
    <section className="w-full bg-accent-900 px-4 py-10 sm:px-6 md:px-10 lg:px-24">
      <div className="mx-auto w-full max-w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6 text-lg font-semibold text-white sm:text-xl md:text-2xl"
        >
          Parameters
        </motion.h2>

        <div className="overflow-hidden rounded-xl border border-white/10">
          {parameters.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 px-4 py-4 text-sm transition-colors duration-200 sm:flex-row sm:items-start sm:gap-4 sm:text-base ${
                index % 2 === 0
                  ? 'bg-white/10 hover:bg-white/10'
                  : 'bg-white/5 hover:bg-white/20'
              }`}
            >
              <div className="w-full font-medium text-gray-300 sm:w-1/3 md:w-1/4">
                {item.label}
              </div>
              <div className="w-full text-gray-100 sm:w-2/3 md:w-3/4">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
