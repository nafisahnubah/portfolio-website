// All portfolio content lives here. The page in app/page.tsx only handles layout.

export type Note = {
  side: "l" | "r" // which margin the handwritten note sits in
  color: "cb" | "cr" // blue or red ink
  y: string
  rot: string
  lines: string[]
  doodle?: "mtn"
  nowrap?: boolean // keep each line on one row (for long words)
}

export type Link = { label: string; href: string }

export type Entry = {
  id: string
  title: string
  org: string
  date: string
  short?: string
  href?: string // makes the title itself a link
  // expanded details
  meta?: string
  img?: string
  alt?: string
  desc?: string
  bullets?: string[]
  tags?: string[]
  credId?: string
  links?: Link[]
  note?: Note
}

export type Section = {
  id: string
  title: string
  tab: string
  color: string
  variant?: "tint" | "tl" | "card"
  entries: Entry[]
}

export const profile = {
  name: "Nafisah Nubah",
  role: "Software developer and machine learning researcher",
  location: "Halifax, Nova Scotia",
  email: "Nafisah.Nubah@dal.ca",
  github: "https://github.com/nafisahnubah",
  linkedin: "https://www.linkedin.com/in/nafisah-nubah-3a355829b",
  stats: [
    ["Roles", "16"],
    ["Projects", "13"],
    ["CGPA", "4.22"],
    ["Certs", "5"],
  ],
}

export const development: Section = {
  id: "s-dev",
  title: "Software development",
  tab: "Work",
  color: "#f6c4cf",
  entries: [
    {
      id: "quest",
      title: "Software Developer",
      org: "Quest Software Inc.",
      date: "current",
      short: "Backend development on the On Demand Audit team, part of a cloud based software as a service product.",
      meta: "Remote",
      bullets: [
        "Develop backend software using C# and .NET",
        "Work with Microsoft Azure, including Azure Functions, in a microservice architecture",
        "Work in an Agile/Scrum team, contributing to development and to unit and integration testing",
      ],
      tags: ["C#", ".NET", "Azure", "Azure Functions", "Agile Scrum"],
      note: { side: "r", color: "cb", y: "4px", rot: "-3deg", lines: ["C# + Azure,", "most days"] },
    },
    {
      id: "ccc",
      title: "Software Developer",
      org: "Computing Councils of Canada",
      date: "current",
      short: "Organisation website, internal dashboard, and AI tools that automate internal processes.",
      meta: "Remote",
      bullets: [
        "Building the website and internal dashboard in Next.js and Node.js",
        "Wiring front end and back end into one scalable system",
        "Building agentic AI solutions that automate internal workflows",
        "Designing new features with the rest of the team",
      ],
      tags: ["Next.js", "Node.js", "AI automation", "JavaScript"],
    },
    {
      id: "immediac",
      title: "Application Developer",
      org: "ImmediaC",
      date: "2026",
      short: "A cloud based ERP web application with AI powered workflow automation and enterprise integrations.",
      meta: "Halifax, NS",
      bullets: [
        "Built and maintained the full stack: React front end, .NET and C# back end",
        "Led the OpenAI API integrations that automate internal workflows",
        "Designed the SQL schema behind the scalable pieces of the app",
        "Gathered client requirements and turned them into technical solutions",
        "Deployed and managed cloud infrastructure on Microsoft Azure",
      ],
      tags: ["React.js", ".NET", "C#", "OpenAI API", "Azure", "SQL", "Agile Scrum"],
    },
    {
      id: "sac-dev",
      title: "Software Developer",
      org: "Dalhousie Student Accessibility Centre",
      date: "2025",
      short: "Exam scheduling software for the Student Accessibility Centre, replacing a manual sorting process.",
      meta: "Halifax, NS",
      bullets: [
        "Designed a Java application that automates exam scheduling and sorting",
        "Paired with one other developer on design and implementation",
        "Cut a manual process down to a file drop and a summary",
      ],
      tags: ["Java", "Automation", "Apache PDFBox"],
      note: { side: "l", color: "cr", y: "8px", rot: "3deg", lines: ["still used every", "exam season!"] },
    },
  ],
}

