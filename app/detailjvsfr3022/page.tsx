import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { BannerJvsFr3022 } from '@/src/components/banner/bannerjvsfr3022';
import { Jvsfr3022Features } from '@/src/components/features/Jvsfr3022Features';
import { Jvsfr3022Parameter } from '@/src/components/parameters/Jvsfr3022Parameter';
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
        <BannerJvsFr3022 />
      </div>
      <div className="">
        <Jvsfr3022Features />
      </div>
      <div className="">
        <Jvsfr3022Parameter />
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
