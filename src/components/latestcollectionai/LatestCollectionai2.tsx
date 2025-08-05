'use client';

import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function LatestCollectionai2() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Camera');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
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
    Camera: [
      {
        name: 'Smart Camera AI 1S',
        image: '/assets/images/project/smartcamera.png',
        link: '/detailcamera1',
      },
      {
        name: 'Smart AI Camera Alloy 1S Social Distance',
        image: '/assets/images/project/camera2.png',
        link: '/detailcamera2',
      },
      {
        name: 'Smart AI Camera 1 Alloy',
        image: '/assets/images/project/camera3.png',
        link: '/detailcamera3',
      },
      {
        name: 'Smart IP Camera JVS-N537-SDL',
        image: '/assets/images/project/smartipcamera.png',
        link: '/detailcamera4',
      },
      {
        name: 'Kamera Outdoor JVS-BS10-5WPL-F0S',
        image: '/assets/images/project/kameraoutdor.png',
        link: '/detailkameraoutdoor',
      },
      {
        name: 'Kamera JVS-N819-ZDL',
        image: '/assets/images/project/smartipcamera.png',
        link: '/detailcamerajvszdl',
      },
      {
        name: 'Clever Dog',
        image: '/assets/images/project/cleverdog.png',
        link: '/detailcleverdog',
      },
      {
        name: 'JVS-N933-YWC',
        image: '/assets/images/project/jvsn933ywc.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N913-YWC',
        image: '/assets/images/project/jvsn913ywc.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N915-BDL',
        image: '/assets/images/project/jvsn915bdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N936-MDL',
        image: '/assets/images/project/jvsn936mdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N916-KDL',
        image: '/assets/images/project/jvsn916kdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N916-MDL',
        image: '/assets/images/project/jvsn916mdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N516-MDL',
        image: '/assets/images/project/jvsn516mdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N917-SDL',
        image: '/assets/images/project/jvsn917sdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N517-SDL',
        image: '/assets/images/project/jvsn517sdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N917-TDL',
        image: '/assets/images/project/jvsn917tdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N517-TDL',
        image: '/assets/images/project/jvsn517tdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N917-YDL',
        image: '/assets/images/project/jvsn917ydl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N937-SDL',
        image: '/assets/images/project/jvsn937sdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N537-SDL',
        image: '/assets/images/project/jvsn537sdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N617-UDL',
        image: '/assets/images/project/jvsn617udl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N637-UDL',
        image: '/assets/images/project/jvsn637udl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N510-DS',
        image: '/assets/images/project/jvsn510ds.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N955-HY',
        image: '/assets/images/project/jvsn955hy.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N5022',
        image: '/assets/images/project/jvsn5022.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N510-YWS',
        image: '/assets/images/project/jvsn510yws.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N4232-SL',
        image: '/assets/images/project/jvsn4232sl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N4242',
        image: '/assets/images/project/jvsn4242.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N915-ADL',
        image: '/assets/images/project/jvsn915adl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N935-ADL',
        image: '/assets/images/project/jvsn935adl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N533-DS-Z5',
        image: '/assets/images/project/jvsn533dsz5.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N410K-SDL',
        image: '/assets/images/project/jvsn410ksdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N430K-SDL',
        image: '/assets/images/project/jvsn430ksdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-FR3022',
        image: '/assets/images/project/jvsfr3022.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N83-Z25',
        image: '/assets/images/project/jvsn83z25.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N43-Z25',
        image: '/assets/images/project/jvsn43z25.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N53-Z30',
        image: '/assets/images/project/jvsn53z30.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N513-DS-Z5',
        image: '/assets/images/project/jvsn513dsz5.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N416-SCR',
        image: '/assets/images/project/jvsn416scr.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N517-FDL',
        image: '/assets/images/project/jvsn517fdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N519-PWL',
        image: '/assets/images/project/jvsn519pwl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N817-UDL',
        image: '/assets/images/project/jvsn817udl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N837-UDL',
        image: '/assets/images/project/jvsn837udl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N433-Z5',
        image: '/assets/images/project/jvsn433z5.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N518-ZDL',
        image: '/assets/images/project/jvsn518zdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N818-ZDL',
        image: '/assets/images/project/jvsn818zdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N819-ZDL',
        image: '/assets/images/project/jvsn818zdl.png',
        link: '/detailcamera1',
      },
      {
        name: 'JVS-N819-LPR',
        image: '/assets/images/project/jvsn818zdl.png',
        link: '/detailcamera1',
      },
    ],
    Security: [
      {
        name: 'Smart Helmet',
        image: '/assets/images/project/smarthelmet.png',
        link: '/detailsmarthelmet',
      },
      {
        name: 'Smart Watch',
        image: '/assets/images/project/smartwatch.png',
        link: '/detailsmartwatch',
      },
      {
        name: 'Intelligent Lock Tracker (Maxvision JT701)',
        image: '/assets/images/project/locktracker.png',
        link: '/detaillocktracker',
      },
      {
        name: 'Cam face Attandance(JVS-FRT-T5)',
        image: '/assets/images/project/camattandance.png',
        link: '/detailcamttandance',
      },
      {
        name: 'Palm vein MVNT-8680-A107',
        image: '/assets/images/project/palmvein.png',
        link: '/detailpalmvein',
      },
      {
        name: 'Bath RFID (VH88PRO)',
        image: '/assets/images/project/rfid.png',
        link: '/detailrfid',
      },
    ],
    Tab: [
      {
        name: 'Tab 8"Allocube iplay 50 mini li',
        image: '/assets/images/project/mini.png',
        link: '/detailmini',
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
    <section className="bg-gradient-to-b from-neutral-900 to-black px-4 py-10 text-white md:px-10">
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
          {/* Sidebar */}
          <aside className="h-fit w-full rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm md:w-64">
            <h3 className="mb-4 text-lg font-semibold">Kategori Produk</h3>
            <div className="space-y-2">
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
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="relative mx-auto" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  {selectedCategory} <ChevronDown size={16} />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 z-20 mt-2 w-40 rounded-md border border-white/20 bg-neutral-800 shadow-lg">
                    {Object.keys(productData).map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setPage(1);
                          setSearchTerm('');
                          setShowDropdown(false);
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
                {showAll ? 'Tampilkan Per Halaman' : 'Lihat Semua'}
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
                    {/* Placeholder agar grid height konsisten */}
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
