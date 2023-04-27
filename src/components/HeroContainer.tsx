interface HeroContainerProps {
  headerBg?: boolean;
  children?: JSX.Element;
}

export const HeroContainer = ({ headerBg, children }: HeroContainerProps) => {
  return (
    <section className={`h-screen ${headerBg && "pt-14 lg:pt-20"}`}>
      {children}
    </section>
  );
};
