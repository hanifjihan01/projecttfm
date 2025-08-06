'use client';

import Image from 'next/image';

export function BannerAi2() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full">
        {/* Banner image full width */}
        <Image
          src="/assets/images/hero/ss2.png"
          alt="Smart Locker"
          width={1920}
          height={350}
          layout="responsive"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
