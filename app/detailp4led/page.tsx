import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerP4Led } from '@/src/components/banner/bannerp4led';
import { P4LedFeatures } from '@/src/components/features/P4LedFeatures';
import { P4LedParameter } from '@/src/components/parameters/P4LedParameter';
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
        <BannerP4Led />
      </div>
      <div className="">
        <P4LedFeatures />
      </div>
      <div className="">
        <P4LedParameter />
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
