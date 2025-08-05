'use client';

import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function LatestCollectionai() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('E-Gate');
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

  useEffect(() => {
    if (window.location.hash === '#latest-products') {
      setShowAll(true);
      setTimeout(() => {
        const section = document.getElementById('latest-products');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const itemsPerPage = 9;

  const productData: Record<
    string,
    { name: string; image: string; link: string }[]
  > = {
    'E-Gate': [
      {
        name: 'E-Gate single MVCM-2108-J Z',
        image: '/assets/images/project/alatai.png',
        link: '/detailegate',
      },
      {
        name: 'Autogate Dual',
        image: '/assets/images/project/autogatedual.png',
        link: '/detailautogatedual',
      },
      {
        name: 'Integrated Boom Gate With Smart AI Camera',
        image: '/assets/images/project/plank.png',
        link: '/boomgate',
      },
    ],
    'Face Recognition': [
      {
        name: 'Face Recognation Termal MVNT-86',
        image: '/assets/images/project/kt5.png',
        link: '/detailfacerecog',
      },
    ],
    'X Ray': [
      {
        name: 'X Ray',
        image: '/assets/images/project/xray.png',
        link: '/detailxray',
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
    <section
      id="latest-products"
      className="bg-gradient-to-b from-neutral-900 to-black px-4 py-10 text-white md:px-10"
    >
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
                className="grid grid-cols-2 gap-6 sm:grid-cols-3"
              >
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((product, i) => (
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
                  ))
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
