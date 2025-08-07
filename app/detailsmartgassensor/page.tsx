import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';
import { BannerSmartGas } from '@/src/components/banner/bannersmartgas';
import { SmartGasFeatures } from '@/src/components/features/SmartGasFeatures';
import { SmartGasParameter } from '@/src/components/parameters/SmartGasParameter';

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
        <BannerSmartGas />
      </div>
      <div className="">
        <SmartGasFeatures />
      </div>
      <div className="">
        <SmartGasParameter />
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
