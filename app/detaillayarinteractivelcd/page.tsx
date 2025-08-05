import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';

import { Iot2 } from '@/src/components/iot2/iot2';
import { BannerInteractiveLcd } from '@/src/components/banner/bannerinteractivelcd';
import { InteractiveFeatures } from '@/src/components/features/InteractiveFeatures';
import { InteractiveParameter } from '@/src/components/parameters/InteractiveParameter';

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
        <BannerInteractiveLcd />
      </div>

      <div className="">
        <InteractiveFeatures />
      </div>
      <div className="">
        <InteractiveParameter />
      </div>

      <div className="mt-32">
        <Iot2 />
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
