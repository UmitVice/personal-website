import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
  Users2,
} from "lucide-react";
import { experiences, profile, skillGroups } from "@/lib/data";
import { individualProjects, projects } from "@/lib/projects";
import { ProjectCategory, ProjectContent } from "@/components/sections/project-content";

const leadershipPrinciples = [
  {
    icon: Layers3,
    index: "01",
    title: "Build across the product",
    body: "At Marti Technologies, I combined team leadership with development across mobility products, web applications, mobile experiences and operational software.",
  },
  {
    icon: Users2,
    index: "02",
    title: "Lead while implementing",
    body: "At Optimus Software, I remained directly involved in web and mobile implementation while carrying team leadership responsibilities across the client portfolio.",
  },
  {
    icon: Gauge,
    index: "03",
    title: "Own the delivery lifecycle",
    body: "My end-to-end project work connects requirements and architecture with implementation, integrations, testing, deployment, iteration and production support.",
  },
] as const;

const proofPoints = [
  { value: "8+", label: "years building products" },
  { value: "AI + ML", label: "applied product development" },
  { value: "Web + Mobile", label: "full stack delivery" },
  { value: "0→1", label: "products shipped end-to-end" },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Umit Vice, back to top">
          <span>UV</span>
          <span className="wordmark-copy">
            <strong>Umit Vice</strong>
            <small>AI & full stack engineering</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#products">Individual Projects</a>
          <a href="#leadership">Leadership</a>
          <a href="#work">Company Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="mailto:umitvice@gmail.com">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top" tabIndex={-1}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span /> Open to AI &amp; senior full stack engineering roles</div>
          <p className="hero-kicker">{profile.title}</p>
          <p className="hero-leadership">{profile.subtitle}</p>
          <h1>
            I build AI products
            <span>and complete web applications.</span>
          </h1>
          <p className="hero-intro">
            {profile.summary}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore my work <ArrowDownRight aria-hidden="true" />
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
              alt="Umit Vice, AI Engineer and Senior Full Stack Engineer"
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
            <p className="section-label"><Sparkles aria-hidden="true" /> Independent product development</p>
            <h2>Individual Projects</h2>
          </div>
          <p>
            Three independently developed products connecting application architecture, data and user experience. Explore the engineering work and the applications below.
          </p>
        </div>

        <div className="product-stack">
          {individualProjects.map((product, index) => (
            <article className={`product-feature product-${product.tone}`} key={product.id} id={product.id}>
              <div className="product-copy">
                <div className="product-number">{String(index + 1).padStart(2, "0")} / <ProjectCategory project={product} /></div>
                <h3>{product.name}<span className="product-subtitle">{product.title.split(" | ")[1]}</span></h3>
                <p className="project-role">{product.role}</p>
                <ProjectContent project={product} />
              </div>

              <a
                className="device-scene"
                href={product.links[0]!.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${product.name}`}
              >
                <span className="device-glow" aria-hidden="true" />
                <span className="browser-device">
                  <span className="browser-bar">
                    <span className="browser-dots"><i /><i /><i /></span>
                    <span className="browser-address">{new URL(product.links[0]!.href).host}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                  <span className="browser-screen">
                    <Image
                      src={product.image!}
                      alt={product.imageAlt!}
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
            <p className="section-label"><Users2 aria-hidden="true" /> Hands-on team leadership</p>
            <h2>Leadership grounded in development.</h2>
          </div>
          <p>Team leadership at Marti Technologies and Optimus Software adds to my work as an engineer. I stay involved in the software, from implementation and integration to delivery.</p>
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
            <span className="band-label">From requirements to production</span>
            <h3>End-to-end ownership within company work.</h3>
          </div>
          <ul>
            <li><CheckCircle2 /> Requirements &amp; software architecture</li>
            <li><CheckCircle2 /> Frontend, backend &amp; React Native development</li>
            <li><CheckCircle2 /> Integrations, application data &amp; testing</li>
            <li><CheckCircle2 /> Deployment, iteration &amp; production support</li>
          </ul>
        </div>
      </section>

      <section className="section company-work" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label"><BriefcaseBusiness aria-hidden="true" /> Engineering contributions</p>
            <h2>Company Projects</h2>
          </div>
          <p>
            Products delivered while working for companies, spanning AI, mobility, telecom, HR technology and trading. My contributions connect hands-on software development with integration, product ownership and production delivery.
          </p>
        </div>
        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-row" key={project.id} id={project.id}>
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="work-title">
                <p>{project.company}</p>
                <ProjectCategory project={project} />
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
              </div>
              <div className="work-detail">
                <ProjectContent project={project} />
              </div>
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
            I connect Python and machine learning with full stack web development and React Native mobile delivery, taking AI-enabled products from application data to the user experience.
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
          I am interested in AI Engineer, Senior AI Engineer and Senior Full Stack Engineer opportunities where I can combine applied AI work with end-to-end software delivery.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:umitvice@gmail.com">
            umitvice@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="social-links">
            <a href="https://linkedin.com/in/umitvice" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span>in</span></a>
            <a href="https://github.com/UmitVice" target="_blank" rel="noreferrer" aria-label="GitHub"><span>GH</span></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wordmark footer-wordmark"><span>UV</span><strong>Umit Vice</strong></div>
        <p>{profile.title} · Istanbul, Türkiye</p>
        <p>© {new Date().getFullYear()} Designed &amp; engineered with intent.</p>
      </footer>
    </main>
  );
}
