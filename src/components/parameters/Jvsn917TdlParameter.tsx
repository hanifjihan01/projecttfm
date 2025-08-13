'use client';

import { motion } from 'framer-motion';

export function Jvsn917TdlParameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/2.9" CMOS Sensor' },
    { label: 'Max Resolution', value: '2304x1296' },
    { label: 'Effective Pixels', value: '3.0MP' },
    { label: 'Compression Standard', value: 'H.265/H.264' },
    { label: 'Frame Rate', value: '25fps' },
    { label: 'Bit Rate', value: '128Kbps~4096Kbps' },
    { label: 'SNR (dB)', value: '52dB' },
    { label: 'Min. Illumination', value: '0Lux (IR ON)' },

    // Lens
    { label: 'Lens', value: '3.6mm (M12)' },
    { label: 'FOV', value: 'H:83.8°, V:42.7°, D:100.1°' },
    { label: 'Lights', value: '4 Warm Light LEDs + 4 IR LEDs' },
    {
      label: 'IR Distance',
      value: 'IR: Up to 50 Meters; Warm Light: Up to 30 Meters',
    },

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
    { label: 'Motion Detection', value: 'Support Humanoid Detection' },
    {
      label: 'Image Setting',
      value: 'Flip, Saturation, Brightness, Contrast, Sharpness',
    },
    {
      label: 'Day and Night Function',
      value: 'Day and night automatic switching',
    },
    { label: 'Privacy Mask', value: 'Support up to 8 areas' },
    {
      label: 'Intelligent Analysis',
      value:
        'Region Intrusion Detection, Line Crossing Detection, Video Tampering Detection, Defocus Detection',
    },
    { label: 'Alarm Method', value: 'Email Alarm, Client Alarm' },
    {
      label: 'Remote Operation',
      value: 'System, Audio and video, Image, Alarm, Network management',
    },
    { label: 'Expansion Interface', value: 'Built-in MIC and Speaker' },

    // Network
    { label: 'Ethernet', value: '10M / 100M Ethernet, 1 RJ45' },
    { label: 'Stream', value: '2x Streams' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, UDP, ICMP, RTSP, RTP, RTCP, SMTP, DHCP, DNS',
    },
    { label: 'ONVIF', value: 'Standard ONVIF' },
    { label: 'Network Transmission', value: 'CloudSEE 2.0, GB28181' },
    { label: 'Browser', value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'App', value: 'Support iOS/Android' },

    // General
    { label: 'Power Supply', value: 'DC12V or PoE' },
    { label: 'Power Consumption', value: '<3W (During day); <6W (At night)' },
    { label: 'Working Temperature', value: '-20°C ~ 60°C' },
    { label: 'Working Humidity', value: '10% ~ 90% Rh' },
    { label: 'Material', value: 'Black and white/Plastic' },
    { label: 'Dimensions (WxHxD)', value: '95x95x175mm' },
    { label: 'Weight', value: '280g' },
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
