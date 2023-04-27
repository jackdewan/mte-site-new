import { Config, NavItem } from "@/util/config";
import Link from "next/link";
import { PlusCross } from "./PlusCross";
import { useMemo, useState } from "react";

interface NavigationProps {
  links: NavItem[];
  fontFace: "NEUTRA2" | "Aktiv";
  megaMenuOpen: boolean;
  setMegaMenuOpen: (_arg0: boolean) => void;
}

const getFontClasses = (fontFace: string) => {
  switch (fontFace) {
    case "NEUTRA2": {
      return "font-neutra2";
    }
    case "Aktiv": {
      return "font-aktiv";
    }
    default: {
      return "font-neutra2";
    }
  }
};

const duration = [
  "duration-150",
  "duration-200",
  "duration-300",
  "duration-400",
  "duration-500",
  "duration-[600ms]",
  "duration-[700ms]",
  "duration-[800ms]",
];

export const Navigation = ({
  links,
  fontFace,
  megaMenuOpen,
  setMegaMenuOpen,
}: NavigationProps) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number>(0);
  const computedClasses = useMemo(() => {
    const fontClass = getFontClasses(fontFace);

    return [fontClass].join(" ");
  }, [fontFace]);
  return (
    <div>
      <div className="">
        <nav
          role="Primary Navigation"
          className=""
          // className={`flex space-x-6 ${computedClasses} tracking-widest text-xl`}
          // onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <ul
            className={`flex space-x-6 ${computedClasses} tracking-widest text-xl`}
          >
            {links.map((link, i) => {
              if (link.displayName !== "Merch") {
                return (
                  <li className="group" key={link.displayName}>
                    <Link
                      href="/OurStory"
                      key={link.displayName}
                      className="flex items-center space-x-1 uppercase py-8"
                      onMouseEnter={() => {
                        setActiveSubMenu(i);
                        setMegaMenuOpen(true);
                      }}
                    >
                      <span
                        className={`transition duration-200 ${
                          megaMenuOpen && activeSubMenu === i
                            ? "text-yellow-200"
                            : ""
                        }`}
                      >
                        {link.displayName}
                      </span>
                      <span className={`text-orange-500 `}>
                        <PlusCross
                          open={megaMenuOpen && activeSubMenu === i}
                          size="md"
                        />
                      </span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        {/* <div
          className={`bg-gray-500/60  w-screen h-screen absolute z-10 left-0 -top-[70rem] transition duration-100 ${
            megaMenuOpen ? "translate-y-[40rem]" : ""
          }`}
        ></div> */}

        <div
          className={`bg-cream  w-screen absolute top-20 left-0 z-10
        ${megaMenuOpen ? "h-[30vh]" : "h-0"}
        transition-all duration-200 ease-in overflow-hidden`}
          onMouseEnter={() =>
            megaMenuOpen ? setMegaMenuOpen(true) : setMegaMenuOpen(false)
          }
          onMouseLeave={() => setMegaMenuOpen(false)}
          onScroll={() => setMegaMenuOpen(false)}
        >
          <div className="container py-8">
            <ul className="text-2xl text-aqua-800 space-y-5">
              {Config.menuLinks[activeSubMenu].subItems.map((link, i) => (
                <li key={link.displayName} className="">
                  <Link href="#">{link.displayName}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
