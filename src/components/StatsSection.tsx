import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
}

export function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  return (
    <section className="section-spacing bg-[var(--surface-elev-02)]">
      <div className="mx-auto max-w-[1440px] px-6">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="mb-3 text-[var(--brand-1)]">{title}</h2>}
            {subtitle && <p className="mx-auto max-w-[60ch] text-lg text-[var(--neutral-700)]">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center rounded-xl border border-[var(--border-soft)] bg-white p-8 text-center transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-2)]/10 text-[var(--brand-2)]">
                <stat.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div className="mb-2 font-['Montserrat'] text-4xl tracking-tight text-[var(--brand-1)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--neutral-700)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
