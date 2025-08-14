import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn4232SlParameter } from '@/src/components/parameters/Jvsn4232SlParameter';
import { Jvsn4232SlFeatures } from '@/src/components/features/Jvsn4232SlFeatures';

import { Banner4232Sl } from '@/src/components/banner/banner4232sl';
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
        <Banner4232Sl />
      </div>
      <div className="">
        <Jvsn4232SlFeatures />
      </div>
      <div className="">
        <Jvsn4232SlParameter />
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
