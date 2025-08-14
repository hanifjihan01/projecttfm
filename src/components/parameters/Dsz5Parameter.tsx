'use client';

import { motion } from 'framer-motion';

export function DsZ5Parameter() {
  const parameters = [
    // Image
    { label: 'Image Sensor', value: '1/2.8" Progressive Scan CMOS' },
    { label: 'Max. Resolution', value: '2592x1944' },
    { label: 'Effective Pixels', value: '5.0MP' },
    { label: 'Compression Standard', value: 'H.265 / H.264 / MJPEG' },
    { label: 'Bitrate', value: '30Kbps ~ 16Mbps' },
    { label: 'Bitrate Control', value: 'CBR / VBR' },

    // Lens
    { label: 'Lens', value: '2.7 ~ 13.5mm' },
    { label: 'Lens Type', value: 'Motorized' },

    // Function
    { label: 'Image Function', value: 'AEC / AWB / AGC' },
    {
      label: 'Image Adjustments',
      value:
        'Color Saturation, Brightness, Contrast, Hue, Sharpness, Gamma, D-WDR',
    },
    { label: 'Others', value: 'Anti-Fogging / Anti Trembling / IR Detection' },
    { label: 'Image Settings', value: 'Flip / Mirror' },
    { label: 'Video Overlay', value: 'Support' },
    { label: 'Privacy Mask', value: '4 Zones' },
    { label: 'Storage', value: 'Max. 256GB' },
    { label: 'Alarm I/O', value: '1x Alarm-In, 1x Alarm-Out' },
    { label: 'RS485', value: '1x RS485 interface' },
    { label: 'Audio', value: '1x Input (3.5mm Jack), 1x Output (3.5mm Jack)' },
    { label: 'Audio Compression', value: 'G.711A / G.711U / G.726' },
    { label: 'Two-way Audio', value: 'Support' },

    // Network
    { label: 'Ethernet', value: '1x RJ45 (10M/100M BASE-TX)' },
    {
      label: 'Protocols',
      value:
        'TCP/IP, UDP, RTP, RTSP, RTCP, HTTP, DNS, DDNS, DHCP, FTP, NTP, PPPOE, SMTP, UPNP',
    },
    { label: 'Alarm Output', value: 'Email / FTP Upload' },
    { label: 'Interoperability', value: 'ONVIF (Profile S)' },
    { label: 'Browser', value: 'IE 10 above' },
    { label: 'Max. User Access', value: 'Max. 5' },

    // General
    { label: 'Power', value: 'DC12V ±10% / IEEE802.3af PoE' },
    {
      label: 'Environmental Casing',
      value: 'Aluminum Alloy Housing, Indoor Applicable',
    },
    { label: 'Installation', value: 'Ceiling Mounted & Wall Mounted' },
    { label: 'Power Consumption', value: '<9W (IR On)' },
    { label: 'Operating Temperature', value: '-30°C ~ 60°C' },
    { label: 'Operating Humidity', value: '0% ~ 85% Rh' },
    { label: 'Dimensions', value: '143x114mm' },
    { label: 'Weight', value: '655g' },
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
