import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Link } from '../Link';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Award,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function Clients() {
  const [activeTab, setActiveTab] = useState('all');

  const clients = [
    {
      name: 'TransLog Brasil',
      logo: '🚛',
      sector: 'Logística',
      location: 'São Paulo, SP',
      partnership: '2015',
      project: 'Gestão Completa de Frotas',
      results: [
        'Redução de 35% em custos de manutenção',
        'Aumento de 98% na disponibilidade',
        '24/7 monitoramento IoT'
      ]
    },
    {
      name: 'Alimentos Premium',
      logo: '🏭',
      sector: 'Indústria',
      location: 'Campinas, SP',
      partnership: '2018',
      project: 'Automação e Retrofit',
      results: [
        'Aumento de 42% na produtividade',
        'ROI em 16 meses',
        'Integração com SAP'
      ]
    },
    {
      name: 'Cargo Express',
      logo: '📦',
      sector: 'Transporte',
      location: 'Rio de Janeiro, RJ',
      partnership: '2019',
      project: 'Manutenção Preditiva',
      results: [
        'Zero paradas não programadas em 2023',
        'Economia de R$ 2.8M/ano',
        'Certificação ISO 9001'
      ]
    },
    {
      name: 'AgroBrasil',
      logo: '🌾',
      sector: 'Agronegócio',
      location: 'Uberlândia, MG',
      partnership: '2020',
      project: 'Telemetria e Gestão',
      results: [
        'Redução de 18% em consumo',
        'Rastreamento 100% da frota',
        'Otimização de rotas'
      ]
    },
    {
      name: 'Mineração Sul',
      logo: '⛏️',
      sector: 'Mineração',
      location: 'Belo Horizonte, MG',
      partnership: '2017',
      project: 'Manutenção de Equipamentos Pesados',
      results: [
        'SLA 99.5% cumprido',
        'Equipe dedicada on-site',
        'Redução de 40% em downtime'
      ]
    },
    {
      name: 'Siderúrgica Nacional',
      logo: '🏗️',
      sector: 'Siderurgia',
      location: 'Volta Redonda, RJ',
      partnership: '2016',
      project: 'Automação Industrial',
      results: [
        'Modernização de 3 linhas',
        'Aumento de 28% em output',
        'Redução de 50% em retrabalho'
      ]
    },
  ];

  const testimonials = [
    {
      client: 'João Silva',
      position: 'Diretor de Operações',
      company: 'TransLog Brasil',
      text: 'A parceria com a Rodotec transformou nossa operação. A manutenção preditiva reduziu drasticamente nossas paradas não programadas e o suporte 24/7 nos dá tranquilidade total.',
      avatar: '👨‍💼'
    },
    {
      client: 'Maria Santos',
      position: 'Gerente Industrial',
      company: 'Alimentos Premium',
      text: 'O projeto de automação superou nossas expectativas. ROI em menos de 18 meses e aumento significativo na produtividade. Equipe técnica extremamente competente.',
      avatar: '👩‍💼'
    },
    {
      client: 'Carlos Mendes',
      position: 'CEO',
      company: 'Cargo Express',
      text: 'Mais de 4 anos de parceria e nunca nos decepcionaram. A qualidade técnica e o comprometimento da Rodotec são incomparáveis no mercado.',
      avatar: '👨‍💼'
    },
  ];

  const stats = [
    { number: '500+', label: 'Clientes Ativos', icon: Building2 },
    { number: '26', label: 'Estados Atendidos', icon: MapPin },
    { number: '15k+', label: 'Projetos Entregues', icon: Award },
    { number: '98%', label: 'Taxa de Retenção', icon: TrendingUp },
  ];

  const sectors = ['all', 'Logística', 'Indústria', 'Transporte', 'Agronegócio', 'Mineração'];

  const filteredClients = activeTab === 'all' 
    ? clients 
    : clients.filter(c => c.sector === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-1)] to-[#0a1f35] py-20 text-white lg:py-32">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-[var(--brand-2)] text-white">Nossos Clientes</Badge>
            <h1 className="mb-6 font-['Montserrat'] text-5xl tracking-tight lg:text-6xl">
              Parceiros de Sucesso
            </h1>
            <p className="text-xl leading-relaxed text-white/90">
              Empresas líderes confiam na Rodotec para manter suas operações em movimento
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[var(--border-soft)] bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-3 h-10 w-10 text-[var(--brand-2)]" strokeWidth={1.5} />
                <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">
                  {stat.number}
                </div>
                <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">
              Projetos em Destaque
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--neutral-600)]">
              Conheça alguns dos nossos casos de sucesso
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="mx-auto flex w-fit flex-wrap justify-center">
              {sectors.map((sector) => (
                <TabsTrigger key={sector} value={sector} className="capitalize">
                  {sector === 'all' ? 'Todos' : sector}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredClients.map((client) => (
                  <Card 
                    key={client.name} 
                    className="overflow-hidden border-2 border-[var(--border-soft)] transition-all hover:border-[var(--brand-2)] hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      {/* Client Header */}
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--surface-elev-02)] text-2xl">
                            {client.logo}
                          </div>
                          <div>
                            <h3 className="font-['Montserrat'] text-lg text-[var(--brand-1)]">
                              {client.name}
                            </h3>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {client.sector}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="mb-4 space-y-2 border-t border-[var(--border-soft)] pt-4">
                        <div className="flex items-start gap-2 text-sm text-[var(--neutral-600)]">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                          {client.location}
                        </div>
                        <div className="flex items-start gap-2 text-sm text-[var(--neutral-600)]">
                          <Calendar className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                          Parceria desde {client.partnership}
                        </div>
                      </div>

                      <div className="mb-4 rounded-lg bg-[var(--surface-elev-02)] p-3">
                        <p className="text-sm font-medium text-[var(--brand-1)]">
                          {client.project}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                          Resultados
                        </h4>
                        <ul className="space-y-1">
                          {client.results.map((result, index) => (
                            <li 
                              key={index} 
                              className="flex items-start gap-2 text-sm text-[var(--neutral-700)]"
                            >
                              <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-2)]" strokeWidth={2} />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--surface-elev-02)] py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <Quote className="mx-auto mb-4 h-12 w-12 text-[var(--brand-2)]" strokeWidth={1.5} />
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">
              O Que Dizem Nossos Clientes
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.client} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-[var(--brand-2)]/30" strokeWidth={1.5} />
                  <p className="mb-6 leading-relaxed text-[var(--neutral-700)]">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-2)]/10 text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-[var(--brand-1)]">
                        {testimonial.client}
                      </p>
                      <p className="text-sm text-[var(--neutral-600)]">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-[var(--neutral-500)]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border-soft)] bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">
              Faça Parte Desta Lista
            </h2>
            <p className="mb-8 text-lg text-[var(--neutral-600)]">
              Junte-se a centenas de empresas que confiam na Rodotec
            </p>
            <Button 
              size="lg" 
              className="bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90"
              asChild
            >
              <Link href="/orcamento">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
