import { MobileAppCTA } from "@/components/MobileAppCTA";
import { Button } from "./Button";
import { ImageCTA } from "./ImageCTA";

interface HeroImgProps {
  url: string;
  left?: boolean;
}

export const HeroImg = ({ url, left }: HeroImgProps) => {
  return (
    <section className="relative bg-aqua-900 inline-flex whitespace-normal">
      <img
        className="object-cover w-full h-[calc(100vh - 5rem)]"
        src={url}
        alt=""
      />
      <div
        className={`absolute inset-0 md:grid md:grid-cols-2 md:gap-16 mx-auto`}
      >
        <div
          className={`h-full w-full pt-14 lg:pt-20 hidden md:flex justify-center items-center ${
            left ? "order-2" : ""
          }`}
        >
          {/* <img
            className="-rotate-12"
            src="./images/harmess-harvest-vanilla.png"
            alt=""
          /> */}
        </div>
        <div
          className={`h-full  pt-14 lg:pt-20 flex justify-start items-center px-5 md:px-10 ${
            left ? "order-1" : ""
          }`}
        >
          <div className="xl:w-3/4 text-aqua-800">
            <p className="text-orange-600 uppercase font-bold font-specialelite md:text-xl">
              Notice the eyebrow
            </p>
            <h2 className="mb-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-aqua-700 font-neutra2 leading-tight">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mb-6 font-light md:text-lg font-serif text-aqua-700">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            <div className="items-center sm:flex">
              <Button label="Lorem ipsum" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
