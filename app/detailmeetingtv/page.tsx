import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerMeetingTv } from '@/src/components/banner/bannermeetingtv';
import { MeetingTvFeatures } from '@/src/components/features/MeetingTvFeatures';
import { MeetingTvParameter } from '@/src/components/parameters/MeetingTvParameter';

import { Metadata } from 'next';

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
        <BannerMeetingTv />
      </div>

      <div className="">
        <MeetingTvFeatures />
      </div>
      <div className="">
        <MeetingTvParameter />
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
