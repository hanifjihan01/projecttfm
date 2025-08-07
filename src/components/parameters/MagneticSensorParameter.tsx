'use client';

import { motion } from 'framer-motion';

export function MagneticSensorParameter() {
  const parameters = [
    {
      label: 'Design',
      value:
        'Compact design with high concealability, low power consumption, and extended standby duration.',
    },
    {
      label: 'Battery Indicator',
      value:
        'Clearly displays remaining battery power for easy monitoring and timely replacement.',
    },
    {
      label: 'Smart Connectivity',
      value:
        'Can connect with other smart terminals to control other devices when opened or closed.',
    },
    {
      label: 'Power Supply',
      value: 'Operates using two AAA batteries (DC 3V).',
    },
    {
      label: 'Static Current',
      value: 'Static current consumption: ≤ 9μA.',
    },
    {
      label: 'Emission Current',
      value: 'Emission current consumption: ≤ 28mA.',
    },
    {
      label: 'Alarm Features',
      value:
        'Supports alarm outputs such as alarm report, tamper alert, and battery status.',
    },
    {
      label: 'Product Dimensions',
      value: '35mm x 18mm x 76mm.',
    },
    {
      label: 'Brand',
      value: 'Dynamax.',
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
