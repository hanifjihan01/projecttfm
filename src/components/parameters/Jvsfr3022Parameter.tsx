'use client';

import { motion } from 'framer-motion';

export function Jvsfr3022Parameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/2.9” CMOS' },
    { label: 'Max Resolution', value: '1920x1080' },
    { label: 'Effective Pixels', value: '2.0MP' },
    { label: 'Compression Standard', value: 'H.265/H.264' },
    { label: 'Maximum Frame Rate', value: '1080p@30fps / 960p@30fps' },
    { label: 'SNR (dB)', value: '52.1dB' },
    { label: 'Bit Rate', value: 'Main: 25～8129Kbps / Sub: 25~4068Kbps' },
    { label: 'Illumination', value: '0Lux (IR On)' },

    // Lens
    { label: 'Lens', value: '8mm' },
    { label: 'Viewing Angle', value: 'H: 38.3°  V: 28.9°  D: 47.5°' },
    { label: 'IR-LEDs', value: '18x IR LEDs' },
    { label: 'IR-Distance', value: 'Up to 20 Meters' },

    // Function
    { label: 'Motion Detection', value: 'Support' },
    { label: 'Email Alert', value: 'Support' },
    { label: 'Day & Night', value: 'Support' },
    { label: 'Recording', value: 'Support (NVR, Windows PC, Smartphone)' },
    { label: 'DHCP', value: 'Support' },
    { label: 'Audio Input', value: 'Support (Ext. Mic)' },
    { label: 'Audio Codec', value: 'G711A/G711U' },
    { label: 'Privacy Mask', value: 'Support up to 8 areas' },
    { label: 'Exposure Control', value: 'Support' },
    { label: 'Image Adjustment', value: 'Support' },
    { label: 'Auto White Balance', value: 'Support' },
    { label: 'Image Rotation', value: 'Support (Mirror/Flip)' },
    { label: 'Intercom', value: 'Not Supported' },

    // Face Capture
    {
      label: 'Face Capture',
      value:
        'Supports detection, tracking, capture, screening, and output of optimal face capture, human traffic statistics, heartbeat mode with DeepCloud Platform',
    },
    { label: 'Capture Resolution', value: '1920x1080' },
    { label: 'Maximum Face Per Frame', value: '32' },
    { label: 'Image Format', value: 'JPEG' },
    {
      label: 'Upload Method',
      value: 'Private protocol, HTTP upload, FTP upload',
    },
    {
      label: 'Capture Mode',
      value:
        'After taking off capture, track process capture, mix capture, interval capture',
    },

    // Network
    { label: 'Ethernet', value: '10M/100M Ethernet, RJ45 Port' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'Stream', value: '2x Streams' },
    { label: 'LAN', value: 'Support' },
    { label: 'ONVIF', value: 'ONVIF 2.4' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'Browser', value: 'IE8+' },
    { label: 'Smart Phone', value: 'iOS/Android' },

    // General
    { label: 'Dimensions (WxHxD)', value: 'φ120x90 (mm)' },
    { label: 'Weight', value: '500g' },
    { label: 'Material', value: 'Aluminum' },
    { label: 'Working Temperature', value: '-20°C～60°C' },
    { label: 'Humidity', value: 'RH 10%～90%' },
    { label: 'Power Supply', value: 'DC12V/2A, PoE (IEEE 802.3af)' },
    { label: 'Consumption', value: 'Day ≦3W; Night ≦7W' },
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
