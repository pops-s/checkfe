import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Modules", href: "#modules" },
  { label: "Why Bebasthapan", href: "#why" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function HomeNav() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b hairline bg-[hsl(var(--ink)/0.82)] backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold font-display text-lg leading-none text-[hsl(var(--ink))]">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">Bebasthapan</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.26em] text-muted-ink">ERP Platform</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-muted-ink transition-colors hover:text-[hsl(var(--paper))]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-ink transition-colors hover:text-[hsl(var(--paper))]"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--paper))] px-5 py-2.5 text-[13px] font-semibold text-[hsl(var(--ink))] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start free trial
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border hairline sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t hairline bg-[hsl(var(--ink))] px-5 pb-6 pt-4 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-muted-ink transition-colors hover:bg-[hsl(var(--ink-raised))] hover:text-[hsl(var(--paper))]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full border hairline px-5 py-3 text-sm font-medium"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--paper))] px-5 py-3 text-sm font-semibold text-[hsl(var(--ink))]"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
