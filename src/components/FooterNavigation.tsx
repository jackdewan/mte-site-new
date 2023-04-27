import Link from "next/link";

const links = [
  {
    title: "Products",
    items: ["Vape", "Concentrate", "Extract", "Diamonds", "Flower", "Gummies"],
  },
  {
    title: "Learn",
    items: ["Our Story", "FAQ", "Blog", "Locator", "Merch"],
  },
  {
    title: "Support",
    items: ["Compliance", "Terms and Conditions", "Questions"],
  },
];

export const FooterNavigation = () => {
  return (
    <div className="flex space-x-6 sm:justify-between xl:space-x-16">
      {links.map((link) => (
        <div>
          <h2 className="text-xl lg:text-2xl font-neutra2 mb-2">
            {link.title}
          </h2>
          <ul className="space-y-2">
            {link.items.map((item) => (
              <li>
                <Link href="#" className="">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
