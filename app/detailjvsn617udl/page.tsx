import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn617UdlFeatures } from '@/src/components/features/Jvsn617UdlFeatures';

import { Jvsn617UdlParameter } from '@/src/components/parameters/Jvsn617UdlParameter';
import { Banner617Udl } from '@/src/components/banner/banner617udl';
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
        <Banner617Udl />
      </div>
      <div className="">
        <Jvsn617UdlFeatures />
      </div>
      <div className="">
        <Jvsn617UdlParameter />
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
