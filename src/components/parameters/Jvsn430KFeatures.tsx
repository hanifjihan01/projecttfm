'use client';

import { motion } from 'framer-motion';

export function Jvsn430KParameter() {
  const parameters = [
    // Video
    { label: 'Image Sensor', value: '1/3” CMOS' },
    { label: 'Max Resolution', value: '3840x2160' },
    { label: 'Effective Pixels', value: '8MP' },
    { label: 'Compression Standard', value: 'H.265 / H.264' },
    { label: 'Frame Rate', value: '15 fps' },
    { label: 'Bit Rate', value: '682Kbps～5461Kbps' },
    { label: 'SNR (dB)', value: '52dB' },
    { label: 'Min. Illumination', value: '0Lux (IR ON)' },

    // Lens
    { label: 'Lens', value: '4mm, M12' },
    { label: 'FOV', value: 'H: 78.5°, V: 42.8°, D: 92.6°' },
    { label: 'IR-LEDs', value: '28µx1 LED' },
    { label: 'IR-Distance', value: 'Up to 40 Meters' },

    // Function
    { label: 'Exposure Control', value: 'Support' },
    { label: 'White Balance', value: 'Auto' },
    { label: 'Image Enhancement', value: 'BLC / HLC' },
    { label: 'Privacy Mask', value: 'Support 4 Rectangle Areas' },
    {
      label: 'Image Setting',
      value: 'Rotate, Saturation, Brightness, Contrast, Sharpness',
    },
    {
      label: 'Day and Night Function',
      value: 'Day And Night Automatic Switching',
    },
    {
      label: 'Intelligent Analysis',
      value: 'Support Region Intrusion, Line Crossing, Human Detection',
    },
    { label: 'Alarm Method', value: 'Email Alarm' },
    {
      label: 'Remote Operation',
      value: 'System, Stream, Alarm, Network Management',
    },
    { label: 'Expansion Interface', value: 'N/A' },

    // Network
    { label: 'Ethernet', value: '10M/100M Ethernet, 1 RJ45' },
    { label: 'Stream', value: '2x Streams' },
    {
      label: 'Protocols',
      value: 'TCP/IP, RTSP, RTP, HTTP, DNS, DDNS, DHCP, FTP, NTP, UPNP',
    },
    { label: 'ONVIF', value: 'ONVIF 2.4' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0' },
    {
      label: 'Browser',
      value:
        'IE8.0 And Above (Device Embedded Web Server), Edge, Chrome, Safari',
    },
    { label: 'User', value: 'Up to 13 Users' },

    // General
    { label: 'Power Supply', value: 'DC12V or PoE' },
    {
      label: 'Power Consumption',
      value: '<3W (During Day); <6W (At Night With IR)',
    },
    { label: 'Working Temperature', value: '-20°C ~ 60°C' },
    { label: 'Working Humidity', value: '0% ~ 90% Rh' },
    { label: 'Material', value: 'Metal' },
    { label: 'Dimensions (WxHxD)', value: 'Φ96x93mm' },
    { label: 'Weight', value: '300g' },
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
