'use client';

import { motion } from 'framer-motion';

export function SmartGateway2Parameter() {
  const parameters = [
    {
      label: 'Device Type',
      value:
        'The Dynamax Smart Terminal device is an all-in-one solution capable of controlling various smart appliances.',
    },
    {
      label: 'Connectivity',
      value:
        'Supports both ZigBee and WiFi connectivity for seamless integration with smart devices.',
    },
    {
      label: 'Integrated Functions',
      value:
        'Integrates smart host, router, and network TV functions into a single device.',
    },
    {
      label: 'Processor & Memory',
      value:
        'Powered by a dual-core 1.6GHz processor with 1GB RAM and 8GB DDR3 storage.',
    },
    {
      label: 'Memory Expansion',
      value:
        'Supports flash memory expansion of up to 32GB for enhanced storage capacity.',
    },
    {
      label: 'Operating System',
      value:
        'Runs on the Android 4.2.1 operating system for smooth and user-friendly performance.',
    },
    {
      label: 'Network Ports',
      value:
        'Equipped with 1 WAN port and 2 LAN ports for stable network connectivity.',
    },
    {
      label: 'Operating Frequency',
      value: 'Operates at a 2.4GHz frequency for ZigBee communication.',
    },
    {
      label: 'Device Dimensions',
      value: '189mm x 142mm x 70.5mm.',
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
