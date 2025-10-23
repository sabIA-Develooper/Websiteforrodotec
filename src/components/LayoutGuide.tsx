/**
 * RODOTEC LAYOUT GUIDE V3 - Full-Bleed Hero with Category Rail
 * 
 * Arquitetura inspirada em sites industriais modernos com navegação imersiva
 */

export function LayoutGuide() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-12 p-12">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="mb-2 text-4xl text-[var(--brand-1)]">Rodotec Layout V3</h1>
        <p className="text-lg text-[var(--neutral-700)]">
          Hero full-bleed com carrossel e rail de categorias
        </p>
      </div>

      {/* Header Dark */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">1. Header Dark (fixo)</h2>
        <div className="space-y-4 rounded-xl border p-6">
          <div className="mb-4 rounded-lg bg-[var(--header-dark)] p-4">
            <p className="text-xs text-white/70">Background: #0A0F14 com 95% opacidade</p>
          </div>
          <ul className="space-y-2 text-sm">
            <li><strong>Altura:</strong> 72px fixa</li>
            <li><strong>Backdrop blur:</strong> 4px para profundidade</li>
            <li><strong>Posicionamento:</strong> Fixed top-0 z-50</li>
            <li><strong>Estrutura:</strong> Logo (esq) | Nav (centro) | Cluster de ações (dir)</li>
            <li><strong>Cluster de ações:</strong> Distribuidores + Busca + Idioma PT + CTA Orçamento</li>
          </ul>
        </div>
      </section>

      {/* Category Rail */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">2. Rail de Categorias (vertical)</h2>
        <div className="space-y-4 rounded-xl border p-6">
          <ul className="space-y-2 text-sm">
            <li><strong>Largura:</strong> 260px fixo no desktop</li>
            <li><strong>Posicionamento:</strong> Fixed left-0, top-72px (abaixo do header)</li>
            <li><strong>Altura:</strong> calc(100vh - 72px)</li>
            <li><strong>Itens:</strong> 5-6 categorias empilhadas verticalmente</li>
            <li><strong>Estrutura item:</strong> Ícone 32px + Título (max 2 linhas)</li>
            <li><strong>Estados:</strong>
              <ul className="ml-4 mt-2 space-y-1">
                <li>Hover: Barra lateral 4px em --brand-2 + bg surface-elev-02</li>
                <li>Active: Barra visível + ícone preenchido + bg surface-elev-02</li>
              </ul>
            </li>
            <li><strong>Ação:</strong> Ao clicar, troca o slide do carrossel sincronizado</li>
          </ul>
          
          <div className="mt-4 rounded-lg bg-amber-50 p-4">
            <p className="text-xs text-amber-900">
              <strong>Mobile:</strong> Rail vira chips horizontais roláveis acima do hero
            </p>
          </div>
        </div>
      </section>

      {/* Hero Carousel */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">3. Hero Carrossel (full-bleed)</h2>
        <div className="space-y-4 rounded-xl border p-6">
          <ul className="space-y-2 text-sm">
            <li><strong>Altura:</strong> 100vh no desktop / min 70vh mobile</li>
            <li><strong>Imagem de fundo:</strong> Edge-to-edge cobrindo toda área</li>
            <li><strong>Painel diagonal:</strong>
              <ul className="ml-4 mt-2 space-y-1">
                <li>Largura: 45% no desktop (100% mobile)</li>
                <li>Background: --header-dark com 92% opacidade</li>
                <li>Clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%)</li>
                <li>Conteúdo: Overline + H1 (56-64px) + Subtexto + 2 CTAs</li>
              </ul>
            </li>
            <li><strong>Controles:</strong>
              <ul className="ml-4 mt-2 space-y-1">
                <li>Dots centralizados no rodapé (active com largura maior)</li>
                <li>Setas laterais (chevrons) apenas desktop</li>
                <li>Autoplay 7s com pausa em hover/focus</li>
                <li>Transição suave 600ms</li>
              </ul>
            </li>
            <li><strong>Sincronização:</strong> Carrossel e rail comunicam estado ativo via ref</li>
          </ul>
        </div>
      </section>

      {/* Responsividade */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">4. Responsividade</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-semibold text-[var(--brand-1)]">Desktop (≥1024px)</h3>
            <ul className="space-y-2 text-sm">
              <li>Rail vertical fixo 260px à esquerda</li>
              <li>Hero com painel diagonal ocupando 45%</li>
              <li>Conteúdo principal com ml-[260px]</li>
              <li>Setas de navegação visíveis</li>
              <li>H1 em 4rem (64px)</li>
            </ul>
          </div>
          
          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-semibold text-[var(--brand-1)]">Mobile (<1024px)</h3>
            <ul className="space-y-2 text-sm">
              <li>Rail vira chips horizontais sticky</li>
              <li>Painel sem diagonal (retângulo simples)</li>
              <li>Hero ocupa largura total (sem margin)</li>
              <li>Setas ocultas, navegação por swipe</li>
              <li>H1 em 2.5rem (40px)</li>
              <li>CTAs empilhados verticalmente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Acessibilidade */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">5. Acessibilidade</h2>
        <div className="rounded-xl border p-6">
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Contraste AA entre texto branco e painel escuro (ratio {'>'} 7:1)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Foco visível em todos os controles do carrossel</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Alt text em todas as imagens dos slides</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Aria-labels nos botões de navegação</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Autoplay com pausa em hover e foco (WCAG 2.2.2)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Primeira imagem com loading="eager", demais lazy</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>CTA "Solicitar Orçamento" sempre visível sem scroll</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Componentes Criados */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">6. Componentes Criados</h2>
        <div className="space-y-3 rounded-xl border p-6">
          <div className="rounded-lg bg-[var(--surface-elev-02)] p-4">
            <code className="text-sm">
              <strong>/components/Header.tsx</strong><br/>
              Header dark com cluster de ações e backdrop blur
            </code>
          </div>
          <div className="rounded-lg bg-[var(--surface-elev-02)] p-4">
            <code className="text-sm">
              <strong>/components/CategoryRail.tsx</strong><br/>
              Rail vertical (desktop) / chips horizontais (mobile)
            </code>
          </div>
          <div className="rounded-lg bg-[var(--surface-elev-02)] p-4">
            <code className="text-sm">
              <strong>/components/HeroCarousel.tsx</strong><br/>
              Carrossel full-bleed com painel diagonal e sincronização via ref
            </code>
          </div>
        </div>
      </section>

      {/* Checklist de Aceitação */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">7. Checklist de Aceitação</h2>
        <div className="rounded-xl border p-6">
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Rail vertical fixo à esquerda controlando os slides</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Hero ocupa 100vh no desktop, com fundo full-bleed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Painel diagonal com H1 + sub + dois CTAs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>CTA "Solicitar Orçamento" visível sem scroll (desktop e mobile)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Dots/setas funcionais e acessíveis; autoplay com pausa</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Mobile com chips em vez de rail e painel simplificado</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Sincronização bidirecional: clicar no rail troca slide</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Header dark com blur 4px e 95% opacidade</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
