import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartCamera2 } from '@/src/components/banner/bannersmartcamera2';
import { Metadata } from 'next';
import { SmartCamera2Features } from '@/src/components/features/SmartCamera2Features';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { SmartCamera2Parameter } from '@/src/components/parameters/SmartCamera2Parameter';
export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-36 ">
        <MainHeader version="1" />
      </div>
      <div className="">
        <BannerSmartCamera2 />
      </div>
      <div className="">
        <SmartCamera2Features />
      </div>
      <div className="">
        <SmartCamera2Parameter />
      </div>

      <div className="mt-32">
        <ArtificialIntelligent />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
