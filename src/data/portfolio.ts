// Type Constructors for data
export type NavElements = {
  text: string;
  href: string;
};
export type Education = {
  school: string;
  location: string;
  degree: string;
  gpa?: number;
  start_date: string;
  end_date?: string; // can be null to set to current or set to future
  info: string;
  photo?: string;
};
export type Project = {
  id: string;
  title: string;
  date_created: string;
  date_updated: string;
  photo: string;
  link: string;
  description: string;
  website?: string;
};

export type JobEx = {
  id: number;
  title: string;
  company: string;
  location: string;
  job_start: string;
  job_end: string; // if not current
  description: string;
  skills: string;
  logo: string;
};

export type award_cert = {
  name: string;
  awarder: string;
  date: string;
};
export type Social = {
  name: string;
  logo: string;
  link: string;
};
// --------------------------------------------------------------
//  Actual Data
export const meta = {
  name: "Zaeya DeBenedetti",
  pronouns: "she/her",
  location: "Charlotte, NC",
  intro: "hi",
};
export const awards = {};
export const socials = {};
export const links: NavElements[] = [
  { text: "Home", href: "#cover-link" },
  { text: "About Me", href: "#about-link" },
  { text: "Experience", href: "#exp-link" },
  { text: "Education", href: "#edu-link" },
  { text: "Portfolio", href: "#port-link" },
  { text: "Socials", href: "#social-link" },
];
export const projects: Project[] = [
  {
    id: "p1",
    title: "Old Portfolio",
    date_created: "Nov 2025",
    date_updated: "June 2026",
    photo: "photo",
    link: "https://github.com/Azeyzzz/Zaeya-Portfolio",
    description: "short description",
    website: "https://zaeyadebenedetti.com/",
  },
  {
    id: "p2",
    title: "To_DayDashboard",
    date_created: "June 2026",
    date_updated: "June 2026",
    photo: "photo",
    link: "https://github.com/Azeyzzz/to_day-dashoard",
    description: "short description",
    website: "https://today.zaeyadebenedetti.com/",
  },
  {
    id: "p3",
    title: "Course Project: Portfolio for Melanie",
    date_created: "Jan 2025",
    date_updated: "Nov 2025",
    photo: "photo",
    link: "https://github.com/Azeyzzz/Zaeya-New-Portfolio",
    description: "short description",
    website:
      "https://webpages.charlotte.edu/ddebene1/Melanie-Portfolio/home.html",
  },
];
export const education: Education[] = [
  {
    school: "University of North Carolina at Charlote",
    location: "Charlotte",
    degree: "Computer Science B.S.",
    gpa: 3.87,
    start_date: "Aug 2023",
    end_date: "May 2027",
    info: "info here",
  },
  {
    school: "University of North Carolina at Charlote",
    location: "Charlotte",
    degree: "MS Cybersecurity",
    gpa: 0,
    start_date: "Aug 2023",
    end_date: "May 2027",
    info: "info here",
  },
];
export const jobs: JobEx[] = [
  {
    id: 1,
    title: "Cashier / Customer Service Staff",
    company: "Publix",
    location: "Harrisburg, NC",
    job_start: "Feb 2025",
    job_end: "Current",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
  },
  {
    id: 2,
    title: "IT Lab: Summer Security Intensive Fellow",
    company: "Carnegie Mellon University Heinz College",
    location: "Pittsburgh, PA",
    job_start: "Jun 2026",
    job_end: "Aug 2026",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
  },
  {
    id: 3,
    title: "Dasher",
    company: "Doordash",
    location: "Cary, NC",
    job_start: "May 2024",
    job_end: "March 2025",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
  },
  {
    id: 4,
    title: "Shopper",
    company: "Instacart",
    location: "Cary, NC",
    job_start: "May 2024",
    job_end: "March 2025",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
  },
];
