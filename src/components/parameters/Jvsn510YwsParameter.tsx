'use client';

import { motion } from 'framer-motion';

export function Jvsn510YwsParameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/3” CMOS' },
    { label: 'Max Resolution', value: '2592x1944' },
    { label: 'Effective Pixels', value: '5.0MP' },
    { label: 'Compression Standard', value: 'H.265' },
    { label: 'Maximum Frame Rate', value: '5.0MP@20fps' },
    { label: 'SNR (dB)', value: '38.6dB' },
    { label: 'Bit Rate', value: '128Kbps～8Mbps' },
    { label: 'Illumination', value: '0Lux (IR ON)' },

    // Lens
    { label: 'Lens', value: '4mm' },
    { label: 'Viewing Angle', value: '4mm: 104°' },
    { label: 'IR-LEDs', value: '14µ x 18 LEDs' },
    { label: 'IR-Distance', value: 'Up to 30 Meters' },

    // Function
    { label: 'Motion Detection', value: 'Support' },
    { label: 'Email Alert', value: 'Support' },
    { label: 'Day & Night', value: 'Support' },
    { label: 'Recording', value: 'Support (NVR, Windows PC, Smartphone)' },
    { label: 'DHCP', value: 'Support' },
    { label: 'FTP', value: 'Not Supported' },
    { label: 'Pan/Tilt', value: 'Not Supported' },
    { label: 'SD-Card', value: 'Not Supported' },
    { label: 'Privacy Mask', value: 'Support up to 4 areas' },
    { label: 'Exposure Control', value: 'Support' },
    { label: 'Image Adjustment', value: 'Support' },
    { label: 'Auto White Balance', value: 'Support' },
    { label: 'Image Rotation', value: 'Support (Mirror/Flip)' },

    // Network
    { label: 'Ethernet', value: '10M/100M Ethernet, RJ45 Port' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'Stream', value: '2x Streams' },
    { label: 'Wi-Fi', value: 'Not Supported' },
    { label: 'ONVIF', value: 'ONVIF 2.4' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'Browser', value: 'IE8+, Chrome18+ ~ 42-' },
    { label: 'Smart Phone', value: 'iOS/Android' },

    // General
    { label: 'Dimensions (W*H*D)', value: '215x100x105mm' },
    { label: 'Weight', value: '480g' },
    { label: 'Material', value: 'Metal' },
    { label: 'Working Temperature', value: '-20°C～60°C' },
    { label: 'Humidity', value: 'RH 10%～90%' },
    { label: 'Power Supply', value: 'DC12V/1A, PoE IEEE 802.3af' },
    { label: 'Consumption', value: 'Day ≦2W; Night ≦8W' },
    { label: 'Waterproof', value: 'IP66' },
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
              } whitespace-pre-line transition-colors duration-200`}
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
