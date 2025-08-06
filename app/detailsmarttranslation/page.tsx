import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { BannerSmartTranslation } from '@/src/components/banner/bannersmarttranslation';
import { SmartTranslationFeatures } from '@/src/components/features/SmartTranslationFeatures';
import { SmartTranslationParameter } from '@/src/components/parameters/SmartTranslation';

import { Iot } from '@/src/components/iot/Iot';

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
        <BannerSmartTranslation />
      </div>

      <div className="">
        <SmartTranslationFeatures />
      </div>
      <div className="">
        <SmartTranslationParameter />
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
