import { certifications, education } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Education & Certifications
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {/* Education card */}
              <div className="glass rounded-xl p-5 md:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Education
                </h3>
                <p className="mt-2 text-sm font-medium text-on-surface">{education.degree}</p>
                <p className="text-sm text-on-surface-variant">{education.field}</p>
                <p className="mt-1 text-xs text-on-surface-variant">
                  {education.school}, {education.location}
                </p>
                <p className="text-xs text-on-surface-variant">{education.period}</p>
              </div>
              {/* Certification cards */}
              {certifications.map((cert) => (
                <div key={cert.title} className="glass rounded-xl p-5 md:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Certification
                  </h3>
                  <p className="mt-2 text-sm text-on-surface">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}