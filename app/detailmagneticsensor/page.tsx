import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerMagneticSensor } from '@/src/components/banner/bannermagneticsensor';
import { MagneticSensorFeatures } from '@/src/components/features/MagneticSensorFeatures';
import { MagneticSensorParameter } from '@/src/components/parameters/MagneticSensorParameter';

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
        <BannerMagneticSensor />
      </div>
      <div className="">
        <MagneticSensorFeatures />
      </div>
      <div className="">
        <MagneticSensorParameter />
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
