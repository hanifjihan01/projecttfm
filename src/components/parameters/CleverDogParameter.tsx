'use client';

import { motion } from 'framer-motion';

export function CleverDogParameter() {
  const parameters = [
    {
      label: 'Alarm Mode',
      value: 'Supports alarm mode via mobile notifications',
    },
    {
      label: 'Audio',
      value: 'Equipped with a microphone and speaker for two-way audio',
    },
    {
      label: 'Video Compression',
      value: 'Uses High Profile video compression for efficient streaming',
    },
    {
      label: 'Lens & IR Range',
      value: '108° lens angle with infrared (IR) range up to 8 meters',
    },
    { label: 'Storage', value: 'Cloud service or TF card options available' },
    { label: 'Compatibility', value: 'Compatible with Android devices' },
    { label: 'Wi-Fi Connection', value: 'Supports standard 802.11 b/g/n' },
    {
      label: 'Camera Rotation',
      value: 'Horizontally up to 350°, vertically up to 110°',
    },
    { label: 'Power Supply', value: 'Powered via micro USB cable (5V=1A)' },
    {
      label: 'Wireless Security',
      value: 'Supports WEP, WAP, and WPA2 encryption',
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
