type PageHeroProps = {
  title: string;
  subtitle?: string;
  badges?: string[];
  centered?: boolean;
};

export function PageHero({
  title,
  subtitle,
  badges = [],
  centered = true,
}: PageHeroProps) {
  return (
    <section
      className={`py-14 sm:py-16 ${centered ? "text-center" : ""}`}
    >
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg text-white/90 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
      {badges.length > 0 && (
        <div
          className={`mt-5 flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
