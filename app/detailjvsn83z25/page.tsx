import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { Jvsn83z25Features } from '@/src/components/features/Jvsn83z25Features';
import { Jvsn83z25Parameter } from '@/src/components/parameters/Jvsn83z25Parameter';

import { BannerJvsn83z25 } from '@/src/components/banner/bannerjvsn83z25';
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
        <BannerJvsn83z25 />
      </div>
      <div className="">
        <Jvsn83z25Features />
      </div>
      <div className="">
        <Jvsn83z25Parameter />
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
