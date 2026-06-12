import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Talent Acquisition',
    description:
      'End-to-end recruitment — from sourcing and screening to interviews and offer negotiation — finding the right people for the right roles, fast.',
  },
  {
    number: '02',
    name: 'Onboarding',
    description:
      'Structured onboarding journeys that turn new hires into confident, connected, and productive team members from day one.',
  },
  {
    number: '03',
    name: 'Employee Engagement',
    description:
      'Culture programs, pulse surveys, and recognition initiatives that boost morale, strengthen belonging, and keep retention high.',
  },
  {
    number: '04',
    name: 'Performance Management',
    description:
      'Clear goal-setting, regular feedback cycles, and fair appraisal systems that help people grow while the business delivers.',
  },
  {
    number: '05',
    name: 'HR Operations & Compliance',
    description:
      'Policies, payroll coordination, and labour-law compliance that keep the workplace fair, safe, and running smoothly.',
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
