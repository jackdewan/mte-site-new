import { useMemo } from "react";

interface LogoCircleProps {
  secondary?: boolean;
  size?: "sm" | "md" | "lg";
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "sm": {
      return "h-8 w-8";
    }
    case "lg": {
      return "h-20 w-20";
    }
    default: {
      return "h-16 w-16";
    }
  }
};

export const LogoCircle = ({ secondary, size = "md" }: LogoCircleProps) => {
  const computedClasses = useMemo(() => {
    // const modeClass = getModeClasses(primary, dark);
    const sizeClass = getSizeClasses(size);

    return [sizeClass].join(" ");
  }, [size]);
  let imageUrl = secondary ? "/images/mte2.png" : "/images/mte.png";

  return <img className="h-20 w-20" src={`${imageUrl}`} alt="logo" />;
};
