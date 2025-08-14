import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { DsZ5Features } from '@/src/components/features/DsZ5Features';
import { DsZ5Parameter } from '@/src/components/parameters/Dsz5Parameter';

import { BannerDsZ5 } from '@/src/components/banner/bannerdsz5';
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
        <BannerDsZ5 />
      </div>
      <div className="">
        <DsZ5Features />
      </div>
      <div className="">
        <DsZ5Parameter />
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
