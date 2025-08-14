'use client';

import { motion } from 'framer-motion';

export function Jvsn915AdlParameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/2.9" CMOS Sensor' },
    { label: 'Max Resolution', value: '2304x1296' },
    { label: 'Effective Pixels', value: '3.0MP' },
    { label: 'Compression Standard', value: 'H.264/H.265' },
    { label: 'Framerate', value: '20fps' },
    {
      label: 'Bitrate',
      value: 'Main Stream: 256Kbps ~ 4Mbps\nSub Stream: 68Kbps~1024Kbps',
    },
    { label: 'SNR (dB)', value: '39dB' },
    { label: 'Min. Illumination', value: '0Lux (light ON)' },

    // Lens
    { label: 'Interface Type', value: 'M12' },
    { label: 'Lens', value: '2.8mm, 3.6mm' },
    {
      label: 'FOV',
      value: '2.8mm: H 96°, V 53°, D 110°\n3.6mm: H 83.8°, V 42.7°, D 100.1°',
    },

    // Function
    { label: 'Audio Codec', value: 'G.711U/G.711A (default)' },
    { label: 'Exposure Control', value: 'Auto' },
    { label: 'White Balance', value: 'Auto' },
    { label: 'Gain Control', value: 'Auto' },
    { label: 'Digital 3D Noise Reduction', value: 'Support' },
    {
      label: 'OSD Information Setting',
      value: 'Large font OSD, OSD flashing on alarm, OSD position settings',
    },
    { label: 'SNTP', value: 'Support' },
    { label: 'Schedule Reboot', value: 'Support' },
    { label: 'Smart Defog', value: 'Support' },
    { label: 'Motion Detection', value: 'Support (Humanoid)' },
    {
      label: 'Image Setting',
      value: 'Support Saturation, Brightness, Contrast, Sharpness adjustment',
    },
    { label: 'Image Style', value: 'Standard, Soft, Transparent' },
    {
      label: 'Day and Night Function',
      value: 'Auto, Always Black & White, Always Color, Scheduled Color',
    },
    { label: 'Privacy Mask', value: 'Support up 8 areas' },
    {
      label: 'Electronic Screen Setting',
      value: 'Support maximum and minimum exposure time setting',
    },
    { label: 'Night Vision Optimization', value: 'Support' },
    { label: 'DWDR', value: 'Support' },
    { label: 'Screen Settings', value: 'Screen mirroring, Screen flipping' },
    {
      label: 'IP Adaptation',
      value: 'Support automatic adaptation of IP address (Optional)',
    },
    { label: 'Alarm Method', value: 'Email Alarm, Client Alarm' },
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
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'ONVIF', value: 'Standard ONVIF' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0' },
    { label: 'Browser', value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'App', value: 'Support iOS/Android' },

    // General
    { label: 'Lights', value: '4 White LEDs + 4 IR LEDs' },
    { label: 'IR Distance', value: 'Up to 40 Meters' },
    { label: 'Waterproof Level', value: 'IP67' },
    { label: 'Power Supply', value: 'DC12V or PoE (IEEE802.3af)' },
    { label: 'Power Consumption', value: '<3W (During Day); <6W (At Night)' },
    { label: 'Working Temperature', value: '-40°C ~ 60°C' },
    { label: 'Working Humidity', value: '10% ~ 90% Rh' },
    { label: 'Color/Material', value: 'Black and White/Plastic+Metal' },
    { label: 'Dimensions (WxHxD)', value: '67x74x201mm' },
    { label: 'Weight', value: '250g' },
    { label: 'Installation Method', value: 'Wall or ceiling mount' },
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
