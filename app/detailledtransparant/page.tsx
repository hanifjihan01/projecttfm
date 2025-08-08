import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { LedTransparantFeatures } from '@/src/components/features/LedTransparantFeatures';
import { LedTransparantParameter } from '@/src/components/parameters/LedTransparantParameter';

import { Metadata } from 'next';
import { BannerLedTransparant } from '@/src/components/banner/bannerledtransparant';

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
        <BannerLedTransparant />
      </div>
      <div className="">
        <LedTransparantFeatures />
      </div>
      <div className="">
        <LedTransparantParameter />
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
