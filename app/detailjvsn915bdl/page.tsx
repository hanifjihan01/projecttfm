import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { Jvsn915BdlFeatures } from '@/src/components/features/Jvsn915BdlFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn915BdlParameter } from '@/src/components/parameters/Jvsn915BdlParameter';
import { Banner915Bdl } from '@/src/components/banner/banner915bdl';
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
        <Banner915Bdl />
      </div>
      <div className="">
        <Jvsn915BdlFeatures />
      </div>
      <div className="">
        <Jvsn915BdlParameter />
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
