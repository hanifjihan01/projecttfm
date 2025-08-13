import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn917TdlFeatures } from '@/src/components/features/Jvsn917TdlFeatures';
import { Jvsn917TdlParameter } from '@/src/components/parameters/Jvsn917TdlParameter';

import { Banner917Tdl } from '@/src/components/banner/banner917tdl';
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
        <Banner917Tdl />
      </div>
      <div className="">
        <Jvsn917TdlFeatures />
      </div>
      <div className="">
        <Jvsn917TdlParameter />
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
