'use client';

import { motion } from 'framer-motion';

export function LedTransparantParameter() {
  const parameters = [
    {
      label: 'Module Sizes',
      value:
        'Available in various module sizes, ranging from 816x384 mm (P6) to 1000x400 mm (P6.25-P20).',
    },
    {
      label: 'Pixel Pitch',
      value:
        'Pixel pitch options from 6 mm (P6) to 20 mm (P20), all using R1G1B1 pixel composition for full-color display.',
    },
    {
      label: 'Pixel Density',
      value:
        'Higher pixel density with smaller pitch — P6 offers 8,704 pixels per module and 27,777 px/m², while P20 has 1,000 pixels per module and 2,500 px/m².',
    },
    {
      label: 'Brightness & Viewing Angle',
      value:
        'Brightness up to 4000 nits with a wide 160° viewing angle for visibility from multiple directions.',
    },
    {
      label: 'Refresh Rate & Grayscale',
      value:
        'High refresh rate of 3840Hz and 16-bit grayscale for smooth, flicker-free visuals ideal for video playback.',
    },
    {
      label: 'Transparency',
      value:
        'Transparency increases with pixel pitch — from 90% (P6) to 95% (P20), suitable for transparent LED or window displays.',
    },
    {
      label: 'Power Supply',
      value:
        'Operates on AC 110-240V, 50/60Hz, with maximum power from 400W/m² to 600W/m² (P6.25) and average power at 200W/m².',
    },
    {
      label: 'Drive Mode',
      value: 'Uses static drive mode for stable image quality.',
    },
    {
      label: 'Design & Weight',
      value:
        'Ultra-thin 2.5 mm design and lightweight at 1.3 kg, making installation easy.',
    },
    {
      label: 'Operating Conditions',
      value:
        'Operates in temperatures from -20°C to 55°C and humidity levels of 10-90%, built to withstand extreme conditions.',
    },
    {
      label: 'Control System',
      value:
        'Controlled via Nova and Colorlight systems for precise, easy configuration.',
    },
    {
      label: 'Lifespan',
      value:
        'Typical lifespan of 100,000 hours for long-term reliable operation.',
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
