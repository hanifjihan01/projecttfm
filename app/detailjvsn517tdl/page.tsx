import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn517TdlParameter } from '@/src/components/parameters/Jvsn517TdlParameter';
import { Banner517Tdl } from '@/src/components/banner/banner517tdl';
import { Jvsn517TdlFeatures } from '@/src/components/features/Jvsn517TdlFeatures';

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
        <Banner517Tdl />
      </div>
      <div className="">
        <Jvsn517TdlFeatures />
      </div>
      <div className="">
        <Jvsn517TdlParameter />
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
