import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Strategic HR Partnership',
    description:
      'Partnering with founders and the C-suite on people strategy, org design, and workforce planning — keeping talent supply ahead of the product roadmap through 115% headcount growth.',
  },
  {
    number: '02',
    name: 'HR Tech & Automation',
    description:
      'Building AI-powered HR tools — ticketing chatbots, Looker Studio dashboards, and automated workflows — that cut query resolution from over 72 hours to under 24.',
  },
  {
    number: '03',
    name: 'Performance Management',
    description:
      'Data-centric, RAG-based performance frameworks with real-time leadership dashboards, delivering a 25% lift in team productivity.',
  },
  {
    number: '04',
    name: 'Talent Acquisition & Governance',
    description:
      'Structured, bias-aware hiring — competency-aligned interview debriefs and sequenced hiring waves that scale teams fast without breaking culture.',
  },
  {
    number: '05',
    name: 'Engagement & Culture',
    description:
      'High-impact engagement and CSR programs — from reworked onboarding journeys to a Diwali NGO marketplace — that strengthen belonging and employer brand.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:gap-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
