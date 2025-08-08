import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerScannerRfid } from '@/src/components/banner/bannerscannerrfid';
import { ScannerRfidFeatures } from '@/src/components/features/ScannerRfidFeatures';
import { ScannerRfidParameter } from '@/src/components/parameters/ScannerRfidParameter';

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
        <BannerScannerRfid />
      </div>
      <div className="">
        <ScannerRfidFeatures />
      </div>
      <div className="">
        <ScannerRfidParameter />
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
