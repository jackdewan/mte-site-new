import { NewsletterFooter } from "@/components/NewsletterFooter";
import { MountainLineFooter } from "./assets/mtn_line_footer_1";
import { MountainLineFooterSmall } from "./assets/mtn_line_footer_sm_1";
import { LogoCircle } from "./LogoCircle";
import { FooterNavigation } from "@/components/FooterNavigation";

export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="text-aqua-800">
        <div className="hidden sm:block">
          <MountainLineFooter />
        </div>
        <div className="sm:hidden -mb-2">
          <MountainLineFooterSmall />
        </div>
      </div>
      <div className="pb-12 xl:pb-16 bg-aqua-800">
        <div className="container">
          <div className="">
            <div className="mb-8 xl:mb-12">
              <LogoCircle secondary />
            </div>
            <div
              className="lg:flex lg:flex-row-reverse lg:justify-between w-full
            "
            >
              <div className="mb-12 lg:-mt-10 xl:-mt-16">
                <NewsletterFooter />
              </div>
              <div>
                <FooterNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
