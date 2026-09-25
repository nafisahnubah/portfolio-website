import type React from "react"
import Link from "next/link"

function Role({
  title,
  date,
  current,
  open,
  desc,
  bullets,
  tags,
  extraLink,
  dotColor,
  timelined,
}: {
  title: string
  date: string
  current?: boolean
  open?: boolean
  desc?: string
  bullets: string[]
  tags: string[]
  extraLink?: { label: string; href: string }
  dotColor?: string
  timelined?: boolean
}) {
  return (
    <details open={open}>
      <summary
        className="row flex items-baseline gap-3"
        style={{ padding: "10px 12px 10px 0", position: timelined ? "relative" : undefined }}
      >
        {timelined && (
          <span
            style={{ position: "absolute", left: -29, top: 18, width: 10, height: 10, background: dotColor }}
          />
        )}
        <span className="chev">▶</span>
        <span style={{ fontWeight: current === undefined ? 600 : 600, fontSize: 17, flex: 1 }}>{title}</span>
        <span
          style={
            current
              ? { fontSize: 12.5, color: "var(--copper)", fontWeight: 600 }
              : { fontSize: 13, color: "rgba(47,58,47,.55)" }
          }
        >
          {date}
        </span>
      </summary>
      <div className="panel" style={{ padding: "8px 0 16px 24px" }}>
        {desc && (
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 12px" }}>{desc}</p>
        )}
        <ul style={{ margin: "0 0 14px", paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: "rgba(47,58,47,.78)" }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: extraLink ? 14 : 0 }}>
          {tags.map((t) => (
            <span key={t} className="tagx">
              {t}
            </span>
          ))}
        </div>
        {extraLink && (
          <a
            className="btnx btn-o"
            href={extraLink.href}
            style={{ marginTop: 14 }}
            {...(extraLink.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
          >
            {extraLink.label}
          </a>
        )}
      </div>
    </details>
  )
}

function OrgRow({
  org,
  location,
  note,
  children,
  timelined,
}: {
  org: string
  location: string
  note?: string
  children: React.ReactNode
  timelined?: boolean
}) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[230px_1fr] gap-2 sm:gap-7 py-6"
      style={{ borderBottom: "1px solid var(--hair)" }}
    >
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>{org}</div>
        <div style={{ fontSize: 13, color: "rgba(47,58,47,.6)" }}>{location}</div>
        {note && (
          <div className="kick" style={{ marginTop: 10, fontSize: 9.5 }}>
            {note}
          </div>
        )}
      </div>
      <div style={timelined ? { borderLeft: "2px solid var(--rule)", paddingLeft: 22, marginLeft: -11 } : undefined}>
        {children}
      </div>
    </div>
  )
}

