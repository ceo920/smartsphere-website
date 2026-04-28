import { cn } from '@/lib/cn';
import type { HTMLAttributes } from 'react';

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700',
        className
      )}
      {...props}
    />
  );
}
