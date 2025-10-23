import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Link } from './Link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsCardProps {
  image: string;
  title: string;
  tag: string;
  date: string;
  readTime?: string;
  excerpt?: string;
  href: string;
}

export function NewsCard({ image, title, tag, date, readTime, excerpt, href }: NewsCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-elev-01)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center gap-3">
          <Badge 
            variant="secondary" 
            className="bg-[var(--brand-2)]/10 text-xs text-[var(--brand-2)]"
          >
            {tag}
          </Badge>
          <div className="flex items-center gap-3 text-xs text-[var(--neutral-500)]">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
              <span>{date}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                <span>{readTime}</span>
              </div>
            )}
          </div>
        </div>
        
        <Link href={href}>
          <h3 className="line-clamp-2 min-h-[3.5rem] text-xl leading-tight transition-colors group-hover:text-[var(--brand-1)]">
            {title}
          </h3>
        </Link>
      </CardHeader>

      {excerpt && (
        <CardContent className="flex-1 pb-4">
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--neutral-700)]">
            {excerpt}
          </p>
        </CardContent>
      )}

      <CardFooter className="pt-0">
        <Link 
          href={href}
          className="group/link flex items-center gap-1.5 text-sm font-medium text-[var(--brand-1)] transition-colors hover:text-[var(--brand-1)]/80"
        >
          Leia mais
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2} />
        </Link>
      </CardFooter>
    </Card>
  );
}
