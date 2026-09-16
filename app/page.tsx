import Link from "next/link"
import { HeroCanvas } from "@/components/hero-canvas"

export default function HomePage() {
  return (
    <div className="w-full paper" style={{ background: "var(--bg)" }}>
      <div className="relative overflow-hidden" style={{ borderBottom: "2px solid var(--rule)" }}>
        <HeroCanvas />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="px-4 sm:px-11 pt-16 pb-12 sm:pt-[72px] sm:pb-16 max-w-[860px]">
            <div
              className="kick rise flex items-center gap-2.5 mb-4"
              style={{ color: "var(--sage-deep)" }}
            >
              <span style={{ width: 22, height: 2, background: "var(--sage)", flexShrink: 0 }} />
              <span>Halifax, Nova Scotia · open to 2027 new grad software and ML roles</span>
            </div>
            <h1 className="ser rise text-5xl sm:text-7xl lg:text-[84px]" style={{ lineHeight: 0.97, margin: "0 0 22px" }}>
              Software developer,
              <br />
              machine learning
              <br />
              researcher, <em style={{ color: "var(--sage)" }}>occasional
              <br />
              teacher</em>.
            </h1>
            <p
              className="rise"
              style={{ fontSize: 18.5, lineHeight: 1.55, maxWidth: "56ch", margin: "0 0 16px", color: "rgba(47,58,47,.82)" }}
            >
              Fourth year computer science at Dalhousie. I like problems where somebody is waiting on the answer: an
              accessibility office drowning in exam PDFs, a glacier that will not hold still, a first year whose
              flexbox refuses to behave.
            </p>
            <p
              className="rise"
              style={{ fontSize: 15.5, lineHeight: 1.65, maxWidth: "56ch", margin: "0 0 28px", color: "rgba(47,58,47,.62)" }}
            >
              Twelve roles so far, most of them overlapping. Grouped by the kind of work rather than the calendar, with
              the full history of the places I stayed long enough to change titles.
            </p>
            <div className="rise flex gap-3 items-center flex-wrap">
              <Link href="/experience" className="btnx btn-s">
                Start with the experience
              </Link>
              <a className="btnx btn-o" href="#resume">
                Résumé, PDF
              </a>
            </div>
            <div className="rise" style={{ marginTop: 14, fontSize: 12.5, color: "rgba(47,58,47,.5)" }}>
              Move your cursor over this panel.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4">
          {[
            { n: "03", label: "Development", detail: "ImmediaC, Computing Councils of Canada, Dal Accessibility Centre" },
            { n: "02", label: "Research", detail: "Glacier melt segmentation, fMRI biomarkers in SCA7" },
            { n: "05", label: "Community", detail: "Two societies, one faculty, three promotions" },
            { n: "04", label: "Teaching and support", detail: "SuperNOVA camps, web development labs, exam invigilation" },
          ].map((s, i) => {
            const borderClasses = [
              "border-r border-b sm:border-b-0",
              "border-b sm:border-b-0 sm:border-r",
              "border-r",
              "",
            ][i]
            return (
              <Link
                key={s.label}
                href="/experience"
                className={`row text-left border-[var(--hair)] p-[22px] sm:p-[26px_22px] ${borderClasses}`}
                style={{ color: "inherit" }}
              >
                <div className="ser" style={{ fontSize: 44, lineHeight: 1 }}>
                  {s.n}
                </div>
                <div className="kick" style={{ marginTop: 6 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 13.5, color: "rgba(47,58,47,.65)", marginTop: 8 }}>{s.detail}</div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 py-12">
          <div className="flex items-baseline justify-between gap-5 flex-wrap mb-6">
            <h2 className="ser text-4xl" style={{ margin: 0 }}>
              Three I would show you first
            </h2>
            <Link href="/projects" className="btnx btn-o">
              All ten projects
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                img: "/modern-web-dashboard-for-ai-debugging-tool.png",
                alt: "DEEBug dashboard",
                meta: "2025 · Team of five",
                title: "DEEBug",
                desc: "Finds and explains performance bugs in deep learning models. Flask service, Gemini explanation layer, React front end.",
              },
              {
                img: "/nep.png",
                alt: "Normalized Entity Parser",
                meta: "2025 · Still in use",
                title: "Normalized Entity Parser",
                desc: "Turns SARS exam roster PDFs into readable summaries for Dalhousie's Student Accessibility Centre.",
              },
              {
                img: "/color-contrast-accessibility-tool.png",
                alt: "color-contrast-checker2",
                meta: "2025 · Published on npm",
                title: "color-contrast-checker2",
                desc: "WCAG contrast checking across hex, rgb, hsl, hsv, named and integer colour formats.",
              },
            ].map((p) => (
              <Link href="/projects" key={p.title}>
                <img
                  className="shot"
                  src={p.img}
                  alt={p.alt}
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <div className="kick" style={{ marginTop: 12 }}>
                  {p.meta}
                </div>
                <h3 className="ser" style={{ fontSize: 26, margin: "6px 0 6px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: "rgba(47,58,47,.75)" }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_1fr]">
          <div className="px-4 sm:px-11 py-11 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--rule)]">
            <h2 className="ser text-3xl" style={{ margin: "0 0 6px" }}>
              A short version
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "rgba(47,58,47,.78)", margin: "0 0 14px" }}>
              I started in web development labs, teaching other students to debug their own CSS, and it set the
              pattern for everything since: build the thing, then make sure somebody can use it. At ImmediaC that
              meant a cloud ERP platform in React and .NET with OpenAI powered workflow automation. At the
              Accessibility Centre it meant a Java tool that saved a team their exam season.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "rgba(47,58,47,.78)", margin: 0 }}>
              The research pulls in the other direction, which I like. Satellite imagery of Greenland, ten years of
              it, segmented frame by frame to see what the ice has done. Before that, fMRI scans and the search for
              a biomarker.
            </p>
          </div>
          <div className="px-4 sm:px-11 py-11">
            <div className="kick" style={{ marginBottom: 14 }}>
              Credentials
            </div>
            {[
              ["AWS Certified Cloud Practitioner", "Amazon Web Services · 2025"],
              ["Deep Learning Specialization", "DeepLearning.AI · 2026"],
              ["Practical Cybersecurity", "ShiftKey Labs · 2025"],
              ["Cloud Foundations", "ShiftKey Labs · 2025"],
              ["Fundamentals of Cloud Administration with Azure", "ShiftKey Labs · 2025"],
            ].map(([title, sub], i, arr) => (
              <div
                key={title}
                style={{
                  fontSize: 15,
                  padding: i === 0 ? "0 0 10px" : "10px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--hair)" : undefined,
                }}
              >
                {title}
                <br />
                <span style={{ fontSize: 12.5, color: "rgba(47,58,47,.55)" }}>{sub}</span>
              </div>
            ))}
            <Link href="/certifications" className="btnx btn-o" style={{ marginTop: 18 }}>
              Verify any of these
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 py-12">
          <div className="kick" style={{ marginBottom: 22 }}>
            Academics and awards
          </div>
          <div className="grid sm:grid-cols-3 gap-7 items-start">
            <div>
              <div className="ser" style={{ fontSize: 44, lineHeight: 1 }}>
                4.22<span style={{ fontSize: 22, color: "rgba(47,58,47,.5)" }}>/4.30</span>
              </div>
              <div className="kick" style={{ marginTop: 8 }}>
                CGPA, Dalhousie
              </div>
            </div>
            <div>
              <div className="ser" style={{ fontSize: 44, lineHeight: 1 }}>
                Sexton
              </div>
              <div className="kick" style={{ marginTop: 8 }}>
                Scholar standing
              </div>
            </div>
            <div>
              <div className="kick" style={{ marginBottom: 10 }}>
                Awards
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(47,58,47,.75)" }}>
                Chancellor&apos;s Scholarship
                <br />
                Entrance Community and Leadership Award
                <br />
                Global Renewable Scholar Award
                <br />
                WiTS Helping Hands Award
                <br />
                WiTS Academic Distinction
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" style={{ background: "var(--sage-deep)", color: "var(--bg)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 py-14">
          <h2 className="ser text-4xl sm:text-5xl" style={{ lineHeight: 1.02, margin: "0 0 18px", maxWidth: "26ch" }}>
            If any of this is useful to your team, I would like to hear from you.
          </h2>
          <Link href="/contact" className="btnx" style={{ background: "var(--bg)", color: "var(--ink)" }}>
            Nafisah.Nubah@dal.ca
          </Link>
        </div>
      </div>
    </div>
  )
}