export const research: Section = {
  id: "s-res",
  title: "Research",
  tab: "Research",
  color: "#cfdcff",
  variant: "tint",
  entries: [
    {
      id: "mytech",
      title: "Honours Thesis Researcher",
      org: "MYTech Lab, Dalhousie University",
      date: "current",
      short: "Honours thesis on detecting rare attack types in network intrusion detection, where some attack classes have very few examples to learn from.",
      meta: "Halifax, NS",
      bullets: [
        "Studying how to improve SMOTE, a method that creates synthetic samples of rare classes, by choosing which samples to pair using a learned embedding",
        "Proposing EG-SMOTE, which trains a contrastive encoder to pick the pairs while still building samples from the original features",
        "Comparing it against modern SMOTE variants on the UNSW-NB15 and NSL-KDD datasets",
      ],
      tags: ["Machine learning", "Network intrusion detection", "Contrastive learning", "Python", "PyTorch"],
      links: [{ label: "View website", href: "https://mytechlab.cs.dal.ca/" }],
      note: { side: "r", color: "cb", y: "0px", rot: "2deg", lines: ["my honours", "thesis!"] },
    },
    {
      id: "maps",
      title: "Undergraduate Machine Learning Researcher",
      org: "MAPS Lab, Dalhousie University",
      date: "current",
      short: "Glacier melt patterns, under faculty supervision, from geospatial and satellite data.",
      meta: "Halifax, NS",
      bullets: [
        "Applying machine learning to glacier melt and environmental change",
        "Cleaning, preprocessing and analysing large scale geospatial datasets",
        "Working in Google Earth Engine on satellite imagery",
        "Running image segmentation and temporal analysis on ice coverage",
      ],
      tags: ["Machine learning", "Google Earth Engine", "Image segmentation", "Python"],
      links: [{ label: "View website", href: "https://mapslab.tech/people/" }],
      note: { side: "l", color: "cr", y: "6px", rot: "-4deg", lines: ["yes, real glaciers"], doodle: "mtn" },
    },
    {
      id: "niar",
      title: "Student Researcher, NIAR",
      org: "Dalhousie Machine Learning Society",
      date: "2025",
      short: "Neuro Imaging Analysis and Research, under Dr. Carlos R. Hernandez-Castillo. fMRI data from SCA7 patients and controls.",
      meta: "Halifax, NS",
      bullets: [
        "Analysed fMRI data in search of disease biomarkers",
        "Explored machine learning applications in neuroscience with the group",
        "Contributed findings toward publications and presentations",
      ],
      tags: ["fMRI analysis", "Neuroscience", "Python"],
      links: [{ label: "View certificate", href: "/DMLS_Certificate.pdf" }],
    },
  ],
}

export const community: Section = {
  id: "s-lead",
  title: "Community and leadership",
  tab: "Leadership",
  color: "#bfe3d0",
  variant: "tl",
  entries: [
    {
      id: "wits-sec",
      title: "Secretary",
      org: "Dalhousie Women in Tech Society",
      date: "current",
      short: "Executive role in the society, leading its student mentorship program.",
      meta: "Halifax, NS",
      bullets: [
        "Led a mentorship program that connects students with industry and peer mentors",
        "Host networking and tech events for women and non binary students in tech",
        "Mentor women and non binary students, and received the Helping Hands award for mentorship",
        "Help run society operations and planning",
      ],
      tags: ["Leadership", "Mentorship", "Event coordination"],
      note: { side: "r", color: "cr", y: "4px", rot: "-3deg", lines: ["honestly the", "best part ♥"] },
    },
    {
      id: "dmls-sec",
      title: "Secretary",
      org: "Dalhousie Machine Learning Society",
      date: "current",
      short: "Executive role in the society, helping run its operations and hosting events.",
      meta: "Halifax, NS",
      bullets: [
        "Help run the society's day to day operations and planning",
        "Support the executive team with events and workshops",
        "Host and moderate the society's networking events",
      ],
      tags: ["Leadership", "Organization"],
    },
    {
      id: "fcs",
      title: "Student Leader",
      org: "Faculty of Computer Science",
      date: "current",
      short: "Part of the Faculty of Computer Science Leadership Team, building student community.",
      meta: "Dalhousie University",
      bullets: [
        "Host and coordinate faculty events and hackathons",
        "Mentor students into a community that feels worth joining",
        "Work with faculty staff on operations and student engagement",
      ],
      tags: ["Leadership", "Mentorship", "Community"],
    },
    {
      id: "wits-rep",
      title: "Upper Year Student Representative",
      org: "Dalhousie Women in Tech Society",
      date: "previously",
      short: "Represented upper year students and helped with society initiatives and operations.",
      meta: "Halifax, NS",
      bullets: [
        "Spoke for upper year students on the society's executive",
        "Brought outreach ideas from the student body into planning",
      ],
      tags: ["Representation", "Outreach"],
    },
    {
      id: "dmls-events",
      title: "Events and Media Lead",
      org: "Dalhousie Machine Learning Society",
      date: "previously",
      short: "Led events, workshops, promotions, branding and social media for the society.",
      meta: "Halifax, NS",
      bullets: [
        "Lead the planning and running of events, workshops and initiatives",
        "Own promotions, branding, social strategy and the day to day posting schedule",
        "Create the content that shows off events, projects and members",
        "Work with the executive to widen community engagement",
      ],
      tags: ["Event planning", "Content creation", "Social media", "Leadership"],
    },
  ],
}

