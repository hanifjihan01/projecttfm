import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerSmartVending } from '@/src/components/banner/bannersmartvending';

import { Iot2 } from '@/src/components/iot2/iot2';
import { SmartVendingMachineFeatures } from '@/src/components/features/SmartVendingMachineFeatures';

import { SmartVendingParameter } from '@/src/components/parameters/SmartVendingParameter';

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
        <BannerSmartVending />
      </div>
      <div className="">
        <SmartVendingMachineFeatures />
      </div>
      <div className="">
        <SmartVendingParameter />
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
