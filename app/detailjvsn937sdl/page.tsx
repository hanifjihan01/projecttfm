import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn937SdlParameter } from '@/src/components/parameters/Jvsn937sdlParameter';

import { Banner937Sdl } from '@/src/components/banner/banner937sdl';
import { Jvsn937SdlFeatures } from '@/src/components/features/Jvns937SdlFeatures';
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
        <Banner937Sdl />
      </div>
      <div className="">
        <Jvsn937SdlFeatures />
      </div>
      <div className="">
        <Jvsn937SdlParameter />
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
