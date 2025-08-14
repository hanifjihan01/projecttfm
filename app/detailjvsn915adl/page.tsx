import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { Banner915Adl } from '@/src/components/banner/banner915adl';
import { Jvsn915AdlFeatures } from '@/src/components/features/Jvsn915AdlFeatures';
import { Jvsn915AdlParameter } from '@/src/components/parameters/Jvsn915AdlParameter';
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
        <Banner915Adl />
      </div>
      <div className="">
        <Jvsn915AdlFeatures />
      </div>
      <div className="">
        <Jvsn915AdlParameter />
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
