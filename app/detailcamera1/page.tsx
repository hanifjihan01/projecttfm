import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

import { Camera1Detail } from '@/src/components/allproductsdetail/camera1detail';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-16 ">
        <MainHeader version="1" />
      </div>

      <div className="relative z-10 md:mb-[-180px]">
        <Camera1Detail />
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
