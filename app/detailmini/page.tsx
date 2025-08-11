import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerMini } from '@/src/components/banner/bannermini';
import { Metadata } from 'next';
import { MiniFeatures } from '@/src/components/features/MiniFeatures';
import { MiniParameter } from '@/src/components/parameters/MiniParameter';
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
        <BannerMini />
      </div>
      <div className="">
        <MiniFeatures />
      </div>
      <div className="">
        <MiniParameter />
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
