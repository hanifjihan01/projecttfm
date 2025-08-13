import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Banner917Ydl } from '@/src/components/banner/banner917ydl';
import { Jvsn917YdlFeatures } from '@/src/components/features/Jvsn917YdlFeatures';
import { Jvsn917YdlParameter } from '@/src/components/parameters/Jvsn917YdlParameter';

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
        <Banner917Ydl />
      </div>
      <div className="">
        <Jvsn917YdlFeatures />
      </div>
      <div className="">
        <Jvsn917YdlParameter />
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
