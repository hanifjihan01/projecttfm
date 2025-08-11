'use client';

import { motion } from 'framer-motion';

export function SmartCamera6Parameter() {
  const parameters = [
    {
      label: 'Image Sensor',
      value:
        'Equipped with a 1/3-inch CMOS sensor with a maximum resolution of 8MP (3840x2160).',
    },
    {
      label: 'Video Compression',
      value: 'Supports H.264/H.265+ video compression.',
    },
    {
      label: 'Video Stream',
      value:
        'Triple stream support with up to 30fps frame rate and up to 4096Kbps bitrate.',
    },
    {
      label: 'Lens & Viewing Angle',
      value:
        'Motorized varifocal lens 2.7-13.5mm with horizontal viewing angle of 101.4°-26.9°.',
    },
    {
      label: 'Audio',
      value: 'Two-way audio support (microphone & speaker).',
    },
    {
      label: 'Smart Features',
      value:
        'Features motion detection, smart defog, 120dB WDR, night vision up to 80 meters, and up to 8 privacy mask areas.',
    },
    {
      label: 'Storage',
      value: 'Built-in SD card slot supporting up to 512GB.',
    },
    {
      label: 'Access & Protocols',
      value: 'ONVIF support, cloud access, and mobile app for iOS/Android.',
    },
    {
      label: 'Connectivity & Power',
      value:
        'Connectivity via 10/100Mbps Ethernet with PoE or DC12V power supply.',
    },
    {
      label: 'Weatherproof & Operating Conditions',
      value:
        'Weatherproof with IP67 rating and operating temperature from -30°C to 60°C.',
    },
    {
      label: 'Physical',
      value:
        'Weighs approximately 732g and supports wall or ceiling installation.',
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
