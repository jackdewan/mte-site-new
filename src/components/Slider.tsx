import { useCallback, useEffect, useState } from "react";
import { HeroContainer } from "./HeroContainer";

const data = [
  { id: 1, text: "hello", color: "bg-aqua-500" },
  { id: 2, text: "there", color: "bg-yellow-500" },
  { id: 3, text: "How", color: "bg-orange-500" },
  { id: 4, text: "Are", color: "bg-gray-500" },
];

const positiveTrans = [
  "translate-x-full",
  "translate-x-[200%]",
  "translate-x-[300%]",
  "translate-x-[400%]",
  "translate-x-[500%]",
];

const negativeTrans = [
  "-translate-x-full",
  "-translate-x-[200%]",
  "-translate-x-[300%]",
  "-translate-x-[400%]",
  "-translate-x-[500%]",
];

export const Slider = () => {
  const [active, setActive] = useState(0);
  const [on, setOn] = useState(true);

  const center = "translate-x-0";
  const left = "-translate-x-full";
  const right = "translate-x-full";

  useEffect(() => {
    if (on) {
      const timer = setTimeout(() => {
        let next;
        if (active === data.length - 1) {
          setActive(0);
        } else {
          next = active + 1;
          setActive(next);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
    return;
  }, [active]);

  function handleSlideClick(id: number) {
    setOn(false);
    setActive(id);
  }

  return (
    <HeroContainer headerBg>
      <div className="h-full w-screen">
        {data.map((slide, i) => {
          let classIndex;
          let percent;
          let slideClass;

          if (active === i) {
            slideClass = "translate-x-0";
          }
          if (active < i) {
            classIndex = i - active - 1;
            slideClass = positiveTrans[classIndex];
          }

          if (active > i) {
            classIndex = active - i - 1;
            slideClass = negativeTrans[classIndex];
          }
          // percent = 75;
          // slideClass = `translate-x-[${percent}%]`;
          // ${active < i && right}
          //   ${active > i && left}
          return (
            <div
              key={i}
              className={`absolute inset-0 w-full overflow-hidden bg-no-repeat ${slide.color} text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform slide 
            ${slideClass}
            
            `}
            >
              {slide.text}
            </div>
          );
        })}
        <div className="absolute bottom-0 lg:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-2">
          {data.map(({ id }, i) => (
            <button
              key={id}
              onClick={() => handleSlideClick(i)}
              className="p-2"
            >
              <div
                className={`h-2 w-2 rounded-full border border-gray-400 transition-all duration-500 ${
                  active === i ? "bg-white opacity-50" : "bg-gray-700"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </HeroContainer>
  );
};
