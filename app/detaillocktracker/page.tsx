import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { BannerLockTracker } from '@/src/components/banner/bannerlocktracker';
import { Metadata } from 'next';
import { LockTrackerFeatures } from '@/src/components/features/LockTrackerFeatures';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';
import { LockTrackerParameter } from '@/src/components/parameters/LockTrackerParameter';

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
        <BannerLockTracker />
      </div>
      <div className="">
        <LockTrackerFeatures />
      </div>
      <div className="">
        <LockTrackerParameter />
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
