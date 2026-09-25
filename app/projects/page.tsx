function Shelf({
  title,
  subtitle,
  year,
  img,
  alt,
  desc,
  tags,
  links,
  first,
  last,
}: {
  title: string
  subtitle: string
  year: string
  img: string
  alt: string
  desc: string
  tags: string[]
  links: { label: string; href: string; primary?: boolean }[]
  first?: boolean
  last?: boolean
}) {
  return (
    <details style={{ borderTop: first ? "1px solid var(--hair)" : undefined, borderBottom: last ? "1px solid var(--hair)" : undefined }}>
      <summary
        className="row grid grid-cols-[24px_1fr] sm:grid-cols-[24px_1fr_190px_80px] gap-x-3.5 gap-y-1 items-baseline"
        style={{ padding: "14px 12px 14px 0" }}
      >
        <span className="chev">▶</span>
        <span style={{ fontWeight: 600, fontSize: 17 }}>{title}</span>
        <span className="col-span-2 sm:col-span-1" style={{ fontSize: 13.5, color: "rgba(47,58,47,.6)" }}>
          {subtitle}
        </span>
        <span className="col-span-2 sm:col-span-1" style={{ fontSize: 13, color: "rgba(47,58,47,.5)" }}>
          {year}
        </span>
      </summary>
      <div
        className="panel grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-4 sm:gap-6 pl-4 sm:pl-[38px]"
        style={{ paddingTop: 6, paddingRight: 12, paddingBottom: 22 }}
      >
        <img className="shot" src={img} alt={alt} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 12px" }}>{desc}</p>
          <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 14 }}>
            {tags.map((t) => (
              <span key={t} className="tagx">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2.5">
            {links.map((l) => (
              <a key={l.label} className={`btnx ${l.primary ? "btn-s" : "btn-o"}`} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </details>
  )
}

export default function ProjectsPage() {
  return (
    <div className="w-full" style={{ background: "var(--bg)" }}>
      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-14 pb-10">
          <div className="max-w-[820px]">
            <div className="kick" style={{ marginBottom: 14 }}>
              Ten projects, 2024 to 2025
            </div>
            <h1 className="ser text-5xl sm:text-6xl" style={{ lineHeight: 1, margin: "0 0 18px" }}>
              Projects
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: 0 }}>
              A few of my main projects, followed by the rest.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-8 px-4 sm:px-11 py-11 items-center">
          <img
            className="shot"
            src="/modern-web-dashboard-for-ai-debugging-tool.png"
            alt="DEEBug dashboard"
            style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover" }}
          />
          <div>
            <div className="kick">2025 · Full stack · Team of five</div>
            <h2 className="ser" style={{ fontSize: 44, margin: "8px 0 12px" }}>
              DEEBug
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 14px" }}>
              A web tool that detects performance bugs in deep learning models and explains the fix. I worked on the
              Flask service and the Gemini powered explanation layer, in an Agile team tracked through Jira.
            </p>
            <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 16 }}>
              {["Python Flask", "Gemini API", "Google Cloud", "React.js", "Tailwind", "Jira"].map((t) => (
                <span key={t} className="tagx">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.25fr] gap-8 px-4 sm:px-11 py-11 items-center">
          <div className="order-2 lg:order-1">
            <div className="kick">2025 · Java tooling · Still in use</div>
            <h2 className="ser" style={{ fontSize: 44, margin: "8px 0 12px" }}>
              Normalized Entity Parser
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 14px" }}>
              Exam roster PDFs in, grouped summaries out. Built with one other developer for Dalhousie&apos;s Student
              Accessibility Centre, packaged as a Windows executable.
            </p>
            <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 16 }}>
              {["Java", "Swing GUI", "Apache PDFBox", "Launch4j"].map((t) => (
                <span key={t} className="tagx">
                  {t}
                </span>
              ))}
            </div>
            <a className="btnx btn-o" href="https://github.com/NepSauce/Normalized-Entity-Parser" target="_blank" rel="noopener">
              Source on GitHub
            </a>
          </div>
          <img
            className="shot order-1 lg:order-2"
            src="/nep.png"
            alt="Normalized Entity Parser"
            style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-8 px-4 sm:px-11 py-11 items-center">
          <img
            className="shot"
            src="/color-contrast-accessibility-tool.png"
            alt="color-contrast-checker2"
            style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover" }}
          />
          <div>
            <div className="kick">2025 · Published on npm</div>
            <h2 className="ser" style={{ fontSize: 44, margin: "8px 0 12px" }}>
              color-contrast-checker2
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 14px" }}>
              A lightweight npm package that checks whether two colors meet WCAG contrast guidelines at the AA and AAA
              levels, including the large text variants. It supports hex, rgb, hsl, hsv, named and integer color
              formats.
            </p>
            <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 16 }}>
              {["JavaScript", "WCAG", "Accessibility", "npm"].map((t) => (
                <span key={t} className="tagx">
                  {t}
                </span>
              ))}
            </div>
            <a className="btnx btn-o" href="https://www.npmjs.com/package/color-contrast-checker2" target="_blank" rel="noopener">
              View on npm
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-11 py-11">
        <h2 className="ser text-3xl" style={{ margin: "0 0 6px" }}>
          More projects
        </h2>
        <p style={{ fontSize: 14.5, color: "rgba(47,58,47,.6)", margin: "0 0 22px" }}>Click a project to see more.</p>

        <Shelf
          first
          title="RateEase"
          subtitle="Full stack review platform"
          year="2024"
          img="/ratease.png"
          alt="RateEase"
          desc="A scalable service review platform where users log in, post and manage reviews through RESTful APIs. Authentication, review management and a responsive front end."
          tags={["React.js", "Node.js", "MongoDB", "Firebase"]}
          links={[
            { label: "Code", href: "https://github.com/nafisahnubah/rateease-client-side" },
            { label: "Live demo", href: "https://taupe-elf-0b4f7f.netlify.app/", primary: true },
          ]}
        />
        <Shelf
          title="AquaTrack"
          subtitle="Water quality dashboard"
          year="2024"
          img="/aqua.png"
          alt="AquaTrack"
          desc="Built for DeepSense's Ocean of Data Challenge. A Django app that analyses and visualises water quality trends across more than ten years of historical readings, with anomaly detection."
          tags={["Python", "Django", "Data analysis"]}
          links={[
            { label: "Code", href: "https://github.com/Ruddraw/OceanData" },
            { label: "Walkthrough", href: "https://www.youtube.com/watch?v=uxkQomTASvo", primary: true },
          ]}
        />
        <Shelf
          title="PrediHome"
          subtitle="Housing analytics in R"
          year="2025"
          img="/predihome.jpeg"
          alt="PrediHome"
          desc="An R and Shiny app that ranks Canadian provinces on affordability, using housing price index, unemployment and employment data from 1986 through projections to 2035."
          tags={["R", "Shiny", "ggplot2", "dplyr"]}
          links={[{ label: "Code", href: "https://github.com/RafatH0ssain/PrediHome" }]}
        />
        <Shelf
          title="LBook"
          subtitle="Library inventory system"
          year="2024"
          img="/lbook.jpeg"
          alt="LBook"
          desc="A team built web application for book cataloguing and borrower tracking, on a MySQL database tuned for fast retrieval."
          tags={["PHP", "MySQL", "JavaScript"]}
          links={[{ label: "Code", href: "https://github.com/nafisahnubah/lbook" }]}
        />
        <Shelf
          title="JSON Compiler"
          subtitle="Recursive descent parser"
          year="2024"
          img="/json-compiler-abstract-visualization.png"
          alt="JSON compiler"
          desc="A Python scanner and recursive descent parser that takes JSON token streams and builds abstract syntax trees, with syntactic and semantic analysis on the way through."
          tags={["Python", "Lexer", "AST generation"]}
          links={[{ label: "Code", href: "https://github.com/nafisahnubah/json-compiler-frontend" }]}
        />
        <Shelf
          title="Board Game Simulation"
          subtitle="Java, 8 by 8 grid"
          year="2024"
          img="/simple-board-game-ui.png"
          alt="Board game simulation"
          desc="Four piece types, each with its own movement rules, on a command driven board. Built to practice object oriented design and command parsing."
          tags={["Java", "OOP", "CLI"]}
          links={[{ label: "Code", href: "https://github.com/nafisahnubah/simple-board-game" }]}
        />
        <Shelf
          last
          title="This portfolio"
          subtitle="Personal portfolio site"
          year="2025"
          img="/portfolio.png"
          alt="Portfolio site"
          desc="My personal portfolio website, built with Next.js and Tailwind CSS to show my experience, projects, certifications and academic background."
          tags={["Next.js", "Tailwind CSS", "Accessibility"]}
          links={[{ label: "Code", href: "https://github.com/nafisahnubah/portfolio-website" }]}
        />
      </div>
    </div>
  )
}
