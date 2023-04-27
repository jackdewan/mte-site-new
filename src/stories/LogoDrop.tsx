import React, { useMemo } from "react";

interface DropLogoProps {
  className?: string;
  color?: "primary" | "secondary" | "aqualight";
}

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary": {
      return "text-primary";
    }
    case "secondary": {
      return "text-secondary";
    }
    case "aqualight": {
      return "text-aqualight";
    }
    default: {
      return "text-primary";
    }
  }
};

export const LogoDrop = ({ className, color = "primary" }: DropLogoProps) => {
  const computedClasses = useMemo(() => {
    const colorClass = getColorClasses(color);
    return [colorClass].join(" ");
  }, [color]);

  return (
    <svg
      className={`h-full w-full ${className} ${computedClasses}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 292.5 410.2"
      fill="currentColor"
    >
      <g>
        <path d="M216.9 167.2c-27-43.3-70.6-113.3-70.6-113.3S68.5 177.4 52.9 203.7 23.6 286.5 71.7 335c0 0 17-8.8 26.5-24.2s13.8-34 19-55.5 13.2-39.5 18.8-42.5c0 0-6.7-21.2 1.7-26.7 0 0 3.8 3.2 9.8 9.5 6 6.3 7.8 5.2 9.2 4.2s-.3-8.7-7-20.8c-6.3-11.6-18.2-24.6-38.8-24.8-1.1 0-4.8.4-6.7.7-3.1.5-7.4 1.1-9.2.4-2.8-1.2 8.7-8.5 32-9.2 0 0-2.8-3.5-22.5-.3 0 0-5.5-2.5 10.3-7.5s35.7 1.3 44.7 9.8c0 0 1.5 1.5 2.7 2.2s4.2 2.2 4.5 4.7 1.7 5.2 3.8 5.8c2.2.7 4.2 1 3.8 5.3-.3 4.3 4 2.3 6.7 5.8s1.2 7.2 4.7 10.5 4 5.7 4.8 9.3c.8 3.7 7.3-1.5 8.5 10.8 1.2 12.3 8.3 25 16.3 34.7s17.8 15.3 20 20.7c2.2 5.3 2.5 10.5-1.2 16.5 0 0-.5 5-5 7.7s-12 1.7-15.7.8c-3.7-.8-9.5 1.3-17.5.5s-8.5-3.2-16.2-3.7c-7.7-.5-4.7 16.5-3.5 29.3 1.2 12.8 5.5 37 13.7 47.2 0 0 61.7-25.5 64-96 .1-37.3-10-49.8-37-93z"></path>
        <path d="M197 231.2c-4-3.7-7.2-8.1-9.4-8.2s-9.3 3.7-9.3 3.7c1.3 1.1 6.4 5.9 8.8 5.8 3.5.3 9.9-1.3 9.9-1.3z"></path>
      </g>
    </svg>
  );
};
