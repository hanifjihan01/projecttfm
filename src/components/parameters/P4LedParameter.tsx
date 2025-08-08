'use client';

import { motion } from 'framer-motion';

export function P4LedParameter() {
  const parameters = [
    {
      label: 'Module Size',
      value: '256mm x 128mm with 4mm pixel pitch and 62,500 pixels/m² density.',
    },
    {
      label: 'Technology & Resolution',
      value: 'Uses SMD1921 technology with a resolution of 64 x 32 dots.',
    },
    {
      label: 'Module Thickness & Weight',
      value: '20mm thickness and 0.6 kg weight.',
    },
    {
      label: 'Drive System & Brightness',
      value: 'Equipped with constant drive system and brightness ≥5000 cd/m².',
    },
    {
      label: 'Bracket Size',
      value: 'Matches module dimensions.',
    },
    {
      label: 'Panel Box Dimensions',
      value: '512mm x 512mm.',
    },
    {
      label: 'Power Supply',
      value: '5V/40A or 5V/60A.',
    },
    {
      label: 'Heat Dissipation System',
      value: 'Based on 128 x 128 dots resolution.',
    },
    {
      label: 'Optimal Viewing Distance',
      value: '4-15 meters.',
    },
    {
      label: 'Viewing Angle',
      value: '160° horizontal, 120° vertical.',
    },
    {
      label: 'Operating Conditions',
      value: 'Temperature: -20°C to +50°C, humidity: 10%-75%.',
    },
    {
      label: 'Power Consumption',
      value: 'Average ≤350W/m², maximum ≤1000W/m².',
    },
    {
      label: 'Working Voltage',
      value: 'AC220V ±10%.',
    },
    {
      label: 'Control System',
      value: 'Supports 3G, WiFi, and synchronous connection.',
    },
    {
      label: 'Refresh & Frame Rate',
      value: 'Refresh rate ≥1920Hz, frame rate: 50 & 60Hz.',
    },
    {
      label: 'Color System',
      value:
        'RGB256 with up to 16,384 grayscale levels for smooth and detailed display quality.',
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
