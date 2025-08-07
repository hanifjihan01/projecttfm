'use client';

import { motion } from 'framer-motion';

export function SmartSirenParameter() {
  const parameters = [
    {
      label: 'Tamper Protection',
      value:
        'Wireless alarm system equipped with tamper housing functionality that triggers sound and strobe light during interference.',
    },
    {
      label: 'Visual Alert',
      value:
        'Provides bright flashing light alerts for immediate visual indication in case of emergency.',
    },
    {
      label: 'Smart Control',
      value:
        'Can be synchronized with various types of sensors and controlled via smart devices such as phones or tablets.',
    },
    {
      label: 'Detection Principle',
      value:
        'Operates based on electro-optical principle in passive mode for efficient performance.',
    },
    {
      label: 'Power Supply',
      value:
        'Powered by DC12V with standby power consumption ≤ 7mA and alarm current ≤ 230mA.',
    },
    {
      label: 'Frequency Band',
      value:
        'Utilizes 2.4GHz frequency band, making it suitable for indoor applications.',
    },
    {
      label: 'Certification',
      value:
        'Certified with ISO standards and manufactured under the trusted DynaMax brand.',
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
