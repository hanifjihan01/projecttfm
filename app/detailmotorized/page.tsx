import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerMotorized } from '@/src/components/banner/bannermotorized';
import { MotorizedFeatures } from '@/src/components/features/MotorizedFeatures';
import { MotorizedParameter } from '@/src/components/parameters/MotorizedParameter';

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
        <BannerMotorized />
      </div>
      <div className="">
        <MotorizedFeatures />
      </div>
      <div className="">
        <MotorizedParameter />
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
