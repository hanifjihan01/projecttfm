'use client';

import { motion } from 'framer-motion';

export function SmartCamera5Parameter() {
  const parameters = [
    {
      label: 'Image Sensor',
      value:
        'Uses a 1/1.8-inch CMOS sensor with up to 3072x1728 resolution at 25fps, supporting H.265/H.264 compression.',
    },
    {
      label: 'Resolution & Lens',
      value:
        'Effective 5MP resolution with lens viewing angles of 110.8° (4mm) and 66.6° (6mm).',
    },
    {
      label: 'Night Illumination',
      value:
        'Equipped with 6 warm lights with adaptive dimming for night illumination.',
    },
    {
      label: 'Image Features',
      value:
        'Includes contrast and brightness adjustment, face mode, and defog enhancement.',
    },
    {
      label: 'Audio',
      value:
        'Supports two-way audio with G711A/U encoding, enabling voice monitoring and intercom.',
    },
    {
      label: 'Connectivity & Protocols',
      value:
        'Allows access by up to 8 clients simultaneously via Cloud Video 2.0, compatible with ONVIF, RTSP, and other protocols.',
    },
    {
      label: 'Ports',
      value:
        'Includes RJ45 port, TF card slot, RS485, audio input/output, and alarm input/output.',
    },
    {
      label: 'User Access',
      value: 'Supports up to 12 users with different permission levels.',
    },
    {
      label: 'Operating Conditions',
      value:
        'Operates in temperatures from -20℃ to 60℃, powered by DC 12V or POE, with a maximum power consumption of 9W at night.',
    },
    {
      label: 'Physical Specs',
      value:
        'Weighs approximately 610g, with dimensions of 104x98x184 mm, and supports wall or ceiling mounting.',
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
