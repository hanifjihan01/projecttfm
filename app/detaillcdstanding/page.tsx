import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerLcdStanding } from '@/src/components/banner/bannerlcdstanding';

import { Iot2 } from '@/src/components/iot2/iot2';
import { LcdStandingFeatures } from '@/src/components/features/LcdStandingFeatures';
import { LcdStandingParameter } from '@/src/components/parameters/LcdStandingParameter';

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
        <BannerLcdStanding />
      </div>
      <div className="">
        <LcdStandingFeatures />
      </div>
      <div className="">
        <LcdStandingParameter />
      </div>

      <div className="mt-32">
        <Iot2 />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
