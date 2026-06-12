import FadeIn from '../components/FadeIn';

const ROLES = [
  {
    company: 'Spyne.ai',
    role: 'HR Business Partner',
    period: 'March 2024 — Present',
    location: 'Gurugram',
    summary:
      'Strategic HR partner to the C-suite through 115% headcount growth (144 → 310+) — people strategy, AI-powered HR tech, and data-driven performance frameworks.',
  },
  {
    company: 'SND Technologies',
    role: 'HR Intern',
    period: 'January 2024 — March 2024',
    location: 'Remote',
    summary:
      'Sourced and pre-screened talent for marketing and creative roles, delivering tight shortlists and sharper job specs for hiring managers.',
  },
  {
    company: 'Amazon',
    role: 'SPS Associate',
    period: 'June 2022 — December 2022',
    location: 'Remote',
    summary:
      'Resolved complex seller queries and partnered with payments, compliance, and tech teams to keep marketplace operations running smoothly.',
  },
  {
    company: 'HDFC Bank',
    role: 'Relationship Manager',
    period: 'January 2022 — June 2022',
    location: 'Noida',
    summary:
      'Met monthly sales targets across core banking products while deepening relationships with existing clients.',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {ROLES.map((item, i) => (
          <FadeIn key={item.company} delay={i * 0.1} y={30}>
            <div
              className="flex flex-col gap-3 py-8 sm:py-10 md:flex-row md:items-start md:justify-between md:gap-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined,
              }}
            >
              <div className="md:w-1/3">
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)' }}
                >
                  {item.company}
                </h3>
                <p
                  className="font-light uppercase tracking-wide text-[#D7E2EA] opacity-60"
                  style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
                >
                  {item.role}
                </p>
                <p
                  className="mt-1 font-light text-[#D7E2EA] opacity-40"
                  style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
                >
                  {item.period} · {item.location}
                </p>
              </div>
              <p
                className="font-light leading-relaxed text-[#D7E2EA] opacity-70 md:w-3/5"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)' }}
              >
                {item.summary}
              </p>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.2} y={20}>
          <p
            className="pt-10 text-center font-light uppercase tracking-wide text-[#D7E2EA] opacity-50 sm:pt-12"
            style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
          >
            MBA, Delhi School of Economics — Class of 2025
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
