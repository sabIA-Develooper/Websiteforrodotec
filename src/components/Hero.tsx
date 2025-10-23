import { Button } from './ui/button';
import { Link } from './Link';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image: string;
  socialProof?: {
    metric: string;
    label: string;
  }[];
}

export function Hero({ title, subtitle, primaryCta, secondaryCta, image, socialProof }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-1)] to-[#06192a]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat"></div>
      </div>
      
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Content */}
          <div className="relative z-10">
            <h1 className="mb-4 text-[2.5rem] leading-[1.1] tracking-tight text-white lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mb-8 max-w-[60ch] text-lg leading-relaxed text-white/90">
              {subtitle}
            </p>
            
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Button 
                  size="lg" 
                  className="bg-[var(--brand-2)] text-base text-white shadow-lg transition-all hover:scale-105 hover:bg-[var(--brand-2)]/90 hover:shadow-xl"
                  asChild
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 text-base text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  asChild
                >
                  <Link href={secondaryCta.href}>
                    <Download className="mr-2 h-5 w-5" />
                    {secondaryCta.text}
                  </Link>
                </Button>
              )}
            </div>

            {/* Social Proof - Compact KPIs */}
            {socialProof && socialProof.length > 0 && (
              <div className="flex flex-wrap gap-6 border-t border-white/20 pt-6">
                {socialProof.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[var(--brand-2)]" />
                    <div>
                      <div className="font-['Montserrat'] text-xl text-white">
                        {item.metric}
                      </div>
                      <div className="text-sm text-white/70">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src={image}
                alt="Rodotec - Soluções Industriais"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[var(--brand-2)]/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
