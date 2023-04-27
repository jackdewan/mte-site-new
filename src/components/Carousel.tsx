import { useEffect, useState } from "react";

import "./carousel.css";
import { HeroInnerCenter } from "./HeroInnerCenter";

import { images as data } from "../util/carousel-config";

const styles = {
  hidden: {
    display: "none",
  },
  block: {
    display: "block",
  },
};

export const Carousel = () => {
  const [active, setActive] = useState(0);
  let count = 0;
  useEffect(() => {
    setTimeout(() => {
      count++;
      let next = active + 1;
      if (next === data.length) {
        next = 0;
      }
      setActive(next);
    }, 7000);
  });
  return (
    <div>
      <section className="w-full bg-primarydark text-cream relative pt-14 lg:pt-20 overflow-hidden">
        {data.map((slide, i) => (
          <div
            key={i}
            className={`mySlides animate-right w-full h-full relative ${
              active === i ? "inline-block" : "hidden"
            }`}
          >
            <img
              className="w-full h-screen object-cover opacity-90"
              src={slide.url}
              alt=""
            />
            <HeroInnerCenter data={slide} active={active} i={i} />
            {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-1">
              {data.map((slide, i) => (
                <div
                  key={i}
                  className={`rounded-full w-8 py-1 opacity-60 border-2 ${
                    active === i
                      ? "bg-gray-100 border-gray-200"
                      : "bg-gray-700 border-gray-600"
                  }`}
                ></div>
              ))}
            </div> */}
          </div>
        ))}
      </section>
    </div>
  );
};
