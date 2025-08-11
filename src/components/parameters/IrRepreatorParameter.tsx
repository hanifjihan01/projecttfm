'use client';

import { motion } from 'framer-motion';

export function IrRepreatorParameter() {
  const parameters = [
    {
      label: 'Unified Remote Control',
      value:
        'Consolidates all remote controls into a single mobile app, allowing you to control multiple home appliances from your smartphone.',
    },
    {
      label: 'Automatic IR Code Matching',
      value:
        "Automatic infrared (IR) code matching so users don't need to search for manual codes when pairing devices.",
    },
    {
      label: 'Wide IR Transmission Angle',
      value:
        'Wide IR transmission angle of 120° for operation from various directions and angles, providing flexibility and convenience.',
    },
    {
      label: 'IR Transmission Range',
      value:
        'IR transmission range between 50 and 100 meters for reliable remote operation in typical home environments.',
    },
    {
      label: 'Power Supply',
      value: 'Operates on DC 12V with a maximum working current of ≤ 35 mA.',
    },
    {
      label: 'Main Applications',
      value:
        'Main applications include controlling TVs, air conditioners, audio/video players, and a wide range of other household appliances.',
    },
    {
      label: 'Build & Certification',
      value:
        'Constructed from durable plastic and certified to ISO 9001, RoHS, and CE standards, ensuring quality and user safety.',
    },
    {
      label: 'Technology Type',
      value:
        'Universal product using infrared (IR) remote control transmission technology.',
    },
    {
      label: 'Packaging',
      value:
        'Packaged in a gift box with approximate dimensions of 85 mm x 85 mm x 7 mm.',
    },
    {
      label: 'Brand',
      value: 'DynaMax.',
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
