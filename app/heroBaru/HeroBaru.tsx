'use client';

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import styles from './hero.module.css';

const heroImage = '/assets/images/hero/maps.png';

export function HeroBaru() {
  const [headerHeight, setHeaderHeight] = useState(() => {
    if (typeof window !== 'undefined') {
      const headerEl = document.querySelector('header');
      if (headerEl) {
        return headerEl.getBoundingClientRect().height;
      }
    }
    return 80; // default saat SSR
  });

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useLayoutEffect(() => {
    const headerEl = document.querySelector('header');
    if (headerEl) {
      setHeaderHeight(headerEl.getBoundingClientRect().height);
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const extraOffset = isMobile ? 40 : 0;

  return (
    <section
      className={styles.hero}
      style={{ marginTop: headerHeight + extraOffset }}
    >
      <div className="relative overflow-hidden pb-0 pt-0">
        <div
          className="flex justify-center"
          style={{ width: '100%', marginTop: isMobile ? 0 : 40 }}
        >
          <Image
            src={heroImage}
            alt="Hero Map"
            width={isMobile ? 600 : 1200}
            height={isMobile ? 300 : 500}
            layout="intrinsic"
            objectFit="contain"
            objectPosition={isMobile ? 'center top' : 'center top'}
            priority
          />
        </div>

        <Container>
          <div
            className={cn(
              'absolute inset-0 z-10 flex items-center justify-center text-center text-accent-900 dark:text-white',
              styles['hero-content']
            )}
          >
            {/* Konten tambahan */}
          </div>
        </Container>
      </div>
    </section>
  );
}
