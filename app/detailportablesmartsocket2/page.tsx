import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerPortableSmartSocket2 } from '@/src/components/banner/bannerportablesmartsocket2';
import { PortableSmartSocket2Features } from '@/src/components/features/PortableSmartSocket2';
import { SmartSocketParameter2 } from '@/src/components/parameters/SmartSocketParameter2';

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
        <BannerPortableSmartSocket2 />
      </div>
      <div className="">
        <PortableSmartSocket2Features />
      </div>
      <div className="">
        <SmartSocketParameter2 />
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
