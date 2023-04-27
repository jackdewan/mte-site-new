import { ArchiveBox } from "../../public/images/archiveBox";
import { MtnLineSVG } from "../../public/images/MtnLineSVG";
import { Button } from "./Button";

interface MtnCardProps {
  data: {
    heading: string;
    body: string;
    subHeading: string;
    buttonLabel: string;
    bgColor?:
      | "bg-aqua-600"
      | "bg-pine-600"
      | "bg-orange-600"
      | "bg-yellow-600"
      | "bg-tangerine-600"
      | string;
    mtnLine?: boolean;
  };
  scroll?: boolean;
  dark?: boolean;
}

export const MtnCard = ({ data, scroll, dark = false }: MtnCardProps) => {
  const {
    heading,
    body,
    subHeading,
    buttonLabel,
    bgColor = "bg-aqua-600",
    mtnLine,
  } = data;

  const textColor = dark ? "text-aqua-800" : "text-cream";
  return (
    <div
      className={`${bgColor} rounded-xl p-5 lg:p-10 ${textColor} relative ${
        scroll ? "space-y-5 lg:space-y-10" : "space-y-3 lg:space-y-5"
      }  h-full max-w-screen-md`}
    >
      <div className="">
        <h2 className="font-neutra2 text-2xl lg:text-3xl xl:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="">
        <p className="text-xl lg:text-2xl lg:pr-5">{body}</p>
      </div>
      <div className="">
        <p className="text-lg font-bold">{subHeading}</p>
      </div>
      <div className="pb-10 lg:pb-0">
        <Button label={buttonLabel} dark={dark} />
      </div>
      {mtnLine ? (
        <div className="absolute -bottom-0 lg:-bottom-1 -right-1 w-[90%] lg:w-3/4">
          <MtnLineSVG />
        </div>
      ) : (
        <>
          <div className="absolute -bottom-5 right-12">
            <img className="" src="./images/mtn-simple-icon.svg" alt="" />
          </div>
          <div className="absolute -bottom-2 right-0">
            <img className="" src="./images/mtn-simple-icon.svg" alt="" />
          </div>
        </>
      )}
    </div>
  );
};