export const teaching: Section = {
  id: "s-teach",
  title: "Teaching and student support",
  tab: "Teaching",
  color: "#c6e8ea",
  entries: [
    {
      id: "wits-mentor",
      title: "Mentor",
      org: "Dalhousie Women in Tech Society",
      date: "current",
      short: "Mentor in the society's mentorship program.",
      meta: "Halifax, NS",
      bullets: [
        "Mentor multiple students on academics, co-ops and career planning",
        "Mentor alongside my role as the program lead",
      ],
      tags: ["Mentorship", "Career advice"],
    },
    {
      id: "ta",
      title: "Teaching Assistant and Marker, Web Development",
      org: "Dalhousie University",
      date: "2025",
      short: "Lab instruction and marking for an undergraduate web development course.",
      meta: "Halifax, NS",
      bullets: [
        "Ran lab classes on HTML, CSS and JavaScript",
        "Answered the technical questions that labs generate, live",
        "Graded assignments with feedback students could act on",
      ],
      tags: ["Web development", "Teaching", "Assessment"],
    },
    {
      id: "supernova",
      title: "Computer Science Instructor",
      org: "SuperNOVA at Dalhousie",
      date: "2025",
      short: "Computer science camp instruction for youth of all skill levels.",
      meta: "Halifax, NS",
      bullets: [
        "Taught programming to youth through hands on camp activities",
        "Mentored campers across a wide range of skill levels",
        "Adapted the material on the fly to different learning styles",
      ],
      tags: ["Teaching", "Mentorship", "Youth education"],
    },
    {
      id: "sac-inv",
      title: "Invigilator",
      org: "Dalhousie Student Accessibility Centre",
      date: "current",
      short: "Exam invigilation for students writing with accessibility accommodations.",
      meta: "Halifax, NS",
      bullets: [
        "Proctor several accommodated exams at once in a fast moving room",
        "Hold every sitting to its approved accessibility requirements",
        "Liaise with professors on time sensitive problems mid exam",
      ],
      tags: ["Student support", "Attention to detail", "Multitasking"],
    },
  ],
}

export const education = {
  id: "s-edu",
  title: "Education",
  tab: "Education",
  color: "#ffe08a",
  degree: "BCS Honours, Computer Science",
  school: "Dalhousie University",
  date: "current",
  cgpa: "4.22",
  scale: "4.30",
  standing: "Sexton Scholar standing",
  note: { side: "l", color: "cr", y: "10px", rot: "3deg", lines: ["✓ worth the", "late nights"] } as Note,
  awards: [
    "Chancellor's Scholarship",
    "Entrance Community and Leadership Award",
    "Global Renewable Scholar Award",
    "WiTS Helping Hands Award",
    "WiTS Academic Distinction",
  ],
}

export type Featured = {
  title: string
  year: string
  short: string
  tech: string
  img?: string
  alt?: string
  href?: string
}

export const projectsSection = { id: "s-proj", title: "Projects", tab: "Projects", color: "#f9cfae" }

