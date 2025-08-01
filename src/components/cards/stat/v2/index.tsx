import { Counter } from '@/src/components/counter';
import { cloneElement, isValidElement, ReactElement } from 'react';

export interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  counterSuffix: string;
}

// Optional: Convert camelCase or snake_case to Title Case
function formatTitle(title: string): string {
  return title
    .replace(/[_\-]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function StatCard({ icon, title, value, counterSuffix }: StatCardProps) {
  const styledIcon =
    isValidElement(icon) && typeof icon.type !== 'string'
      ? cloneElement(icon as ReactElement<Record<string, unknown>>, {
          className:
            'text-[#4AC4F3] text-[1.875rem] group-hover:rotate-y-180 transition-all duration-500 group-hover:delay-100',
        })
      : icon;

  return (
    <div className="group flex flex-col items-center text-center">
      {/* Icon Container */}
      <span className="mb-4 inline-grid h-[40px] w-[50px] place-items-center rounded-5 bg-transparent text-[#4AC4F3]">
        {styledIcon}
      </span>

      {/* Counter with stylish shadow and moderate text size */}
      <h3 className="font-secondary text-xl font-bold leading-[1.25] md:text-2xl">
        <span className="text-[#4AC4F3] drop-shadow-[0_0_6px_rgba(74,196,243,0.8)]">
          <Counter end={value} suffix={counterSuffix} />
        </span>
        <span className="sr-only">Counter</span>
      </h3>

      {/* Title */}
      <p className="mt-1 text-sm font-medium capitalize tracking-wide text-accent-900 dark:text-accent-200">
        {formatTitle(title)}
      </p>
    </div>
  );
}
