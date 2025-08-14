import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn637UdlParameter } from '@/src/components/parameters/Jvsn637UdlParameter';
import { Banner637Udl } from '@/src/components/banner/banner637udl';
import { Jvsn637UdlFeatures } from '@/src/components/features/Jvsn637UdlFeatures';
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
        <Banner637Udl />
      </div>
      <div className="">
        <Jvsn637UdlFeatures />
      </div>
      <div className="">
        <Jvsn637UdlParameter />
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
