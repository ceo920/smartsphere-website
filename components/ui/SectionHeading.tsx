import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as = 'h2',
  className
}: Props) {
  const Heading = as;
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-600">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