export const featured: Featured[] = [
  {
    title: "DEEBug",
    year: "2025",
    short:
      "Finds and explains performance bugs in deep learning models. I worked on the Flask service and the Gemini powered explanation layer.",
    tech: "Python Flask, Gemini API, Google Cloud",
    img: "/modern-web-dashboard-for-ai-debugging-tool.png",
    alt: "DEEBug dashboard",
  },
  {
    title: "Normalized Entity Parser",
    year: "2025",
    short:
      "Turns SARS exam roster PDFs into readable summaries for Dalhousie's Student Accessibility Centre. Still in use.",
    tech: "Java, Swing GUI, Apache PDFBox",
    img: "/nep.png",
    alt: "Normalized Entity Parser",
    href: "https://github.com/NepSauce/Normalized-Entity-Parser",
  },
  {
    title: "Canso Launch Windows",
    year: "2026",
    short:
      "A launch window decision engine for Spaceport Nova Scotia, built for the Mission Accepted Space Hackathon.",
    tech: "Python, FastAPI, Orbital mechanics",
    href: "https://github.com/nafisahnubah/MDA_Mission_Accepted_Hackathon",
  },
]

export const featuredNote: Note = {
  side: "r",
  color: "cb",
  y: "40px",
  rot: "2deg",
  lines: ["hackathon build,", "orbital mechanics!"],
}

const proj = (
  e: Omit<Entry, "org"> & { tags: string[] },
): Entry => ({ ...e, org: e.tags.slice(0, 3).join(", ") })

