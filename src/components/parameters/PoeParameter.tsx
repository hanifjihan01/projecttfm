'use client';

import { motion } from 'framer-motion';

export function PoeParameter() {
  const parameters = [
    {
      label: 'Port Configuration',
      value:
        'Equipped with 24 adaptive RJ45 ports (10/100/1000Mbps) for downlink and 4 uplink 10G SFP+ ports, offering high connectivity flexibility.',
    },
    {
      label: 'PoE Standard & Power',
      value:
        'Supports IEEE 802.3af/at PoE standard with a maximum total output power of 450W, enabling power and data transmission over the same cable.',
    },
    {
      label: 'LED Indicators',
      value:
        'LED indicators available for power and connection status (PWR, Link/Act).',
    },
    {
      label: 'Performance',
      value:
        'Delivers 128Gbps bandwidth and 95.23Mpps packet forwarding rate, with support for 16K MAC addresses.',
    },
    {
      label: 'Compatibility & Protocols',
      value:
        'Compatible with IEEE802.3i/u/ab/z/ae for 10/100/1000/10G speeds and supports traffic control and network management standards such as IEEE802.1x, IEEE802.3x Flow Control, and Energy-Efficient Ethernet (EEE).',
    },
    {
      label: 'Power & Physical Design',
      value:
        'Powered by AC 100~240V 50/60Hz, rack-mountable design with dimensions of 440 x 285 x 44 mm, operating temperature 0℃–45℃, and storage temperature –20℃–70℃.',
    },
    {
      label: 'Routing Support',
      value:
        'Supports dynamic routing protocols (OSPF, RIP V1/V2), static routing, and ARP proxy.',
    },
    {
      label: 'Network Security',
      value:
        'Includes loop protection, BPDU/root protection, and support for STP, RSTP, and MSTP.',
    },
    {
      label: 'PoE Management',
      value: 'Supports PoE power monitoring and display, plus PoE watchdog.',
    },
    {
      label: 'VLAN Support',
      value:
        'Supports 4K VLAN, including 802.1Q, MAC VLAN, Voice VLAN, VLAN mapping, and GVRP protocol.',
    },
    {
      label: 'User Management & Authentication',
      value:
        'Provides HTTPS, SSH, RADIUS, and TACACS+ authentication, with protection against ARP spoofing, DoS attacks, DHCP attacks, and IP spoofing.',
    },
    {
      label: 'Access Control',
      value:
        'Access Control List (ACL) supports up to Layer 4 filtering by IP, MAC, protocol, and port.',
    },
    {
      label: 'Quality of Service (QoS)',
      value:
        'Offers 8 port queues with port-based priority, 802.1p, DSCP, WRR, and strict priority algorithms.',
    },
    {
      label: 'Management Access',
      value:
        'Manage via Web (HTTP/HTTPS), CLI (Telnet, SSH), and SNMP V1/V2/V3.',
    },
    {
      label: 'Additional Features',
      value:
        'Includes CPU and memory monitoring, system logs, ping/traceroute detection, and software upgrades via HTTP/TFTP.',
    },
    {
      label: 'Use Case',
      value:
        'Ideal for enterprise-grade networks requiring high speed, full control, and strong security.',
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
