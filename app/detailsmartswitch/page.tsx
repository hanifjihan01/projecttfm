import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSwitch } from '@/src/components/banner/bannersmartswitch';
import { SmartSwitchFeatures } from '@/src/components/features/SmartSwitchFeatures';
import { SmartSwitchParameter } from '@/src/components/parameters/SmartSwitchParameter';

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
        <BannerSmartSwitch />
      </div>
      <div className="">
        <SmartSwitchFeatures />
      </div>

      <div className="">
        <SmartSwitchParameter />
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
