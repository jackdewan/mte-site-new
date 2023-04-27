const SITE_URL = "";

export interface NavItem {
  displayName: string;
  path: string;
  subItems: { displayName: string }[];
}

export const Config = {
  site: {
    owner: "Mountaintop Extracts",
    ownerShort: "MTE",
    title: "Mountaintop Extracts",
    domain: "",
    email: "",
    feedDescription: "",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "mte",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Products",
      path: "/",
      subItems: [
        {
          displayName: "Vape",
        },
        {
          displayName: "Gummies",
        },
        {
          displayName: "Concentrate",
        },
        {
          displayName: "Diamonds",
        },
      ],
    },
    {
      displayName: "Company",
      path: "/",
      subItems: [
        {
          displayName: "Our Story",
        },
        {
          displayName: "Find Us",
        },
        {
          displayName: "FAQ",
        },
        {
          displayName: "Compliance",
        },
      ],
    },
    {
      displayName: "Learn",
      path: "/",
      subItems: [
        {
          displayName: "Education",
        },
        {
          displayName: "Learn Cannabis",
        },
        {
          displayName: "Knowledge",
        },
      ],
    },
    {
      displayName: "Merch",
      path: "/",
      subItems: [],
    },
  ],
};

export const cards = [
  {
    heading: "Concentrate",
    body: "Our concentrates have only one ingredient with a single focus. That focus is clean and concentrated for goodness",
    subHeading: "Experience the mountaintop",
    buttonLabel: "Learn More",
    bgColor: "bg-orange-500",
    mtnLine: true,
  },
  {
    heading: "Vape",
    body: "Our concentrates have only one ingredient with a single focus.",
    subHeading: "See you at the top",
    buttonLabel: "Get Buzzed",
    bgColor: "bg-aqua-500",
    mtnLine: false,
  },
  {
    heading: "Flower",
    body: "Our concentrates have only one ingredient with a single focus.",
    subHeading: "Experience the mountaintop",
    buttonLabel: "Find Out",
    bgColor: "bg-pine-500",
    mtnLine: true,
  },
  {
    heading: "Gummies",
    body: "Our concentrates have only one ingredient with a single focus.",
    subHeading: "Experience the mountaintop",
    buttonLabel: "Taste It",
    bgColor: "bg-tangerine-500",
    mtnLine: true,
  },
  {
    heading: "Diamonds",
    body: "Our concentrates have only one ingredient with a single focus.",
    subHeading: "Experience the mountaintop",
    buttonLabel: "Taste It",
    bgColor: "bg-yellow-500",
    mtnLine: true,
  },
];

export const heroImage = {
  url: "/images/nm_sunset_1.jpg",
};
