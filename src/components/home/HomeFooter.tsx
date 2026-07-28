import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Modules", href: "#modules" },
      { label: "Why Bebasthapan", href: "#why" },
      { label: "Craft", href: "#platform" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact sales", to: "/contact-sales" },
      { label: "ERP for Nepal", href: "/erp-system-nepal" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Admin log in", to: "/login" },
      { label: "Employee log in", to: "/employeelogin" },
      { label: "Create account", to: "/signup" },
    ],
  },
];

export function HomeFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold font-display text-lg leading-none text-[hsl(var(--ink))]">
                B
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Bebasthapan</span>
            </div>
            <p className="mt-5 max-w-xs text-pretty text-[13px] leading-relaxed text-muted-ink">
              One connected ERP for accounting, inventory, sales, purchase, CRM, HR and insights — built for
              businesses in Nepal.
            </p>

            <ul className="mt-7 flex flex-col gap-3 text-[13px] text-muted-ink">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Kathmandu, Nepal
              </li>
              <li>
                <a
                  href="mailto:prashantpoudel745@gmail.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-[hsl(var(--paper))]"
                >
                  <Mail className="h-3.5 w-3.5 text-gold" />
                  prashantpoudel745@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779869891980"
                  className="flex items-center gap-2.5 transition-colors hover:text-[hsl(var(--paper))]"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  +977 9869891980
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] uppercase tracking-[0.26em] text-muted-ink">{column.title}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="text-[13px] text-[hsl(var(--paper)/0.72)] transition-colors hover:text-[hsl(var(--paper))]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-[13px] text-[hsl(var(--paper)/0.72)] transition-colors hover:text-[hsl(var(--paper))]"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t hairline pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-muted-ink">
            © {new Date().getFullYear()} Bebasthapan. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[11.5px] text-muted-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Beta · Accepting new businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
