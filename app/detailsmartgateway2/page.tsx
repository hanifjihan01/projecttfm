import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartGateway2 } from '@/src/components/banner/bannersmartgateway2';
import { SmartGateway2Parameter } from '@/src/components/parameters/SmartGateway2Parameter';

import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';
import { SmartGateway2Features } from '@/src/components/features/SmartGateway2Features';

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
        <BannerSmartGateway2 />
      </div>
      <div className="">
        <SmartGateway2Features />
      </div>
      <div className="">
        <SmartGateway2Parameter />
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
