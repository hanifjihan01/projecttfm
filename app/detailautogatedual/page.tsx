import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { BannerDualGate } from '@/src/components/banner/bannerdualgate';
import { AutoGateDualFeatures } from '@/src/components/features/AutoDualGateFeatures';
import { AutoGateDualParameter } from '@/src/components/parameters/AutoGateDualParameter';

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
        <BannerDualGate />
      </div>
      <div className="">
        <AutoGateDualFeatures />
      </div>
      <div className="">
        <AutoGateDualParameter />
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
