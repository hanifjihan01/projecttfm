import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartDoorlock } from '@/src/components/banner/bannersmartdoorlock';
import { SmartDoorlockFeatures } from '@/src/components/features/SmartDoorlockFeatures';
import { SmartDoorlockParameter } from '@/src/components/parameters/SmartDoorlockParameter';

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
        <BannerSmartDoorlock />
      </div>
      <div className="">
        <SmartDoorlockFeatures />
      </div>
      <div className="">
        <SmartDoorlockParameter />
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
