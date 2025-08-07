'use client';

import { motion } from 'framer-motion';

export function SmartSmokeParameter() {
  const parameters = [
    {
      label: 'Detection Principle',
      value:
        'Utilizes photoelectric detection principle to monitor smoke concentration in real-time.',
    },
    {
      label: 'Power Efficiency',
      value:
        'Features low power consumption and ultra-long standby functionality.',
    },
    {
      label: 'Battery Indicator',
      value:
        'Equipped with a power indicator for clear battery level monitoring and timely replacement.',
    },
    {
      label: 'Sensitivity Range',
      value:
        'High sensitivity range between 1% – 3% / FT ensures early warning capabilities.',
    },
    {
      label: 'Alarm Volume',
      value: 'Delivers an alarm volume of ≥85dB at a distance of 1 meter.',
    },
    {
      label: 'Power Supply',
      value:
        'Powered by DC 5V with static current ≤ 50μA and alarm current ≤ 150mA.',
    },
    {
      label: 'Battery Lifespan',
      value: 'Battery lifespan of ≥ 6 months under standard conditions.',
    },
    {
      label: 'Dimensions',
      value: 'Device dimensions: 140mm x 164mm x 42mm.',
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
