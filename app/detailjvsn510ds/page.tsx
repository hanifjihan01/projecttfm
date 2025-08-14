import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Banner510Ds } from '@/src/components/banner/banner510ds';
import { Jvsn510DsFeatures } from '@/src/components/features/Jvsn510DsFeatures';
import { Jvsn510DsParameter } from '@/src/components/parameters/Jvsn510DsParameter';
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
        <Banner510Ds />
      </div>
      <div className="">
        <Jvsn510DsFeatures />
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
