import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartProjector } from '@/src/components/banner/bannersmartprojector';
import { SmartProjectorFeatures } from '@/src/components/features/SmartProjectorFeatures';
import { SmartProjectorParameter } from '@/src/components/parameters/SmartProjectorParameter';

import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';

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
        <BannerSmartProjector />
      </div>
      <div className="">
        <SmartProjectorFeatures />
      </div>
      <div className="">
        <SmartProjectorParameter />
      </div>

      <div className="mt-32">
        <Iot />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
