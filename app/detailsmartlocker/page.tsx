import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { SmartLockerParameter } from '@/src/components/parameters/SmartLockerParameter';

import { Metadata } from 'next';
import { BannerSmartLocker } from '@/src/components/banner/bannersmartlocker';
import { SmartLockerFeatures } from '@/src/components/features/SmartLockerFeatures';

import { Iot2 } from '@/src/components/iot2/iot2';

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
        <BannerSmartLocker />
      </div>
      <div className="">
        <SmartLockerFeatures />
      </div>
      <div className="">
        <SmartLockerParameter />
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
