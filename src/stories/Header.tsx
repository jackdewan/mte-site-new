import { useState, useEffect, useMemo } from "react";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { MobileMenu } from "../components/MobileMenu";
import { Hamburger8 } from "./Hamburger8";
import { PlusCross } from "../components/PlusCross";
import Image from "next/image";
import Link from "next/link";
import { Config } from "../util/config";
import { Navigation } from "@/components/Navigation";
import { RightNavigation } from "@/components/RightNavigation";

interface HeaderProps {
  backgroundColor?: string;
  logo?: string;
  fontFace?: "NEUTRA2" | "Aktiv";
}

const logo1 = "/images/mte.png";
const logo2 = "/images/mte2.png";

export const Header = ({
  backgroundColor = "bg-aqua-800",
  logo = logo1,
  fontFace = "NEUTRA2",
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [openKey, setOpenKey] = useState<string | null>();
  const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : null);
  };

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      // setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    setTimeout(() => {
      window.addEventListener("scroll", onScroll);
    }, 1e3);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const iconSize = "h-6";

  return (
    <header className="relative z-10">
      <div
        className={`${backgroundColor} text-tangerine-50 fixed top-0 w-full z-20 transition-all border-b border-aqua-800`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <div className="flex flex-1">
              <div className="lg:hidden">
                <button
                  className="flex items-center"
                  type="button"
                  onClick={() => {
                    setTimeout(() => {
                      setOpenKey(null);
                    }, 500);
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <Hamburger8 open={isMenuOpen} />
                </button>
              </div>
              <div className="hidden lg:block">
                <Navigation
                  links={Config.menuLinks}
                  fontFace={fontFace}
                  megaMenuOpen={megaMenuOpen}
                  setMegaMenuOpen={setMegaMenuOpen}
                />
              </div>
            </div>
            <div
              className={`flex absolute top-1/2 left-1/2 transform -translate-x-1/2 transition ease-in-out duration-200 z-50 ${
                scrolling
                  ? "-translate-y-[2.2rem] scale-75 lg:-translate-y-[2.8rem]"
                  : "-translate-y-1/4"
              } `}
            >
              <Link href="/" className="p-1.5">
                <span className="sr-only">{}</span>

                <Image
                  className={`${
                    isMenuOpen ? "opacity-0 h-0 w-0" : "opacity-100 h-20 w-20"
                  } lg:h-24 lg:w-24 transition-all duration-300`}
                  width="100"
                  height="100"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <RightNavigation iconSize={iconSize} />
          </div>
        </div>
      </div>
      <MobileMenu
        iconSize={iconSize}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openKey={openKey}
        toggle={handleToggle}
      />
    </header>
  );
};
