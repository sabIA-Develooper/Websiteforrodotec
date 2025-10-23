import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppButton } from '../WhatsAppButton';
import { Button } from '../ui/button';
import { Link } from '../Link';
import { Badge } from '../ui/badge';
import { 
  Download, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Clock, 
  Award 
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export function SolutionDetail() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-1)] to-[#06192a] py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-6">
            <Link href="/solucoes" className="text-white/80 transition-colors hover:text-white">
              ← Voltar para Soluções
            </Link>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-[var(--brand-2)] text-white">
                Manutenção Industrial
              </Badge>
              <h1 className="mb-4 text-4xl text-white lg:text-5xl">
                Manutenção de Frotas Pesadas
              </h1>
              <p className="mb-6 text-lg text-white/90">
                Inspeção preventiva e preditiva, revisão programada com SLA garantido 
                e contratos personalizados para manter sua frota sempre operacional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-[var(--brand-2)] text-white hover:bg-[var(--brand-2)]/90"
                  asChild
                >
                  <Link href="/orcamento">
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGZsZWV0JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MTE4NzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manutenção de Frotas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-[var(--brand-1)]">
            Benefícios da Nossa Solução
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[var(--neutral-200)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="mb-2">Qualidade Certificada</h4>
              <p className="text-sm text-[var(--neutral-700)]">
                Processos seguindo normas ISO e certificações do setor
              </p>
            </div>
            
            <div className="rounded-xl border border-[var(--neutral-200)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="mb-2">SLA Garantido</h4>
              <p className="text-sm text-[var(--neutral-700)]">
                Contratos com SLA de atendimento de até 24 horas
              </p>
            </div>
            
            <div className="rounded-xl border border-[var(--neutral-200)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="mb-2">Redução de Custos</h4>
              <p className="text-sm text-[var(--neutral-700)]">
                Até 30% de economia com manutenção preventiva
              </p>
            </div>
            
            <div className="rounded-xl border border-[var(--neutral-200)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="mb-2">Equipe Especializada</h4>
              <p className="text-sm text-[var(--neutral-700)]">
                Técnicos certificados e treinados nas principais marcas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-[var(--neutral-50)] py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-[var(--brand-1)]">O que está incluído</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <div>
                    <h4 className="mb-1">Inspeção Preventiva Completa</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Verificação de 120+ pontos críticos com relatório digital detalhado
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <div>
                    <h4 className="mb-1">Manutenção Preditiva com IoT</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Sensores inteligentes monitoram componentes em tempo real
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <div>
                    <h4 className="mb-1">Gestão de Peças e Estoque</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Controle inteligente de peças críticas com reposição automática
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <div>
                    <h4 className="mb-1">Plataforma de Gestão</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Dashboard online com histórico, custos e indicadores de performance
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <div>
                    <h4 className="mb-1">Suporte Técnico 24/7</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Central de atendimento para emergências e dúvidas técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6 text-[var(--brand-1)]">Processo de Trabalho</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-1)] font-['Montserrat'] text-white">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Diagnóstico Inicial</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Avaliação técnica completa da frota e levantamento de necessidades
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-1)] font-['Montserrat'] text-white">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Planejamento Customizado</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Criação de plano de manutenção adequado ao seu perfil operacional
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-1)] font-['Montserrat'] text-white">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Execução com SLA</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Implementação das ações seguindo cronograma e SLA acordados
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-1)] font-['Montserrat'] text-white">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1">Monitoramento Contínuo</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Acompanhamento de indicadores e ajustes conforme necessário
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-8 text-[var(--brand-1)]">Especificações Técnicas</h2>
          
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-[var(--neutral-50)]">
                  <TableHead>Item</TableHead>
                  <TableHead>Especificação</TableHead>
                  <TableHead>Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Tipos de Veículos</TableCell>
                  <TableCell>Caminhões, carretas, implementos</TableCell>
                  <TableCell>Todas as marcas e modelos</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Periodicidade</TableCell>
                  <TableCell>Preventiva mensal/trimestral</TableCell>
                  <TableCell>Conforme manual do fabricante</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SLA Atendimento</TableCell>
                  <TableCell>24h a 72h</TableCell>
                  <TableCell>Conforme contrato e região</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cobertura</TableCell>
                  <TableCell>Nacional</TableCell>
                  <TableCell>26 estados + DF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Relatórios</TableCell>
                  <TableCell>Digitais em tempo real</TableCell>
                  <TableCell>Plataforma web e mobile</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Garantia</TableCell>
                  <TableCell>90 dias peças e serviços</TableCell>
                  <TableCell>Conforme normas do fabricante</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[var(--neutral-50)] py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-8 text-center text-[var(--brand-1)]">Galeria de Serviços</h2>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740240993282-6f3b51bd8314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2MTE4NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manutenção de veículos"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGZsZWV0JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MTE4NzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Frota de caminhões"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740422960726-9f495f37090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFyZSUyMHBhcnRzJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2MTE4NzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Peças e componentes"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-1)]/90 py-16">
        <div className="mx-auto max-w-[1440px] px-6 text-center">
          <h2 className="mb-4 text-3xl text-white">
            Pronto para otimizar sua operação?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Solicite uma proposta personalizada e descubra como podemos ajudar sua empresa
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              size="lg"
              className="bg-[var(--brand-2)] text-white hover:bg-[var(--brand-2)]/90"
              asChild
            >
              <Link href="/orcamento">
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="11987654321" />
    </div>
  );
}
