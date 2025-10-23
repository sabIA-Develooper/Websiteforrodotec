import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroCarousel, HeroCarouselRef } from './components/HeroCarousel';
import { CategoryRail } from './components/CategoryRail';
import { SolutionCard } from './components/SolutionCard';
import { NewsCard } from './components/NewsCard';
import { StatsSection } from './components/StatsSection';
import { CTABanner } from './components/CTABanner';
import { ClientLogos } from './components/ClientLogos';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Button } from './components/ui/button';
import { Link } from './components/Link';

// Pages
import { About } from './components/pages/About';
import { Solutions } from './components/pages/Solutions';
import { Clients } from './components/pages/Clients';
import { News } from './components/pages/News';
import { Network } from './components/pages/Network';
import { Contact } from './components/pages/Contact';

import { 
  Truck, 
  Zap, 
  Package, 
  Wrench, 
  Shield, 
  Clock, 
  Users, 
  MapPin,
  Award,
  CheckCircle,
  TrendingUp,
  Target,
  Container,
  Blocks,
  Train
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Badge } from './components/ui/badge';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('linha-pesada');
  const [isCompact, setIsCompact] = useState(false);
  const carouselRef = useRef<HeroCarouselRef>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Simple routing - listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash.split('/')[0]);
      // Reset scroll to top on page change
      window.scrollTo(0, 0);
    };

    handleHashChange(); // Initial load
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll trigger - detect when hero leaves viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const headerHeight = isCompact ? 64 : 88; // var(--hdr-h-compact) : var(--hdr-h)
      
      // Switch to compact when hero bottom is above viewport bottom
      if (heroBottom <= headerHeight && !isCompact) {
        setIsCompact(true);
      } else if (heroBottom > headerHeight && isCompact) {
        setIsCompact(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCompact]);

  // Categories for the rail
  const categories = [
    {
      id: 'linha-pesada',
      icon: Truck,
      title: 'Linha Pesada & Implementos'
    },
    {
      id: 'linha-chassi',
      icon: Container,
      title: 'Linha Sobre Chassi'
    },
    {
      id: 'vagoes',
      icon: Train,
      title: 'Vagões Ferroviários'
    },
    {
      id: 'reposicao',
      icon: Package,
      title: 'Peças & Reposição'
    },
    {
      id: 'automacao',
      icon: Zap,
      title: 'Rodotec Smart'
    },
    {
      id: 'servicos',
      icon: Wrench,
      title: 'Serviços Técnicos'
    }
  ];

  // Slides for the hero carousel
  const heroSlides = [
    {
      id: 'linha-pesada',
      category: 'Linha Pesada',
      overline: 'TRANSPORTA COM SEGURANÇA',
      title: 'Implementos que reduzem custos operacionais',
      subtitle: 'Frotas completas com manutenção preditiva e SLA garantido de 72 horas',
      image: 'https://images.unsplash.com/photo-1753579167765-d88ba3719f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRydWNrJTIwZmxlZXQlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzYxMTg4NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/orcamento'
      },
      secondaryCta: {
        text: 'Ver Catálogo',
        href: '/catalogo'
      }
    },
    {
      id: 'automacao',
      category: 'Automação',
      overline: 'MODERNIZE SEM PARAR',
      title: 'Retrofit elétrico com zero downtime',
      subtitle: 'Painéis inteligentes e automação IoT que reduzem consumo em até 35%',
      image: 'https://images.unsplash.com/photo-1758873263914-230f8ff60569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHBhbmVsJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjExODg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/orcamento'
      },
      secondaryCta: {
        text: 'Cases de Sucesso',
        href: '/clientes'
      }
    },
    {
      id: 'reposicao',
      category: 'Reposição',
      overline: 'ESTOQUE SEMPRE DISPONÍVEL',
      title: 'Peças originais com entrega expressa',
      subtitle: '+10 mil itens em estoque com garantia de procedência e qualidade',
      image: 'https://images.unsplash.com/photo-1759159092038-d414f661dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBwYXJ0cyUyMGludmVudG9yeXxlbnwxfHx8fDE3NjExODg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      primaryCta: {
        text: 'Solicitar Orçamento',
        href: '/orcamento'
      },
      secondaryCta: {
        text: 'Ver Estoque',
        href: '/solucoes/pecas-reposicao'
      }
    }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Find the slide index and navigate to it
    const slideIndex = heroSlides.findIndex(slide => slide.id === categoryId);
    if (slideIndex !== -1) {
      carouselRef.current?.goToSlide(slideIndex);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface-elev-02)]">
      <Header isCompact={isCompact} />
      
      {/* Render different pages based on route */}
      {currentPage === 'home' && (
        <>
          {/* Category Rail + Hero Carousel */}
          <div className="relative" ref={heroRef}>
            <CategoryRail 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              isCompact={isCompact}
            />
            
            {/* Hero - full bleed, rail fica por cima (z-30), painel protege conteúdo (z-40) */}
            <HeroCarousel 
              ref={carouselRef}
              slides={heroSlides}
              onCategoryChange={handleCategoryChange}
              isCompact={isCompact}
            />
          </div>

          {/* Main content wrapper - margin-left on desktop with smooth transition */}
          <main 
            className="transition-all duration-300"
            style={{
              marginLeft: isCompact ? 'var(--rail-w-compact)' : 'var(--rail-w)',
            }}
          >
            {/* Solutions Grid - Normalized cards */}
            <section className="section-spacing bg-white">
              <div className="mx-auto max-w-[1440px] px-6">
                <div className="mb-12 text-center">
                  <h2 className="mb-3 text-[var(--brand-1)]">Soluções Rodotec</h2>
                  <p className="mx-auto max-w-[60ch] text-lg text-[var(--neutral-700)]">
                    Expertise completa para manter sua operação com máxima eficiência
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <SolutionCard
                    icon={Truck}
                    category="Manutenção de Frota"
                    title="Manutenção de Frotas Pesadas"
                    features={[
                      'Inspeção preventiva e preditiva completa',
                      'Revisão programada com SLA por contrato',
                      'Gestão digital de histórico e indicadores'
                    ]}
                    href="/solucoes/manutencao-frotas"
                  />
                  <SolutionCard
                    icon={Zap}
                    category="Automação"
                    title="Projetos Elétricos e Automação"
                    features={[
                      'Painéis e quadros de comando industriais',
                      'Sensores IoT e retrofit de máquinas',
                      'Automação de processos produtivos'
                    ]}
                    href="/solucoes/eletrica-automacao"
                  />
                  <SolutionCard
                    icon={Package}
                    category="Peças e Reposição"
                    title="Peças Originais e Multimarcas"
                    features={[
                      'Estoque com +10 mil itens disponíveis',
                      'Entrega expressa em todo território nacional',
                      'Garantia de qualidade e procedência'
                    ]}
                    href="/solucoes/pecas-reposicao"
                  />
                  <SolutionCard
                    icon={Wrench}
                    category="Serviços de Campo"
                    title="Atendimento Técnico On-site"
                    features={[
                      'Equipe técnica em 26 estados',
                      'Plantão 24/7 para casos emergenciais',
                      'Relatórios digitais pós-atendimento'
                    ]}
                    href="/solucoes/servicos-campo"
                  />
                </div>
              </div>
            </section>

            {/* Differentials - Value-driven copy */}
            <section className="section-spacing border-y border-[var(--border-soft)] bg-[var(--surface-elev-02)]">
              <div className="mx-auto max-w-[1440px] px-6">
                <div className="mb-12 text-center">
                  <h2 className="mb-3 text-[var(--brand-1)]">Por que escolher a Rodotec</h2>
                  <p className="mx-auto max-w-[60ch] text-lg text-[var(--neutral-700)]">
                    Diferenciais que geram resultados concretos
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border border-[var(--border-soft)] bg-white p-6 text-center transition-all hover:shadow-md">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-1)] text-white">
                      <Shield className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h4 className="mb-2 text-lg">Certificação ISO 9001</h4>
                    <p className="text-sm leading-relaxed text-[var(--neutral-700)]">
                      Processos auditados e qualidade garantida em todas as etapas
                    </p>
                  </div>
                  
                  <div className="rounded-xl border border-[var(--border-soft)] bg-white p-6 text-center transition-all hover:shadow-md">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-1)] text-white">
                      <Clock className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h4 className="mb-2 text-lg">SLA médio de 72 horas</h4>
                    <p className="text-sm leading-relaxed text-[var(--neutral-700)]">
                      Compromisso contratual com prazo de atendimento verificável
                    </p>
                  </div>
                  
                  <div className="rounded-xl border border-[var(--border-soft)] bg-white p-6 text-center transition-all hover:shadow-md">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-1)] text-white">
                      <MapPin className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h4 className="mb-2 text-lg">Cobertura em 26 estados</h4>
                    <p className="text-sm leading-relaxed text-[var(--neutral-700)]">
                      Rede própria e parceiros homologados em todo o Brasil
                    </p>
                  </div>
                  
                  <div className="rounded-xl border border-[var(--border-soft)] bg-white p-6 text-center transition-all hover:shadow-md">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-1)] text-white">
                      <Target className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h4 className="mb-2 text-lg">Redução de 30% em custos</h4>
                    <p className="text-sm leading-relaxed text-[var(--neutral-700)]">
                      Média de economia com manutenção preventiva estruturada
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section - KPIs normalized */}
            <StatsSection
              title="Números que comprovam nossa excelência"
              stats={[
                {
                  icon: Users,
                  value: '+800',
                  label: 'Clientes atendidos'
                },
                {
                  icon: Award,
                  value: '18 anos',
                  label: 'De mercado'
                },
                {
                  icon: MapPin,
                  value: '26',
                  label: 'Estados cobertos'
                },
                {
                  icon: Clock,
                  value: '72h',
                  label: 'SLA médio'
                }
              ]}
            />

            {/* Case Study - Challenge > Solution > Result format */}
            <section className="section-spacing bg-white">
              <div className="mx-auto max-w-[1440px] px-6">
                <div className="mb-12 text-center">
                  <h2 className="mb-3 text-[var(--brand-1)]">Casos de Sucesso</h2>
                  <p className="mx-auto max-w-[60ch] text-lg text-[var(--neutral-700)]">
                    Resultados reais, métricas verificáveis
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <Card className="overflow-hidden border border-[var(--border-soft)] border-l-4 border-l-[var(--brand-2)]">
                    <CardHeader className="bg-[var(--surface-elev-02)]">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-[var(--brand-2)]/10 text-[var(--brand-2)]">
                          Logística & Transporte
                        </Badge>
                        <TrendingUp className="h-5 w-5 text-[var(--brand-2)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl">Redução de 23% no Downtime de Frota Nacional</h3>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="mb-4 space-y-3">
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Desafio
                          </p>
                          <p className="text-sm text-[var(--neutral-700)]">
                            Alto índice de paradas não programadas impactando entregas
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Solução
                          </p>
                          <p className="text-sm text-[var(--neutral-700)]">
                            Programa de manutenção preditiva com sensores IoT em 150 veículos
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Resultado
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6">
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">23%</div>
                          <div className="text-sm text-[var(--neutral-500)]">↓ Downtime</div>
                        </div>
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">4 meses</div>
                          <div className="text-sm text-[var(--neutral-500)]">Tempo projeto</div>
                        </div>
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">150</div>
                          <div className="text-sm text-[var(--neutral-500)]">Veículos</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-[var(--border-soft)] border-l-4 border-l-[var(--brand-2)]">
                    <CardHeader className="bg-[var(--surface-elev-02)]">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-[var(--brand-2)]/10 text-[var(--brand-2)]">
                          Indústria
                        </Badge>
                        <CheckCircle className="h-5 w-5 text-[var(--brand-2)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl">Modernização Elétrica sem Parar Produção</h3>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="mb-4 space-y-3">
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Desafio
                          </p>
                          <p className="text-sm text-[var(--neutral-700)]">
                            Sistema elétrico obsoleto, alto consumo energético
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Solução
                          </p>
                          <p className="text-sm text-[var(--neutral-700)]">
                            Retrofit completo com painéis inteligentes e monitoramento IoT
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                            Resultado
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6">
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">35%</div>
                          <div className="text-sm text-[var(--neutral-500)]">↓ Energia</div>
                        </div>
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">Zero</div>
                          <div className="text-sm text-[var(--neutral-500)]">Paradas</div>
                        </div>
                        <div>
                          <div className="font-['Montserrat'] text-3xl text-[var(--brand-1)]">6 meses</div>
                          <div className="text-sm text-[var(--neutral-500)]">ROI atingido</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" className="border-[var(--brand-1)] text-[var(--brand-1)] hover:bg-[var(--brand-1)] hover:text-white" asChild>
                    <Link href="/clientes">Ver todos os cases</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Client Logos - Duotone style */}
            <ClientLogos />

            {/* News Section - Normalized cards with read time */}
            <section className="section-spacing bg-[var(--surface-elev-02)]">
              <div className="mx-auto max-w-[1440px] px-6">
                <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <h2 className="mb-2 text-[var(--brand-1)]">Novidades & Conteúdo</h2>
                    <p className="max-w-[60ch] text-lg text-[var(--neutral-700)]">
                      Insights e tendências do setor industrial
                    </p>
                  </div>
                  <Button variant="outline" asChild className="hidden border-[var(--brand-1)] text-[var(--brand-1)] hover:bg-[var(--brand-1)] hover:text-white md:flex">
                    <Link href="/novidades">Ver todas</Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <NewsCard
                    image="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGZsZWV0JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MTE4NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    title="5 Tendências em Manutenção Preditiva para 2025"
                    tag="Tecnologia"
                    date="15 Out 2025"
                    readTime="8 min"
                    excerpt="Conheça as principais inovações que estão transformando a manutenção industrial e gerando economia."
                    href="/novidades/tendencias-manutencao-2025"
                  />
                  <NewsCard
                    image="https://images.unsplash.com/photo-1758873263914-230f8ff60569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzYxMTg3MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    title="Como Automação Reduz Custos em até 40%"
                    tag="Automação"
                    date="08 Out 2025"
                    readTime="6 min"
                    excerpt="Entenda o ROI real de projetos de automação industrial com casos práticos."
                    href="/novidades/automacao-custos"
                  />
                  <NewsCard
                    image="https://images.unsplash.com/photo-1740240993282-6f3b51bd8314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2MTE4NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    title="Checklist: Manutenção Preventiva de Frotas"
                    tag="Manutenção"
                    date="01 Out 2025"
                    readTime="5 min"
                    excerpt="Baixe nosso guia gratuito com todos os pontos de verificação essenciais."
                    href="/novidades/checklist-manutencao"
                  />
                </div>

                <div className="mt-8 text-center md:hidden">
                  <Button variant="outline" className="border-[var(--brand-1)] text-[var(--brand-1)] hover:bg-[var(--brand-1)] hover:text-white" asChild>
                    <Link href="/novidades">Ver todas as novidades</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* CTA Banner */}
            <CTABanner
              title="Precisa de um orçamento técnico?"
              subtitle="Nossa equipe está pronta para atender você"
              phone="(11) 3456-7890"
              whatsapp="11987654321"
            />

            {/* Footer */}
            <Footer />
          </main>
        </>
      )}

      {currentPage === 'sobre' && <About />}
      {currentPage === 'solucoes' && <Solutions />}
      {currentPage === 'clientes' && <Clients />}
      {currentPage === 'novidades' && <News />}
      {currentPage === 'rede' && <Network />}
      {currentPage === 'contato' && <Contact />}

      {/* Show footer on all pages except home (home has it in main content) */}
      {currentPage !== 'home' && <Footer />}

      <WhatsAppButton phone="11987654321" />
    </div>
  );
}