import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerPortableSmartSocket } from '@/src/components/banner/bannerportablesmartsocket';

import { Metadata } from 'next';
import { PortableSmartSocketFeatures } from '@/src/components/features/PortableSmartSocketFeatures';
import { PortableSmartSocketParameter } from '@/src/components/parameters/PortableSmartSocket';

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
        <BannerPortableSmartSocket />
      </div>

      <div className="">
        <PortableSmartSocketFeatures />
      </div>
      <div className="">
        <PortableSmartSocketParameter />
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
