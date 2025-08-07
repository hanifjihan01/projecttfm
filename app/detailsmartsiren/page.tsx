import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSiren } from '@/src/components/banner/bannersmartsiren';
import { SmartSirenFeatures } from '@/src/components/features/SmartSirenFeatures';
import { SmartSirenParameter } from '@/src/components/parameters/SmartSirenParameter';

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
        <BannerSmartSiren />
      </div>
      <div className="">
        <SmartSirenFeatures />
      </div>
      <div className="">
        <SmartSirenParameter />
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
