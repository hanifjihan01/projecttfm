import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Banner5022 } from '@/src/components/banner/banner5022';

import { Jvsn5022Features } from '@/src/components/features/Jvsn5022Features';
import { Jvsn5022Parameter } from '@/src/components/parameters/Jvsn5022Parameter';
Jvsn5022Parameter;
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
        <Banner5022 />
      </div>
      <div className="">
        <Jvsn5022Features />
      </div>
      <div className="">
        <Jvsn5022Parameter />
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
