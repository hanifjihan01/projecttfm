'use client';

import { StatCard, StatCardProps } from 'src/components/cards/stat/v2';
import { statisticsSectionData } from '@/data/statistics-section/v2';
import { cn } from '@/src/utils/shadcn';
import { SectionProps } from '@/src/common-types';

export interface StatisticsSectionProps {
  statistics: StatCardProps[];
}

export function StatisticsSection({ className }: SectionProps) {
  const { statistics } = statisticsSectionData;

  return (
    <section className={cn(className)}>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1480px] px-4 md:px-12 lg:px-24">
          {statistics && statistics.length > 0 && (
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-white">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {statistics.map((stat, index) => (
                  <div key={index}>
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
