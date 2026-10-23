import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Globe2,
  Mail,
  Sparkles,
} from "lucide-react";
import { CompanyCard } from "@/components/company-card";
import { ExternalLink } from "@/components/external-link";
import { JsonLd } from "@/components/json-ld";
import { ProductSlide } from "@/components/product-slide";
import { Rail } from "@/components/rail";
import {
  earlierRoles,
  education,
  formatMonth,
  hero,
  languages,
  principles,
  proofPoints,
  roles,
  skillGroups,
} from "@/content/profile";
import { companyProjects, products } from "@/content/projects";
import { SITE_DESCRIPTION, homeJsonLd, pageMetadata } from "@/lib/seo";
import { MAILTO, PERSON, SOCIAL_LINKS } from "@/lib/site";

export const metadata = pageMetadata({ path: "/", description: SITE_DESCRIPTION, type: "profile" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" /> {hero.availability}
          </p>
          <h1 id="hero-title">
            <span className="hero-kicker">
              {PERSON.name} — {PERSON.jobTitle}
            </span>
            <span className="hero-statement">
              {hero.statement[0]} <span>{hero.statement[1]}</span>
            </span>
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <p className="hero-now">
            <span>{hero.now.label}</span>
            <a href={hero.now.href}>
              {hero.now.text} <ArrowRight aria-hidden="true" />
            </a>
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={MAILTO}>
              Email me <ArrowUpRight aria-hidden="true" />
            </a>
            <ExternalLink className="hero-profile" href={SOCIAL_LINKS.github} me>
              GitHub
            </ExternalLink>
            <ExternalLink className="hero-profile" href={SOCIAL_LINKS.linkedin} me>
              LinkedIn
            </ExternalLink>
          </div>
          <p className="hero-location">{hero.location}</p>
        </div>

        <div className="portrait-stage">
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src={PERSON.photo}
              alt={`${PERSON.name}, ${PERSON.jobTitle}`}
              fill
              loading="eager"
              sizes="(max-width: 900px) 200px, 250px"
            />
            <div className="portrait-shade" />
          </div>
          {hero.notes.map((note, index) => (
            <p key={note.title} className={`portrait-note ${index === 0 ? "note-top" : "note-bottom"}`}>
              {index === 0 ? <BrainCircuit aria-hidden="true" /> : <CheckCircle2 aria-hidden="true" />}
              <span>
                <strong>{note.title}</strong> {note.body}
              </span>
            </p>
          ))}
        </div>

        <div className="hero-previously">
          <span>Previously</span>
          <ul aria-label="Previous employers">
            {hero.previously.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proofPoints.map((point) => (
          <div className="proof" key={point.label}>
            <strong>{point.value}</strong>
            <span>
              <b>{point.label}</b>
              {point.detail}
            </span>
          </div>
        ))}
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-label">
              <Sparkles aria-hidden="true" /> Independent products
            </p>
            <h2 id="work-title">Products I built end to end.</h2>
          </div>
          <p>
            Two AI products and a marketplace, each owned from architecture to deployment. Swipe, use the arrows or
            jump straight to a product.
          </p>
        </div>
        <Rail
          label="Independent products"
          noun="product"
          variant="feature"
          showChips
          items={products.map((product) => ({ id: product.slug, label: product.name }))}
        >
          {products.map((product, index) => (
            <ProductSlide key={product.slug} product={product} index={index} total={products.length} />
          ))}
        </Rail>
      </section>

      <section className="section company-section" id="company-work" aria-labelledby="company-title">
        <div className="section-heading">
          <div>
            <p className="section-label">
              <BriefcaseBusiness aria-hidden="true" /> Company projects
            </p>
            <h2 id="company-title">Shipped inside product teams.</h2>
          </div>
          <p>
            AI features, real-time systems, enterprise platforms and trading products, built with teams at Bolt
            Insight, Marti, Vodafone, Talent500 and Optimus Software.
          </p>
        </div>
        <Rail
          label="Company projects"
          noun="project"
          variant="compact"
          items={companyProjects.map((project) => ({ id: project.id, label: project.name }))}
        >
          {companyProjects.map((project, index) => (
            <CompanyCard key={project.id} project={project} index={index} total={companyProjects.length} />
          ))}
        </Rail>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p className="section-label">
            <Globe2 aria-hidden="true" /> Experience
          </p>
          <h2 id="experience-title">Built across teams, sectors and borders.</h2>
          <p>
            Remote work with teams in the U.S. and the U.K., and hands-on technical leadership in Istanbul across AI,
            mobility, telecom, HR tech and trading.
          </p>
          <dl className="experience-facts">
            <div>
              <dt>Education</dt>
              <dd>
                {education.degree}, {education.school} ({education.period})
              </dd>
            </div>
            {languages.map((language) => (
              <div key={language.name}>
                <dt>{language.name}</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="roles">
          {roles.map((role) => (
            <li className="role" key={role.company}>
              <div className="role-meta">
                <p className="role-period">
                  <time dateTime={role.start}>{formatMonth(role.start)}</time> –{" "}
                  <time dateTime={role.end}>{formatMonth(role.end)}</time>
                </p>
                <p className="role-location">{role.location}</p>
                <a className="role-link" href={`#${role.projectId}`}>
                  Projects <ArrowRight aria-hidden="true" />
                  <span className="sr-only">: {role.company}</span>
                </a>
              </div>
              <div className="role-body">
                <p className="role-company">{role.company}</p>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
              </div>
            </li>
          ))}
          <li className="role role-earlier">
            <div className="role-meta">
              <p className="role-period">2017 – 2021</p>
            </div>
            <div className="role-body">
              <p className="role-company">Earlier</p>
              <ul>
                {earlierRoles.map((role) => (
                  <li key={role.company}>
                    <strong>{role.title}</strong>, {role.company} · {role.period}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section className="section capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <div>
            <p className="section-label">
              <Code2 aria-hidden="true" /> Capabilities
            </p>
            <h2 id="capabilities-title">Hands-on enough to go deep. Experienced enough to see the whole system.</h2>
          </div>
        </div>

        <div className="principles">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span className="principle-index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul className="chips">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="section-label">
          <Mail aria-hidden="true" /> Contact
        </p>
        <h2 id="contact-title">Hiring a Senior AI or Full Stack Engineer?</h2>
        <p>
          I am looking for senior roles where applied AI meets end-to-end product delivery. Email is the fastest way to
          reach me.
        </p>
        <div className="contact-actions">
          <a className="button button-dark" href={MAILTO}>
            {PERSON.email} <ArrowUpRight aria-hidden="true" />
          </a>
          <ExternalLink className="button button-outline" href={SOCIAL_LINKS.linkedin} me>
            LinkedIn
          </ExternalLink>
          <ExternalLink className="button button-outline" href={SOCIAL_LINKS.github} me>
            GitHub
          </ExternalLink>
        </div>
      </section>
    </>
  );
}
