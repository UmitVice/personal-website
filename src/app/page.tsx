import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Gauge,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Users2,
} from "lucide-react";
import { experiences, projects, skillGroups } from "@/lib/data";

const personalProducts = [
  {
    name: "Vaniras",
    eyebrow: "Founder-built · AI / Fintech",
    description:
      "An AI-powered market intelligence platform that turns probabilistic forecasts into clear, decision-ready signals.",
    outcome:
      "Machine-learning forecasts, market heatmaps, watchlists and stock intelligence designed as one focused product system.",
    stack: ["Machine Learning", "Next.js", "Product Architecture", "Data UX"],
    href: "https://vaniras.com/",
    image: "/projects/vaniras-preview.png",
    imageAlt: "Vaniras market intelligence product preview",
    tone: "blue",
    number: "01",
  },
  {
    name: "Life World",
    eyebrow: "Founder-built · Marketplace",
    description:
      "A thoughtfully engineered real-estate marketplace for discovering and comparing exceptional homes.",
    outcome:
      "A premium discovery experience with structured property data, considered search flows and an editorial visual system.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Marketplace UX"],
    href: "https://life-world.vercel.app/",
    image: "/projects/life-world-preview.png",
    imageAlt: "Life World real estate marketplace product preview",
    tone: "green",
    number: "02",
  },
] as const;

const leadershipPrinciples = [
  {
    icon: Layers3,
    index: "01",
    title: "Turn ambiguity into a system",
    body: "I translate broad product goals into clear architecture, milestones, ownership and measurable release criteria.",
  },
  {
    icon: Users2,
    index: "02",
    title: "Raise the team’s execution ceiling",
    body: "I make the path easier to follow through focused technical direction, pragmatic standards and high-signal communication.",
  },
  {
    icon: Gauge,
    index: "03",
    title: "Ship quality that compounds",
    body: "Performance, resilience and developer experience are designed into delivery—not scheduled as a cleanup phase.",
  },
] as const;

