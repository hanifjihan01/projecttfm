'use client';

import { motion } from 'framer-motion';

export function SmartCameraParameter() {
  const parameters = [
    {
      label: 'Smart Detection',
      value: 'Smart detection for people, faces, pets, and vehicles.',
    },
    {
      label: 'Local AI & Storage',
      value:
        'Local AI for home automation with activity zones and local (no-cloud) storage.',
    },
    {
      label: 'Integrations',
      value: 'Integrated with Alexa, Google Assistant, and IFTTT.',
    },
    {
      label: 'Video & Connectivity',
      value:
        '1080p video resolution with starlight night vision, weatherproof (IP65), and 2.4GHz & 5GHz connectivity.',
    },
    {
      label: 'Additional Features',
      value:
        'Additional features: 100 dB siren, two-way audio, emergency call capability, and encryption.',
    },
    {
      label: 'Secure Streaming & Alerts',
      value:
        'Secure P2P live streaming and object monitoring with AI-triggered alert messages.',
    },
    {
      label: 'Hardware & Access',
      value:
        'Multi-user access, infrared LEDs, built-in microphone and speaker, and a reset button.',
    },
    {
      label: 'Extra Function',
      value: 'Can function as a Wi‑Fi extender.',
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
