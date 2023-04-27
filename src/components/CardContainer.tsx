import { MtnCard } from "@/stories/MtnCard";
import { cards } from "../util/config";

interface MtnCardWrapperProps {
  scroll?: boolean;
  dark?: boolean;
}

export const CardContainer = ({
  scroll,
  dark = false,
}: MtnCardWrapperProps) => {
  return (
    <div className="overflow-x-scroll">
      <div className="flex scroll-pl-5 lg:scroll-pl-0 snap-x lg:snap-none">
        {cards.map((card) => (
          <div
            key={card.heading}
            className="w-[80vw] sm:w-[50vw] md:w-[35vw] shrink-0 snap-start lg:snap-none mr-5 last:pr-5 first:pl-5"
          >
            <MtnCard key={card.heading} data={card} dark={dark} />
          </div>
        ))}
      </div>
    </div>
  );
};
