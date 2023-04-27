import { Button } from "@/stories/Button";

interface HeroImgTextCenterProps {
  data: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
}

export const HeroImgTextCenter = ({ data }: HeroImgTextCenterProps) => {
  const { title, subtitle, buttonLabel } = data;
  return (
    <section className="relative bg-aqua-800">
      <div>
        <img
          className="object-cover w-screen h-[92vh] md:h-[91vh] object-bottom opacity-80"
          src="/images/high_angle_shot_mountains_simple_hand_drawn_illustrat_e7518e4c-afbe-4365-8dd9-e6957f62c24d.png"
          alt=""
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center container max-w-5xl text-yellow-50 space-y-10">
        <h2
          className="text-5xl lg:text-8xl font-neutra2 font-bold"
          style={{ WebkitTextStroke: "1px rgb(13 39 38)" }}
        >
          {title}
        </h2>
        {subtitle ? <p className="text-2xl font-aktiv">{subtitle}</p> : null}
        <Button label={buttonLabel} primary dark />
      </div>
    </section>
  );
};
