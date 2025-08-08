import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerSmartGateway3 } from '@/src/components/banner/bannersmartgateway3';
import { SmartGateway3Features } from '@/src/components/features/SmartGateway3Features';
import { SmartGateway3Parameter } from '@/src/components/parameters/SmartGateway3Parameter';

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
        <BannerSmartGateway3 />
      </div>
      <div className="">
        <SmartGateway3Features />
      </div>
      <div className="">
        <SmartGateway3Parameter />
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
