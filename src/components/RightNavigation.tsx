import { MapPinIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface RightNavigationProps {
  iconSize?: string;
}

const items = [
  {
    id: "map",
    Icon: <MapPinIcon />,
  },
  {
    id: "shop",
    Icon: <ShoppingCartIcon />,
  },
];

export const RightNavigation = ({ iconSize = "h-6" }: RightNavigationProps) => {
  return (
    <div className="flex flex-1 justify-end space-x-5">
      <Link href="#" className="line">
        <MapPinIcon className="h-6" />
      </Link>
      <Link href="#" className="line">
        <ShoppingCartIcon className="h-6" />
      </Link>
    </div>
  );
};
