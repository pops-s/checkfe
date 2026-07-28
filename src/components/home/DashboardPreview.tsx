import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CircleDollarSign,
  LayoutGrid,
  Receipt,
  Search,
  Users,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: CircleDollarSign, label: "Accounting" },
  { icon: Receipt, label: "Sales" },
  { icon: Boxes, label: "Inventory" },
  { icon: Users, label: "CRM" },
  { icon: BarChart3 , label: "Insights" },
];

const stats = [
  { label: "Revenue (MTD)", value: "Rs 12,84,500", delta: "+14.2%" },
  { label: "Receivables", value: "Rs 3,41,200", delta: "-6.1%" },
  { label: "Stock value", value: "Rs 8,92,000", delta: "+2.4%" },
];

// Monthly bar heights as percentages, tuned to read as a plausible revenue curve
const bars = [38, 52, 44, 61, 55, 72, 66, 84, 78, 92, 86, 100];

const ledger = [
  { ref: "INV-2098", party: "Himalaya Traders", amount: "Rs 84,200", state: "Paid" },
  { ref: "PO-1142", party: "Everest Supply Co.", amount: "Rs 1,26,000", state: "Open" },
  { ref: "INV-2097", party: "Annapurna Retail", amount: "Rs 42,750", state: "Due" },
  { ref: "EXP-0451", party: "Logistics — Bharatpur", amount: "Rs 18,400", state: "Paid" },
];

const stateStyles: Record<string, string> = {
  Paid: "text-gold",
  Open: "text-[hsl(var(--paper)/0.7)]",
  Due: "text-[hsl(12_70%_62%)]",
};

export function DashboardPreview() {
  return (
    <div className="premium-sheen overflow-hidden rounded-2xl border hairline bg-[hsl(var(--ink-raised))] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)]">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b hairline px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--paper)/0.16)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--paper)/0.16)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--paper)/0.16)]" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md border hairline px-3 py-1.5">
          <Search className="h-3 w-3 text-muted-ink" />
          <span className="text-[10px] tracking-wide text-muted-ink">app.bebasthapan.com/dashboard</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 border-r hairline p-3 md:block">
          <p className="px-2 pb-2 text-[9px] uppercase tracking-[0.26em] text-muted-ink">Workspace</p>
          <ul className="flex flex-col gap-0.5">
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <li key={label}>
                <div
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11.5px] ${
                    active
                      ? "bg-[hsl(var(--paper)/0.07)] font-medium text-[hsl(var(--paper))]"
                      : "text-muted-ink"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${active ? "text-gold" : ""}`} />
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Body */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[9px] uppercase tracking-[0.26em] text-muted-ink">Fiscal year 2082/83</p>
              <h3 className="mt-1.5 font-display text-xl tracking-tight sm:text-2xl">Executive overview</h3>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border hairline px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] tracking-wide text-muted-ink">Live · synced 2m ago</span>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border hairline p-3">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-muted-ink">{stat.label}</p>
                <p className="mt-2 text-[15px] font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-gold">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.delta} vs last month
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_1fr]">
            {/* Chart */}
            <div className="rounded-xl border hairline p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-ink">Sales vs purchase</p>
                <p className="text-[10px] text-muted-ink">12 months</p>
              </div>
              <div className="mt-4 flex h-40 items-end gap-2 lg:h-[11.5rem]" aria-hidden="true">
                {bars.map((height, i) => (
                  <div key={i} className="flex h-full flex-1 items-end gap-[2px]">
                    <div
                      className="flex-1 rounded-t-sm bg-gold"
                      style={{ height: `${height}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-[hsl(var(--paper)/0.14)]"
                      style={{ height: `${Math.round(height * 0.62)}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-4 border-t hairline pt-2.5">
                <span className="flex items-center gap-1.5 text-[10px] text-muted-ink">
                  <span className="h-1.5 w-3 rounded-full bg-gold" /> Sales
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-muted-ink">
                  <span className="h-1.5 w-3 rounded-full bg-[hsl(var(--paper)/0.2)]" /> Purchase
                </span>
              </div>
            </div>

            {/* Ledger */}
            <div className="rounded-xl border hairline p-3.5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-ink">Recent documents</p>
              <ul className="mt-3 flex flex-col divide-y divide-[hsl(var(--paper)/0.07)]">
                {ledger.map((row) => (
                  <li key={row.ref} className="flex items-center justify-between gap-3 py-2.5 first:pt-0">
                    <div className="min-w-0">
                      <p className="truncate text-[11.5px] font-medium">{row.party}</p>
                      <p className="mt-0.5 font-mono text-[9.5px] tracking-wide text-muted-ink">{row.ref}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-[11.5px] tabular-nums">{row.amount}</p>
                      <p className={`mt-0.5 text-[9.5px] uppercase tracking-[0.16em] ${stateStyles[row.state]}`}>
                        {row.state}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
