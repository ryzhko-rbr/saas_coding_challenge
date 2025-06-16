import { SVGProps } from 'react';

export function IconArrows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <path
        d="M13.3333 12.5L10 15.8333L6.66667 12.5M6.66667 7.5L10 4.16666L13.3333 7.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
