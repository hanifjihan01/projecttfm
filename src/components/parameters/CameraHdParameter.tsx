'use client';

import { motion } from 'framer-motion';

export function CameraHdParameter() {
  const parameters = [
    {
      label: 'Features',
      value:
        'Wireless IP camera with advanced features including remote monitoring, PTZ (Pan-Tilt-Zoom) control, two-way voice intercom, motion detection, video snapshot, and infrared night vision.',
    },
    {
      label: 'Smart Device Control',
      value:
        'Supports control via smart devices such as smartphones and tablets for convenient monitoring from anywhere.',
    },
    {
      label: 'Video Encoding & Resolution',
      value:
        'Uses standard M-JPEG video encoding with resolution options ranging from 256x144 to 1280x720, allowing users to adjust video quality as needed.',
    },
    {
      label: 'Audio Communication',
      value:
        'Two-way audio communication with G.726 ADPCM encoding, featuring an internal microphone, support for an external microphone, and an internal speaker for sound output.',
    },
    {
      label: 'Camera Design & Sensor',
      value:
        'Swivel-style design with CMOS sensor, offering an effective monitoring distance of 10 to 30 meters.',
    },
    {
      label: 'HDMI Output',
      value:
        'Supports HDMI output format up to 1080P for high-definition display.',
    },
    {
      label: 'Certification & Remote Control',
      value:
        'CE-certified product, equipped with a remote control for long-distance operation.',
    },
    {
      label: 'Dimensions & Usage',
      value:
        'Compact dimensions of 115mm x 90mm x 108mm, ideal for home, office, or any area requiring 24/7 surveillance with comprehensive and flexible features.',
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
