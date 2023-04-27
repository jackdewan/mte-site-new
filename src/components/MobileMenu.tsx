import { AccordionItem } from "../components/AccordionItem";
import { Config } from "../util/config";

interface MobileMenuProps {
  iconSize?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
  openKey?: string | null;
  toggle: (arg0: string) => void;
}

const plusStyles = "text-orange-500";

export const MobileMenu = ({
  iconSize = "h-6",
  isMenuOpen,
  setIsMenuOpen,
  openKey,
  toggle,
}: MobileMenuProps) => {
  return (
    <div
      className={`fixed left-0 bg-header h-full w-full z-10 transition-all ease-in duration-500 text-cream  overflow-x-scroll pb-52 lg:hidden ${
        isMenuOpen ? "top-0 mt-14 lg:mt-20" : "-top-full"
      }`}
    >
      <div className="relative top-10 w-full">
        <div className="flex flex-col space-y-5 text-[2.5rem] font-extrabold">
          {Config.menuLinks.map(({ displayName, path, subItems }) => (
            <AccordionItem
              key={displayName}
              title={displayName}
              items={subItems}
              toggle={toggle}
              open={openKey === displayName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
