interface IconAppLogoProps {
  className?: string; 
  title: string;
}

const _crRect = (
  rx: number,
  y: number, 
  x: number,
  height: number, 
  width: number,
  color: string
) => (
  <rect
    ry="2"
    rx={rx}
    y={y}
    x={x}
    height={height}
    width={width}
    fill={color}
    stroke={color}
  />
);

const IconAppLogo = ({ 
  className, 
  title 
}: IconAppLogoProps) => (
  <span
     className={className}
     title={title}
  >
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      stroke-width="2"
    >
      <title>{title}</title>
      {_crRect(194, 1.5, 19, 12.5, 11, "#8ecc2d")}
      {_crRect(204.5, 17.5, 9, 13.5, 18, "#232f3b")}
      {_crRect(204.5, 3.5, 2.5, 11, 10, "#a487d4")}      
    </svg>
  </span>
);

export default IconAppLogo
