import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { Banner916Mdl } from '@/src/components/banner/banner916mdl';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { Jvsn916MdlParameter } from '@/src/components/parameters/Jvsn916MdlParameter';
import { Jvsn916MdlFeatures } from '@/src/components/features/Jvsn916MdlFeatures';
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
        <Banner916Mdl />
      </div>
      <div className="">
        <Jvsn916MdlFeatures />
      </div>
      <div className="">
        <Jvsn916MdlParameter />
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
