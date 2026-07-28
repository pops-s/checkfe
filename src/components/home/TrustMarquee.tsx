const sectors = [
  "Distribution",
  "Retail chains",
  "Wholesale trading",
  "Manufacturing",
  "Pharmaceuticals",
  "Hardware & construction",
  "Agro supply",
  "Electronics",
  "FMCG",
  "Textiles",
];

export function TrustMarquee() {
  return (
    <section aria-label="Industries served" className="border-y hairline py-8">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-ink">
        Built for the way Nepal actually does business
      </p>

      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="premium-marquee flex w-max items-center gap-12 pr-12">
          {[...sectors, ...sectors].map((sector, i) => (
            <span
              key={`${sector}-${i}`}
              className="flex shrink-0 items-center gap-12 whitespace-nowrap font-display text-lg text-[hsl(var(--paper)/0.45)]"
            >
              {sector}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
