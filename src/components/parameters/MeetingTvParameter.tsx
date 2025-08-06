'use client';

import { motion } from 'framer-motion';

export function MeetingTvParameter() {
  const parameters = [
    {
      label: 'Functionality',
      value:
        'A multifunctional presentation solution equipped with advanced touchscreen technology.',
    },
    {
      label: 'Display Specification',
      value:
        'DLED panel (1428 x 804 mm), 4K UHD (3840 x 2160), 16:9 ratio, 350cd/㎡±30 brightness, 5000:1 contrast ratio.',
    },
    {
      label: 'Viewing Angle',
      value: '178° horizontal and vertical for maximum visibility.',
    },
    {
      label: 'Color Depth',
      value: '10-bit, 16.7 million colors for vivid and sharp images.',
    },
    {
      label: 'System Performance',
      value:
        'H560 chipset, quad-core ARM A55 1.5GHz, 2/3GB RAM, 16/32GB ROM, Android 9.0.',
    },
    {
      label: 'Touch Technology',
      value:
        'Infrared 20-point touch recognition for smooth, responsive interaction.',
    },
    {
      label: 'Brightness Adjustment',
      value: 'Ambient light sensor with 8-level linear dimming.',
    },
    {
      label: 'I/O Interface',
      value: 'USB 2.0 & 3.0, Audio in/out, HDMI, VGA, RJ45, RS232.',
    },
    {
      label: 'Wi-Fi Connectivity',
      value:
        'External support with 4 antenna ports, including dual 5G hotspots.',
    },
    {
      label: 'Audio System',
      value: 'Built-in CLASS-D stereo amplifier, 2 × 10W output.',
    },
    {
      label: 'Power Consumption',
      value: 'Approx. 240W (without computer), AC 180–240V 50/60Hz input.',
    },
    {
      label: 'Application',
      value:
        'Ideal for meeting rooms, classrooms, and large interactive presentation environments.',
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
