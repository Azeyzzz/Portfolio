// Type Constructors for data
export type Education = {
  id: number;
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
  id: number;
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
  skills: Array<string>;
  logo: string;
  theme: string;
};

export type Cert_Award = {
  name: string;
  awarder: string;
  date: string;
  badge: string;
  id: number;
};
export type Social = {
  name: string;
  logo: string;
  link?: string;
  button?: string;
  email?: string;
};
// --------------------------------------------------------------
//  Actual Data
export const meta = {
  name: "I'M ZAEYA DEBENEDETTI",
  pronouns: "she/her",
  location: "Charlotte, NC",
  intro:
    "I'm Zaeya (she/her) and I am a student at University of North Carolina at Charlotte pursuing a Bachelors in Computer Science. I am also an early entry student doing a Master of Science in Cybersecurity. Alongside this I am a part time Cashier / Customer Service Staff at Publix. I am the Vice President for the UNCC Taekwondo Club and the new Treasurer for the Criminal Justice Association. I look foward to combining both cybersecurity and criminal justice in my future career by pursuing digital forensics.",
};
export const awards: Cert_Award[] = [
  {
    name: "Heinz College Summer Cybersecurity Fellowship Certificate",
    awarder: "Carnegie Mellon University",
    date: "August 2026",
    badge: "./src/assets/heinz-itlab-badge.png",
    id: 1,
  },
  {
    name: "Google Cybersecurity Professional Certificate v2",
    awarder: "Coursera",
    date: "June 2026",
    badge: "./src/assets/google-cyber-prof-badge.png",
    id: 2,
  },
  {
    name: "Chancellors List Fall 2023 - Spring 2026",
    awarder: "University of North Carolina at Charlotte",
    date: "2023-2026",
    badge: "./src/assets/chancellor-list-s26.png",
    id: 3,
  },
];
export const socials: Social[] = [
  {
    name: "LinkedIn",
    logo: "",
    link: "https://www.linkedin.com/in/zaeyadebenedetti/",
    button: "My LinkedIn Profile",
  },
  {
    name: "Github",
    logo: "",
    link: "https://github.com/Azeyzzz",
    button: "Check out my Github",
  },
  {
    name: "Contact me Here",
    logo: "",
    email: "contact@zaeyadebenedetti.com",
  },
];
export const projects: Project[] = [
  {
    id: 1,
    title: "Old Portfolio",
    date_created: "Nov 2025",
    date_updated: "June 2026",
    photo: "./src/assets/old-portfolio.png",
    link: "https://github.com/Azeyzzz/Zaeya-Portfolio",
    description:
      "The first personal portfolio I created using HTML, CSS and Javascript code that I learned in a Web development class. I was able to build off a previous project that I had completed in that class where I made a professional portfolio for a client.",
    website: "https://zaeyadebenedetti.com/",
  },
  {
    id: 2,
    title: "To_DayDashboard",
    date_created: "June 2026",
    date_updated: "June 2026",
    photo: "./src/assets/to_day-dashboard.png",
    link: "https://github.com/Azeyzzz/to_day-dashoard",
    description:
      "A dashboard project I created with the help of LLMs. I wanted to create a dashboard I could use to keep track of daily tasks, reminders, and a post it note board.",
    website: "https://today.zaeyadebenedetti.com/",
  },
  {
    id: 3,
    title: "Course Project: Portfolio for Melanie",
    date_created: "Jan 2025",
    date_updated: "Nov 2025",
    photo: "./src/assets/mel-port.png",
    link: "https://github.com/Azeyzzz/Zaeya-New-Portfolio",
    description:
      "A semester long project in which I created a portfolio tailored towards my client. My client wanted a professional portfolio that recruiters could use to find out more about them.",
    website:
      "https://webpages.charlotte.edu/ddebene1/Melanie-Portfolio/home.html",
  },
];
export const education: Education[] = [
  {
    id: 1,
    school: "University of North Carolina at Charlote",
    location: "Charlotte",
    degree: "Computer Science B.S.",
    gpa: 3.87,
    start_date: "Aug 2023",
    end_date: "May 2027",
    info: "Relevant Courses: Prin Infra and Sec, Software Engineering, Interdisplinary Critical Thinking, Database and Design, Data Structures",
    theme: "bg-[#00F0FF]",
  },
  {
    id: 2,
    school: "University of North Carolina at Charlote",
    location: "Charlotte",
    degree: "MS Cybersecurity",
    gpa: 0,
    start_date: "Aug 2026",
    end_date: "May 2028",
    info: "Current Courses: Computer Forensics, Competitive Cyber Defense, Prin Info Security & Privacy",
    theme: "bg-[#00F0FF]",
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
    description:
      "As a cross trained Customer Service Staff (CSS), I help to manage the front-end of the store by mitigating conflict and delegating tasks to associates. I handle various amounts of money through money services provided through Western Union and lottery from NC Lottery. I help to provide premier customer service by listening to customer's issues and working with them to come to a resolution",
    skills: [
      "Customer Service ",
      "Adaptive ",
      "Conflict Resolution ",
      "Leadership ",
    ],
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
    description:
      "I participated in a seven week long cybersecurity fellowship at Carnegie Mellon University. I completed three rigorious courses that involved topics such as Network Defense, Information Security and Security of AI. I published a research paper on Quantum Computing to CMU's research repository Kilthub. I also attended various professional events and conferences where I got to meet industry professionals and learn about their career paths and recommendations. I worked as a Project Manager for a group research project where the feasibility of continuous risk dashboard was studied in which we came up with equations that could be used when using these dashboards. ",
    skills: [
      "Wireshark ",
      "Research ",
      "Leadership ",
      "Hardworking ",
      "Snort ",
      "Splunk ",
      "Suricata ",
      "CTFs ",
    ],
    logo: "photo url here",
    theme: "bg-[#00F0FF]",
  },
  {
    id: 3,
    title: "Vice President",
    company: "UNCC Taekwondo",
    location: "Charlotte, NC",
    start: "August 2025",
    end: "Current",
    description:
      "As the Vice President for the UNCC Taekwondo I will be leading and working with the E-board to plan out new events for our members. I will work with the Sport Club leadership to utilize our allocated budget and plan out potential tournaments. I currently am a high yellow belt and have competed in national and state level sparring events",
    skills: ["Leadership ", "Dedication ", "Discipline ", "Teamwork "],
    logo: "photo url here",
    theme: "bg-[#00F0FF]",
  },
  {
    id: 4,
    title: "Treasurer",
    company: "Criminal Justice Association",
    location: "Charlotte, NC",
    start: "August 2025",
    end: "Current",
    description:
      "I will be on the E-board for CJA this upcoming semester where I will work with others to plan out fundraising opportunities.",
    skills: ["Criminal Justice"],
    logo: "photo url here",
    theme: "bg-[#00F0FF]",
  },
];
