import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartGateway4 } from '@/src/components/banner/BannerSmartGateway4';
import { SmartGateway4Features } from '@/src/components/features/SmartGateway4Features';
import { SmartGateway4Parameter } from '@/src/components/parameters/SmartGateway4Parameter';

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
        <BannerSmartGateway4 />
      </div>
      <div className="">
        <SmartGateway4Features />
      </div>
      <div className="">
        <SmartGateway4Parameter />
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
