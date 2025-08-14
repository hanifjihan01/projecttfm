import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Banner935Adl } from '@/src/components/banner/banner935adl';
import { Jvsn935AdlFeatures } from '@/src/components/features/Jvsn935AdlFeatures';
import { Jvsn935AdlParameter } from '@/src/components/parameters/Jvsn935AdlParameter';

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
        <Banner935Adl />
      </div>
      <div className="">
        <Jvsn935AdlFeatures />
      </div>
      <div className="">
        <Jvsn935AdlParameter />
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