const proofPoints = [
  { value: "8+", label: "years building products" },
  { value: "100/100", label: "Lighthouse performance" },
  { value: "+25%", label: "Core Web Vitals uplift" },
  { value: "0→1", label: "products shipped end-to-end" },
] as const;

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Umit Vice, back to top">
          <span>UV</span>
          <span className="wordmark-copy">
            <strong>Umit Vice</strong>
            <small>Product engineering leader</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#leadership">Leadership</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="mailto:umitvice@gmail.com">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span /> Open to senior engineering &amp; leadership roles</div>
          <p className="hero-kicker">Senior Software Engineer · AI &amp; Engineering Leadership</p>
          <h1>
            I build the systems behind
            <span> ambitious products.</span>
          </h1>
          <p className="hero-intro">
            Product-minded engineer with 8+ years turning uncertain ideas into fast,
            resilient software—and helping teams make better technical decisions while doing it.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore my work <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href="/Umit_Vice_Senior_FullStack_AI_Engineer_Resume.pdf"
              download
            >
              <Download aria-hidden="true" /> Download résumé
            </a>
          </div>
          <div className="hero-trust">
            <span>Based in Istanbul · Working globally</span>
            <span className="trust-line" />
            <a href="https://github.com/UmitVice" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/umitvice" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src="/Umit_Vice_Profile_Photo.jpg"
              alt="Umit Vice, Senior Software Engineer"
              fill
              priority
              sizes="(max-width: 900px) 82vw, 38vw"
            />
            <div className="portrait-shade" />
          </div>
          <div className="portrait-note note-top">
            <BrainCircuit aria-hidden="true" />
            <span><strong>AI-native</strong> product systems</span>
          </div>
          <div className="portrait-note note-bottom">
            <CheckCircle2 aria-hidden="true" />
            <span><strong>End-to-end</strong> technical ownership</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proofPoints.map((point) => (
          <div className="proof" key={point.label}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading products-heading">
          <div>
            <p className="section-label"><Sparkles aria-hidden="true" /> Founder-built products</p>
            <h2>Ideas I took from zero to live.</h2>
          </div>
          <p>
            Two products where I owned the problem framing, architecture, interface and production delivery.
            Hover to explore the build in three dimensions.
          </p>
        </div>

        <div className="product-stack">
          {personalProducts.map((product, index) => (
            <article className={`product-feature product-${product.tone}`} key={product.name}>
              <div className="product-copy">
                <div className="product-number">{product.number} / Personal product</div>
                <p className="product-eyebrow">{product.eyebrow}</p>
                <h3>{product.name}</h3>
                <p className="product-lead">{product.description}</p>
                <p className="product-outcome">{product.outcome}</p>
                <ul className="product-tags" aria-label={`${product.name} technologies`}>
                  {product.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="product-link" href={product.href} target="_blank" rel="noreferrer">
                  Visit live product <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <a
                className="device-scene"
                href={product.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${product.name}`}
              >
                <span className="device-glow" aria-hidden="true" />
                <span className="browser-device">
                  <span className="browser-bar">
                    <span className="browser-dots"><i /><i /><i /></span>
                    <span className="browser-address">{new URL(product.href).host}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                  <span className="browser-screen">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 900px) 94vw, 56vw"
                    />
                  </span>
                </span>
                <span className="device-base" aria-hidden="true" />
                <span className="device-shadow" aria-hidden="true" />
                <span className="device-index" aria-hidden="true">{index + 1}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section leadership-section" id="leadership">
        <div className="section-heading leadership-heading">
          <div>
            <p className="section-label"><Users2 aria-hidden="true" /> Engineering leadership</p>
            <h2>Leadership is a force multiplier.</h2>
          </div>
          <blockquote>
            “The best architecture is the one a team can understand, operate and evolve with confidence.”
          </blockquote>
        </div>
        <div className="principles-grid">
          {leadershipPrinciples.map(({ icon: Icon, index, title, body }) => (
            <article className="principle" key={title}>
              <div className="principle-top"><Icon aria-hidden="true" /><span>{index}</span></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="leadership-band">
          <div>
            <span className="band-label">My operating range</span>
            <h3>Architecture depth. Product judgment. Calm execution.</h3>
          </div>
          <ul>
            <li><CheckCircle2 /> Technical strategy &amp; roadmaps</li>
            <li><CheckCircle2 /> Cross-functional delivery</li>
            <li><CheckCircle2 /> Mentoring &amp; engineering standards</li>
            <li><CheckCircle2 /> Reliability &amp; performance culture</li>
          </ul>
        </div>
      </section>

      <section className="section company-work" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label"><BriefcaseBusiness aria-hidden="true" /> Selected company work</p>
            <h2>High-stakes products, shipped with ownership.</h2>
          </div>
          <p>
            A track record spanning AI platforms, mobility, telecom, marketplaces and enterprise systems.
          </p>
        </div>
        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-row" key={project.title}>
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="work-title">
                <p>{project.company}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="work-detail">
                <p>{project.impact}</p>
                <ul>
                  {project.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <span className="work-role">{project.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading experience-heading">
          <div>
            <p className="section-label"><Globe2 aria-hidden="true" /> Career journey</p>
            <h2>Built across teams, sectors and borders.</h2>
          </div>
          <a className="text-link" href="/Umit_Vice_Senior_FullStack_AI_Engineer_Resume.pdf" download>
            Full résumé <Download aria-hidden="true" />
          </a>
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-marker"><span>{index + 1}</span></div>
              <div className="timeline-meta">
                <p>{experience.period}</p>
                <span><MapPin aria-hidden="true" /> {experience.location}</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p>{experience.highlights[0]}</p>
              </div>
              <div className="timeline-tags">
                {experience.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilities-section" id="capabilities">
        <div className="capabilities-intro">
          <p className="section-label"><Code2 aria-hidden="true" /> Technical range</p>
          <h2>Hands-on enough to go deep. Experienced enough to see the whole system.</h2>
          <p>
            I work across the product surface—from interface architecture and AI workflows to APIs,
            data, cloud infrastructure and delivery quality.
          </p>
        </div>
        <div className="capability-list">
          {skillGroups.map((group, index) => (
            <div className="capability-row" key={group.label}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-noise" aria-hidden="true" />
        <p className="section-label"><Mail aria-hidden="true" /> Start a conversation</p>
        <h2>Looking for someone who can own the hard parts?</h2>
        <p>
          I&apos;m open to Senior Software Engineer and Engineering Manager opportunities where
          product ambition, technical quality and team impact all matter.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:umitvice@gmail.com">
            umitvice@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="social-links">
            <a href="https://linkedin.com/in/umitvice" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/UmitVice" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wordmark footer-wordmark"><span>UV</span><strong>Umit Vice</strong></div>
        <p>Senior Software Engineer · Engineering Leadership · Istanbul, Türkiye</p>
        <p>© {new Date().getFullYear()} Designed &amp; engineered with intent.</p>
      </footer>
    </main>
  );
}
