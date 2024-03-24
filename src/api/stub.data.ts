import { DashboardGroup } from "./api.types";

export const stub: DashboardGroup[] = [
  {
    id: 1,
    text: "Common",
    links: [
      {
        id: 1,
        text: "Gmail",
        description: "Crap webmail",
        href: "https://gmail.com",
      },
      {
        id: 2,
        text: "Proton",
        description: "Better webmail",
        href: "https://mail.proton.me",
      },
      {
        id: 3,
        text: "GitHub",
        description: "Making eyes bleed",
        href: "https://github.com",
      },
      {
        id: 4,
        text: "Notion",
        description: "Note database",
        href: "https://notion.so",
      },
    ],
  },
  {
    id: 2,
    text: "News",
    links: [
      {
        id: 201,
        text: "Hacker News",
        description: "half decent news",
        href: "https://news.ycombinator.com/",
      },
      {
        id: 202,
        text: "Edx",
        description: "Icky corp that replaced opencourseware",
        href: "https://www.edx.org/",
      },
      {
        id: 202,
        text: "Current Events",
        description: "Whats going on in the world",
        href: "https://www.imdb.com/title/tt0387808/",
      },
    ],
  },
  {
    id: 3,
    text: "Nifty Projects",
    links: [
      {
        id: 301,
        text: "Leaflet Js",
        description: "Openstreetmap based interactive map",
        href: "https://leafletjs.com/",
      },
      {
        id: 302,
        text: "Sqids",
        description: "Reversible number hasher",
        href: "https://sqids.org/",
      },
      {
        id: 303,
        text: "World time buddy",
        description: "World time chart",
        href: "https://www.worldtimebuddy.com/",
      },
      {
        id: 303,
        text: "Strudel",
        description: "Coding is an instrument",
        href: "https://strudel.cc/",
      },
    ],
  },
];
