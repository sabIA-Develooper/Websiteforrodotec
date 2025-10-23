import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Link } from '../Link';
import { Input } from '../ui/input';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  Tag,
  User,
  TrendingUp
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: '1',
      title: 'Rodotec Lança Plataforma de Manutenção Preditiva com IA',
      slug: 'lancamento-manutencao-preditiva-ia',
      category: 'Inovação',
      date: '2025-10-15',
      readTime: '5 min',
      author: 'Equipe Rodotec',
      excerpt: 'Nova solução utiliza inteligência artificial para prever falhas com 95% de precisão, revolucionando a gestão de frotas.',
      image: '🤖',
      featured: true,
    },
    {
      id: '2',
      title: 'Expansão: Nova Unidade em Manaus Amplia Cobertura na Região Norte',
      slug: 'expansao-unidade-manaus',
      category: 'Empresa',
      date: '2025-10-10',
      readTime: '3 min',
      author: 'Comunicação',
      excerpt: 'Investimento de R$ 8 milhões fortalece presença da Rodotec na Amazônia, com estrutura completa para atender o mercado regional.',
      image: '🏢',
      featured: true,
    },
    {
      id: '3',
      title: 'Como Reduzir Custos de Manutenção em Até 40% com IoT',
      slug: 'reduzir-custos-manutencao-iot',
      category: 'Tecnologia',
      date: '2025-10-05',
      readTime: '7 min',
      author: 'Dr. João Silva',
      excerpt: 'Guia completo sobre implementação de sensores IoT para monitoramento em tempo real e manutenção preditiva eficiente.',
      image: '📊',
      featured: false,
    },
    {
      id: '4',
      title: 'Rodotec Conquista Certificação ISO 45001 de Segurança',
      slug: 'certificacao-iso-45001',
      category: 'Empresa',
      date: '2025-09-28',
      readTime: '4 min',
      author: 'Qualidade',
      excerpt: 'Reconhecimento internacional reforça compromisso com saúde e segurança ocupacional em todas as operações.',
      image: '🏆',
      featured: false,
    },
    {
      id: '5',
      title: 'Retrofit Industrial: 5 Sinais de Que Sua Linha Precisa de Modernização',
      slug: 'retrofit-industrial-sinais',
      category: 'Tecnologia',
      date: '2025-09-20',
      readTime: '6 min',
      author: 'Eng. Maria Santos',
      excerpt: 'Identifique quando é o momento ideal para modernizar seus equipamentos e maximizar o retorno sobre investimento.',
      image: '⚙️',
      featured: false,
    },
    {
      id: '6',
      title: 'Parceria Estratégica com Líder Global em Telemetria',
      slug: 'parceria-telemetria',
      category: 'Empresa',
      date: '2025-09-15',
      readTime: '4 min',
      author: 'Comunicação',
      excerpt: 'Acordo com empresa alemã traz tecnologia de ponta para clientes brasileiros, expandindo portfólio de soluções.',
      image: '🤝',
      featured: false,
    },
    {
      id: '7',
      title: 'Manutenção Preventiva vs Preditiva: Qual Escolher Para Sua Frota?',
      slug: 'preventiva-vs-preditiva',
      category: 'Gestão',
      date: '2025-09-10',
      readTime: '8 min',
      author: 'Especialistas Rodotec',
      excerpt: 'Análise comparativa detalhada das estratégias de manutenção, com cases reais e ROI comprovado.',
      image: '🔧',
      featured: false,
    },
    {
      id: '8',
      title: 'Rodotec na Fenatran 2025: Destaques do Maior Evento do Setor',
      slug: 'rodotec-fenatran-2025',
      category: 'Eventos',
      date: '2025-09-05',
      readTime: '5 min',
      author: 'Marketing',
      excerpt: 'Confira os lançamentos apresentados no estande da Rodotec e as novidades que movimentaram a feira.',
      image: '🎪',
      featured: false,
    },
  ];

  const categories = ['all', 'Inovação', 'Empresa', 'Tecnologia', 'Gestão', 'Eventos'];

  const popularTags = [
    'Manutenção Preditiva',
    'IoT',
    'Automação',
    'Frotas',
    'Certificações',
    'Sustentabilidade'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-1)] to-[#0a1f35] py-20 text-white lg:py-32">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-[var(--brand-2)] text-white">Blog & Novidades</Badge>
            <h1 className="mb-6 font-['Montserrat'] text-5xl tracking-tight lg:text-6xl">
              Insights e Tendências do Setor
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Fique por dentro das últimas novidades, tecnologias e melhores práticas 
              em manutenção e gestão de frotas
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" strokeWidth={2} />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 border-white/20 bg-white/10 pl-12 text-white placeholder:text-white/50 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main Content */}
            <div>
              {/* Category Tabs */}
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
                <TabsList className="flex w-full flex-wrap justify-start">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="capitalize">
                      {category === 'all' ? 'Todos' : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Featured Articles */}
              {featuredArticles.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6 flex items-center gap-2 text-2xl font-['Montserrat'] text-[var(--brand-1)]">
                    <TrendingUp className="h-6 w-6" strokeWidth={2} />
                    Em Destaque
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    {featuredArticles.map((article) => (
                      <Card 
                        key={article.id}
                        className="group overflow-hidden border-2 border-[var(--brand-2)] bg-gradient-to-br from-[var(--brand-2)]/5 to-transparent transition-all hover:shadow-xl"
                      >
                        <CardHeader className="border-b border-[var(--border-soft)]">
                          <div className="mb-4 flex items-center justify-between">
                            <Badge className="bg-[var(--brand-2)] text-white">
                              {article.category}
                            </Badge>
                            <div className="text-4xl">{article.image}</div>
                          </div>
                          <h3 className="mb-3 font-['Montserrat'] text-2xl leading-tight text-[var(--brand-1)] group-hover:text-[var(--brand-2)]">
                            {article.title}
                          </h3>
                        </CardHeader>
                        <CardContent className="p-6">
                          <p className="mb-4 leading-relaxed text-[var(--neutral-700)]">
                            {article.excerpt}
                          </p>
                          <div className="mb-4 flex items-center gap-4 text-sm text-[var(--neutral-500)]">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" strokeWidth={1.5} />
                              {new Date(article.date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" strokeWidth={1.5} />
                              {article.readTime}
                            </span>
                          </div>
                          <Button 
                            className="w-full bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90"
                            asChild
                          >
                            <Link href={`/novidades/${article.slug}`}>
                              Ler Artigo Completo
                              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Articles */}
              <div className="space-y-6">
                {regularArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group overflow-hidden border-2 border-[var(--border-soft)] transition-all hover:border-[var(--brand-2)] hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-elev-02)] text-4xl">
                          {article.image}
                        </div>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="text-xs text-[var(--neutral-500)]">
                              {new Date(article.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <h3 className="mb-2 font-['Montserrat'] text-xl text-[var(--brand-1)] group-hover:text-[var(--brand-2)]">
                            {article.title}
                          </h3>
                          <p className="mb-3 text-sm leading-relaxed text-[var(--neutral-600)]">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-[var(--neutral-500)]">
                              <span className="flex items-center gap-1">
                                <User className="h-3.5 w-3.5" strokeWidth={1.5} />
                                {article.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                                {article.readTime}
                              </span>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/novidades/${article.slug}`}>
                                Ler mais
                                <ArrowRight className="ml-2 h-3.5 w-3.5" strokeWidth={2} />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="py-16 text-center">
                  <Search className="mx-auto mb-4 h-16 w-16 text-[var(--neutral-300)]" strokeWidth={1.5} />
                  <h3 className="mb-2 text-xl text-[var(--neutral-600)]">Nenhum artigo encontrado</h3>
                  <p className="text-[var(--neutral-500)]">Tente ajustar os filtros ou busca</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Popular Tags */}
              <Card className="border-2 border-[var(--border-soft)]">
                <CardHeader className="border-b border-[var(--border-soft)] bg-[var(--surface-elev-02)]">
                  <h3 className="flex items-center gap-2 font-['Montserrat'] text-lg text-[var(--brand-1)]">
                    <Tag className="h-5 w-5" strokeWidth={2} />
                    Tags Populares
                  </h3>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-[var(--brand-1)] hover:text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="border-2 border-[var(--brand-2)] bg-gradient-to-br from-[var(--brand-2)]/5 to-transparent">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-['Montserrat'] text-lg text-[var(--brand-1)]">
                    Receba Novidades
                  </h3>
                  <p className="mb-4 text-sm text-[var(--neutral-600)]">
                    Assine nossa newsletter e fique por dentro das últimas tendências
                  </p>
                  <Button className="w-full bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90">
                    Assinar Newsletter
                  </Button>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="border-2 border-[var(--border-soft)]">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-['Montserrat'] text-lg text-[var(--brand-1)]">
                    Precisa de Ajuda?
                  </h3>
                  <p className="mb-4 text-sm text-[var(--neutral-600)]">
                    Fale com nossos especialistas
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contato">
                      Entre em Contato
                      <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
