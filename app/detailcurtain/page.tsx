import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSwitchCurtain } from '@/src/components/banner/bannersmartswitchcurtain';
import { SmartSwitchCurtainFeatures } from '@/src/components/features/SmartSwitchCurtainFeatures';
import { SmartSwitchCurtainParameter } from '@/src/components/parameters/SmartSwitchCurtainParameter';

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
        <BannerSmartSwitchCurtain />
      </div>
      <div className="">
        <SmartSwitchCurtainFeatures />
      </div>
      <div className="">
        <SmartSwitchCurtainParameter />
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
