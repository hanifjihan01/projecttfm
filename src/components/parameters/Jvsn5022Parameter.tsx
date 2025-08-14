'use client';

import { motion } from 'framer-motion';

export function Jvsn5022Parameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/3” CMOS Sensor' },
    { label: 'Max. Resolution', value: '2592x1944' },
    { label: 'Effective Pixels', value: '5.0MP' },
    { label: 'Compression Standard', value: 'H.265' },
    { label: 'Framerate', value: '20fps' },
    { label: 'Bitrate', value: '128Kbps ~ 8Mbps' },
    { label: 'SNR (dB)', value: '38.6dB' },
    { label: 'Illumination', value: '0Lux (IR ON)' },

    // Lens
    { label: 'Lens', value: '2.8 mm' },
    { label: 'Viewing Angle', value: 'H: 88.5°, V: 65.3°, D: 107.2°' },
    { label: 'IR-LEDs', value: '14µ 18x LEDs' },
    { label: 'IR-Distance', value: 'Up to 20m' },

    // Function
    { label: 'Exposure Control', value: 'Auto' },
    { label: 'White Balance', value: 'Auto' },
    { label: 'Image Enhancement', value: '3D DNR' },
    {
      label: 'Advanced OSD',
      value:
        'Support OSD large font function, OSD flashing on alarm, OSD and time to set the position separately',
    },
    { label: 'Motion Detection', value: 'Support' },
    {
      label: 'Image Setting',
      value: 'Rotate, Saturation, Brightness, Contrast, Sharpness',
    },
    {
      label: 'Day and Night Function',
      value: 'Day and night automatic switching',
    },
    { label: 'Privacy Mask', value: 'Support' },
    { label: 'Intelligent Analysis', value: 'Not Support' },
    { label: 'Alarm Method', value: 'Email Alarm, Client Alarm' },
    {
      label: 'Remote Operation',
      value: 'System, Audio and video, Image, Alarm, Network management',
    },

    // Network
    { label: 'Ethernet', value: '1x RJ45 10M / 100M Ethernet' },
    { label: 'Stream', value: '2x Streams' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'Interoperability', value: 'ONVIF 2.4' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0' },
    { label: 'Browser', value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'App', value: 'Support iOS/Android' },

    // General
    { label: 'Power Supply', value: 'DC12V/2A, PoE IEEE 802.3af' },
    { label: 'Consumption', value: '<3W (During day); <7W (At night)' },
    { label: 'Working Temperature', value: '-20°C ~ 60°C' },
    { label: 'Working Humidity', value: '10% ~ 90% Rh' },
    { label: 'Material', value: 'Aluminum' },
    { label: 'Dimensions', value: '120x90mm' },
    { label: 'Weight', value: '500g' },
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
