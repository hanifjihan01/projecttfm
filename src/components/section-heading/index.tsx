import { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  title,
  subtitle,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  className,
}: SectionHeadingProps) {
  const wrapperClasses = cn(
    alignment === 'start' && 'text-left',
    alignment === 'center' && 'text-center',
    alignment === 'end' && 'text-right',
    { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
    className
  );

  return (
    <div className={wrapperClasses}>
      <h2 className="text-center font-secondary text-lg font-semibold uppercase leading-tight text-white md:text-xl lg:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <span className="mt-4 mt-[.625rem] block space-y-1 text-center font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-accent-800 text-gray-500 dark:text-body md:text-md">
          {subtitle}
        </span>
      )}
      {description && (
        <p className="mt-2 whitespace-pre-line text-accent-900 dark:text-white">
          {description}
        </p>
      )}
    </div>
  );
}
