'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/src/utils/shadcn';

const tabs = [
  { label: 'Smart Office', value: 'visitor' },
  { label: 'Smart Commercial Facility', value: 'security' },
];

export function HeroSectionss() {
  const [activeTab, setActiveTab] = useState('visitor');
  const router = useRouter();

  const handleTabClick = (value: string) => {
    if (value === 'security') {
      router.replace('/iot2');
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
          Smart Office
        </h1>

        {/* Subjudul */}
        <p className="mt-2 text-xs text-white md:text-base">
          Smart Office solutions integrate advanced technologies to create an
          intelligent and connected workspace that enhances
          <br className="hidden sm:block" />
          productivity, collaboration, and operational efficiency.
        </p>

        {/* Tombol tab */}
        <div className="relative z-10 mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-2">
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

        {/* Gambar dihapus */}
      </motion.div>
    </section>
  );
}
