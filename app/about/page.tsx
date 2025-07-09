import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { HeroSection } from '@/src/sections/hero/v3';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transformasi - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <br />

      <Footer />
    </>
  );
}
