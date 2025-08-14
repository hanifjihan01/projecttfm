import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn410KParameter } from '@/src/components/parameters/Jvsn410KFeatures';

import { Banner410K } from '@/src/components/banner/banner410k';
import { Jvsn410KSdlFeatures } from '@/src/components/features/Jvsn410KSdl';
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
        <Banner410K />
      </div>
      <div className="">
        <Jvsn410KSdlFeatures />
      </div>
      <div className="">
        <Jvsn410KParameter />
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
