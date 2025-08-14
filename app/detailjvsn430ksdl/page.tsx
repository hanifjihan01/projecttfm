import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { Banner430K } from '@/src/components/banner/banner430K';
import { Jvsn430KSdlFeatures } from '@/src/components/features/Jvsn430KSdl';
import { Jvsn430KParameter } from '@/src/components/parameters/Jvsn430KFeatures';
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
        <Banner430K />
      </div>
      <div className="">
        <Jvsn430KSdlFeatures />
      </div>
      <div className="">
        <Jvsn430KParameter />
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
