import React, { useMemo } from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  fullWidth?: boolean;
  dark?: boolean;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary: boolean, isDark: boolean) =>
  isDark
    ? isPrimary
      ? `bg-aqua-500 hover:bg-aqua-600 border-aqua-500 text-aqua-850`
      : `bg-pink-600 hover:bg-pink-700 hover: border-pink-600`
    : "bg-transparent border-aqua-800";

const BASE_BUTTON_CLASSES = `cursor-pointer rounded rounded-md border-2 font-bold leading-none inline-block`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  fullWidth,
  dark = false,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary, dark);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button
      type="button"
      className={`capitalize ${BASE_BUTTON_CLASSES} ${computedClasses} ${
        fullWidth && "max-sm:w-full"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
