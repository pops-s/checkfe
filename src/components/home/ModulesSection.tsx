import {
  BarChart3,
  Boxes,
  CircleDollarSign,
  Clock,
  Receipt,
  Sparkles,
  Users,
} from "lucide-react";

const modules = [
  {
    icon: CircleDollarSign,
    title: "Accounting & finance",
    description:
      "Chart of accounts, journal vouchers, cash transfers and financial reports that close cleanly every month.",
    items: ["Ledgers", "Trial balance", "P&L", "Balance sheet"],
    wide: true,
  },
  {
    icon: Receipt,
    title: "Sales & invoicing",
    description: "Quotations to orders to invoices to payments, with dues tracked against every customer.",
    items: ["Quotations", "Invoices", "Credit notes"],
  },
  {
    icon: Boxes,
    title: "Inventory control",
    description: "Live stock positions, low-stock signals and valuation tied directly to purchase and sales.",
    items: ["Stock levels", "Categories", "Valuation"],
  },
  {
    icon: Users,
    title: "Purchase & CRM",
    description: "Suppliers, bills, expenses and customer relationships kept in one accountable record.",
    items: ["Bills", "Suppliers", "Customers"],
  },
  {
    icon: Clock,
    title: "HR & attendance",
    description: "Employee records and daily attendance without a parallel spreadsheet to reconcile.",
    items: ["Employees", "Attendance", "Roles"],
  },
  {
    icon: Sparkles,
    title: "AI insights",
    description:
      "Forecasts and plain-language answers drawn from your own operating data, not generic benchmarks.",
    items: ["Predictions", "Trends", "Alerts"],
    wide: true,
  },
];

export function ModulesSection() {
  return (
    <section id="modules" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="premium-eyebrow">
            <BarChart3 className="h-3 w-3" />
            The platform
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
            Seven modules that behave like
            <span className="font-display italic tracking-normal text-gold"> one </span>
            system.
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-ink">
          Nothing here is bolted on. A purchase updates stock, stock updates valuation, valuation updates
          your books — automatically, in the same workspace.
        </p>
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ icon: Icon, title, description, items, wide }) => (
          <article
            key={title}
            className={`premium-card premium-sheen group flex flex-col p-6 transition-colors duration-300 hover:bg-[hsl(var(--paper)/0.04)] ${
              wide ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border hairline bg-[hsl(var(--gold)/0.08)]">
              <Icon className="h-4 w-4 text-gold" />
            </div>
            <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
            <p className="mt-2.5 flex-1 text-pretty text-[13.5px] leading-relaxed text-muted-ink">
              {description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 border-t hairline pt-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border hairline px-2.5 py-1 text-[10.5px] tracking-wide text-[hsl(var(--paper)/0.68)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
