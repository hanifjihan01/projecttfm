import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn510YwsFeatures } from '@/src/components/features/Jvsn510YwsFeatures';
import { Banner510yws } from '@/src/components/banner/banner510yws';
import { Jvsn510YwsParameter } from '@/src/components/parameters/Jvsn510YwsParameter';

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
        <Banner510yws />
      </div>
      <div className="">
        <Jvsn510YwsFeatures />
      </div>
      <div className="">
        <Jvsn510YwsParameter />
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
