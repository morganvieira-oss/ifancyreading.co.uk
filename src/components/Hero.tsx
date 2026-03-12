interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-[72px] font-semibold text-secondary">{title}</h1>
      <p className="text-[24px] text-primary mt-4 font-lekton font-bold leading-[0.07em]">
        {subtitle}
      </p>
    </section>
  );
}
