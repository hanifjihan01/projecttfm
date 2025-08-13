import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Jvsn933YwcFeatures } from '@/src/components/features/Jvsn933YwcFeatures';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Banner933Ywc } from '@/src/components/banner/banner933ywc';
import { Jvsn933YwcParameter } from '@/src/components/parameters/Jvsn933YwcParameter';
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
        <Banner933Ywc />
      </div>
      <div className="">
        <Jvsn933YwcFeatures />
      </div>
      <div className="">
        <Jvsn933YwcParameter />
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
