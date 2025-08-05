import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerMKios } from '@/src/components/banner/bannermkios';

import { Iot2 } from '@/src/components/iot2/iot2';
import { MKiosParameter } from '@/src/components/parameters/MKiosParameter';

import { MKiosFeatures } from '@/src/components/features/MKiosFeatures';

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
        <BannerMKios />
      </div>
      <div className="">
        <MKiosFeatures />
      </div>
      <div className="">
        <MKiosParameter />
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
