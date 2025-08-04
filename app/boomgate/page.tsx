import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BoomGateFeatures } from '@/src/components/features/BoomGateFeatures';
import { BoomGateParameter } from '@/src/components/parameters/BoomGateParameter';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { BannerIntegratedBoom } from '@/src/components/banner/bannerintegratedboom';

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
        <BannerIntegratedBoom />
      </div>
      <div className="">
        <BoomGateFeatures />
      </div>
      <div className="">
        <BoomGateParameter />
      </div>

      <div className="">
        <ArtificialIntelligent />
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
}
