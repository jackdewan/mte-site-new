import { useState, useRef } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlusCross } from "./PlusCross";
import { MobileMenuItemInner } from "./MobileMenuItemInner";

interface Props {
  title: string;
  titleClass?: string;
  items: { displayName: string }[];
  toggle: (arg0: string) => void;
  open: boolean;
  children?: JSX.Element;
}

export const AccordionItem = ({
  title,
  titleClass,
  items,
  toggle,
  open,
  children,
}: Props) => {
  // const [open, setOpen] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  let panelHeight = 0;

  if (elRef.current !== null) {
    panelHeight = elRef.current.scrollHeight;
  }

  panelHeight = panelHeight / 16;
  panelHeight.toString();
  const heightStr = panelHeight + "rem";

  const styles = {
    maxHeight: {
      maxHeight: open ? heightStr : 0,
    },
  };

  const hasItems = items.length;

  return (
    <div className={`w-full ${open ? "" : ""}`}>
      <div
        className={`transition duration-400 border-b-2 
        ${open ? "border-aqua-700" : "border-aqua-800"}
          `}
      >
        <div className={`w-full px-8 py-2`}>
          {hasItems ? (
            <button
              className={`flex items-center w-full`}
              onClick={() => toggle(title)}
            >
              <div className="mr-5 uppercase">{title}</div>
              <div className={`${open ? "" : "text-tertiary"}`}>
                <PlusCross size="lg" open={open} />
              </div>
            </button>
          ) : (
            <div className="mr-5 uppercase">{title}</div>
          )}
        </div>
      </div>
      <div
        className={`transition-[max-height] ease-in-out duration-200 overflow-hidden maxHeight`}
        style={styles.maxHeight}
      >
        <div className="" ref={elRef}>
          <MobileMenuItemInner data={items} />
        </div>
      </div>
    </div>
  );
};
