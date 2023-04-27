import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
}

export const MobileMenuItem = ({ title }: Props) => {
  return (
    <div className="py-2 px-2 uppercase">
      <a className="flex items-center">
        <div className="mr-2">{title}</div>{" "}
        <ChevronRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
};
