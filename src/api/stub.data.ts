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
                description: "email",
                href: "https://mail.proton.me",
            },
            {
                id: 3,
                text: "GitHub",
                description: "making eyes bleed",
                href: "https://github.com",
            }
        ]
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
            }
        ]
    }
];