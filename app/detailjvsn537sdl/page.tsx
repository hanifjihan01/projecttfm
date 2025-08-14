import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { Banner537Sdl } from '@/src/components/banner/banner537sdl';
import { Jvsn537SdlParameter } from '@/src/components/parameters/Jvsn537SdlParameter';
import { Jvsn537SdlFeatures } from '@/src/components/features/Jvsn537SdlFeatures';
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
        <Banner537Sdl />
      </div>
      <div className="">
        <Jvsn537SdlFeatures />
      </div>
      <div className="">
        <Jvsn537SdlParameter />
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