export const moreProjects: Entry[] = [
  proj({
    id: "spectra",
    title: "SPECTRA-ICA",
    date: "2026",
    short: "An EEG artifact removal algorithm that won first place in the Machine Learning category at SURGE NeuroHack 2026.",
    desc: "Built for SURGE NeuroHack 2026, where it won first place in the Machine Learning category. SPECTRA-ICA is an EEG artifact removal algorithm that removes only the specific frequencies and time windows where an artifact like a blink or muscle movement happens, instead of removing an entire signal component. It outperformed standard ICA cleaning on all seven evaluation metrics in a benchmark test.",
    tags: ["Python", "EEG", "Signal processing", "Machine learning"],
    links: [{ label: "Code", href: "https://github.com/RafatH0ssain/SPECTRAICA-Surge-NeuroHack-2026" }],
    note: { side: "l", color: "cr", y: "4px", rot: "-3deg", lines: ["1st place in ML!"] },
  }),
  proj({
    id: "trajot",
    title: "TrajOT",
    date: "2026",
    short: "A statistical model for aligning resting-state fMRI scans across people, built for SURGE Neurohack Fall 2026.",
    desc: "Built with a team of six for SURGE Neurohack Fall 2026. TrajOT is a statistical model for aligning resting-state fMRI scans across different people, which normally have no shared timeline to align by. It estimates how confident it is in each subject's alignment and relies less on the subjects the data doesn't support, which improved alignment reliability over existing methods on real fMRI data.",
    tags: ["Python", "PyTorch", "fMRI", "Statistical modeling"],
    links: [{ label: "Code", href: "https://github.com/HetJivani04/SURGE-Neurohack-DMLS-Fall-2026" }],
  }),
  proj({
    id: "ratease",
    title: "RateEase",
    date: "2024",
    short: "A service review platform with authentication, review management and RESTful APIs.",
    img: "/ratease.png",
    alt: "RateEase",
    desc: "A scalable service review platform where users log in, post and manage reviews through RESTful APIs. Authentication, review management and a responsive front end.",
    tags: ["React.js", "Node.js", "MongoDB", "Firebase"],
    links: [
      { label: "Code", href: "https://github.com/nafisahnubah/rateease-client-side" },
      { label: "Live demo", href: "https://taupe-elf-0b4f7f.netlify.app/" },
    ],
  }),
  proj({
    id: "aquatrack",
    title: "AquaTrack",
    date: "2024",
    short: "A Django app that analyses more than ten years of water quality readings, with anomaly detection.",
    img: "/aqua.png",
    alt: "AquaTrack",
    desc: "Built for DeepSense's Ocean of Data Challenge. A Django app that analyses and visualises water quality trends across more than ten years of historical readings, with anomaly detection.",
    tags: ["Python", "Django", "Data analysis"],
    links: [
      { label: "Code", href: "https://github.com/Ruddraw/OceanData" },
      { label: "Walkthrough", href: "https://www.youtube.com/watch?v=uxkQomTASvo" },
    ],
  }),
  proj({
    id: "predihome",
    title: "PrediHome",
    date: "2025",
    short: "An R and Shiny app ranking Canadian provinces on affordability from 1986 through projections to 2035.",
    img: "/predihome.jpeg",
    alt: "PrediHome",
    desc: "An R and Shiny app that ranks Canadian provinces on affordability, using housing price index, unemployment and employment data from 1986 through projections to 2035.",
    tags: ["R", "Shiny", "ggplot2", "dplyr"],
    links: [{ label: "Code", href: "https://github.com/RafatH0ssain/PrediHome" }],
  }),
  proj({
    id: "lbook",
    title: "LBook",
    date: "2024",
    short: "A team built library web app for cataloguing books and tracking borrowers.",
    img: "/lbook.jpeg",
    alt: "LBook",
    desc: "A team built web application for book cataloguing and borrower tracking, on a MySQL database tuned for fast retrieval.",
    tags: ["PHP", "MySQL", "JavaScript"],
    links: [{ label: "Code", href: "https://github.com/nafisahnubah/lbook" }],
  }),
  proj({
    id: "json",
    title: "JSON Compiler",
    date: "2024",
    short: "A scanner and recursive descent parser that turns JSON token streams into abstract syntax trees.",
    img: "/json-compiler-abstract-visualization.png",
    alt: "JSON compiler",
    desc: "A Python scanner and recursive descent parser that takes JSON token streams and builds abstract syntax trees, with syntactic and semantic analysis on the way through.",
    tags: ["Python", "Lexer", "AST generation"],
    links: [{ label: "Code", href: "https://github.com/nafisahnubah/json-compiler-frontend" }],
  }),
  proj({
    id: "boardgame",
    title: "Board Game Simulation",
    date: "2024",
    short: "A command driven Java board game with four piece types, each with its own movement rules.",
    img: "/simple-board-game-ui.png",
    alt: "Board game simulation",
    desc: "Four piece types, each with its own movement rules, on a command driven board. Built to practice object oriented design and command parsing.",
    tags: ["Java", "OOP", "CLI"],
    links: [{ label: "Code", href: "https://github.com/nafisahnubah/simple-board-game" }],
  }),
  proj({
    id: "ccc2",
    title: "color-contrast-checker2",
    date: "2025",
    short: "A lightweight npm package that checks whether two colors meet WCAG contrast guidelines.",
    img: "/color-contrast-accessibility-tool.png",
    alt: "color-contrast-checker2",
    desc: "A lightweight npm package that checks whether two colors meet WCAG contrast guidelines at the AA and AAA levels, including the large text variants. It supports hex, rgb, hsl, hsv, named and integer color formats.",
    tags: ["JavaScript", "WCAG", "Accessibility", "npm"],
    links: [{ label: "View on npm", href: "https://www.npmjs.com/package/color-contrast-checker2" }],
    note: { side: "l", color: "cr", y: "2px", rot: "-3deg", lines: ["npm i", "color-contrast-checker2"], nowrap: true },
  }),
  proj({
    id: "portfolio",
    title: "This portfolio",
    date: "2025",
    short: "My personal portfolio site, built with Next.js.",
    img: "/portfolio.png",
    alt: "Portfolio site",
    desc: "My personal portfolio website, built with Next.js and Tailwind CSS to show my experience, projects, certifications and academic background.",
    tags: ["Next.js", "React", "Accessibility"],
    links: [{ label: "Code", href: "https://github.com/nafisahnubah/portfolio-website" }],
  }),
]

