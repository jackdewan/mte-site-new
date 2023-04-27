import { MobileMenuItem } from "./MobileMenuItem";

interface MobileMenuItemInnerProps {
  data: { displayName: string }[];
}

export const MobileMenuItemInner = ({ data }: MobileMenuItemInnerProps) => {
  return (
    <div className="flex flex-col space-y-5 text-xl p-5 text-cream bg-[#091E1D]">
      {data.map((item) => (
        <MobileMenuItem key={item.displayName} title={item.displayName} />
      ))}
    </div>
  );
};
