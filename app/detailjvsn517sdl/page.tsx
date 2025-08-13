import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn517SdlFeatures } from '@/src/components/features/Jvsn517SdlFeatures';
import { Banner517Sdl } from '@/src/components/banner/banner517sdl';

import { Jvsn517SdlParameter } from '@/src/components/parameters/Jvsn517SdlParameter';
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
        <Banner517Sdl />
      </div>
      <div className="">
        <Jvsn517SdlFeatures />
      </div>
      <div className="">
        <Jvsn517SdlParameter />
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
