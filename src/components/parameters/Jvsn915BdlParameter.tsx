'use client';

import { motion } from 'framer-motion';

export function Jvsn915BdlParameter() {
  const parameters = [
    // Video
    { label: 'Image Sensor', value: '1/2.9" CMOS Sensor' },
    { label: 'Max Resolution', value: '2304x1296' },
    { label: 'Effective Pixels', value: '3.0MP' },
    { label: 'Compression Standard', value: 'H.264 / H.265' },
    { label: 'Framerate', value: '20fps' },
    {
      label: 'Bitrate',
      value: 'Main Stream: 128Kbps ~ 4Mbps | Sub Stream: 68Kbps ~ 1024Kbps',
    },
    { label: 'SNR (dB)', value: '50dB' },
    { label: 'Min. Illumination', value: '0Lux (Light ON)' },

    // Lens
    { label: 'Interface Type', value: 'M12' },
    { label: 'Lens', value: '4mm, 6mm' },
    {
      label: 'FOV',
      value: '4mm: H 80.9°, V 44.06°, D 94.7° | 6mm: H 53.8°, V 28.9°, D 61.4°',
    },

    // Function
    { label: 'Audio Codec', value: 'G.711U / G.711A (default)' },
    { label: 'Exposure Control', value: 'Auto' },
    {
      label: 'OSD Information Setting',
      value: 'Large font OSD, OSD flashing on alarm, OSD position settings',
    },
    { label: 'Schedule Reboot', value: 'Support' },
    { label: 'Smart Defog', value: 'Support' },
    { label: 'Motion Detection', value: 'Support (Humanoid)' },
    {
      label: 'Image Setting',
      value: 'Support Saturation, Brightness, Contrast adjustment',
    },
    { label: 'Image Style', value: 'Standard, Soft, Transparent' },
    { label: 'Day and Night Function', value: 'Auto IR, Smart Dual Light' },
    { label: 'Privacy Mask', value: 'Support up to 8 areas' },
    {
      label: 'Electronic Screen Setting',
      value: 'Support maximum and minimum exposure time setting',
    },
    { label: 'DWDR', value: 'Support' },
    {
      label: 'Screen Settings',
      value: 'Screen mirroring, Screen flipping',
    },
    {
      label: 'IP Adaptation',
      value: 'Support automatic adaptation of IP address (Optional)',
    },
    {
      label: 'Alarm Method',
      value: 'Email Alarm, Client Alarm',
    },
    {
      label: 'Remote Operation',
      value: 'System, Audio and Video, Image, Alarm, Network management',
    },
    { label: 'Audio Function', value: 'Built-in Mic' },

    // Network
    { label: 'Ethernet', value: '10/100Mbps Ethernet' },
    { label: 'Stream', value: '2x Streams' },
    {
      label: 'Network Protocols',
      value: 'HTTP, TCP/IP, UDP, RTSP, DHCP, DNS',
    },
    { label: 'ONVIF', value: 'Standard ONVIF' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0' },
    {
      label: 'Browser',
      value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+',
    },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'App', value: 'Support iOS/Android' },

    // General
    { label: 'Lights', value: '4 White LEDs + 4 IR LEDs' },
    { label: 'IR Distance', value: 'Up to 40 Meters' },
    { label: 'Waterproof Level', value: 'IP67' },
    { label: 'Power Supply', value: 'DC12V 2A or PoE' },
    {
      label: 'Power Consumption',
      value: '<3W (During Day); <6W (At Night)',
    },
    { label: 'Working Temperature', value: '-20°C ~ 60°C' },
    { label: 'Working Humidity', value: '<93% Rh' },
    {
      label: 'Color/Material',
      value: 'Black and White / Plastic + Metal',
    },
    {
      label: 'Dimensions (W x H x D)',
      value: '88 x 85 x 178 mm',
    },
    { label: 'Weight', value: '240g' },
    {
      label: 'Installation Method',
      value: 'Wall or ceiling mount',
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
