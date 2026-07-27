// Type Constructors for data
export type Education = {
  school: string;
  location: string;
  degree: string;
  gpa?: number;
  start_date: string;
  end_date?: string; // can be null to set to current or set to future
  info: string;
  photo?: string;
  theme: string;
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
  start: string;
  end: string; // if not current
  description: string;
  skills: string;
  logo: string;
  theme: string;
};

export type Cert_Award = {
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
  name: "I'M ZAEYA DEBENEDETTI",
  pronouns: "she/her",
  location: "Charlotte, NC",
  intro:
    "I'm Zaeya (she/her) and I am a student at University of North Carolina at Charlotte pursuing a Bachelors in Computer Science. I am also an early entry student doing a Master of Science in Cybersecurity. Alongside this I am a part time Cashier / Customer Service Staff at Publix. I am the Vice President for the UNCC Taekwondo Club and the new Treasurer for the Criminal Justice Association. ",
};
export const awards: Cert_Award[] = [
  {
    name: "Google Cybersecurity Professional Certificate v2",
    awarder: "Coursera",
    date: "June 2026",
  },
  {
    name: "Chancellors List Fall 2023 - Spring 2026",
    awarder: "University of North Carolina at Charlotte",
    date: "2023-2026",
  },
];
export const socials: Social[] = [
  {
    name: "LinkedIn",
    logo: "",
    link: "https://www.linkedin.com/in/zaeyadebenedetti/",
  },
  { name: "Github", logo: "", link: "https://github.com/Azeyzzz" },
];
export const projects: Project[] = [
  {
    id: "p1",
    title: "Old Portfolio",
    date_created: "Nov 2025",
    date_updated: "June 2026",
    photo: "photo",
    link: "https://github.com/Azeyzzz/Zaeya-Portfolio",
    description:
      "The first personal portfolio I created using HTML, CSS and Javascript code that I learned in a Web development class. I was able to build off a previous project that I had completed in that class where I made a professional portfolio for a client.",
    website: "https://zaeyadebenedetti.com/",
  },
  {
    id: "p2",
    title: "To_DayDashboard",
    date_created: "June 2026",
    date_updated: "June 2026",
    photo: "photo",
    link: "https://github.com/Azeyzzz/to_day-dashoard",
    description:
      "A dashboard project I created with the help of LLMs. I wanted to create a dashboard I could use to keep track of daily tasks, reminders, and a post it note board.",
    website: "https://today.zaeyadebenedetti.com/",
  },
  {
    id: "p3",
    title: "Course Project: Portfolio for Melanie",
    date_created: "Jan 2025",
    date_updated: "Nov 2025",
    photo: "photo",
    link: "https://github.com/Azeyzzz/Zaeya-New-Portfolio",
    description:
      "A semester long project in which I created a portfolio tailored towards my client. My client wanted a professional portfolio that recruiters could use to find out more about my client.",
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
    theme: "bg-[#005035]",
  },
  {
    school: "University of North Carolina at Charlote",
    location: "Charlotte",
    degree: "MS Cybersecurity",
    gpa: 0,
    start_date: "Aug 2023",
    end_date: "May 2027",
    info: "Relevant Courses: Prin Infra and Sec, Software Engineering",
    theme: "bg-[#005035]",
  },
];
export const jobs: JobEx[] = [
  {
    id: 1,
    title: "Cashier / Customer Service Staff",
    company: "Publix",
    location: "Harrisburg, NC",
    start: "Feb 2025",
    end: "Current",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
    theme: "bg-[#00F0FF]",
  },
  {
    id: 2,
    title: "IT Lab: Summer Security Intensive Fellow",
    company: "Carnegie Mellon University Heinz College",
    location: "Pittsburgh, PA",
    start: "Jun 2026",
    end: "Aug 2026",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
    theme: "bg-[#C41230]",
  },
  {
    id: 3,
    title: "Dasher",
    company: "Doordash",
    location: "Cary, NC",
    start: "May 2024",
    end: "March 2025",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
    theme: "bg-[#EB1700]",
  },
  {
    id: 4,
    title: "Shopper",
    company: "Instacart",
    location: "Cary, NC",
    start: "May 2024",
    end: "March 2025",
    description: "Job description here",
    skills: "skills here",
    logo: "photo url here",
    theme: "bg-[#0AAD05]",
  },
];
