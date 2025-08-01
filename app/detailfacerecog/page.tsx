import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerFaceRecog } from '@/src/components/banner/bannerfacerecog';
import { FaceRecogFeatures } from '@/src/components/features/FaceRecogFeatures';
import { FaceRecogParameters } from '@/src/components/parameters/FaceRecogParameter';

import { Metadata } from 'next';

import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

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
        <BannerFaceRecog />
      </div>

      <div className="">
        <FaceRecogFeatures />
      </div>
      <div className="">
        <FaceRecogParameters />
      </div>

      {/* <div className="relative z-10 md:mb-[-180px]">
        <FaceRecogDetail />
      </div> */}
      <div className="">
        <ArtificialIntelligent />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
