import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerPortableSmartSocket3 } from '@/src/components/banner/bannerportablesmartsocket3';

import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';

import { PortableSmartSocket3Features } from '@/src/components/features/PortableSmartSocket3';
import { SmartSocketParameter3 } from '@/src/components/parameters/SmartSocketParameter3';

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
        <BannerPortableSmartSocket3 />
      </div>

      <div className="">
        <PortableSmartSocket3Features />
      </div>
      <div className="">
        <SmartSocketParameter3 />
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
