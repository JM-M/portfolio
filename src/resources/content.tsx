import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Michael",
  lastName: "Jola-Moses",
  name: "Michael Jola-Moses",
  role: "Full-Stack Engineer",
  avatar: "/images/me.png",
  email: "mikejolamoses@gmail.com",
  location: "Africa/Lagos", // IANA time zone identifier
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on engineering and projects</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jm-m",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/michael-jola-moses/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I design and build products that work</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work/vesslr-b2b-trade-platform",
  },
  subline: (
    <>
      I'm Michael, a full-stack engineer who turns messy real-world problems into
      clean, reliable software. I've built trade platforms, marketplaces, and tools
      that teams actually depend on every day.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a full-stack engineer who cares about how things work end to end, from
        what users see and interact with to the systems running behind the scenes.
        I've worked on trade platforms, marketplaces, investment tools, and internal
        dashboards, and I'm most useful when the problem is complex and the
        solution needs to be simple.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vesslr Technologies",
        timeframe: "Jan 2026 – Present",
        role: "Full-Stack Engineer",
        achievements: [
          <>
            Built the core platform for a B2B trade company, handling everything
            from user workflows to compliance and audit trails.
          </>,
          <>
            Designed the access and permissions system so different roles could
            work within the platform without stepping on each other.
          </>,
          <>
            Worked closely with the product team to make sense of complex regulatory
            requirements and ship solutions that actually worked in practice.
          </>,
        ],
        images: [],
      },
      {
        company: "Musha",
        timeframe: "Jan 2025 – Oct 2025",
        role: "Frontend Engineer",
        achievements: [
          <>
            Led a major overhaul of a real-estate investment platform, modernizing
            the frontend, improving load times, and making the codebase easier to
            work with long-term.
          </>,
          <>
            Worked across teams to make sure the frontend kept pace with changing
            business and compliance needs.
          </>,
          <>
            Documented key decisions and migration steps so the team could
            maintain and build on the work going forward.
          </>,
        ],
        images: [],
      },
      {
        company: "Afrimash",
        timeframe: "Dec 2023 – Dec 2024",
        role: "Frontend Engineer",
        achievements: [
          <>
            Built an internal dashboard that gave the team real-time insight into
            sales, customer activity, and order fulfillment. It replaced scattered
            spreadsheets and manual reports.
          </>,
          <>
            Pulled data from multiple services into a single view tailored to
            each team member's role, making day-to-day decisions faster and
            more reliable.
          </>,
          <>
            Designed the APIs that power the dashboard, with proper access
            controls to keep sensitive data protected.
          </>,
          <>
            Helped drive a 24% increase in monthly sales by making data more
            accurate and cutting out manual busywork.
          </>,
        ],
        images: [],
      },
      {
        company: "Code In Place, Stanford",
        timeframe: "Apr 2023 – Jul 2023",
        role: "Section Leader",
        achievements: [
          <>
            Mentored a group of students learning to code for the first time,
            walking them through problem-solving, debugging, and building
            confidence with Python.
          </>,
          <>
            Helped students go from struggling with basics to completing
            real projects on their own.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Medical Sciences, Ondo",
        description: <>B.Sc. in Biochemistry</>,
      },
      {
        name: "Applied Data Institute",
        description: <>Fellowship focused on using data and analytics to solve real-world problems.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>The languages I reach for most, whether I'm building interfaces or writing backend logic.</>,
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: <>Where I spend most of my time. Making things look right, feel fast, and hold up as they grow.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React Router" },
          { name: "Zustand" },
          { name: "ShadCn" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: <>I build the APIs and services that keep everything running behind the scenes.</>,
        tags: [
          { name: "NestJS", icon: "nestjs" },
          { name: "Express", icon: "express" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: <>Comfortable working with both relational and document databases depending on what the project needs.</>,
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
