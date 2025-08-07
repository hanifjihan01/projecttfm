import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSwitch3in1 } from '@/src/components/banner/bannersmartswitch3in1';
import { SmartSwitch3In1Features } from '@/src/components/features/SmartSwitch3in1Features';
import { SmartSwitch3In1Parameter } from '@/src/components/parameters/SmartSwitch3In1Parameter';

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
        <BannerSmartSwitch3in1 />
      </div>
      <div className="">
        <SmartSwitch3In1Features />
      </div>
      <div className="">
        <SmartSwitch3In1Parameter />
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
