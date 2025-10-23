import { Link } from '../Link';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Wrench, 
  Package, 
  Zap, 
  Truck, 
  LineChart, 
  Shield,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users
} from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      id: 'manutencao-frotas',
      icon: Wrench,
      category: 'Manutenção',
      title: 'Manutenção de Frotas',
      description: 'Serviços preventivos, preditivos e corretivos com SLA garantido',
      features: [
        'Manutenção preventiva programada',
        'Diagnóstico preditivo com IoT',
        'Atendimento 24/7',
        'Equipe técnica certificada'
      ],
      benefits: [
        'Redução de 40% em paradas não programadas',
        'Aumento de 25% na vida útil dos equipamentos',
        'SLA de 4h para emergências'
      ],
      color: 'var(--brand-1)',
    },
    {
      id: 'pecas-reposicao',
      icon: Package,
      category: 'Peças',
      title: 'Peças e Reposição',
      description: 'Estoque estratégico com +10 mil itens para entrega imediata',
      features: [
        'Estoque próprio em 26 unidades',
        'Peças originais e homologadas',
        'Logística expressa',
        'Garantia de 12 meses'
      ],
      benefits: [
        'Disponibilidade de 95% de peças críticas',
        'Entrega em até 24h para capitais',
        'Redução de 60% no tempo de parada'
      ],
      color: 'var(--brand-2)',
    },
    {
      id: 'automacao-industrial',
      icon: Zap,
      category: 'Automação',
      title: 'Automação Industrial',
      description: 'Retrofit e modernização de sistemas produtivos',
      features: [
        'Retrofit de linhas de produção',
        'Automação de processos',
        'Integração com ERP/MES',
        'Painéis elétricos personalizados'
      ],
      benefits: [
        'Aumento de 35% na produtividade',
        'Redução de 50% em retrabalho',
        'ROI médio de 18 meses'
      ],
      color: 'var(--brand-1)',
    },
    {
      id: 'gestao-frotas',
      icon: Truck,
      category: 'Gestão',
      title: 'Gestão de Frotas',
      description: 'Plataforma completa de telemetria e controle operacional',
      features: [
        'Rastreamento em tempo real',
        'Análise de consumo e performance',
        'Alertas preditivos',
        'Relatórios personalizados'
      ],
      benefits: [
        'Economia de 15% em combustível',
        'Redução de 30% em multas',
        'Visibilidade total da operação'
      ],
      color: 'var(--brand-2)',
    },
    {
      id: 'consultoria-tecnica',
      icon: LineChart,
      category: 'Consultoria',
      title: 'Consultoria Técnica',
      description: 'Diagnóstico e otimização de processos industriais',
      features: [
        'Auditoria técnica completa',
        'Plano de manutenção personalizado',
        'Treinamento de equipes',
        'Acompanhamento de KPIs'
      ],
      benefits: [
        'Redução de até 30% em custos operacionais',
        'Aumento de disponibilidade para 95%+',
        'Certificação de processos'
      ],
      color: 'var(--brand-1)',
    },
    {
      id: 'contratos-manutencao',
      icon: Shield,
      category: 'Contratos',
      title: 'Contratos de Manutenção',
      description: 'Planos personalizados com custo fixo mensal',
      features: [
        'Manutenção preventiva inclusa',
        'Desconto em peças e serviços',
        'Prioridade no atendimento',
        'Relatórios mensais'
      ],
      benefits: [
        'Previsibilidade de custos',
        'Redução de até 45% no OPEX',
        'Disponibilidade garantida por SLA'
      ],
      color: 'var(--brand-2)',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-1)] to-[#0a1f35] py-20 text-white lg:py-32">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-[var(--brand-2)] text-white">Nossas Soluções</Badge>
            <h1 className="mb-6 font-['Montserrat'] text-5xl tracking-tight lg:text-6xl">
              Soluções Integradas para Sua Operação
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Tecnologia, expertise e suporte dedicado para maximizar a disponibilidade 
              e eficiência da sua frota
            </p>
            <Button 
              size="lg" 
              className="bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90"
              asChild
            >
              <Link href="/orcamento">
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution) => (
              <Card 
                key={solution.id} 
                className="group overflow-hidden border-2 border-[var(--border-soft)] transition-all hover:border-[var(--brand-2)] hover:shadow-xl"
              >
                <CardHeader className="border-b border-[var(--border-soft)] bg-[var(--surface-elev-02)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div 
                        className="rounded-xl p-3"
                        style={{ backgroundColor: `${solution.color}15` }}
                      >
                        <solution.icon 
                          className="h-8 w-8" 
                          strokeWidth={1.5}
                          style={{ color: solution.color }}
                        />
                      </div>
                      <div>
                        <Badge 
                          variant="outline" 
                          className="mb-2 text-xs"
                          style={{ borderColor: solution.color, color: solution.color }}
                        >
                          {solution.category}
                        </Badge>
                        <h3 className="mb-2 font-['Montserrat'] text-2xl text-[var(--brand-1)]">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-[var(--neutral-600)]">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                      <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                      Recursos
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-2 text-sm text-[var(--neutral-700)]"
                        >
                          <CheckCircle2 
                            className="mt-0.5 h-4 w-4 shrink-0" 
                            strokeWidth={2}
                            style={{ color: solution.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="rounded-lg bg-[var(--surface-elev-02)] p-4">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                      <Clock className="h-4 w-4" strokeWidth={2} />
                      Benefícios Comprovados
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, index) => (
                        <li 
                          key={index} 
                          className="text-sm font-medium text-[var(--brand-1)]"
                        >
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="mt-6 w-full transition-all group-hover:scale-105"
                    style={{ backgroundColor: solution.color }}
                    asChild
                  >
                    <Link href={`/solucoes/${solution.id}`}>
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border-soft)] bg-[var(--surface-elev-02)] py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto mb-6 h-16 w-16 text-[var(--brand-2)]" strokeWidth={1.5} />
            <h2 className="mb-4 font-['Montserrat'] text-4xl text-[var(--brand-1)]">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="mb-8 text-lg text-[var(--neutral-600)]">
              Nossa equipe técnica está pronta para desenvolver a solução ideal 
              para o seu desafio específico
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90"
                asChild
              >
                <Link href="/contato">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[var(--brand-1)]"
                asChild
              >
                <Link href="/orcamento">
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
