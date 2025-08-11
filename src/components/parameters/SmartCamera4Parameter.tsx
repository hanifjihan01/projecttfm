'use client';

import { motion } from 'framer-motion';

export function SmartCamera4Parameter() {
  const parameters = [
    {
      label: 'Image Sensor',
      value:
        'Equipped with a 1/3-inch CMOS 5MP sensor, delivering a maximum resolution of 2560x1792.',
    },
    {
      label: 'Lens & Viewing Angle',
      value:
        'Features a 2.8mm lens providing a wide horizontal viewing angle of 96°.',
    },
    {
      label: 'Video Recording',
      value: 'Supports video recording at 25fps with H.264/H.265 compression.',
    },
    {
      label: 'Audio',
      value: 'Built-in microphone and speaker for two-way audio communication.',
    },
    {
      label: 'Smart Features',
      value:
        'Motion detection, human detection, area analysis, and people counting.',
    },
    {
      label: 'Image Settings',
      value:
        'Adjustable image settings for optimal performance in various conditions.',
    },
    {
      label: 'Night Vision',
      value:
        'Night vision up to 30 meters using white LED and IR illumination.',
    },
    {
      label: 'Storage',
      value: 'Supports microSD storage up to 512GB.',
    },
    {
      label: 'Connectivity',
      value: '10/100Mbps Ethernet connection with ONVIF protocol support.',
    },
    {
      label: 'User Access',
      value:
        'Accessible by up to 13 users via web browser or iOS/Android application.',
    },
    {
      label: 'Weatherproof',
      value: 'IP67-rated design for reliable outdoor use.',
    },
    {
      label: 'Installation',
      value: 'Supports wall or ceiling installation.',
    },
    {
      label: 'Operating Conditions',
      value:
        'Operates in temperatures from -25°C to 55°C with low power consumption.',
    },
    {
      label: 'Power',
      value: 'PoE (Power over Ethernet) supported for simplified installation.',
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
              className={`flex flex-col gap-1 px-4 py-4 text-sm sm:flex-row sm:items-start sm:gap-4 sm:text-base ${
                index % 2 === 0
                  ? 'bg-white/10 hover:bg-white/10'
                  : 'bg-white/5 hover:bg-white/20'
              } transition-colors duration-200`}
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
