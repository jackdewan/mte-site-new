interface TypographyProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  eyebrow?: boolean;
  content?: string;
  className?: string;
}

export const Typography = ({
  h1,
  h2,
  h3,
  eyebrow,
  content,
  className,
}: TypographyProps) => {
  if (h1) {
    return (
      <h1 className={`text-4xl mb-10 font-neutra2 ${className}`}>{content}</h1>
    );
  }

  if (h2) {
    return (
      <h2
        className={`text-2xl xl:text-4xl mb-5 xl:mb-10 font-aktiv ${className}`}
      >
        {content}
      </h2>
    );
  }

  if (h3) {
    return (
      <h3 className={`text-xl xl:text-2xl mb-2 font-aktiv ${className}`}>
        {content}
      </h3>
    );
  }

  if (eyebrow) {
    return (
      <p className="font-extrabold uppercase leading-tight text-tertiary">
        {content}
      </p>
    );
  }
  return <p className={`mb-5 leading-relaxed ${className}`}>{content}</p>;
};
