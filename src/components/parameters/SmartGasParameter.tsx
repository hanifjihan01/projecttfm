'use client';

import { motion } from 'framer-motion';

export function SmartGasParameter() {
  const parameters = [
    {
      label: 'Detection Technology',
      value:
        'Utilizes photoelectric sensor technology to detect smoke concentration in real-time.',
    },
    {
      label: 'Power Efficiency',
      value:
        'Designed for low power consumption and ultra-long standby operation.',
    },
    {
      label: 'Battery Indicator',
      value:
        'Equipped with a clear power indicator for easy battery monitoring and timely replacement.',
    },
    {
      label: 'Gas Detection',
      value:
        'Specially designed to detect natural gas with alarm activation at 10%LEL ± 3%LEL concentration.',
    },
    {
      label: 'Alarm Volume',
      value:
        'Delivers alarm sound volume of over 85dB at a distance of 1 meter.',
    },
    {
      label: 'Wireless Capability',
      value: 'Supports wireless signal output for flexible integration.',
    },
    {
      label: 'Material & Certification',
      value:
        'Constructed with durable plastic material and certified with ISO standards.',
    },
    {
      label: 'Customizability',
      value: 'Customizable to meet various operational requirements.',
    },
    {
      label: 'Dimensions',
      value: '140mm x 164mm x 42mm.',
    },
    {
      label: 'Input Power',
      value: 'AC 100–240V, 0.4A, 50–60Hz.',
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
