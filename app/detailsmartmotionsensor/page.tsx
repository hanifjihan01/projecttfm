import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerSmartMotion } from '@/src/components/banner/bannersmartmotion';
import { SmartMotionFeatures } from '@/src/components/features/SmartMotionFeatures';
import { Metadata } from 'next';
import { SmartMotionParameter } from '@/src/components/parameters/SmartMotionParameter';

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
        <BannerSmartMotion />
      </div>
      <div className="">
        <SmartMotionFeatures />
      </div>
      <div className="">
        <SmartMotionParameter />
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
