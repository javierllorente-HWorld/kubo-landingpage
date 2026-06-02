import Image from "next/image";

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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`rounded-xl bg-[#B7FF2A] px-6 py-3 font-semibold text-[#111827] transition-opacity hover:opacity-90 ${className}`}
    >
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
                Características
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
                Precios
              </a>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-2xl bg-[#B7FF2A] px-6 py-3 text-sm font-semibold text-[#111827] transition-opacity hover:opacity-90"
            >
              Empezar gratis
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10 lg:px-8 lg:py-24">
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
              <PrimaryButton>Empezar gratis</PrimaryButton>
              <SecondaryButton>Ver demo</SecondaryButton>
            </div>
            <p className="mt-4 flex items-center gap-1 text-sm text-[#98A2B3]">
              <span aria-hidden="true">✓</span>
              Prueba gratis · No se requiere tarjeta
            </p>
          </div>
          <div className="mt-12 w-full lg:mt-0">
            <Image
              src="/hero-dashboard.png"
              alt="Dashboard de Kubo"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[28px] object-contain shadow-[0_20px_50px_-12px_rgba(17,24,39,0.16)]"
              sizes="(max-width: 1024px) 100vw, (min-width: 1024px) 58vw"
              priority
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tu estudio diario, claro y organizado
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#98A2B3]">
              Visualizá tu progreso, tus decks y tu sesión diaria en un
              dashboard simple pensado para crear hábito.
            </p>
          </div>
          <div className="relative mt-8">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7FF2A] opacity-[0.14] blur-[72px]"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-4">
              <Image
                src="/hero-dashboard.png"
                alt="Dashboard de Kubo con progreso, decks y sesión diaria"
                width={1200}
                height={800}
                className="mx-auto h-auto w-full max-w-full object-contain"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#111827]">56</p>
              <p className="mt-1 text-sm font-medium text-[#111827]">
                días de racha
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#111827]">31/50</p>
              <p className="mt-1 text-sm font-medium text-[#111827]">
                cards estudiadas
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#111827]">Progreso</p>
              <p className="mt-1 text-sm font-medium text-[#111827]">por deck</p>
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
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
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
            <div className="flex flex-col items-center gap-2">
              <PrimaryButton>Empezar gratis</PrimaryButton>
              <p className="text-sm text-[#98A2B3]">Prueba gratis</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E7EB] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
          <KuboLogo />
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
