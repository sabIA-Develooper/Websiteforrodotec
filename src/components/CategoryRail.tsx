import { LucideIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
}

interface CategoryRailProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
  isCompact?: boolean;
}

export function CategoryRail({ categories, activeCategory, onCategoryClick, isCompact = false }: CategoryRailProps) {
  return (
    <>
      {/* Desktop - Vertical Rail (sticky, por cima do hero) */}
      <aside 
        className="fixed left-0 z-30 hidden overflow-y-auto bg-white shadow-lg transition-all duration-300 lg:block"
        style={{
          top: isCompact ? 'var(--hdr-h-compact)' : 'var(--hdr-h)',
          width: isCompact ? 'var(--rail-w-compact)' : 'var(--rail-w)',
          height: isCompact ? 'calc(100vh - var(--hdr-h-compact))' : 'calc(100vh - var(--hdr-h))',
        }}
      >
        <TooltipProvider delayDuration={200}>
          <div className="flex flex-col py-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              const buttonContent = (
                <button
                  key={category.id}
                  onClick={() => onCategoryClick(category.id)}
                  className={`group relative flex items-center gap-4 text-left transition-all ${
                    isActive 
                      ? 'bg-[var(--surface-elev-02)] text-[var(--brand-1)]' 
                      : 'text-[var(--neutral-700)] hover:bg-[var(--surface-elev-02)] hover:text-[var(--brand-1)]'
                  }`}
                  style={{
                    padding: isCompact ? '16px 12px' : '20px 24px',
                    justifyContent: isCompact ? 'center' : 'flex-start',
                  }}
                  aria-label={category.title}
                >
                  {/* Active Indicator Bar */}
                  <div 
                    className={`absolute left-0 top-0 h-full bg-[var(--brand-2)] transition-all ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    style={{
                      width: '4px',
                    }}
                  ></div>

                  {/* Icon */}
                  <div className={`flex shrink-0 items-center justify-center rounded-lg transition-all ${
                    isActive 
                      ? 'bg-[var(--brand-1)] text-white' 
                      : 'bg-[var(--neutral-50)] text-[var(--neutral-700)] group-hover:bg-[var(--brand-1)] group-hover:text-white'
                  }`}
                  style={{
                    height: isCompact ? '40px' : '32px',
                    width: isCompact ? '40px' : '32px',
                  }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  {/* Title - Only show when expanded */}
                  {!isCompact && (
                    <span className="line-clamp-2 text-sm font-medium leading-tight">
                      {category.title}
                    </span>
                  )}
                </button>
              );

              // Wrap in Tooltip only when compact
              if (isCompact) {
                return (
                  <Tooltip key={category.id}>
                    <TooltipTrigger asChild>
                      {buttonContent}
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={8}>
                      <p className="text-sm font-medium">{category.title}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return buttonContent;
            })}
          </div>
        </TooltipProvider>
      </aside>

      {/* Mobile - Horizontal Chips with scroll snap */}
      <div 
        className="sticky z-30 bg-white shadow-sm transition-all duration-300 lg:hidden"
        style={{ top: 'var(--hdr-h-compact)' }}
      >
        <div className="scroll-snap-x flex gap-2 overflow-x-auto px-4 py-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`scroll-snap-start flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--brand-1)] text-white'
                    : 'bg-[var(--surface-elev-02)] text-[var(--neutral-700)] hover:bg-[var(--brand-1)] hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                <span className="whitespace-nowrap">{category.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Utility CSS for scroll snap */}
      <style>{`
        .scroll-snap-x {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-snap-x::-webkit-scrollbar {
          display: none;
        }
        .scroll-snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </>
  );
}
