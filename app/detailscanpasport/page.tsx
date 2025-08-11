import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerScanPasport } from '@/src/components/banner/bannerscanpasport';

import { Metadata } from 'next';
import { ScanPasportFeatures } from '@/src/components/features/ScanPasportFeatures';
import { ScanPasportParameter } from '@/src/components/parameters/ScanPasportParameter';

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
        <BannerScanPasport />
      </div>
      <div className="">
        <ScanPasportFeatures />
      </div>
      <div className="">
        <ScanPasportParameter />
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
