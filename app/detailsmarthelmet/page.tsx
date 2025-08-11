import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerHelmet } from '@/src/components/banner/bannerhelmet';
import { Metadata } from 'next';
import { HelmetFeatures } from '@/src/components/features/HelmetFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { HelmetParameter } from '@/src/components/parameters/HelmetParameter';

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
        <BannerHelmet />
      </div>
      <div className="">
        <HelmetFeatures />
      </div>
      <div className="">
        <HelmetParameter />
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
