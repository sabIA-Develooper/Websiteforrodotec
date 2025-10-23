import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Button } from './ui/button';
import { Link } from './Link';
import { ChevronLeft, ChevronRight, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Slide {
  id: string;
  category: string;
  overline: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  onCategoryChange?: (categoryId: string) => void;
  isCompact?: boolean;
}

export interface HeroCarouselRef {
  goToSlide: (index: number) => void;
}

export const HeroCarousel = forwardRef<HeroCarouselRef, HeroCarouselProps>(
  ({ slides, onCategoryChange, isCompact = false }, ref) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play
    useEffect(() => {
      if (isPaused) return;
      
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6500);

      return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    // Notify parent of category change
    useEffect(() => {
      if (onCategoryChange) {
        onCategoryChange(slides[currentSlide].id);
      }
    }, [currentSlide, slides, onCategoryChange]);

    // Expose goToSlide method via ref
    useImperativeHandle(ref, () => ({
      goToSlide: (index: number) => {
        if (index >= 0 && index < slides.length) {
          setCurrentSlide(index);
        }
      },
    }));

    const handlePrevious = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    };

    return (
      <section 
        className="relative overflow-hidden"
        style={{
          height: 'calc(100vh - var(--hdr-h))',
          minHeight: '600px',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10"
          >
            <div className="relative h-full">
              {/* Background Image - full bleed com reposicionamento dinâmico */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="h-full w-full object-cover transition-all duration-300"
                  style={{
                    // Foco da imagem: 30-40% à direita quando expandido, centro quando compacto
                    objectPosition: isCompact ? '50% 50%' : '35% 50%',
                  }}
                  loading={currentSlide === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              </div>

              {/* Content Panel - Diagonal (z-40, acima do rail, começando após o rail) */}
              <div 
                className="absolute inset-y-0 z-40 w-full transition-all duration-300 lg:w-[45%]"
                style={{
                  // Safe area: painel começa após o rail no desktop
                  left: isCompact ? 'var(--rail-w-compact)' : 'var(--rail-w)',
                }}
              >
                {/* Diagonal Panel Background */}
                <div 
                  className="absolute inset-0 bg-[var(--header-dark)] lg:clip-path-diagonal"
                  style={{
                    opacity: 0.92,
                  }}
                >
                </div>

                {/* Content */}
                <div className="relative flex h-full items-center">
                  <div className="w-full px-6 py-12 lg:px-12 lg:py-20">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-xl"
                    >
                      {/* Overline */}
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--brand-2)]">
                        {slides[currentSlide].overline}
                      </p>

                      {/* Title */}
                      <h1 className="mb-4 font-['Montserrat'] text-[2.5rem] leading-[1.1] tracking-tight text-white lg:text-[4rem]">
                        {slides[currentSlide].title}
                      </h1>

                      {/* Subtitle */}
                      <p className="mb-8 max-w-[55ch] text-lg leading-relaxed text-white/90 lg:text-xl">
                        {slides[currentSlide].subtitle}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Button 
                          size="lg" 
                          className="bg-[var(--brand-2)] text-base text-white shadow-lg transition-all hover:scale-105 hover:bg-[var(--brand-2)]/90 hover:shadow-xl"
                          asChild
                        >
                          <Link href={slides[currentSlide].primaryCta.href}>
                            {slides[currentSlide].primaryCta.text}
                            <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
                          </Link>
                        </Button>
                        
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="border-2 border-white/30 bg-white/10 text-base text-white backdrop-blur-sm transition-all hover:bg-white/20"
                          asChild
                        >
                          <Link href={slides[currentSlide].secondaryCta.href}>
                            <Download className="mr-2 h-5 w-5" strokeWidth={2} />
                            {slides[currentSlide].secondaryCta.text}
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - posicionadas após o painel */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 lg:block"
          style={{
            left: isCompact ? 'calc(var(--rail-w-compact) + 32px)' : 'calc(var(--rail-w) + 32px)',
          }}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 lg:right-8 lg:block"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentSlide
                    ? 'w-12 bg-white/90'
                    : 'w-12 bg-white/30'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Styling */}
        <style>{`
          @media (min-width: 1024px) {
            .lg\\:clip-path-diagonal {
              clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
            }
          }
          
          /* Mobile: painel sem offset (rail não existe) */
          @media (max-width: 1023px) {
            .absolute.inset-y-0.z-40 {
              left: 0 !important;
            }
          }
        `}</style>
      </section>
    );
  }
);

HeroCarousel.displayName = 'HeroCarousel';
