'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export function BannerScanPasport() {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full">
        {/* Banner image full width */}
        <Image
          src="/assets/images/project/bannerscanpasport.png"
          alt="Condenser"
          width={1920}
          height={350}
          layout="responsive"
          className="object-cover"
          priority
        />

        {/* Overlay text */}
        <div
          className="absolute inset-x-4 top-1/2 z-10 mr-[30%] flex max-w-[70%] -translate-y-1/2 flex-col
                     sm:inset-x-6 sm:mr-[25%] sm:max-w-[60%]
                     md:inset-x-10 md:mr-[10%] md:max-w-[50%]
                     lg:inset-x-24 lg:mr-0 lg:max-w-[40%]"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="break-words text-[5vw] font-bold
                       leading-snug text-white sm:text-[4vw] md:text-[3.5vw] lg:text-[3.5vw]"
          >
            Scan Pasport TD13
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => {
              router.push('/detailscanpasport');
              setTimeout(() => {
                const section = document.getElementById('face-features82');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }, 300);
            }}
            className="mt-2 w-fit rounded-full border border-white
             bg-transparent px-2 py-1 text-[10px] font-medium uppercase tracking-wider
             text-white transition-all duration-300 ease-in-out
             hover:scale-[1.03] hover:bg-white hover:text-[#12285A] hover:shadow-md
             sm:px-3 sm:py-1.5 sm:text-xs
             md:px-4 md:py-2 md:text-sm
             lg:text-base"
          >
            Detail
          </motion.button>
        </div>
      </div>
    </section>
  );
}
