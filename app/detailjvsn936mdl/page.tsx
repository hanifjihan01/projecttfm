import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { Jvsn936MdlParameter } from '@/src/components/parameters/Jvsn936MdlParameter';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn936MdlFeatures } from '@/src/components/features/Jvsn936MdlFeatures';
import { Banner936Mdl } from '@/src/components/banner/banner936mdl';
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
        <Banner936Mdl />
      </div>
      <div className="">
        <Jvsn936MdlFeatures />
      </div>
      <div className="">
        <Jvsn936MdlParameter />
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
