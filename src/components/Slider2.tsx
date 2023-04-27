import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const data = [
  {
    id: "1",
    color: "bg-aqua-500",
  },
  {
    id: "2",

    color: "bg-yellow-500",
  },
  {
    id: "3",
    color: "bg-orange-500",
  },
  {
    id: "4",
    color: "bg-tangerine-500",
  },
  {
    id: "5",
    color: "bg-gray-500",
  },
];

const transform = [
  "-translate-x-0",
  "-translate-x-full",
  "-translate-x-[200%]",
  "-translate-x-[300%]",
  "-translate-x-[400%]",
  "-translate-x-[500%]",
];

export const Slider2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 4000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = data.length - 1;
    }
    if (newIndex >= data.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <section className="overflow-hidden">
      <div
        className={`flex w-full h-screen overflow-x-auto scroll-smooth snap-x snap-mandatory transition duration-300 touch-pan-x`}
      >
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`h-screen w-full flex justify-center items-center ${item.color} shrink-0 snap-center inline-flex`}
          >
            {item.id}
          </div>
        ))}
      </div>
    </section>
  );
};
