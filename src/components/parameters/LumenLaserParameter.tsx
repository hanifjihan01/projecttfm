'use client';

import { motion } from 'framer-motion';

export function LumenLaserParameter() {
  const parameters = [
    {
      label: 'Type & Resolution',
      value:
        'Digital DLP projector with high-resolution 4K UHD (3840 x 2160), designed for home theater, business, and educational purposes.',
    },
    {
      label: 'Aspect Ratios',
      value:
        'Supports both 16:9 and 4:3 aspect ratios for versatile display options.',
    },
    {
      label: 'Image Quality',
      value:
        'Delivers high-quality images with a 4000:1 contrast ratio and up to 9000 lumens / 2600 ANSI lumens brightness.',
    },
    {
      label: 'Light Source',
      value:
        'Utilizes a laser light source for longer lifespan and brighter image quality.',
    },
    {
      label: 'Projection Size & Distance',
      value:
        'Capable of projecting images from 80 to 150 inches with an ultra-short throw distance of just 10-100 cm, ideal for small spaces.',
    },
    {
      label: '3D Capability',
      value:
        'Equipped with 3D Ready and Built-in 3D features for immersive viewing experiences.',
    },
    {
      label: 'Smart Features',
      value:
        'Includes internet connectivity for smart features and online access.',
    },
    {
      label: 'Language Support',
      value: 'Supports multiple languages, including English and Mandarin.',
    },
    {
      label: 'Noise Level',
      value:
        'Operates with a low noise level of approximately 38 dB for a comfortable viewing environment.',
    },
    {
      label: 'Design & Portability',
      value:
        'Portable design with a weight of 9.7 kg and a modern, stylish look.',
    },
    {
      label: 'Certification',
      value: 'Certified with CCC and CE for quality and safety assurance.',
    },
    {
      label: 'After-Sales Support',
      value:
        'Backed by after-sales support, including repair services and a 1-year warranty.',
    },
    {
      label: 'Model Information',
      value:
        'Model code L1668FCF, manufactured in China under the Wemax brand.',
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