function Stack({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-10 pb-2">
        <div
          className="flex items-baseline gap-3"
          style={{ borderBottom: "2px solid var(--rule)", paddingBottom: 10, marginBottom: 8 }}
        >
          <span className="ser" style={{ fontSize: 34, lineHeight: 1 }}>
            {n}
          </span>
          <span className="kick">{label}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="w-full" style={{ background: "var(--bg)" }}>
      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-14 pb-10">
          <div className="max-w-[820px]">
            <div className="kick" style={{ marginBottom: 14 }}>
              2024 to present
            </div>
            <h1 className="ser text-5xl sm:text-6xl" style={{ lineHeight: 1, margin: "0 0 18px" }}>
              Experience
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: 0 }}>
              My work and leadership experience, grouped by type. Where I&apos;ve held more than one role at the same
              place, they&apos;re listed together. Click any role to see more details.
            </p>
          </div>
        </div>
      </div>

      <Stack n="01" label="Software development">
        <OrgRow org="Quest Software Inc." location="Remote · current">
          <Role
            title="Software Developer"
            date="current"
            current
            desc="Backend development on the On Demand Audit team, part of a cloud based software as a service product."
            bullets={[
              "Develop backend software using C# and .NET",
              "Work with Microsoft Azure, including Azure Functions, in a microservice architecture",
              "Work in an Agile/Scrum team, contributing to development and to unit and integration testing",
            ]}
            tags={["C#", ".NET", "Azure", "Azure Functions", "Agile Scrum"]}
          />
        </OrgRow>
        <OrgRow org="ImmediaC" location="Halifax, NS · 2026">
          <Role
            title="Application Developer"
            date="2026"
            desc="A cloud based ERP web application with AI powered workflow automation and enterprise integrations."
            bullets={[
              "Built and maintained the full stack: React front end, .NET and C# back end",
              "Led the OpenAI API integrations that automate internal workflows",
              "Designed the SQL schema behind the scalable pieces of the app",
              "Gathered client requirements and turned them into technical solutions",
              "Deployed and managed cloud infrastructure on Microsoft Azure",
            ]}
            tags={["React.js", ".NET", "C#", "OpenAI API", "Azure", "SQL", "Agile Scrum"]}
          />
        </OrgRow>
        <OrgRow org="Computing Councils of Canada" location="Remote · current">
          <Role
            title="Software Developer"
            date="current"
            current
            desc="Organisation website, internal dashboard, and AI tools that automate internal processes."
            bullets={[
              "Building the website and internal dashboard in Next.js and Node.js",
              "Wiring front end and back end into one scalable system",
              "Building agentic AI solutions that automate internal workflows",
              "Designing new features with the rest of the team",
            ]}
            tags={["Next.js", "Node.js", "AI automation", "JavaScript"]}
          />
        </OrgRow>
        <OrgRow org="Dalhousie Student Accessibility Centre" location="Halifax, NS · 2025 to current" note="Two roles" timelined>
          <Role
            title="Software Developer"
            date="2025"
            dotColor="var(--sage)"
            timelined
            bullets={[
              "Designed a Java application that automates exam scheduling and sorting",
              "Paired with one other developer on design and implementation",
              "Cut a manual process down to a file drop and a summary",
            ]}
            tags={["Java", "Automation", "Apache PDFBox"]}
          />
          <Role
            title="Invigilator"
            date="current"
            current
            dotColor="var(--copper)"
            timelined
            bullets={[
              "Proctor several accommodated exams at once in a fast moving room",
              "Hold every sitting to its approved accessibility requirements",
              "Liaise with professors on time sensitive problems mid exam",
            ]}
            tags={["Student support", "Attention to detail", "Multitasking"]}
          />
        </OrgRow>
      </Stack>

      <Stack n="02" label="Machine learning research">
        <OrgRow org="Dalhousie University" location="Halifax, NS · current">
          <Role
            title="Undergraduate Machine Learning Researcher, MAPS Lab"
            date="current"
            current
            desc="Glacier melt patterns, under faculty supervision, from geospatial and satellite data."
            bullets={[
              "Applying machine learning to glacier melt and environmental change",
              "Cleaning, preprocessing and analysing large scale geospatial datasets",
              "Working in Google Earth Engine on satellite imagery",
              "Running image segmentation and temporal analysis on ice coverage",
            ]}
            tags={["Machine learning", "Google Earth Engine", "Image segmentation", "Python"]}
            extraLink={{ label: "View website", href: "https://mapslab.tech/people/" }}
          />
          <Role
            title="Honours Thesis Researcher, MYTech Lab"
            date="current"
            current
            desc="Honours thesis on detecting rare attack types in network intrusion detection, where some attack classes have very few examples to learn from."
            bullets={[
              "Studying how to improve SMOTE, a method that creates synthetic samples of rare classes, by choosing which samples to pair using a learned embedding",
              "Proposing EG-SMOTE, which trains a contrastive encoder to pick the pairs while still building samples from the original features",
              "Comparing it against modern SMOTE variants on the UNSW-NB15 and NSL-KDD datasets",
            ]}
            tags={["Machine learning", "Network intrusion detection", "Contrastive learning", "Python", "PyTorch"]}
            extraLink={{ label: "View website", href: "https://mytechlab.cs.dal.ca/" }}
          />
        </OrgRow>
        <OrgRow org="Dalhousie Machine Learning Society" location="Halifax, NS · 2025">
          <Role
            title="Student Researcher, NIAR"
            date="2025"
            desc="Neuro Imaging Analysis and Research, under Dr. Carlos R. Hernandez-Castillo. fMRI data from SCA7 patients and controls."
            bullets={[
              "Analysed fMRI data in search of disease biomarkers",
              "Explored machine learning applications in neuroscience with the group",
              "Contributed findings toward publications and presentations",
            ]}
            tags={["fMRI analysis", "Neuroscience", "Python"]}
            extraLink={{ label: "View certificate", href: "https://nafisah-nubah-portfolio.vercel.app/DMLS_Certificate.pdf" }}
          />
        </OrgRow>
      </Stack>

      <Stack n="03" label="Community and leadership">
        <OrgRow org="Dalhousie Machine Learning Society" location="Halifax, NS · 2024 to current" note="Promoted twice" timelined>
          <Role
            title="Secretary"
            date="current"
            current
            dotColor="var(--copper)"
            timelined
            bullets={[
              "Help run the society's day to day operations and planning",
              "Support the executive team with events and workshops",
            ]}
            tags={["Leadership", "Organization"]}
          />
          <Role
            title="Events and Media Lead"
            date="previously"
            dotColor="rgba(47,58,47,.3)"
            timelined
            bullets={[
              "Lead the planning and running of events, workshops and initiatives",
              "Own promotions, branding and social strategy for the society",
              "Create the content that shows off events, projects and members",
              "Work with the executive to widen community engagement",
            ]}
            tags={["Event planning", "Content creation", "Leadership"]}
          />
          <Role
            title="Social Media Coordinator"
            date="previously"
            dotColor="rgba(47,58,47,.3)"
            timelined
            bullets={[
              "Ran the society's day to day social presence and posting schedule",
              "Built the content pipeline that the media lead role now sits on top of",
            ]}
            tags={["Social media", "Communication"]}
          />
        </OrgRow>
        <OrgRow org="Dalhousie Women in Tech Society" location="Halifax, NS · 2024 to current" note="Promoted once" timelined>
          <Role
            title="Secretary"
            date="current"
            current
            dotColor="var(--copper)"
            timelined
            bullets={[
              "Led a mentorship program that connects students with industry and peer mentors",
              "Host networking and tech events for women and non binary students in tech",
              "Mentor women and non binary students, and received the Helping Hands award for mentorship",
              "Help run society operations and planning",
            ]}
            tags={["Leadership", "Mentorship", "Event coordination"]}
          />
          <Role
            title="Upper Year Student Representative"
            date="previously"
            dotColor="rgba(47,58,47,.3)"
            timelined
            bullets={[
              "Spoke for upper year students on the society's executive",
              "Brought outreach ideas from the student body into planning",
            ]}
            tags={["Representation", "Outreach"]}
          />
        </OrgRow>
        <OrgRow org="Faculty of Computer Science" location="Dalhousie University · current">
          <Role
            title="Student Leader"
            date="current"
            current
            bullets={[
              "Host and coordinate faculty events and hackathons",
              "Mentor students into a community that feels worth joining",
              "Work with faculty staff on operations and student engagement",
            ]}
            tags={["Leadership", "Mentorship", "Community"]}
          />
        </OrgRow>
      </Stack>

      <Stack n="04" label="Teaching and student support">
        <OrgRow org="Dalhousie Women in Tech Society" location="Halifax, NS · current">
          <Role
            title="Mentor"
            date="current"
            current
            desc="Mentor in the society's mentorship program."
            bullets={[
              "Mentor multiple students on academics, co-ops and career planning",
              "Mentor alongside my role as the program lead",
            ]}
            tags={["Mentorship", "Career advice"]}
          />
        </OrgRow>
        <OrgRow org="SuperNOVA at Dalhousie" location="Halifax, NS · 2025">
          <Role
            title="Computer Science Instructor"
            date="2025"
            bullets={[
              "Taught programming to youth through hands on camp activities",
              "Mentored campers across a wide range of skill levels",
              "Adapted the material on the fly to different learning styles",
            ]}
            tags={["Teaching", "Mentorship", "Youth education"]}
          />
        </OrgRow>
        <OrgRow org="Dalhousie University" location="Halifax, NS · 2025">
          <Role
            title="Teaching Assistant and Marker, Web Development"
            date="2025"
            bullets={[
              "Ran lab classes on HTML, CSS and JavaScript",
              "Answered the technical questions that labs generate, live",
              "Graded assignments with feedback students could act on",
            ]}
            tags={["Web development", "Teaching", "Assessment"]}
          />
        </OrgRow>
        <OrgRow org="Halifax Regional Centre for Education" location="LeMarchant-St. Thomas · current">
          <Role
            title="Lunch Monitor"
            date="current"
            current
            bullets={["Supervise lunch periods at an elementary school", "Help with lunchtime activities, outdoor play and cleanup"]}
            tags={["Supervision", "Conflict resolution"]}
          />
        </OrgRow>
      </Stack>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-11 py-11 flex items-center justify-between gap-6 flex-wrap">
        <p className="ser text-2xl sm:text-3xl" style={{ margin: 0, maxWidth: "30ch" }}>
          Next: take a look at my projects.
        </p>
        <Link href="/projects" className="btnx btn-s">
          Projects
        </Link>
      </div>
    </div>
  )
}
