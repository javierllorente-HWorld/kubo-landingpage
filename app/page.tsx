import Image from "next/image";

const START_FREE_URL = "https://kubo-henna.vercel.app/";

const LATAM_UNIVERSITIES = [
  "UBA",
  "UNAM",
  "USP",
  "Tec de Monterrey",
  "PUC Chile",
  "Uniandes",
];

const FAQ_ITEMS = [
  {
    question: "¿Cómo puede usar Kubo una universidad?",
    answer:
      "Kubo permite que docentes creen materias y decks de estudio, mientras la institución puede visualizar avances, métricas generales y hábitos de estudio de los estudiantes.",
  },
  {
    question: "¿Los docentes pueden crear contenido?",
    answer:
      "Sí. Los docentes pueden crear materias, organizar decks y cargar cards para que los estudiantes estudien con repetición espaciada.",
  },
  {
    question: "¿Qué métricas puede ver la institución?",
    answer:
      "La institución puede ver avances generales, progreso por curso, actividad de estudio, rachas y métricas de uso para entender cómo acompañar mejor a los estudiantes.",
  },
  {
    question: "¿Kubo reemplaza a las clases o al campus virtual?",
    answer:
      "No. Kubo complementa la experiencia académica ayudando a los estudiantes a repasar, sostener hábitos y llegar mejor preparados a evaluaciones.",
  },
  {
    question: "¿Se puede usar con distintas materias o carreras?",
    answer:
      "Sí. Kubo está pensado para organizar materias, cursos y decks según la estructura académica de cada institución.",
  },
  {
    question: "¿Cómo funciona la demo para instituciones?",
    answer:
      "En la demo revisamos las necesidades de tu institución, te mostramos cómo docentes y estudiantes usarían Kubo, y evaluamos qué métricas serían más útiles para el seguimiento académico.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-slate-200/70 py-4 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[#111827] [&::-webkit-details-marker]:hidden">
        {question}
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B7FF2A]/25 text-lg font-bold leading-none text-[#111827] transition-transform group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-[#98A2B3]">{answer}</p>
    </details>
  );
}

