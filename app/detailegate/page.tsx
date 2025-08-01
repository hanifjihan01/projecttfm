import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { BannerEGate } from '@/src/components/banner/banneregate';
import { EGateFeatures } from '@/src/components/features/EGateFeatures';
import { EGateParameter } from '@/src/components/parameters/EGateParameter';

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
        <BannerEGate />
      </div>
      <div className="">
        <EGateFeatures />
      </div>
      <div className="">
        <EGateParameter />
      </div>

      <div className="">
        <ArtificialIntelligent />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
