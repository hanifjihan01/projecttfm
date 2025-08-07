import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartSmoke } from '@/src/components/banner/bannersmartsmoke';
import { SmartSmokeFeatures } from '@/src/components/features/SmartSmokeFeatures';
import { Metadata } from 'next';
import { SmartSmokeParameter } from '@/src/components/parameters/SmartSmokeParameter';

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
        <BannerSmartSmoke />
      </div>

      <div className="">
        <SmartSmokeFeatures />
      </div>

      <div className="">
        <SmartSmokeParameter />
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
