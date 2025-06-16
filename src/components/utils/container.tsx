import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  Required<PropsWithChildren>;

export function Container({ children, className = '', ...props }: Props) {
  return (
    <div
      data-slot="container"
      className={cn(
        'h-fit px-4 mx-auto w-full max-w-2xl md:max-w-3xl xl:max-w-[69.5rem]',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
}
