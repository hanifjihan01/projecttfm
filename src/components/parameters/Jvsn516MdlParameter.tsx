'use client';

import { motion } from 'framer-motion';

export function Jvsn516MdlParameter() {
  const parameters = [
    // Lens & Illumination
    { label: 'Image Sensor', value: '1/2.66" Progressive CMOS' },
    { label: 'Min. Illumination', value: 'IR ON 0 Lux' },
    { label: 'Day & Night', value: 'Smart Dual Illumination' },
    { label: 'Lens', value: '3.6mm' },
    { label: 'FOV', value: 'H: 82.4°; V: 44.0°; D: 95.9°' },
    { label: 'LEDs', value: '4 Pcs Warm LED and 4 Pcs IR LEDS' },
    { label: 'LED Range', value: 'Warm LED 30m, IR LEDS 50m' },
    { label: 'LED Adjustment', value: 'Adaptive Dimming' },

    // Image
    { label: 'Max Resolution', value: '2880 x 1660 Resolution' },
    { label: 'Frame Rate', value: '25fps' },
    { label: 'Video Compression', value: 'H.265/H.264' },
    {
      label: 'Bit Rate (CBR/VBR)',
      value: 'Main Stream: 256 ~ 8192Kbps; Sub Stream: 68 ~ 1024Kbps',
    },
    { label: 'Audio Compression', value: 'G.711a / G.711u' },
    {
      label: 'Image Setting',
      value: 'Saturation, Brightness, Contrast, Sharpness',
    },
    { label: 'Image Enhancement', value: 'HLC/BLC/SAFE/Defog' },
    { label: 'Privacy Mask', value: 'Support 8 Rectangle Areas' },
    { label: 'DWDR', value: 'Support' },
    { label: 'Face Mode', value: 'Support' },

    // Network
    {
      label: 'Network Protocols',
      value: 'HTTP, TCP/IP, UDP/IP, ICMP, RTP, UDP, RTCP, SMTP, DHCP, DNS',
    },
    {
      label: 'Interface Protocols',
      value: 'Standard ONVIF, GB28181, CloudSEE',
    },
    { label: 'Auto IP Configuration', value: 'Support' },
    {
      label: 'Alarm Trigger',
      value: 'Motion Detection, Region Intrusion, Line Crossing',
    },
    {
      label: 'RTSP Video',
      value: 'Standard RFC2326, QuickTime/VLC Player etc.',
    },
    { label: 'Web Language', value: 'English, Chinese' },
    {
      label: 'Browser',
      value: 'IE8+, Chrome18+, Firefox5.0+, Safari5.02+',
    },

    // Interface
    { label: 'Ethernet', value: '1 RJ45 10M / 100M Ethernet' },
    { label: 'Audio', value: 'Built-in Mic' },
    { label: 'SD Card', value: 'Not Support' },
    { label: 'Reset Button', value: 'Not Support' },

    // General
    {
      label: 'Power Supply',
      value: 'DC12V/2A, PoE IEEE 802.3af',
    },
    {
      label: 'Power Consumption',
      value: '<3W (During day); <6W (At night)',
    },
    {
      label: 'Working Temperature',
      value: '-40°C ~ 60°C',
    },
    {
      label: 'Working Humidity',
      value: '10% ~ 90% Rh Non-Condensation',
    },
    { label: 'Dimensions', value: '88x85x187(mm)' },
    { label: 'Product Weight', value: '≤240g' },
    {
      label: 'Color / Material',
      value: 'Front Shell: Black & White Plastic',
    },
    { label: 'Installation', value: 'Wall, Ceiling' },
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
