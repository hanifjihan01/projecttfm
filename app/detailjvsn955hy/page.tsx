import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn955HyFeatures } from '@/src/components/features/Jvsn955HyFeatures';

import { Jvsn510DsParameter } from '@/src/components/parameters/Jvsn510DsParameter';
import { Banner955Hy } from '@/src/components/banner/banner955hy';
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
        <Banner955Hy />
      </div>
      <div className="">
        <Jvsn955HyFeatures />
      </div>
      <div className="">
        <Jvsn510DsParameter />
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
