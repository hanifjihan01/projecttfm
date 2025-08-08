import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerPoe } from '@/src/components/banner/bannerpoe';
import { PoeFeatures } from '@/src/components/features/PoeFeatures';
import { PoeParameter } from '@/src/components/parameters/PoeParameter';

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
        <BannerPoe />
      </div>
      <div className="">
        <PoeFeatures />
      </div>
      <div className="">
        <PoeParameter />
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
