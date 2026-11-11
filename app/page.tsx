import type React from "react"
import {
  profile,
  development,
  research,
  community,
  teaching,
  education,
  projectsSection,
  featured,
  featuredNote,
  moreProjects,
  certifications,
  contact,
  menu,
  type Entry,
  type Note,
  type Section,
} from "@/lib/content"
import { Enhance } from "@/components/enhance"
import { ContactForm } from "@/components/contact-form"

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})

function MarginNote({ note }: { note: Note }) {
  return (
    <span
      className={`nt ${note.side} ${note.color}${note.nowrap ? " wide" : ""}`}
      style={{ "--y": note.y, "--rot": note.rot } as React.CSSProperties}
      aria-hidden="true"
    >
      <i className="ar" data-ar={note.side === "r" ? "l" : "r"} />
      <span className="nw">
        {note.doodle && <i className="mtn" data-doodle={note.doodle} />}
        {note.lines.map((l, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {l}
          </span>
        ))}
      </span>
    </span>
  )
}

function hasDetails(e: Entry) {
  return Boolean(e.meta || e.desc || e.bullets?.length || e.tags?.length || e.credId || e.links?.length || e.img)
}

function Details({ e }: { e: Entry }) {
  const text = (
    <div className="xtx">
      {e.meta && <p className="xm">{e.meta}</p>}
      {e.desc && <p className="xd">{e.desc}</p>}
      {e.bullets && e.bullets.length > 0 && (
        <ul className="xl">
          {e.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {e.tags && e.tags.length > 0 && <p className="xt">{e.tags.join(" · ")}</p>}
      {e.credId && <p className="xm">Credential ID {e.credId}</p>}
      {e.links && e.links.length > 0 && (
        <p className="xk">
          {e.links.map((l) => (
            <a key={l.label} href={l.href} {...ext(l.href)}>
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </p>
      )}
    </div>
  )
  return (
    <div className="xp" id={`xp-${e.id}`} data-xp>
      <div className="xpi">
        <div className={`xpc${e.img ? " wimg" : ""}`}>
          {e.img && (
            <span className="xim">
              <img src={e.img} alt={e.alt ?? ""} loading="lazy" />
            </span>
          )}
          {text}
        </div>
      </div>
    </div>
  )
}

function EntryRow({ e, cert }: { e: Entry; cert?: boolean }) {
  const expandable = hasDetails(e)
  return (
    <div className={`ent${cert ? " cert" : ""}`}>
      <div className="eh">
        {e.href ? (
          <a href={e.href} {...ext(e.href)}>
            <b>{e.title}</b> <span className="lk" aria-hidden="true">↗</span>
          </a>
        ) : (
          <b>{e.title}</b>
        )}
        <span className="eo">{e.org}</span>
        <span className="ea">
          <span className="ed">{e.date}</span>
          {expandable && (
            <button type="button" className="xb" data-xb aria-expanded="false" aria-controls={`xp-${e.id}`}>
              details +
            </button>
          )}
        </span>
      </div>
      {e.short && <p>{e.short}</p>}
      {expandable && <Details e={e} />}
      {e.note && <MarginNote note={e.note} />}
    </div>
  )
}

function ExperienceSection({ s }: { s: Section }) {
  return (
    <section className={`blk${s.variant ? " " + s.variant : ""}`} id={s.id}>
      <h2>{s.title}</h2>
      {s.entries.map((e) => (
        <EntryRow key={e.id} e={e} />
      ))}
    </section>
  )
}

export default function HomePage() {
  const nameChars = [...profile.name]
  const tabs = menu.filter((m) => m.tab)

  return (
    <div className="r7c">
      <header className="bar">
        <span className="bt">{profile.name}</span>
        <div className="bc">
          <div className="mnu" data-mnu>
            <button
              type="button"
              className="burger"
              data-burger
              aria-expanded="false"
              aria-controls="sec-menu"
              aria-label="Jump to a section"
            >
              <i />
              <i />
              <i />
            </button>
            <div className="drop" id="sec-menu" data-drop>
              <p className="dh">Jump to</p>
              <ul>
                {menu.map((m, k) => (
                  <li key={m.id} style={{ "--k": k } as React.CSSProperties}>
                    <a href={`#${m.id}`} data-go={m.id}>
                      <span className="mn">{String(k + 1).padStart(2, "0")}</span>
                      {m.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <nav className="tabs" aria-label="Sections">
        {tabs.map((t, i) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="tab"
            style={{ "--tc": t.color, "--ti": i } as React.CSSProperties}
            data-tab={t.id}
          >
            {t.tab}
          </a>
        ))}
      </nav>

      <main className="doc">
        <div className="pencil" data-pencil aria-hidden="true" />

        <section className="blk top">
          <h1>
            <span className="nm" aria-label={profile.name}>
              {nameChars.map((c, i) => (
                <span className="lt" key={i} aria-hidden="true">
                  <span className="li" style={{ "--i": i } as React.CSSProperties}>
                    {c === " " ? " " : c}
                  </span>
                </span>
              ))}
            </span>
            <i className="nsw" data-nsw aria-hidden="true" />
            <MarginNote note={{ side: "r", color: "cb", y: "6px", rot: "-4deg", lines: ["that's me!", "hi there"] }} />
          </h1>
          <p className="role">{profile.role}</p>
          <p className="ct">
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
            <a href={profile.github} target="_blank" rel="noopener">
              github.com/nafisahnubah
            </a>{" "}
            ·{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </p>
          <p className="sum">
            I&apos;m a fourth year Computer Science Honours student at Dalhousie University,{" "}
            <mark className="hl">open to 2027 new grad software and ML roles</mark>. I develop{" "}
            <span className="ring">
              cloud-based software
              <i className="rs" data-shape="ring" style={{ left: -14, right: -12 }} />
            </span>{" "}
            across the full stack, do{" "}
            <span className="ring">
              machine learning research
              <i className="rs" data-shape="under" />
            </span>
            , and spend the rest of my time mentoring and community building.
          </p>
          <dl className="stats">
            {profile.stats.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ExperienceSection s={development} />
        <ExperienceSection s={research} />
        <ExperienceSection s={community} />
        <ExperienceSection s={teaching} />

        <section className="blk card" id={education.id}>
          <h2>{education.title}</h2>
          <div className="ent">
            <div className="eh">
              <b>{education.degree}</b>
              <span className="eo">{education.school}</span>
              <span className="ed">{education.date}</span>
            </div>
            <p>
              CGPA{" "}
              <span className="ring">
                {education.cgpa}
                <i className="rs" data-shape="ring" />
              </span>{" "}
              / {education.scale} · {education.standing}
            </p>
            <MarginNote note={education.note} />
          </div>
          <p className="sub2">Awards</p>
          <ul className="aw">
            {education.awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="blk" id={projectsSection.id}>
          <h2>{projectsSection.title}</h2>
          <div className="feat">
            {featured.map((p) => {
              const inner = (
                <>
                  <span className={`fi${p.img ? "" : " ph"}`}>
                    {p.img ? <img src={p.img} alt={p.alt} loading="lazy" /> : <span className="pht">{p.title}</span>}
                  </span>
                  <span className="fh">
                    <span className="ftl">
                      <b>{p.title}</b> {p.href && <span className="lk" aria-hidden="true">↗</span>}
                    </span>
                    <span className="ed">{p.year}</span>
                  </span>
                  <span className="fd">{p.short}</span>
                  <span className="eo">{p.tech}</span>
                </>
              )
              return p.href ? (
                <a key={p.title} className="fp" href={p.href} target="_blank" rel="noopener">
                  {inner}
                </a>
              ) : (
                <div key={p.title} className="fp">
                  {inner}
                </div>
              )
            })}
            <MarginNote note={featuredNote} />
          </div>
          <p className="sub2">More projects</p>
          {moreProjects.map((e) => (
            <EntryRow key={e.id} e={e} />
          ))}
        </section>

        <section className="blk" id={certifications.id}>
          <h2>{certifications.title}</h2>
          {certifications.entries.map((e) => (
            <EntryRow key={e.id} e={e} cert />
          ))}
        </section>

        <section className="blk" id={contact.id}>
          <h2>{contact.title}</h2>
          <p className="cin">
            {contact.intro}
            <MarginNote note={contact.note} />
          </p>
          <div className="two cgrid">
            <ContactForm action={contact.formAction} />
            <dl className="ways">
              {contact.other.map((o) => (
                <div key={o.label}>
                  <dt>{o.label}</dt>
                  {o.items.map((it) => (
                    <dd key={it.text}>{it.href ? <a href={it.href} {...ext(it.href)}>{it.text}</a> : it.text}</dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <button type="button" className="plane" data-plane aria-label="Back to top">
        <span data-planeart aria-hidden="true" />
        <span className="pt">back to top</span>
      </button>

      <Enhance />
    </div>
  )
}
