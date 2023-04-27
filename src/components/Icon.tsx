interface IconProps {
  iconSize?: string;
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>;
}

export const Icon = ({iconSize, Icon}: IconProps) => {
  return (
    <>
      <Icon />
    </>
  );
}