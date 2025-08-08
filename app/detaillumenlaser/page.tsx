import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerLumenLaser } from '@/src/components/banner/bannerlumenlaser';
import { LumenLaserFeatures } from '@/src/components/features/LumenLaserFeatures';
import { LumenLaserParameter } from '@/src/components/parameters/LumenLaserParameter';

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
        <BannerLumenLaser />
      </div>
      <div className="">
        <LumenLaserFeatures />
      </div>
      <div className="">
        <LumenLaserParameter />
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
