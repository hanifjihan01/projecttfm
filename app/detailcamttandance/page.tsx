import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerCamAttandance } from '@/src/components/banner/bannercamattandance';
import { Metadata } from 'next';
import { CamAttandanceFeatures } from '@/src/components/features/CamAttandanceFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { CamAttandanceParameter } from '@/src/components/parameters/CamAttandanceParameter';

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
        <BannerCamAttandance />
      </div>
      <div className="">
        <CamAttandanceFeatures />
      </div>
      <div className="">
        <CamAttandanceParameter />
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
