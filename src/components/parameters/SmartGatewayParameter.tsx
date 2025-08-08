'use client';

import { motion } from 'framer-motion';

export function SmartGatewayParameter() {
  const parameters = [
    {
      label: 'Central Control Hub',
      value:
        'Serves as a central control hub for various smart terminal devices with ZigBee and WiFi connectivity support.',
    },
    {
      label: 'Integrated Functions',
      value: 'Integrated with smart host, router, and network TV functions.',
    },
    {
      label: 'Processor & Memory',
      value:
        'Powered by a dual-core 1.6GHz processor with 1GB RAM and 8GB DDR3 storage.',
    },
    {
      label: 'Memory Expansion',
      value: 'Supports flash memory expansion up to 32GB.',
    },
    {
      label: 'Operating System',
      value: 'Runs on Android 4.2.1 operating system.',
    },
    {
      label: 'Network Ports',
      value:
        'Equipped with 1 WAN port and 2 LAN ports for network connectivity.',
    },
    {
      label: 'Operating Frequency',
      value: 'Operates at 2.4GHz frequency (ZigBee).',
    },
    {
      label: 'Device Dimensions',
      value: '187mm x 140mm x 85mm.',
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
