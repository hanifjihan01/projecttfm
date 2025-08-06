import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSocket } from '@/src/components/banner/bannersmartsocket';
import { SmartSocketFeatures } from '@/src/components/features/SmartSocketFeatures';
import { SmartSocketParameter } from '@/src/components/parameters/SmartSocketParameter';

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
        <BannerSmartSocket />
      </div>
      <div className="">
        <SmartSocketFeatures />
      </div>
      <div className="">
        <SmartSocketParameter />
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
