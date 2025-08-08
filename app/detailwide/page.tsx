import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerWideAngle } from '@/src/components/banner/bannerwideangle';
import { WideAngleFeatures } from '@/src/components/features/WideAngleFeatures';
import { WideAngleParameter } from '@/src/components/parameters/WideAngleParameter';

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
      <div className=" ">
        <BannerWideAngle />
      </div>
      <div className=" ">
        <WideAngleFeatures />
      </div>
      <div className=" ">
        <WideAngleParameter />
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
