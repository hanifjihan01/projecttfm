'use client';

import { motion } from 'framer-motion';

export function LockTrackerParameter() {
  const parameters = [
    {
      label: 'Positioning & Connectivity',
      value:
        'GPS-based smart lock with 2G (GSM/GPRS) connectivity and accurate GPS & Beidou positioning up to ≤10 meters.',
    },
    {
      label: 'Security Features',
      value:
        'Equipped with security features including cut detection and light sensor to detect illegal container openings.',
    },
    {
      label: 'Unlocking Methods',
      value: 'Unlocking methods via RFID and remote control.',
    },
    {
      label: 'Battery',
      value:
        '15,000mAh lithium battery with up to 3 years standby time and 7 days operation under standard reporting frequency.',
    },
    {
      label: 'Protection Rating',
      value: 'Waterproof and dustproof design with IP67 protection rating.',
    },
    {
      label: 'Dimensions & Weight',
      value:
        'Compact body dimensions of 195 x 114 x 37 mm and approximately 950 g weight.',
    },
    {
      label: 'LED Indicators',
      value: 'LED indicators for power, GSM, GPS, and data status.',
    },
    {
      label: 'Charging Port',
      value: 'Magnetic charging port for secure and easy recharging.',
    },
    {
      label: 'Data Storage',
      value: 'Stores up to 1000 unlocking history records.',
    },
    {
      label: 'Platform Support',
      value: 'Supports both Web platform and mobile apps (Android/iOS).',
    },
    {
      label: 'Reporting Features',
      value:
        'Reporting features include unlocking history, travel routes, and geo-fence alerts.',
    },
    {
      label: 'Certifications',
      value: 'Certified with CE and RoHS standards.',
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
