import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartCamera6 } from '@/src/components/banner/bannersmartcamera6';
import { Metadata } from 'next';
import { SmartCamera6Features } from '@/src/components/features/SmartCamera6Features';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { SmartCamera6Parameter } from '@/src/components/parameters/SmartCamera6Features';

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
        <BannerSmartCamera6 />
      </div>
      <div className="">
        <SmartCamera6Features />
      </div>
      <div className="">
        <SmartCamera6Parameter />
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
