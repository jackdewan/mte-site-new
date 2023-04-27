import { HeroInner } from "../components/HeroInner";

interface HeroProps {
  headerBg?: boolean;
  tint?: boolean;
  img?: { url: string };
  video?: boolean;
}

export const Hero = ({ headerBg, tint, img, video }: HeroProps) => {
  return (
    <div
      className={`h-screen ${tint && "bg-orange-800"} ${
        headerBg && "pt-14 lg:pt-20"
      }`}
    >
      <div className="relative w-full h-full">
        {img && (
          <img
            className={`${
              tint && "opacity-60"
            } object-cover w-full h-full object-center`}
            src={img.url}
            alt="banner"
          />
        )}
        {/* {video && <HeroVideo />} */}
        {/* <div className="text-white absolute top-1/4 left-1/2 transform -translate-x-3/4 translate-y-3/4">
          <HeroText />
        </div> */}
        <div className="absolute top-0 flex h-full w-full">
          <HeroInner />
        </div>
      </div>
    </div>
  );
};
