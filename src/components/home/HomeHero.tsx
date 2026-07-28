import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

const ease = [0.16, 1, 0.3, 1] as const;

const proofPoints = [
  ["7", "Connected modules"],
  ["10 days", "Free trial, no card"],
  ["1", "Source of truth"],
];

export function HomeHero() {
  const navigate = useNavigate();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faint grid + top glow establish depth without decorative blobs */}
      <div aria-hidden="true" className="premium-grid-lines absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-18rem] h-[36rem] w-[72rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 62%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[hsl(var(--ink))]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="premium-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Beta open · Nepal
          </span>

          <h1 className="mt-7 text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.6rem]">
            The operating system for
            <span className="font-display italic tracking-normal text-gold"> Nepal&apos;s </span>
            serious businesses.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-ink sm:text-base">
            Bebasthapan replaces the tangle of accounting files, stock registers, sales trackers and
            attendance sheets with one connected ERP. Accounting, inventory, sales, purchase, CRM, HR
            and AI insights — all reconciled, all in one place.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/signup")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--paper))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--ink))] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Start 10-day free trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => navigate("/contact-sales")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-medium text-[hsl(var(--paper))] transition-colors duration-300 hover:bg-[hsl(var(--paper)/0.06)] sm:w-auto"
            >
              Talk to sales
              <ChevronRight className="h-4 w-4 text-muted-ink" />
            </button>
          </div>

          <p className="mt-5 text-xs text-muted-ink">No credit card required · Setup support included</p>
        </motion.div>

        {/* Proof strip */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease }}
          className="mx-auto mt-14 flex max-w-2xl flex-col divide-y divide-[hsl(var(--paper)/0.08)] border-y hairline sm:flex-row sm:divide-x sm:divide-y-0"
        >
          {proofPoints.map(([value, label]) => (
            <li key={label} className="flex-1 px-6 py-5 text-center">
              <div className="font-display text-2xl tracking-tight text-gold">{value}</div>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-ink">{label}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease }}
          className="relative mt-14"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
