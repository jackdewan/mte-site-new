import { Container } from "./Container";
import { Typography } from "../stories/Typography";

import { SectionStory as content } from "../util/content";
import Image from "next/image";

export const SectionStory = () => {
  const { title, body, signature } = content;
  return (
    <section className="relative bg-yellow-300 text-gray-700">
      <div className="container py-32 max-w-5xl">
        <>
          <h2 className="text-center text-4xl lg:text-6xl font-neutra2 mb-5 md:mb-10 tracking-wide md:leading-normal">
            {title}
          </h2>

          <div className="pb-4 xl:pb-16 font-serif">
            <Typography className="" content={body[0]} />
            <Typography className="" content={body[1]} />
            <Typography className="" content={body[2]} />
          </div>

          <Typography h3 className="text-center" content={signature} />

          <div className="flex justify-center">
            <img className="h-20" src="/images/MTE-h-drop-logo.png" alt="" />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <img
              className="w-full"
              src="/images/zia-symbol-silhouette.svg"
              alt=""
              // fill
            />
          </div>
        </>
      </div>
    </section>
  );
};
