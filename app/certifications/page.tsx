function Cred({
  title,
  issuer,
  year,
  desc,
  tags,
  credId,
  verifyLabel,
  verifyHref,
  first,
  last,
}: {
  title: string
  issuer: string
  year: string
  desc: string
  tags: string[]
  credId?: string
  verifyLabel: string
  verifyHref: string
  first?: boolean
  last?: boolean
}) {
  return (
    <details
      open={first}
      style={{ borderTop: "1px solid var(--hair)", borderBottom: last ? "1px solid var(--hair)" : undefined }}
    >
      <summary
        className="row grid grid-cols-[24px_1fr] sm:grid-cols-[24px_1fr_230px_70px] gap-x-3.5 gap-y-1 items-baseline"
        style={{ padding: "16px 12px 16px 0" }}
      >
        <span className="chev">▶</span>
        <span style={{ fontWeight: 600, fontSize: 18 }}>{title}</span>
        <span className="col-span-2 sm:col-span-1" style={{ fontSize: 13.5, color: "rgba(47,58,47,.6)" }}>
          {issuer}
        </span>
        <span className="col-span-2 sm:col-span-1" style={{ fontSize: 13, color: "rgba(47,58,47,.5)" }}>
          {year}
        </span>
      </summary>
      <div className="panel" style={{ padding: "4px 0 22px 38px", maxWidth: "70ch" }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: "0 0 12px" }}>{desc}</p>
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 14 }}>
          {tags.map((t) => (
            <span key={t} className="tagx">
              {t}
            </span>
          ))}
        </div>
        {credId && (
          <div style={{ fontSize: 12.5, color: "rgba(47,58,47,.55)", marginBottom: 14 }}>Credential ID {credId}</div>
        )}
        <a className="btnx btn-s" href={verifyHref} target="_blank" rel="noopener">
          {verifyLabel}
        </a>
      </div>
    </details>
  )
}

export default function CertificationsPage() {
  return (
    <div className="w-full" style={{ background: "var(--bg)" }}>
      <div className="w-full" style={{ borderBottom: "2px solid var(--rule)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-14 pb-10">
          <div className="max-w-[820px]">
            <div className="kick" style={{ marginBottom: 14 }}>
              Five credentials, all verifiable
            </div>
            <h1 className="ser text-5xl sm:text-6xl" style={{ lineHeight: 1, margin: "0 0 18px" }}>
              Certifications
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(47,58,47,.78)", margin: 0 }}>
              Cloud, deep learning and security, in the order I took them. Every row links to the issuer&apos;s own
              verification page.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-11 pt-8 pb-11">
        <Cred
          title="AWS Certified Cloud Practitioner"
          issuer="Amazon Web Services"
          year="2025"
          desc="Foundational certification covering cloud concepts, core AWS services, security, pricing and support models. Valid through 2028."
          tags={["Cloud computing", "AWS", "Cloud services"]}
          credId="3ba7fdd31b034ac2b70922ff291b237a"
          verifyLabel="Verify on Credly"
          verifyHref="https://www.credly.com/badges/8779fae8-0b78-4810-b918-e031c5a814af/public_url"
        />
        <Cred
          title="Deep Learning Specialization"
          issuer="DeepLearning.AI"
          year="2026"
          desc="Five courses on neural networks, convolutional and recurrent architectures, transformers, and the practical workflow of training models in TensorFlow."
          tags={["Deep learning", "Neural networks", "TensorFlow", "CNNs", "RNNs"]}
          credId="T2TDSZEPH6UR"
          verifyLabel="Verify on Coursera"
          verifyHref="https://www.coursera.org/account/accomplishments/specialization/T2TDSZEPH6UR"
        />
        <Cred
          title="Practical Cybersecurity"
          issuer="ShiftKey Labs"
          year="2025"
          desc="Hands on work in threat detection, mitigation strategy and security practice on real applications."
          tags={["Cybersecurity"]}
          verifyLabel="Verify on Credsverse"
          verifyHref="https://credsverse.com/credentials/a0a8fced-94bb-46cb-a892-54054cf7c7e1"
        />
        <Cred
          title="Cloud Foundations"
          issuer="ShiftKey Labs"
          year="2025"
          desc="Core cloud services, architecture patterns and deployment practice."
          tags={["Cloud architecture", "AWS", "DevOps", "Infrastructure"]}
          verifyLabel="Verify on Credsverse"
          verifyHref="https://credsverse.com/credentials/09308d08-9796-4db0-8b18-3f8d3e5e891c"
        />
        <Cred
          last
          title="Fundamentals of Cloud Administration with Azure"
          issuer="ShiftKey Labs"
          year="2025"
          desc="Resource management, security, monitoring and optimisation inside Azure environments."
          tags={["Microsoft Azure", "Cloud administration", "Monitoring"]}
          verifyLabel="Verify on Credsverse"
          verifyHref="https://credsverse.com/credentials/e5258766-b644-4860-a2e0-46a246d1c410"
        />
      </div>
    </div>
  )
}
