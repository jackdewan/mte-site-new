const videoUrl = "/nm.mp4";

export const HeroVideo = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-gray-800">
        <video
          className="min-w-full min-h-full absolute object-cover opacity-50"
          autoPlay
          muted
          loop
        >
          <source src={`${videoUrl}`} type="video/mp4" />
        </video>
      </div>
      <div className="video-content space-y-2">
        <h1 className="font-light text-6xl">full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
  );
};
