import { Award, Target, Users, TrendingUp, Building2, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  const milestones = [
    { year: '1998', title: 'Fundação', description: 'Início das operações em São Paulo' },
    { year: '2005', title: 'Expansão Nacional', description: '10 unidades em 6 estados' },
    { year: '2012', title: 'Certificação ISO', description: 'ISO 9001 e ISO 14001' },
    { year: '2018', title: 'IoT & Indústria 4.0', description: 'Lançamento de soluções conectadas' },
    { year: '2023', title: 'Líder de Mercado', description: '+500 clientes ativos' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Compromisso com qualidade e precisão em cada projeto'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Relacionamento duradouro com clientes e fornecedores'
    },
    {
      icon: TrendingUp,
      title: 'Inovação',
      description: 'Investimento contínuo em tecnologia e processos'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Prioridade absoluta em todas as operações'
    },
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'OHSAS 18001',
    'INMETRO',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--brand-1)] py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-1)] to-[#0a1f35] opacity-90"></div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-[var(--brand-2)] text-white">Sobre a Rodotec</Badge>
            <h1 className="mb-6 font-['Montserrat'] text-5xl tracking-tight lg:text-6xl">
              25 Anos de Excelência em Soluções Industriais
            </h1>
            <p className="text-xl leading-relaxed text-white/90">
              Referência nacional em manutenção, automação e gestão de frotas para o setor de transporte e logística
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[var(--border-soft)] bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">25+</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Anos de Mercado</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">500+</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Clientes Ativos</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">26</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Unidades Brasil</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">98%</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Satisfação Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Building2 className="mb-4 h-12 w-12 text-[var(--brand-2)]" strokeWidth={1.5} />
                <h2 className="mb-4 font-['Montserrat'] text-3xl text-[var(--brand-1)]">Nossa Missão</h2>
                <p className="leading-relaxed text-[var(--neutral-700)]">
                  Fornecer soluções integradas de manutenção, automação e gestão de frotas que maximizem 
                  a disponibilidade operacional e reduzam custos, através de tecnologia de ponta, 
                  equipe especializada e atendimento diferenciado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Target className="mb-4 h-12 w-12 text-[var(--brand-2)]" strokeWidth={1.5} />
                <h2 className="mb-4 font-['Montserrat'] text-3xl text-[var(--brand-1)]">Nossa Visão</h2>
                <p className="leading-relaxed text-[var(--neutral-700)]">
                  Ser a referência nacional em soluções industriais para transporte e logística, 
                  reconhecida pela inovação, qualidade técnica e compromisso com a sustentabilidade, 
                  expandindo nossa presença para toda América Latina até 2030.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--surface-elev-02)] py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">Nossos Valores</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--neutral-600)]">
              Princípios que guiam nossas decisões e relacionamentos
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-[var(--brand-2)]/10 p-4">
                    <value.icon className="h-8 w-8 text-[var(--brand-2)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-['Montserrat'] text-xl text-[var(--brand-1)]">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--neutral-600)]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">Nossa Trajetória</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--neutral-600)]">
              Marcos importantes da nossa história
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--brand-2)]/30 lg:block"></div>

            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`relative mb-12 lg:mb-16 ${
                  index % 2 === 0 ? 'lg:pr-[calc(50%+48px)]' : 'lg:pl-[calc(50%+48px)]'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--brand-2)] ring-4 ring-white lg:block"></div>

                <Card className="border-2 border-[var(--brand-2)]/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 text-3xl font-['Montserrat'] text-[var(--brand-2)]">
                      {milestone.year}
                    </div>
                    <h3 className="mb-2 text-xl font-['Montserrat'] text-[var(--brand-1)]">
                      {milestone.title}
                    </h3>
                    <p className="text-[var(--neutral-600)]">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-[var(--border-soft)] bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Award className="mx-auto mb-4 h-12 w-12 text-[var(--brand-2)]" strokeWidth={1.5} />
            <h2 className="mb-4 font-['Montserrat'] text-3xl text-[var(--brand-1)]">Certificações</h2>
            <p className="mb-8 text-[var(--neutral-600)]">
              Qualidade reconhecida por normas internacionais
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert) => (
                <Badge 
                  key={cert} 
                  variant="outline" 
                  className="border-[var(--brand-1)] px-6 py-2 text-sm text-[var(--brand-1)]"
                >
                  <Award className="mr-2 h-4 w-4" strokeWidth={2} />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
