'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/src/utils/shadcn';

const tabs = [
  { label: 'Visitor Management System', value: 'visitor' },
  { label: 'Smart Security', value: 'security' },
];

const images: Record<string, string> = {
  visitor: '/assets/images/hero/vms4.png',
  security: '/assets/images/hero/vms4.png',
};

export function HeroSections() {
  const [activeTab, setActiveTab] = useState('visitor');
  const router = useRouter();

  const handleTabClick = (value: string) => {
    if (value === 'security') {
      router.replace('/smartsecurity');
    } else {
      setActiveTab(value);
    }
  };

  return (
    <section className="relative overflow-hidden bg-accent-900 px-4 pb-14 pt-10 text-center md:px-8 md:pb-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Judul */}
        <h1 className="md:text-5xl text-2xl font-extrabold text-[#4AC4F6]">
          Visitor Management System
        </h1>

        {/* Subjudul */}
        <p className="mt-3 text-xs text-white md:text-base">
          Efficiently monitor, record, and manage all your visitors in one
          place.
          <br className="hidden sm:block" />
          Helping organizations manage guest access with ease and
          professionalism.
        </p>

        {/* Tombol tab */}
        <div className="relative z-10 mb-6 mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={cn(
                'w-64 rounded border px-4 py-2 text-sm font-medium transition-all sm:w-auto',
                activeTab === tab.value
                  ? 'border-[#4AC4F3] bg-[#4AC4F3] text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gambar (hanya tampil di desktop) */}
        <div className="pointer-events-none relative z-0 mt-8 hidden justify-center md:mt-[-180px] md:flex">
          <div className="relative aspect-[16/9] w-full max-w-7xl">
            {/* Ini wrapper penting agar rounded benar-benar berfungsi */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={images[activeTab]}
                alt={
                  tabs.find((t) => t.value === activeTab)?.label || 'Hero Image'
                }
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
