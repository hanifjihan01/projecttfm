import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartWatch } from '@/src/components/banner/bannersmartwatch';
import { Metadata } from 'next';
import { SmartWatchFeatures } from '@/src/components/features/SmartWatchFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { SmartWatchParameter } from '@/src/components/parameters/SmartWatchParameter';

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
        <BannerSmartWatch />
      </div>

      <div className="">
        <SmartWatchFeatures />
      </div>
      <div className="">
        <SmartWatchParameter />
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
