import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerPalmvein } from '@/src/components/banner/bannerpalmvein';
import { Metadata } from 'next';
import { PalmveinFeatures } from '@/src/components/features/PalmveinFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { PalmveinParameter } from '@/src/components/parameters/PalmveinParameter';

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
        <BannerPalmvein />
      </div>
      <div className="">
        <PalmveinFeatures />
      </div>
      <div className="">
        <PalmveinParameter />
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
