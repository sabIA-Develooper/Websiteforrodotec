import { Button } from './ui/button';
import { Link } from './Link';
import { MessageCircle, Phone } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  phone?: string;
  whatsapp?: string;
}

export function CTABanner({ title, subtitle, phone, whatsapp }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-1)]/90 py-16">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="mb-2 text-3xl text-white">{title}</h2>
            {subtitle && (
              <p className="text-lg text-white/90">{subtitle}</p>
            )}
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            {phone && (
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                asChild
              >
                <a href={`tel:${phone.replace(/\D/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {phone}
                </a>
              </Button>
            )}
            {whatsapp && (
              <Button 
                size="lg"
                className="bg-[var(--brand-2)] text-white hover:bg-[var(--brand-2)]/90"
                asChild
              >
                <a 
                  href={`https://wa.me/55${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
