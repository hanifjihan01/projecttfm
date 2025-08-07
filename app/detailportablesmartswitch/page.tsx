import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';

import { SmartSwitchPortableParameter } from '@/src/components/parameters/SmartSwitchPortableParameter';

import { BannerSmartSwitchPortable } from '@/src/components/banner/bannerportablesmartswitch';
import { SmartSwitchPortableFeatures } from '@/src/components/features/PortableSmartSwitchFeatures';

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
        <BannerSmartSwitchPortable />
      </div>
      <div className="">
        <SmartSwitchPortableFeatures />
      </div>
      <div className="">
        <SmartSwitchPortableParameter />
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
