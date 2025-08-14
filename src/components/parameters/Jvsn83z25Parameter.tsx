'use client';

import { motion } from 'framer-motion';

export function Jvsn83z25Parameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/2.9" CMOS' },
    { label: 'Max Resolution', value: '1920x1080' },
    { label: 'Effective Pixels', value: '2.0 Mega Pixels' },
    { label: 'Optical Zoom', value: '25x Zoom' },
    { label: 'Compression Standard', value: 'H.264/H.265' },
    { label: 'Maximum Frame Rate', value: 'Up to 25 fps' },
    { label: 'Bit Rate', value: '204Kbps~8Mbps' },
    { label: 'Illumination', value: '0 Lux (IR ON)' },
    { label: 'Focus Control', value: 'Auto/ Semi-auto/ Manual' },
    { label: 'Infrared', value: '4 IR LEDs + 4 White Lights' },
    { label: 'Distance', value: '120m' },

    // Function
    { label: 'OSD', value: 'Support' },
    { label: 'Image Enhancement', value: 'BLC/ HLC/ 3D DNR/ DWDR/ Defog' },
    {
      label: 'Video Adjust',
      value: 'Supports Contrast, Brightness, Saturation, Sharpness Adjustment',
    },
    { label: 'Audio', value: 'Support audio monitoring, intercom' },
    {
      label: 'Image Setting',
      value: 'Rotate, Saturation, Brightness, Contrast, Sharpness',
    },
    { label: 'Alarm', value: 'E-mail, Client' },
    {
      label: 'Network Protocols',
      value: 'HTTP, TCP/IP, ICMP, RTSP, RTP, UDP, RTCP, SMTP, DHCP, DNS',
    },
    {
      label: 'Intelligent Analysis',
      value: `Support Human Tracking, Region Intrusion, Line Crossing, Video Occlusion,
Virtual Focus Detection, Fast Movement, Leftover Picking, Passenger Flow Statistics,
Sound Anomaly Detection`,
    },
    {
      label: 'Remote Operation',
      value: 'System, Stream, Alarm, Network, Storage Management, PTZ',
    },
    {
      label: 'Expansion Interface',
      value: 'Audio Input, Audio Output, SD Card (Up to 256GB)',
    },

    // PTZ
    { label: 'Pan/Tilt Range', value: 'Pan: 0°~360°; Tilt: 0°~90°' },
    { label: 'Pan Speed', value: '0°~40°/S' },
    { label: 'Tilt Speed', value: '0°~40°/S' },
    { label: 'Number of Preset', value: '1024' },
    { label: 'Patrol', value: 'Up to 2 Patrols' },
    { label: 'Trajectory Scan', value: '4' },
    {
      label: 'Scan',
      value: 'Patrol Scan, Pattern Scan, Tilt Scan, Frame Scan, Random Scan',
    },
    { label: 'Control', value: 'RS232' },

    // Network
    { label: 'Ethernet', value: '10M/100M Ethernet, RJ45 Port' },
    {
      label: 'Protocols',
      value: 'HTTP, TCP/IP, ICMP, RTSP, RTP, UDP, RTCP, SMTP, DHCP, DDNS',
    },
    { label: 'Stream', value: '2x Streams' },
    { label: 'Wi-Fi', value: 'Not Supported' },
    { label: 'LAN', value: 'Support' },
    { label: 'System Compatibility', value: 'Standard ONVIF' },
    { label: 'User', value: 'Up to 13 Users' },
    { label: 'Browser', value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02' },
    { label: 'Smart Phone', value: 'iOS/Android' },

    // General
    { label: 'Power Supply', value: 'DC12V/3.33A' },
    { label: 'Power Consumption', value: '≤ 25W' },
    { label: 'Operating Temperature', value: '-20°C ~ +60°C' },
    { label: 'Operating Humidity', value: '0% - 93% Rh Non-Condensation' },
    { label: 'Product Dimensions', value: '205x325X389 (mm)' },
    { label: 'Weight', value: '2490g' },
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
