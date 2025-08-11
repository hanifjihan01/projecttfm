import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerHdIpCamera } from '@/src/components/banner/bannerhdipcamera';
import { CameraHdFeatures } from '@/src/components/features/CameraHdFeatures';
import { Metadata } from 'next';
import { CameraHdParameter } from '@/src/components/parameters/CameraHdParameter';

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
        <BannerHdIpCamera />
      </div>
      <div className="">
        <CameraHdFeatures />
      </div>
      <div className="">
        <CameraHdParameter />
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
