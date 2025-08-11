import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartCamera3 } from '@/src/components/banner/bannersmartcamera3';
import { Metadata } from 'next';
import { SmartCamera3Features } from '@/src/components/features/SmartCamera3Features';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { SmartCamera3Parameter } from '@/src/components/parameters/SmartCamera3Parameter';

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
        <BannerSmartCamera3 />
      </div>
      <div className="">
        <SmartCamera3Features />
      </div>
      <div className="">
        <SmartCamera3Parameter />
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
