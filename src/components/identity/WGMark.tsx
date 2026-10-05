type WGMarkProps = {
  decorative?: boolean;
  size?: number;
};

export function WGMark({ decorative = false, size = 32 }: WGMarkProps) {
  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "Webghost mark"}
      fill="none"
      height={size}
      role={decorative ? undefined : "img"}
      viewBox="0 0 48 32"
      width={size * 1.5}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.5 7.2 26h4.6l4.4-13.3L20.6 26h4.6l5.2-20.5h-4.8l-3.1 14.1-4.7-14.1h-3.2l-4.7 14.1-3.1-14.1H2Z"
        fill="currentColor"
      />
      <path d="M44 6H34v20h10v-9h-4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="m31 5.5-4 20.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
