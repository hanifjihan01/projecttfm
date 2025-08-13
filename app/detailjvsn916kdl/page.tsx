import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn916KdlParameter } from '@/src/components/parameters/Jvsn916KdlParameter';
import { Jvsn916KdlFeatures } from '@/src/components/features/Jvsn916KdlFeatures';
import { Banner916Kdl } from '@/src/components/banner/banner916kdl';
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
        <Banner916Kdl />
      </div>
      <div className="">
        <Jvsn916KdlFeatures />
      </div>
      <div className="">
        <Jvsn916KdlParameter />
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
