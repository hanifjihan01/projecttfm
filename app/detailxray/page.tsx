import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { BannerXRay } from '@/src/components/banner/bannerxray';
import { XRayFeatures } from '@/src/components/features/XRayFeatures';
import { XRayParameter } from '@/src/components/parameters/XRayParameter';

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
        <BannerXRay />
      </div>
      <div className="">
        <XRayFeatures />
      </div>
      <div className="">
        <XRayParameter />
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
