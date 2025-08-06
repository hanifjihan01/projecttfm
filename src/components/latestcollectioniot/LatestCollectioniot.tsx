'use client';

import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function LatestCollectioniot() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Lcd');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [contentDropdownOpen, setContentDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const contentDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target)
      ) {
        setMobileDropdownOpen(false);
      }

      if (
        contentDropdownRef.current &&
        !contentDropdownRef.current.contains(target)
      ) {
        setContentDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const itemsPerPage = 6;

  const productData: Record<
    string,
    { name: string; image: string; link: string }[]
  > = {
    Lcd: [
      {
        name: 'Motorized Conference LCD',
        image: '/assets/images/project/motorized.png',
        link: '/detailmotorized',
      },
      {
        name: 'Smart Projector',
        image: '/assets/images/project/smartprojector1.png',
        link: '/detailsmartprojector',
      },
      {
        name: 'Meeting TV Interactive -HZS-Y651ABBXC',
        image: '/assets/images/project/meetingtv.png',
        link: '/detailmeetingtv',
      },
      {
        name: 'Smart Translation MacinMVAI1011',
        image: '/assets/images/project/smarttranslation.png',
        link: '/detailsmarttranslation',
      },
    ],
    Socket: [
      {
        name: 'Smart Socket',
        image: '/assets/images/project/portablesmartsocket.png',
        link: '/detailsmartsocket',
      },
      {
        name: 'Portable Smart Socket',
        image: '/assets/images/project/portablesmartsocket.png',
        link: '/detailportablesmartsocket',
      },
      {
        name: 'Portable Smart Socket 2',
        image: '/assets/images/project/portablesmartsocket2.png',
        link: '/detailportablesmartsocket2',
      },
      {
        name: 'Portable Smart Socket 3',
        image: '/assets/images/project/portablesmartsocket3.png',
        link: '/detailportablesmartsocket3',
      },
    ],
    Switch: [
      {
        name: 'Smart Switch',
        image: '/assets/images/project/smartswitch.png',
        link: '/detailsmartswitch',
      },
      {
        name: '3 In 1 Smart Switch',
        image: '/assets/images/project/smartswitch3in1.png',
        link: '/detailsmartswitch3in1',
      },
      {
        name: 'Smart switch Curtain',
        image: '/assets/images/project/curtain.png',
        link: '/detailcurtain',
      },
      {
        name: 'Portable Smart Switch',
        image: '/assets/images/project/portablesmartswitch.png',
        link: '/detailportablesmartswitch',
      },
    ],
    Sensor: [
      {
        name: 'Smart Door Magnetic Sensor',
        image: '/assets/images/project/magneticsensor.png',
        link: '/detailmagneticsensor',
      },
      {
        name: 'Smart Smoke Sensor',
        image: '/assets/images/project/smartsmokesensor.png',
        link: '/detailsmartsmokesensor',
      },
      {
        name: 'Smart Gas Sensor',
        image: '/assets/images/project/smartgassensor.png',
        link: '/detailsmartgassensor',
      },
      {
        name: 'Smart Siren',
        image: '/assets/images/project/smartsiren.png',
        link: '/detailsmartsiren',
      },
      {
        name: 'Smart Temperature & Humidity Sensor',
        image: '/assets/images/project/smarttemperatur.png',
        link: '/detailsmarttemperatur',
      },
      {
        name: 'Smart Motion Sensor',
        image: '/assets/images/project/smartmotionsensor.png',
        link: '/detailsmartmotionsensor',
      },
    ],
    Gateway: [
      {
        name: 'Smart Gateway',
        image: '/assets/images/project/smartgateway.png',
        link: '/detailsmartgateway',
      },
      {
        name: 'Smart Gateway 2',
        image: '/assets/images/project/smartgateway2.png',
        link: '/detailsmartgateway2',
      },
      {
        name: 'Smart Gateway gen 3 (906)',
        image: '/assets/images/project/smartgateway3.png',
        link: '/detailsmartgateway3',
      },
      {
        name: 'Smart Gateway gen 4 (908)',
        image: '/assets/images/project/smartgateway4.png',
        link: '/detailsmartgateway4',
      },
    ],
    Led: [
      {
        name: 'LED Outdoor p4',
        image: '/assets/images/project/p4led.png',
        link: '/detailp4led',
      },
      {
        name: 'LED Glass transparant',
        image: '/assets/images/project/ledtransparant.png',
        link: '/detailledtransparant',
      },
    ],
    Officer: [
      {
        name: 'Scanner RFID (VD-67S)',
        image: '/assets/images/project/scannerrfid.png',
        link: '/detailscannerrfid',
      },
      {
        name: 'Wide Angle Conference',
        image: '/assets/images/project/wideangleconference.png',
        link: '/detailwide',
      },
      {
        name: 'Nas Storage',
        image: '/assets/images/project/nasstorage.png',
        link: '/detailnasstorage',
      },
      {
        name: '9000 Lumen Laser Projector L1668FCF',
        image: '/assets/images/project/lumenlaser.png',
        link: '/detaillumenlaser',
      },
      {
        name: 'Condenser Microphone USB Professional Speakers Audio',
        image: '/assets/images/project/condenser.png',
        link: '/detailcondenser',
      },
      {
        name: 'POE ManagebleLS6100G-24P-4X-L3M',
        image: '/assets/images/project/poe.png',
        link: '/detailpoe',
      },
      {
        name: 'Card reader (MCR200)',
        image: '/assets/images/project/cardreader.png',
        link: '/detailcardreader',
      },
      {
        name: 'Scan pasport (TD13)',
        image: '/assets/images/project/scanpasport.png',
        link: '/detailcardreader',
      },
      {
        name: 'Smart Doorlock',
        image: '/assets/images/project/smartdoorlock.png',
        link: '/detailsmartdoorlock',
      },
      {
        name: 'HD IP Camera',
        image: '/assets/images/project/ipcamerahd.png',
        link: '/detailcamerahd',
      },
      {
        name: 'IR Repeater',
        image: '/assets/images/project/irrepreater.png',
        link: '/detailirrepreater',
      },
    ],
  };

  const allProducts = productData[selectedCategory] || [];
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
    <section className="min-h-screen overflow-y-auto bg-gradient-to-b from-neutral-900 to-black px-4 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header and Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-2xl">
            Latest Collection
          </h2>
          <div className="flex w-full items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-400 md:w-72">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <Search className="text-white opacity-50" size={18} />
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Mobile Category Dropdown */}
          <div className="justify-center md:hidden">
            <div className="relative mb-4" ref={mobileDropdownRef}>
              <button
                onClick={() => {
                  setMobileDropdownOpen((prev) => !prev);
                  setContentDropdownOpen(false); // Close other
                }}
                className="flex w-full items-center justify-between rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
              >
                {selectedCategory}
                <ChevronDown size={16} />
              </button>
              {mobileDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full rounded-md border border-white/20 bg-neutral-800 shadow-lg">
                  {Object.keys(productData).map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setPage(1);
                        setSearchTerm('');
                        setMobileDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition hover:bg-white/10 ${
                        selectedCategory === category
                          ? 'bg-white/10 font-bold'
                          : ''
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar for Desktop */}
          <aside className="hidden h-fit w-full rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm md:block md:w-64">
            <h3 className="mb-4 text-lg font-semibold">Product Category</h3>
            <div className="max-h-40 touch-auto space-y-2 overflow-y-auto pr-1">
              {Object.keys(productData).map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setPage(1);
                      setSearchTerm('');
                    }}
                    className={`group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm transition-colors duration-200 ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{category}</span>
                    {isSelected ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="opacity-40 group-hover:opacity-80"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Dropdown & Toggle All */}
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-center">
              <div className="relative mx-auto " ref={contentDropdownRef}>
                <button
                  onClick={() => {
                    setContentDropdownOpen((prev) => !prev);
                    setMobileDropdownOpen(false); // Close other
                  }}
                  className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  {selectedCategory} <ChevronDown size={16} />
                </button>
                {contentDropdownOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-40 rounded-md border border-white/20 bg-neutral-800 shadow-lg">
                    {Object.keys(productData).map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setPage(1);
                          setSearchTerm('');
                          setContentDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition hover:bg-white/10 ${
                          selectedCategory === category
                            ? 'bg-white/10 font-bold'
                            : ''
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="text-sm text-sky-400 underline hover:text-sky-300"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? 'Show Per Page' : 'See All'}
              </button>
            </div>

            {/* Product Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${page}-${showAll}-${searchTerm}-${selectedCategory}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="grid min-h-[640px] grid-cols-2 gap-6 sm:grid-cols-3"
              >
                {paginatedProducts.length > 0 ? (
                  <>
                    {paginatedProducts.map((product, i) => (
                      <div
                        key={i}
                        className="group rounded-lg border border-white/10 bg-white/5 p-3 shadow transition-all duration-300 hover:shadow-xl"
                      >
                        <div className="aspect-[4/3] overflow-hidden rounded-md bg-white">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={333}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <Link href={product.link}>
                          <p className="mt-3 line-clamp-2 cursor-pointer text-sm font-medium text-sky-400 hover:underline">
                            {product.name}
                          </p>
                        </Link>
                      </div>
                    ))}
                    {Array.from({
                      length: itemsPerPage - paginatedProducts.length,
                    }).map((_, i) => (
                      <div
                        key={`placeholder-${i}`}
                        className="invisible rounded-lg border border-transparent p-3"
                      >
                        <div className="aspect-[4/3]" />
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="col-span-full text-center text-sm text-gray-400">
                    Tidak ada produk ditemukan.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {!showAll && paginatedProducts.length > 0 && (
              <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="rounded bg-neutral-700 px-4 py-1 text-sm hover:bg-neutral-600 disabled:opacity-40"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={page === totalPages}
                    className="rounded bg-sky-500 px-4 py-1 text-sm text-white hover:bg-sky-600 disabled:opacity-40"
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
                      if (newPage >= 1 && newPage <= totalPages)
                        setPage(newPage);
                    }}
                    className="mx-1 w-12 rounded bg-white text-center text-black"
                  />{' '}
                  of {totalPages}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
