'use client';

import Image from 'next/image';

const clientLogos = [
  '/assets/images/project/logms.png',
  '/assets/images/project/logogoogle.png',
  '/assets/images/project/logooyo.png',
  '/assets/images/project/logoairbnb.png',
  '/assets/images/project/logofedex.png',
  '/assets/images/project/logoamazon.png',
  '/assets/images/project/logobms.png',
  '/assets/images/project/logoola.png',
  '/assets/images/project/logms.png',
  '/assets/images/project/logodpr.png',
  '/assets/images/project/logoimigrasi.png',
  '/assets/images/project/logoseskab.png',
  '/assets/images/project/logodjp.png',
  '/assets/images/project/logotni2.png',
  '/assets/images/project/logowalmart.png',
];

export function ClientLogoDiamondGrid() {
  const rows = [
    [1, 2], // Row 2
    [3, 4, 5], // Row 3
    [6, 7, 8, 9], // Row 4 (middle)
    [10, 11, 12], // Row 5
    [13, 14], // Row 6
  ];

  // Tailwind offset classes to center each row horizontally
  const rowOffsets = [
    'md:ml-[1rem]', // 2 logos
    'md:ml-[1rem]', // 3 logos
    '', // center 4 logos
    'md:ml-[1rem]', // mirror of 3
    'md:ml-[1rem]', // mirror of 2
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-secondary text-lg font-semibold uppercase leading-tight text-black md:text-xl lg:text-2xl">
          Our Clients
        </h2>
        <p className="text-gray-600">
          We have been working with some fortune 500 clients
        </p>
      </div>

      {/* MOBILE: 2 kolom */}
      <div className="grid grid-cols-2 gap-6 px-4 sm:gap-8 md:hidden">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="flex h-20 w-full items-center justify-center rounded-lg bg-white shadow sm:h-24"
          >
            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP: diamond layout */}
      <div className="hidden md:flex md:flex-col md:items-center md:gap-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-16 ${rowOffsets[rowIndex]}`}
          >
            {row.map((logoIndex) => (
              <div
                key={logoIndex}
                className="flex h-20 w-20 items-center justify-center rounded-lg bg-white shadow transition-transform hover:scale-105 sm:h-24 sm:w-24"
              >
                <Image
                  src={clientLogos[logoIndex]}
                  alt={`Client ${logoIndex + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
