'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function LatestCollectioniot() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const itemsPerPage = 9;

  const productImages = [
    '/assets/images/project/motorized.png',
    '/assets/images/project/wideangleconference.png',
    '/assets/images/project/smartprojector.png',
    '/assets/images/project/smarttv.png',
    '/assets/images/project/nasstorage.png',
    '/assets/images/project/lumenlaser.png',
    '/assets/images/project/condenser.png',
    '/assets/images/project/p4led.png',
    '/assets/images/project/ledtransparant.png',
    '/assets/images/project/scannerrfid.png',
    '/assets/images/project/poe.png',
    '/assets/images/project/smarttranslation.png',
    '/assets/images/project/cardreader.png',
    '/assets/images/project/scanpasport.png',
    '/assets/images/project/smartswitch.png',
    '/assets/images/project/smartswitch3in1.png',
    '/assets/images/project/curtain.png',
    '/assets/images/project/smartsocket.png',
    '/assets/images/project/portablesmartsocket.png',
    '/assets/images/project/portablesmartsocket2.png',
    '/assets/images/project/portablesmartsocket3.png',
    '/assets/images/project/smartgateway.png',
    '/assets/images/project/smartgateway2.png',
    '/assets/images/project/portablesmartswitch.png',
    '/assets/images/project/smartdoorlock.png',
    '/assets/images/project/magneticsensor.png',
    '/assets/images/project/smartsmokesensor.png',
    '/assets/images/project/smartgassensor.png',
    '/assets/images/project/smartsiren.png',
    '/assets/images/project/smarttemperatur.png',
    '/assets/images/project/ipcamerahd.png',
    '/assets/images/project/irrepreater.png',
    '/assets/images/project/smartmotionsensor.png',
    '/assets/images/project/smartgateway4.png',
    '/assets/images/project/smartgateway3.png',
  ];

  const productNames = [
    'Motorized Conference LCD',
    'Wide Angle Conference',
    'Smart Projector',
    'Meeting TV Interactive -HZS-Y651ABBXC',
    'Nas Storage',
    '9000 Lumen Laser Projector L1668FCF',
    'Condenser Microphone USB Professional Speakers Audio',
    'LED Outdoor p4',
    'LED Glass transparant',
    'Scanner RFID (VD-67S)',
    'POE ManagebleLS6100G-24P-4X-L3M',
    'Smart Translation MacinMVAI1011',
    'Card reader (MCR200)',
    'Scan pasport (TD13)',
    'Smart Switch',
    '3 In 1 Smart Switch',
    'Smart switch Curtain',
    'Smart Socket',
    'Portable Smart Socket',
    'Portable Smart Socket 2',
    'Portable Smart Socket 3',
    'Smart Gateway',
    'Smart Gateway 2',
    'Portable Smart Switch',
    'Smart Doorlock',
    'Smart Door Magnetic Sensor',
    'Smart Smoke Sensor',
    'Smart Gas Sensor',
    'Smart Siren',
    'Smart Temperature & Humidity Sensor',
    'HD IP Camera',
    'IR Repeater',
    'Smart Motion Sensor',
    'Smart Gateway gen 4 (908)',
    'Smart Gateway gen 3 (906)',
  ];

  const productLinks = [
    '/detailmotorized',
    '/detailwide',
    '/detailsmartprojector',
    '/detailmeetingtv',
    '/detailnasstorage',
    '/detaillumenlaser',
    '/detailcondenser',
    '/detailp4led',
    '/detailledtransparant',
    '/detailscannerrfid',
    '/detailpoe',
    '/detailsmarttranslation',
    '/detailcardreader',
    '/detailscanpasport',
    '/detailsmartswitch',
    '/detailsmartswitch3in1',
    '/detailcurtain',
    '/detailsmartsocket',
    '/detailportablesmartsocket',
    '/detailportablesmartsocket2',
    '/detailportablesmartsocket3',
    '/detailsmartgateway',
    '/detailsmartgateway2',
    '/detailportablesmartswitch',
    '/detailsmartdoorlock',
    '/detailmagneticsensor',
    '/detailsmartsmokesensor',
    '/detailsmartgassensor',
    '/detailsmartsiren',
    '/detailsmarttemperatur',
    '/detailcamerahd',
    '/detailirrepreater',
    '/detailsmartmotionsensor',
    '/detailsmartgateway4',
    '/detailsmartgateway3',
  ];

  const allProducts = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    name: productNames[i],
    image: productImages[i],
    link: productLinks[i],
  }));

  const filteredProductsAll = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProductsAll.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = showAll
    ? filteredProductsAll
    : filteredProductsAll.slice(startIndex, endIndex);

  return (
    <section className="bg-neutral-900 px-4 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-extrabold md:text-2xl">
              Latest Collection
            </h2>
            <p className="mt-1 text-sm">
              Discover our latest collection, where innovation meets style
              featuring carefully curated designs crafted to elevate your
              everyday experience.
            </p>
          </div>

          <div className="flex w-full items-center rounded-md border bg-white px-2 py-1 md:w-64">
            <input
              type="text"
              placeholder="Cari Produk"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="flex-1 bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
            />
            <ChevronRight className="text-black" size={18} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 rounded border bg-neutral-800 px-3 py-1 text-sm">
            Category
            <ChevronDown size={16} />
          </button>
          <button
            className="text-sm underline"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Tampilkan Per Halaman' : 'Lihat Semua'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${page}-${showAll}-${searchTerm}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <div key={product.id} className="space-y-2">
                  <div className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={333}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <Link href={product.link}>
                    <p className="cursor-pointer text-sm font-semibold text-sky-400 hover:underline">
                      {product.name}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-sm text-gray-400">
                Produk tidak ditemukan.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {!showAll && (
          <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="rounded bg-neutral-700 px-3 py-1 text-sm disabled:opacity-50"
              >
                ← Prev
              </button>
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className="rounded bg-sky-400 px-3 py-1 text-sm text-white hover:bg-sky-500 disabled:opacity-50"
              >
                Next →
              </button>
            </div>
            <div className="text-sm">
              Page{' '}
              <input
                type="number"
                min="1"
                max={totalPages}
                value={page}
                onChange={(e) => {
                  const newPage = Number(e.target.value);
                  if (newPage >= 1 && newPage <= totalPages) {
                    setPage(newPage);
                  }
                }}
                className="mx-1 w-10 rounded bg-white text-center text-black"
              />{' '}
              of {totalPages}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
