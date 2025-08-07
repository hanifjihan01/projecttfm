'use client';

import { motion } from 'framer-motion';

export function SmartTemperatureParameter() {
  const parameters = [
    {
      label: 'Monitoring Capability',
      value:
        'Capable of monitoring environmental temperature and humidity in real-time, with wireless connectivity for automatic control of household appliances.',
    },
    {
      label: 'Unit Conversion',
      value:
        'Supports temperature unit conversion between Fahrenheit and Celsius, providing flexibility for international users.',
    },
    {
      label: 'Battery',
      value: 'Equipped with a rechargeable battery, ideal for long-term usage.',
    },
    {
      label: 'Power Supply',
      value: 'Operates on DC 5V power with 500mA current.',
    },
    {
      label: 'Humidity Detection',
      value:
        'Detection range: 15~95% RH, with ±5% RH accuracy and 1% resolution.',
    },
    {
      label: 'Temperature Detection',
      value:
        'Detection range: -20 to 50°C (-4 to 122°F), with ±0.5°C (0.9°F) accuracy and 0.1°C (0.1°F) resolution.',
    },
    {
      label: 'Sensor Type',
      value:
        'Uses a resistive, contactless sensor with wireless signal output.',
    },
    {
      label: 'Material & Installation',
      value:
        'Constructed from durable ABS material and designed for wall-mounted installation.',
    },
    {
      label: 'Certification',
      value: 'ISO-certified product; does not support customization.',
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
