import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartCamera5 } from '@/src/components/banner/bannersmartcamera5';
import { Metadata } from 'next';
import { SmartCamera5Features } from '@/src/components/features/SmartCamera5Features';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { SmartCamera5Parameter } from '@/src/components/parameters/SmartCamera5Parameter';

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
        <BannerSmartCamera5 />
      </div>
      <div className="">
        <SmartCamera5Features />
      </div>
      <div className="">
        <SmartCamera5Parameter />
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
