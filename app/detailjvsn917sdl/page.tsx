import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn917SdlFeatures } from '@/src/components/features/Jvsn917SdlFeatures';
import { Banner917Sdl } from '@/src/components/banner/banner917sdl';

import { Jvsn917SdlParameter } from '@/src/components/parameters/Jvsn917SdlParameter';
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
        <Banner917Sdl />
      </div>
      <div className="">
        <Jvsn917SdlFeatures />
      </div>
      <div className="">
        <Jvsn917SdlParameter />
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
