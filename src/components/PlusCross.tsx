const line = "w-6 bg-orange-500 h-1 rounded-full transition duration-500 ";

interface PlusCrossProps {
  open: boolean;
  size?: "sm" | "md" | "lg";
}
export const PlusCross = ({ open, size = "md" }: PlusCrossProps) => {
  let sizeClass;
  let strokeWidth;
  switch (size) {
    case "md":
      sizeClass = "w-5 h-5";
      strokeWidth = 4;
      break;
    case "lg":
      sizeClass = "w-8 h-8";
      strokeWidth = 4;
      break;
    default:
      break;
  }
  return (
    <div>
      <div
        className={`transition duration-500 ${
          open ? "rotate-[225deg] opacity-0" : `opacity-100`
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className={sizeClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
      {/* <div
        className={`${line} translate ${open ? "rotate-[405deg]" : ""}`}
      ></div> */}
    </div>
  );
};
