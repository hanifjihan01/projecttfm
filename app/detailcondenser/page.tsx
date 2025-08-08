import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerCondenser } from '@/src/components/banner/bannercondensor';
import { CondenserFeatures } from '@/src/components/features/CondenserFeatures';
import { CondenserParameter } from '@/src/components/parameters/CondenserParameter';

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
        <BannerCondenser />
      </div>
      <div className=" ">
        <CondenserFeatures />
      </div>
      <div className=" ">
        <CondenserParameter />
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
