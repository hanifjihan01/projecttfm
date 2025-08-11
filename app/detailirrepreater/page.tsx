import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerIrRepreator } from '@/src/components/banner/bannerirrepreater';
import { Metadata } from 'next';
import { IrRepreatorFeatures } from '@/src/components/features/IrRepreator';
import { Iot } from '@/src/components/iot/Iot';
import { IrRepreatorParameter } from '@/src/components/parameters/IrRepreatorParameter';

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
        <BannerIrRepreator />
      </div>
      <div className="">
        <IrRepreatorFeatures />
      </div>
      <div className="">
        <IrRepreatorParameter />
      </div>

      <div className="mt-32">
        <Iot />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
