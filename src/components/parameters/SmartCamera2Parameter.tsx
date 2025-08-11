'use client';

import { motion } from 'framer-motion';

export function SmartCamera2Parameter() {
  const parameters = [
    {
      label: 'AI & Automation',
      value: 'Equipped with local AI technology and smart home automation.',
    },
    {
      label: 'Detection',
      value: 'Supports detection of humans, faces, pets, and vehicles.',
    },
    {
      label: 'Activity Zones & Storage',
      value: 'Includes activity zones and local storage capabilities.',
    },
    {
      label: 'Integrations',
      value: 'Integrates with Alexa, Google Assistant, and IFTTT.',
    },
    {
      label: 'Video Quality',
      value: 'Provides 1080p video resolution with Starlight night vision.',
    },
    {
      label: 'Weather Resistance',
      value: 'Weather-resistant design with IP65 certification.',
    },
    {
      label: 'Connectivity',
      value: 'Supports both 2.4GHz and 5GHz WiFi connections.',
    },
    {
      label: 'Siren',
      value: 'Built-in 100dB siren for alerts.',
    },
    {
      label: 'Two-Way Audio',
      value: 'Two-way audio communication for real-time interaction.',
    },
    {
      label: 'Emergency Calls',
      value: 'Emergency calling functionality.',
    },
    {
      label: 'Security',
      value: 'Secure encryption and safe P2P streaming.',
    },
    {
      label: 'Monitoring',
      value:
        'Features object monitoring, distance alarms, and zone restrictions.',
    },
    {
      label: 'People Counting',
      value: 'Includes people counting capability.',
    },
    {
      label: 'WiFi Extender',
      value: 'Functions as a WiFi extender.',
    },
    {
      label: 'Multi-User Access',
      value: 'Supports multi-user access.',
    },
    {
      label: 'Infrared LED',
      value: 'Equipped with infrared LED for enhanced night vision.',
    },
    {
      label: 'Audio Hardware',
      value: 'Built-in microphone and micro speaker.',
    },
    {
      label: 'Reset Button',
      value: 'Includes a physical reset button.',
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
