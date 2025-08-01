'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/utils/shadcn';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export function ArtificialIntelligent2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const cards = [
    { label: 'Software Management and Platform' },
    { label: 'Software Management and Platform' },
  ];

  const images = [
    '/assets/images/project/smartcamera.png',
    '/assets/images/project/camera2.png',
    '/assets/images/project/camera3.png',
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-accent-900 px-4 py-10 md:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:grid md:grid-cols-2 md:items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-balance text-xl font-extrabold leading-tight text-white md:text-2xl lg:text-3xl">
            Artificial Intelligent (AI)
          </h2>

          <p className="mt-2 text-sm text-white md:text-base">
            Through powerful data processing and machine learning, AI systems
            help organizations automate complex tasks, uncover insights, and
            deliver smarter outcomes.
          </p>

          <div className="mt-6 flex flex-col items-center gap-y-6 md:flex-row md:flex-wrap md:items-start md:justify-start md:gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative w-[260px] rounded-sm bg-[#4AC4F3] px-4 py-10 text-center text-white shadow-lg sm:w-[280px]"
              >
                <p className="text-base font-medium leading-tight sm:text-lg">
                  {card.label}
                </p>
                <button
                  onClick={() => router.push('/listai')}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 shadow-md transition hover:bg-gray-100"
                >
                  <ChevronDown className="text-[#4AC4F3]" size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Carousel */}
        <div
          className="relative flex flex-col items-center md:translate-y-32"
          style={{ minHeight: 430 }}
        >
          {/* Image Carousel */}
          <div className="flex w-full justify-center overflow-x-auto px-2  sm:px-0 md:overflow-visible">
            {images.map((img, i) => (
              <motion.div
                key={i}
                layout
                animate={{
                  opacity: i === activeIndex ? 1 : 0.4,
                  scale: i === activeIndex ? 1 : 0.95,
                }}
                transition={{ duration: 0.4 }}
                className={cn(
                  'shrink-0 overflow-hidden rounded-[20px] transition-all',
                  i !== 0 && '-ml-[40px]', // rapat antar gambar
                  i === activeIndex
                    ? 'h-[260px] w-[170px] sm:h-[340px] sm:w-[230px] md:h-[390px] md:w-[250px]'
                    : 'h-[240px] w-[150px] blur-sm sm:h-[310px] sm:w-[200px]'
                )}
              >
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={250}
                  height={390}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="mt-6 flex gap-4 sm:-left-24 md:absolute md:-left-16 md:mt-80">
            <button
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow hover:bg-gray-100"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % images.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4AC4F3] text-white shadow hover:bg-[#3bb6e2]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
