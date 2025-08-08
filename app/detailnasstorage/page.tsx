import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerNasStorage } from '@/src/components/banner/bannernasstorage';
import { NasStorageFeatures } from '@/src/components/features/NasStorageFeatures';
import { NasStorageParameter } from '@/src/components/parameters/NasStorageParameter';

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
        <BannerNasStorage />
      </div>
      <div className="">
        <NasStorageFeatures />
      </div>
      <div className="">
        <NasStorageParameter />
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
