'use client';

import { motion } from 'framer-motion';

export function Jvsn916KdlParameter() {
  const parameters = [
    // Model
    { label: 'Model', value: 'JVS-N916-KDL-PE' },

    // Video
    { label: 'Image Sensor', value: '1/2.9" CMOS Sensor' },
    { label: 'Max Resolution', value: '2304x1296' },
    { label: 'Effective Pixels', value: '3.0MP' },
    { label: 'Compression Standard', value: 'H.265/H.264' },
    { label: 'Frame Rate', value: '25fps' },
    { label: 'Bit Rate', value: '204Kbps~5Mbps' },
    { label: 'SNR (dB)', value: '52dB' },
    { label: 'Min. Illumination', value: '0Lux (fill light ON)' },

    // Lens
    { label: 'Lens', value: '4mm, 8mm (M12)' },
    {
      label: 'Fill light',
      value: '4x double wick filling lamp (infrared/warm)',
    },
    { label: 'Fill light distance', value: 'Up to 40 Meters' },

    // Function
    { label: 'Exposure Control', value: 'Auto' },
    { label: 'White Balance', value: 'Auto' },
    { label: 'Gain Control', value: 'Auto' },
    { label: 'Image Enhancement', value: '3D DNR' },
    {
      label: 'Advanced OSD',
      value:
        'Support OSD large font function, OSD flashing on alarm, OSD and time to set the position separately',
    },
    {
      label: 'Motion Detection',
      value: 'Support human detection (default does not mark the human box)',
    },
    {
      label: 'Image Setting',
      value: 'Rotate, Saturation, Brightness, Contrast, Sharpness',
    },
    {
      label: 'Day and Night Function',
      value: 'Day and night automatic switching',
    },
    { label: 'Privacy Mask', value: 'Support up 8 areas' },
    { label: 'Intelligent Analysis', value: 'Not Support' },
    { label: 'Alarm Method', value: 'Email Alarm, Client Alarm' },
    {
      label: 'Remote Operation',
      value: 'System, Audio and video, Image, Alarm, Network management',
    },
    { label: 'Expansion Interface', value: 'Built-in MIC' },

    // Network
    { label: 'Ethernet', value: '10M / 100M Ethernet, 1 RJ45' },
    { label: 'Stream', value: '2x Streams' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'ONVIF', value: 'Standard ONVIF' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0' },
    { label: 'Browser', value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'App', value: 'Support iOS/Android' },

    // General
    { label: 'Power Supply', value: 'DC12V/2A' },
    { label: 'Power Consumption', value: '<3W (During day); <6W (At night)' },
    { label: 'Working Temperature', value: '-20°C ~ 60°C' },
    { label: 'Working Humidity', value: '10% ~ 90% Rh' },
    { label: 'Material', value: 'Plastic' },
    { label: 'Dimensions (W x H x D)', value: '178 x 85 x 85 mm' },
    { label: 'Weight', value: '440g' },
    { label: 'Waterproof', value: 'IP67' },
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
