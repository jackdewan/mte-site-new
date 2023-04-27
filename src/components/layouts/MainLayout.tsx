import { Footer } from "@/stories/Footer";
import { Header } from "@/stories/Header";

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="">
      <Header />
      <div className="pt-14 lg:pt-20">{children}</div>
      <Footer />
    </div>
  );
};
