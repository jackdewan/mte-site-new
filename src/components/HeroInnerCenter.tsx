import "./carousel.css";
import { Typography } from "../stories/Typography";

interface Props {
  data: {
    id: number;
    url: string;
    heading: string;
    subHeading: string;
    body: string;
  };
  active?: number;
  i?: number;
}

export const HeroInnerCenter = ({ data }: Props) => {
  const { id, url, heading, subHeading, body } = data;
  return (
    <div className="absolute inset-0 w-screen px-8 max-w-xl text-cream flex justify-center">
      <div>
        <Typography eyebrow content="We are Cannabis" />
        <h1 className={`text-6xl lg:text-8xl mb-4 font-neutra2 opacity-80`}>
          <div className="first-text-animate-right">Live Well.</div>{" "}
          <div className="ml-8 lg:ml-16 second-text-animate-right">
            Live True.
          </div>
        </h1>
        <h2 className="text-lg lg:text-5xl mb-2 font-bold">
          Cannabis crafted in the mountains
        </h2>
        <p className="lg:text-2xl">
          We care deeply about our products. We would love to show you more!
        </p>
      </div>
    </div>
  );
};
