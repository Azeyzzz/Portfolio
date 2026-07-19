export type NavElements = {
  text: string;
  href: string;
  contract: string;
};
export const links: NavElements[] = [
  { text: "Home", href: "#cover-link", contract: "none" },
  { text: "About Me", href: "#about-link", contract: "none" },
  {
    text: "Experience",
    href: "#contract-nav",
    contract: "jobex",
  },
  {
    text: "Education",
    href: "#contract-nav",
    contract: "education",
  },
  {
    text: "Portfolio",
    href: "#contract-nav",
    contract: "projects",
  },
  {
    text: "Socials",
    href: "#social-link",
    contract: "none",
  },
];
