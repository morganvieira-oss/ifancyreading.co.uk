interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-secondary text-[72px] font-semibold">{title}</h1>
      <p className="text-primary font-lekton mt-4 text-[24px] leading-[0.07em] font-bold">
        {subtitle}
      </p>
    </section>
  );
}
