import { ButtonGradient } from "./ButtonGradient";

export const MobileAppCTA = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col-reverse xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div>
          <h2 className="mb-4 text-4xl lg:text-6xl font-extrabold text-aqua-700 font-neutra2">
            Create Memories with Weed Goodness
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 font-serif">
            Whether you&apos;re celebrating a birthday, watching the big game,
            or toasting the newlyweds, custom bottles make the occasion special.
          </p>
          <div className="items-center flex justify-center w-full md:justify-start">
            <ButtonGradient />
          </div>
        </div>
        <img
          className="mx-auto w-1/2 md:w-3/4 flex"
          src="/images/product-image.svg"
          alt="mobile app"
        />
      </div>
    </section>
  );
};
