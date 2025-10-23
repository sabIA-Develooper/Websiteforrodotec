import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from './Link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SolutionCardProps {
  icon?: LucideIcon;
  image?: string;
  category: string;
  title: string;
  features: string[];
  href: string;
}

export function SolutionCard({ icon: Icon, image, category, title, features, href }: SolutionCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-elev-01)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Image or Icon Header */}
      {image ? (
        <div className="aspect-[16/10] overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : Icon ? (
        <div className="flex items-center justify-center bg-[var(--surface-elev-02)] py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--brand-1)]/10 text-[var(--brand-1)] transition-all duration-200 group-hover:bg-[var(--brand-1)] group-hover:text-white">
            <Icon className="h-8 w-8" strokeWidth={1.5} />
          </div>
        </div>
      ) : null}

      <CardHeader className="space-y-3 pb-3">
        <Badge 
          variant="secondary" 
          className="w-fit bg-[var(--brand-2)]/10 text-xs text-[var(--brand-2)]"
        >
          {category}
        </Badge>
        <h3 className="line-clamp-2 min-h-[3.5rem] text-xl leading-tight">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-[var(--neutral-700)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-2)]"></span>
              <span className="line-clamp-2">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          variant="ghost" 
          className="group/btn -ml-4 text-[var(--brand-1)] transition-colors hover:text-[var(--brand-1)]/80" 
          asChild
        >
          <Link href={href}>
            Ver detalhes
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" strokeWidth={2} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