function KuboLogo({
  className = "",
  showText = true,
  size = 32,
}: {
  className?: string;
  showText?: boolean;
  size?: number;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/kubo-logo.png"
        alt="Kubo logo"
        width={size}
        height={size}
        className="rounded-md"
      />
      {showText && (
        <span className="text-xl font-semibold text-[#111827]">Kubo</span>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = `rounded-xl bg-[#B7FF2A] px-6 py-3 font-semibold text-[#111827] transition-opacity hover:opacity-90 ${className}`;

  if (href) {
    return (
      <a href={href} className={`inline-flex items-center justify-center ${classes}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 font-semibold text-[#111827] transition-colors hover:bg-[#F9FAFB] ${className}`}
    >
      {children}
    </button>
  );
}

function PricingCard({
  title,
  description,
  price,
  priceNote,
  features,
  buttonLabel,
  buttonHref,
  highlighted = false,
  badge,
}: {
  title: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  buttonLabel: string;
  buttonHref?: string;
  highlighted?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 sm:p-7 ${
        highlighted
          ? "border-[#B7FF2A]/70 shadow-[0_8px_32px_rgba(183,255,42,0.14),0_4px_20px_rgba(15,23,42,0.05)]"
          : "border-slate-200/70 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
      }`}
    >
      {badge && (
        <span className="absolute -top-2.5 left-5 rounded-full bg-[#B7FF2A] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#111827] shadow-[0_4px_14px_rgba(183,255,42,0.35)]">
          {badge}
        </span>
      )}
      <div className="flex h-[7.25rem] flex-col items-center text-center">
        <h3 className="text-lg font-bold leading-tight text-[#111827]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-snug text-[#98A2B3]">
          {description}
        </p>
        <div className="w-full shrink-0 pt-1">
          <p className="text-2xl font-bold leading-none tracking-tight text-[#111827]">
            {price}
          </p>
          <p className="mt-1 h-4 text-xs leading-none text-[#98A2B3]">
            {priceNote || "\u00A0"}
          </p>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-3 border-t border-slate-200/70 pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm leading-snug">
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md bg-[#B7FF2A]/25 text-[10px] font-bold leading-none text-[#111827]"
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="text-[#111827]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 shrink-0">
        {highlighted ? (
          <PrimaryButton
            href={buttonHref}
            className="w-full py-2 text-sm shadow-[0_4px_14px_rgba(183,255,42,0.35)]"
          >
            {buttonLabel}
          </PrimaryButton>
        ) : (
          <SecondaryButton className="w-full py-2 text-sm">
            {buttonLabel}
          </SecondaryButton>
        )}
      </div>
    </div>
  );
}

function BenefitCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <span className="text-2xl" aria-hidden="true">
        {emoji}
      </span>
      <h3 className="mt-3 font-bold text-[#111827]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#98A2B3]">
        {description}
      </p>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B7FF2A] text-sm font-bold text-[#111827]">
        {number}
      </div>
      <h3 className="mt-3 font-bold text-[#111827]">{title}</h3>
      <p className="mt-2 max-w-[200px] text-sm text-[#98A2B3]">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-[#111827] antialiased">
      <header className="sticky top-0 z-50 bg-[#111827]">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
          <KuboLogo showText={false} size={112} />
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#caracteristicas"
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#B7FF2A]"
              >
                Beneficios
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#B7FF2A]"
              >
                Cómo funciona
              </a>
              <a
                href="#precios"
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#B7FF2A]"
              >
                Planes
              </a>
              <a
                href="#preguntas"
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#B7FF2A]"
              >
                Preguntas
              </a>
            </div>
            <a
              href={START_FREE_URL}
              className="shrink-0 rounded-2xl bg-[#B7FF2A] px-6 py-3 text-sm font-semibold text-[#111827] transition-opacity hover:opacity-90"
            >
              Empezar gratis
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Estudiá{" "}
              <span className="text-[#B7FF2A]">mejor</span>, no más horas
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#98A2B3]">
              Organizá tus materias, creá decks y estudiá con repetición
              espaciada. Seguí tu progreso, mantené tu racha diaria y alcanzá
              tus objetivos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href={START_FREE_URL}>Empezar gratis</PrimaryButton>
              <SecondaryButton>Ver demo</SecondaryButton>
            </div>
            <p className="mt-4 flex items-center gap-1 text-sm text-[#98A2B3]">
              <span aria-hidden="true">✓</span>
              Prueba gratis · No se requiere tarjeta
            </p>
          </div>
          <div className="mt-12 flex w-full items-center justify-center bg-[#F5F7FA] px-2 sm:px-4 lg:mt-0 lg:justify-end lg:py-2">
            <Image
              src="/hero-dashboard 2.png"
              alt="Dashboard de Kubo en laptop"
              width={1200}
              height={800}
              className="h-auto w-full max-h-[380px] max-w-[min(100%,520px)] object-contain mix-blend-multiply sm:max-h-[420px] lg:max-h-[460px] lg:max-w-[580px]"
              sizes="(max-width: 1024px) 100vw, (min-width: 1024px) 52vw"
              priority
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Universidades que usan Kubo
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#98A2B3]">
              Kubo acompaña a universidades líderes de LATAM a mejorar el
              seguimiento del estudio, potenciar el trabajo docente y fortalecer
              el aprendizaje de sus estudiantes.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-12 lg:mt-14 lg:flex lg:items-center lg:justify-between lg:gap-x-12">
            {LATAM_UNIVERSITIES.map((name) => (
              <p
                key={name}
                className="text-center text-xl font-bold tracking-wide text-[#111827]/60 lg:text-2xl"
              >
                {name}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-slate-200/70 bg-white p-5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-6">
            <h3 className="text-center text-xl font-semibold text-[#111827] sm:text-2xl">
              Impacto de Kubo
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] px-3 py-3.5 text-center">
                <p className="text-2xl font-bold text-[#111827]">+20k</p>
                <p className="mt-0.5 text-xs text-[#98A2B3]">estudiantes</p>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] px-3 py-3.5 text-center">
                <p className="text-2xl font-bold text-[#111827]">93%</p>
                <p className="mt-0.5 text-xs text-[#98A2B3]">
                  mejora en la nota
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] px-3 py-3.5 text-center">
                <p className="text-2xl font-bold text-[#111827]">+1.2M</p>
                <p className="mt-0.5 text-xs text-[#98A2B3]">cards estudiadas</p>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] px-3 py-3.5 text-center">
                <p className="text-2xl font-bold text-[#111827]">4.8/5</p>
                <p className="mt-0.5 text-xs text-[#98A2B3]">
                  satisfacción promedio
                </p>
              </div>
            </div>
            <p className="mt-5 text-center text-base text-[#98A2B3]">
              Lo que mejora tu forma de estudiar
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] p-4">
                <p
                  className="text-sm tracking-wide text-[#FBBC04]"
                  aria-hidden="true"
                >
                  ★★★★★
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#111827]">
                  &ldquo;Ahora sé exactamente qué repasar cada día sin perder
                  tiempo organizándome.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-[#98A2B3]">
                  Andrés · Estudiante
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-[#FAFBFC] p-4">
                <p
                  className="text-sm tracking-wide text-[#FBBC04]"
                  aria-hidden="true"
                >
                  ★★★★★
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#111827]">
                  &ldquo;Las rachas y el progreso por deck me ayudan a mantener
                  constancia y llegar mejor a los parciales.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-[#98A2B3]">
                  Lucía · Estudiante
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="caracteristicas"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Todo lo que necesitás para aprender mejor
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <BenefitCard
              emoji="📚"
              title="Materias y decks"
              description="Organizá tus materias y agrupá el contenido en decks fáciles de repasar."
            />
            <BenefitCard
              emoji="🃏"
              title="Flashcards efectivas"
              description="Estudiá con repetición espaciada para retener más con menos esfuerzo."
            />
            <BenefitCard
              emoji="🔥"
              title="Racha diaria"
              description="Mantené el hábito con una racha visible que te motiva cada día."
            />
            <BenefitCard
              emoji="📊"
              title="Progreso visible"
              description="Seguí tu avance con métricas claras y un resumen de tu estudio."
            />
            <BenefitCard
              emoji="🏆"
              title="XP y logros"
              description="Ganá experiencia y desbloqueá logros sin perder el foco en aprender."
            />
          </div>
        </section>

        <section
          id="como-funciona"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Cómo funciona Kubo
          </h2>
          <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            <StepItem
              number={1}
              title="Creá tus decks"
              description="Armá materias y decks con las cards que necesitás repasar."
            />
            <span
              className="hidden text-2xl text-[#98A2B3] lg:block"
              aria-hidden="true"
            >
              →
            </span>
            <StepItem
              number={2}
              title="Estudiá a diario"
              description="Completá tu sesión diaria con la repetición espaciada."
            />
            <span
              className="hidden text-2xl text-[#98A2B3] lg:block"
              aria-hidden="true"
            >
              →
            </span>
            <StepItem
              number={3}
              title="Seguí tu progreso"
              description="Mirá tu racha, XP y avance en cada deck en un solo lugar."
            />
            <span
              className="hidden text-2xl text-[#98A2B3] lg:block"
              aria-hidden="true"
            >
              →
            </span>
            <StepItem
              number={4}
              title="Alcanzá tus metas"
              description="Llegá a tus objetivos de estudio con constancia y claridad."
            />
          </div>
        </section>

        <section
          id="precios"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Elegí el plan ideal para estudiar mejor
            </h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-8">
            <PricingCard
              title="Básico"
              description="Para empezar a estudiar con Kubo."
              price="Gratis"
              priceNote="x 3 meses"
              features={[
                "Materias y decks",
                "Flashcards con repetición espaciada",
                "Racha diaria",
                "Progreso por deck",
                "Sesión diaria de estudio",
              ]}
              buttonLabel="Empezar gratis"
              buttonHref={START_FREE_URL}
              highlighted
              badge="Más elegido"
            />
            <PricingCard
              title="Pro"
              description="Para estudiar con más seguimiento."
              price="US$5"
              priceNote="/ mes"
              features={[
                "Todo lo del plan Estudiante",
                "Más decks y cards",
                "Métricas avanzadas",
                "XP y logros",
                "Actividad reciente",
                "Prioridad en nuevas funciones",
              ]}
              buttonLabel="Unirme a la lista de espera"
            />
            <PricingCard
              title="Personalizado"
              description="Para instituciones y equipos académicos."
              price="A medida"
              priceNote=""
              features={[
                "Docentes con gestión de materias",
                "Creación de decks por curso",
                "Seguimiento de avance por curso",
                "Métricas generales de aprendizaje",
                "Reportes para instituciones",
                "Onboarding académico",
              ]}
              buttonLabel="Ver demo"
            />
          </div>
          <p className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-relaxed text-[#98A2B3]">
            * En la demo revisamos las necesidades de tu institución, te orientamos
            sobre el plan más adecuado y te mostramos cómo Kubo puede ayudar a
            docentes y equipos académicos a acompañar el progreso de los
            estudiantes. Sin compromiso.
          </p>
        </section>

        <section
          id="preguntas"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#98A2B3]">
              Antes de agendar una demo, conocé cómo Kubo puede ayudar a tu
              institución a acompañar mejor el estudio.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-[32px] border border-slate-200/70 bg-white p-5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
            {FAQ_ITEMS.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-[#EEF9D8] px-6 py-12 sm:flex-row sm:justify-between sm:px-12 sm:py-16">
            <span className="text-6xl" aria-hidden="true">
              🎓
            </span>
            <div className="text-center sm:flex-1 sm:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl">
                ¿Listo para llevar tu estudio al siguiente nivel?
              </h2>
              <p className="mt-3 text-[#98A2B3]">
                Unite a estudiantes que ya están aprendiendo mejor con Kubo.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <PrimaryButton>Ver demo</PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E7EB] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
          <span className="text-xl font-semibold text-[#111827]">Kubo</span>
          <div className="flex flex-col items-center gap-3 text-sm text-[#98A2B3] sm:flex-row sm:gap-6">
            <span>
              <span aria-hidden="true">❤️ </span>
              Hecho para estudiantes
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span>
              <span aria-hidden="true">🔒 </span>
              Tus datos son tuyos
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span>
              <span aria-hidden="true">💳 </span>
              Prueba gratis sin tarjetas
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
