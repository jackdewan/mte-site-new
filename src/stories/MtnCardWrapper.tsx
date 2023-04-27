import { MtnCard } from "./MtnCard";
import { cards } from "../util/config";

interface MtnCardWrapperProps {
  scroll?: boolean;
  dark?: boolean;
}

export const MtnCardWrapper = ({
  scroll,
  dark = false,
}: MtnCardWrapperProps) => {
  return (
    <section
      className={`${scroll ? "py-28" : "py-16"} lg:py-28 ${
        dark ? "bg-aqua-800" : "bg-orange-50"
      } overflow-auto`}
    >
      <div className="mb-16 lg:mb-28 flex flex-col items-center">
        <img src="./images/mtn-heading.svg" alt="" />
        <h2
          className={`font-aktiv text-5xl lg:text-6xl px-10 ${
            dark ? "text-orange-50" : "text-aqua-800"
          } text-center`}
        >
          How Do You Buzz?
        </h2>
      </div>
      {scroll ? (
        <div className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x gap-8 px-2 h-full">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="w-[calc(100vw-5rem)] md:w-1/3 lg:w-[2/5] shrink-0 snap-start first:ml-20 lg:first:ml-10 py-6"
            >
              <MtnCard
                key={card.heading}
                data={card}
                scroll={scroll}
                dark={dark}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 xl:gap-10 container">
          {cards.map((card) => (
            <MtnCard key={card.heading} data={card} dark={dark} />
          ))}
        </div>
      )}
    </section>
  );
};
