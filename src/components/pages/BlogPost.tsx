import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppButton } from '../WhatsAppButton';
import { Button } from '../ui/button';
import { Link } from '../Link';
import { Badge } from '../ui/badge';
import { Calendar, Clock, User, ArrowRight, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { NewsCard } from '../NewsCard';

export function BlogPost() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-12">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-6">
              <Link href="/novidades" className="text-[var(--neutral-700)] transition-colors hover:text-[var(--brand-1)]">
                ← Voltar para Novidades
              </Link>
            </div>
            
            <Badge className="mb-4 bg-[var(--brand-2)]/10 text-[var(--brand-2)]">
              Tecnologia
            </Badge>
            
            <h1 className="mb-6 text-4xl text-[var(--brand-1)] lg:text-5xl">
              5 Tendências em Manutenção Preditiva para 2025
            </h1>
            
            <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-[var(--neutral-500)]">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Ricardo Silva</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15 de Outubro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min de leitura</span>
              </div>
            </div>
            
            <div className="mb-8 flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGZsZWV0JTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MTE4NzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manutenção Preditiva"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-[800px] px-6 pb-16">
          <div className="prose prose-lg">
            <p className="text-xl text-[var(--neutral-700)]">
              A manutenção preditiva está revolucionando a forma como as empresas gerenciam 
              seus ativos. Com o avanço da tecnologia e a crescente adoção de soluções 
              baseadas em dados, 2025 promete trazer inovações significativas para o setor.
            </p>

            <h2 className="mt-12 text-[var(--brand-1)]">1. Internet das Coisas (IoT) Industrial</h2>
            <p>
              A implementação de sensores IoT em equipamentos e frotas está se tornando 
              cada vez mais acessível. Esses dispositivos coletam dados em tempo real sobre 
              temperatura, vibração, consumo de energia e outros parâmetros críticos, 
              permitindo identificar problemas antes que causem falhas.
            </p>
            <p>
              <strong>Benefícios principais:</strong>
            </p>
            <ul>
              <li>Redução de até 30% nos custos de manutenção</li>
              <li>Aumento de 25% na vida útil dos equipamentos</li>
              <li>Diminuição de 70% em paradas não programadas</li>
            </ul>

            <h2 className="mt-12 text-[var(--brand-1)]">2. Inteligência Artificial e Machine Learning</h2>
            <p>
              Algoritmos de IA estão sendo treinados para analisar grandes volumes de dados 
              históricos e em tempo real, identificando padrões que indicam a probabilidade 
              de falhas futuras com precisão cada vez maior.
            </p>
            <p>
              Empresas que adotaram essas tecnologias reportam uma melhoria de até 40% na 
              precisão de suas previsões de manutenção, resultando em economia significativa 
              de recursos e tempo.
            </p>

            <h2 className="mt-12 text-[var(--brand-1)]">3. Gêmeos Digitais (Digital Twins)</h2>
            <p>
              A criação de réplicas virtuais de equipamentos físicos permite simular 
              diferentes cenários operacionais e testar estratégias de manutenção sem 
              interromper a produção. Esta tecnologia está se tornando essencial para 
              operações complexas.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-l-[var(--brand-2)] bg-[var(--neutral-50)] p-6">
              <p className="text-[var(--neutral-700)]">
                <strong>Dica do especialista:</strong> Comece pequeno com projetos piloto 
                em equipamentos críticos antes de expandir para toda a operação. Isso 
                permite validar o ROI e ajustar a estratégia conforme necessário.
              </p>
            </div>

            <h2 className="mt-12 text-[var(--brand-1)]">4. Realidade Aumentada para Manutenção</h2>
            <p>
              Técnicos equipados com óculos de realidade aumentada podem acessar informações 
              em tempo real sobre os equipamentos, visualizar instruções passo a passo e até 
              mesmo receber suporte remoto de especialistas durante intervenções complexas.
            </p>

            <h2 className="mt-12 text-[var(--brand-1)]">5. Plataformas Integradas de Gestão</h2>
            <p>
              Soluções que unificam dados de diferentes fontes (ERP, CMMS, IoT, etc.) em 
              uma única interface estão facilitando a tomada de decisões estratégicas. 
              Gestores podem visualizar KPIs, agendar manutenções e gerenciar equipes de 
              forma mais eficiente.
            </p>

            <h2 className="mt-12 text-[var(--brand-1)]">Conclusão</h2>
            <p>
              A adoção dessas tecnologias não é mais uma questão de "se", mas de "quando". 
              Empresas que investirem em manutenção preditiva agora estarão em vantagem 
              competitiva significativa nos próximos anos, com operações mais eficientes, 
              custos reduzidos e maior confiabilidade.
            </p>
            <p>
              Na Rodotec, já estamos implementando várias dessas soluções para nossos 
              clientes. Se você quer saber como sua empresa pode se beneficiar da manutenção 
              preditiva, entre em contato com nossa equipe de especialistas.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-[var(--brand-1)] to-[#06192a] p-8 text-white">
            <h3 className="mb-3 text-2xl">
              Quer implementar manutenção preditiva na sua operação?
            </h3>
            <p className="mb-6 text-white/90">
              Nossa equipe pode ajudar você a escolher e implementar as melhores soluções 
              para seu negócio.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--brand-2)] text-white hover:bg-[var(--brand-2)]/90"
              asChild
            >
              <Link href="/orcamento">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Author Box */}
          <div className="mt-12 flex items-start gap-4 rounded-lg border bg-[var(--neutral-50)] p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--brand-1)] text-2xl text-white">
              RS
            </div>
            <div>
              <h4 className="mb-1">Ricardo Silva</h4>
              <p className="mb-2 text-sm text-[var(--neutral-500)]">
                Gerente Técnico na Rodotec
              </p>
              <p className="text-sm text-[var(--neutral-700)]">
                Engenheiro mecânico com 15 anos de experiência em manutenção industrial e 
                gestão de frotas. Especialista em implementação de soluções de manutenção 
                preditiva.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t bg-[var(--neutral-50)] py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-8 text-center text-[var(--brand-1)]">
            Artigos Relacionados
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              image="https://images.unsplash.com/photo-1758873263914-230f8ff60569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzYxMTg3MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Como a Automação Reduz Custos Operacionais"
              tag="Automação"
              date="08 Out 2025"
              excerpt="Entenda o ROI real de projetos de automação industrial."
              href="/novidades/automacao-custos"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1740240993282-6f3b51bd8314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2MTE4NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Checklist Completo: Manutenção Preventiva de Frotas"
              tag="Manutenção"
              date="01 Out 2025"
              excerpt="Baixe nosso guia gratuito com todos os pontos de verificação essenciais."
              href="/novidades/checklist-manutencao"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1669003153363-6d7ba8e20c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2MTE4NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Gestão de Estoque: Otimizando Peças de Reposição"
              tag="Gestão"
              date="22 Set 2025"
              excerpt="Estratégias para reduzir custos e evitar rupturas de estoque."
              href="/novidades/gestao-estoque"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="11987654321" />
    </div>
  );
}
