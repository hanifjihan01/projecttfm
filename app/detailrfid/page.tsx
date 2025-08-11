import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerRfid } from '@/src/components/banner/bannerrfid';
import { Metadata } from 'next';
import { RfidFeatures } from '@/src/components/features/RfidFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { RfidParameter } from '@/src/components/parameters/RfidParameter';

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
        <BannerRfid />
      </div>
      <div className="">
        <RfidFeatures />
      </div>
      <div className="">
        <RfidParameter />
      </div>

      <div className="mt-32">
        <ArtificialIntelligent />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