export const certifications: Section = {
  id: "s-cert",
  title: "Certifications",
  tab: "Certs",
  color: "#e1d5f5",
  entries: [
    {
      id: "aws",
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      date: "2025",
      href: "https://www.credly.com/badges/8779fae8-0b78-4810-b918-e031c5a814af/public_url",
      desc: "Foundational certification covering cloud concepts, core AWS services, security, pricing and support models. Valid through 2028.",
      tags: ["Cloud computing", "AWS", "Cloud services"],
      credId: "3ba7fdd31b034ac2b70922ff291b237a",
      links: [{ label: "Verify on Credly", href: "https://www.credly.com/badges/8779fae8-0b78-4810-b918-e031c5a814af/public_url" }],
    },
    {
      id: "dl",
      title: "Deep Learning Specialization",
      org: "DeepLearning.AI",
      date: "2026",
      href: "https://www.coursera.org/account/accomplishments/specialization/T2TDSZEPH6UR",
      desc: "Five courses on neural networks, convolutional and recurrent architectures, transformers, and the practical workflow of training models in TensorFlow.",
      tags: ["Deep learning", "Neural networks", "TensorFlow", "CNNs", "RNNs"],
      credId: "T2TDSZEPH6UR",
      links: [{ label: "Verify on Coursera", href: "https://www.coursera.org/account/accomplishments/specialization/T2TDSZEPH6UR" }],
    },
    {
      id: "cyber",
      title: "Practical Cybersecurity",
      org: "ShiftKey Labs",
      date: "2025",
      href: "https://credsverse.com/credentials/a0a8fced-94bb-46cb-a892-54054cf7c7e1",
      desc: "Hands on work in threat detection, mitigation strategy and security practice on real applications.",
      tags: ["Cybersecurity"],
      links: [{ label: "Verify on Credsverse", href: "https://credsverse.com/credentials/a0a8fced-94bb-46cb-a892-54054cf7c7e1" }],
    },
    {
      id: "cloud",
      title: "Cloud Foundations",
      org: "ShiftKey Labs",
      date: "2025",
      href: "https://credsverse.com/credentials/09308d08-9796-4db0-8b18-3f8d3e5e891c",
      desc: "Core cloud services, architecture patterns and deployment practice.",
      tags: ["Cloud architecture", "AWS", "DevOps", "Infrastructure"],
      links: [{ label: "Verify on Credsverse", href: "https://credsverse.com/credentials/09308d08-9796-4db0-8b18-3f8d3e5e891c" }],
    },
    {
      id: "azure",
      title: "Fundamentals of Cloud Administration with Azure",
      org: "ShiftKey Labs",
      date: "2025",
      href: "https://credsverse.com/credentials/e5258766-b644-4860-a2e0-46a246d1c410",
      desc: "Resource management, security, monitoring and optimisation inside Azure environments.",
      tags: ["Microsoft Azure", "Cloud administration", "Monitoring"],
      links: [{ label: "Verify on Credsverse", href: "https://credsverse.com/credentials/e5258766-b644-4860-a2e0-46a246d1c410" }],
    },
  ],
}

export const contact = {
  id: "contact",
  title: "Get in touch",
  intro:
    "If you'd like to talk about a role, a project, or anything else, send me a message.",
  note: { side: "l", color: "cb", y: "-4px", rot: "-3deg", lines: ["I'll get back to", "you soon ✿"] } as Note,
  formAction: "https://formspree.io/f/xldwjgqj",
  other: [
    {
      label: "Email",
      items: [
        { text: "Nafisah.Nubah@dal.ca", href: "mailto:Nafisah.Nubah@dal.ca" },
        { text: "nafisahnubah@gmail.com", href: "mailto:nafisahnubah@gmail.com" },
      ],
    },
    { label: "LinkedIn", items: [{ text: "nafisah-nubah", href: "http://www.linkedin.com/in/nafisah-nubah-3a355829b" }] },
    { label: "GitHub", items: [{ text: "nafisahnubah", href: "https://github.com/nafisahnubah" }] },
    { label: "Phone", items: [{ text: "+1 (782) 882 7285", href: "tel:+17828827285" }] },
    { label: "Location", items: [{ text: "Halifax, NS, Canada" }] },
  ] as { label: string; items: { text: string; href?: string }[] }[],
}

// Order of the numbered sections: drives the side tabs and the "Jump to" menu.
export const menu = [
  { id: development.id, label: development.title, tab: development.tab, color: development.color },
  { id: research.id, label: research.title, tab: research.tab, color: research.color },
  { id: community.id, label: community.title, tab: community.tab, color: community.color },
  { id: teaching.id, label: teaching.title, tab: teaching.tab, color: teaching.color },
  { id: education.id, label: education.title, tab: education.tab, color: education.color },
  { id: projectsSection.id, label: projectsSection.title, tab: projectsSection.tab, color: projectsSection.color },
  { id: certifications.id, label: certifications.title, tab: certifications.tab, color: certifications.color },
  { id: contact.id, label: contact.title },
]
