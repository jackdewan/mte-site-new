import { Button } from "@/stories/Button";

interface ImageCTAProps {
  left?: boolean;
}

export const Image = () => {
  return (
    <img
      className="hidden mx-auto w-full md:flex border-2 border-gray-500"
      src="https://via.placeholder.com/500x600"
      alt="mobile app"
    />
  );
};

export const Text = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet
      </h2>
      <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 font-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="items-center sm:flex">
        <Button label="Learn More" />
      </div>
    </div>
  );
};

export const ImageCTA = ({ left }: ImageCTAProps) => {
  return (
    <section className="dark:bg-gray-900 py-16">
      <div className="gap-8 items-center container xl:gap-32 md:grid md:grid-cols-2 py-16">
        {left ? (
          <>
            <div className="w-3/4">
              <Image />
            </div>
            <Text />
          </>
        ) : (
          <>
            <Text />
            <div className="w-3/4">
              <Image />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
