import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Legacy Roleplay Bangladesh",
      url: "/",
    },
    githubUrl: "https://github.com/siyamhosan/public-docs",
    links: [
      {
        text: "Discord",
        url: "https://discord.gg/N65kDSV",
      },
    ],
  };
}
