/**
 * RODOTEC DESIGN SYSTEM GUIDE V2
 * 
 * Sistema de design industrial limpo focado em conversão e legibilidade
 */

export function DesignGuide() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-12 p-12">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="mb-2 text-4xl text-[var(--brand-1)]">Rodotec Design System V2</h1>
        <p className="text-lg text-[var(--neutral-700)]">
          Guia rápido de tokens, espaçamentos e regras de copy
        </p>
      </div>

      {/* Color Tokens */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Tokens de Cor</h2>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div>
            <div className="mb-2 h-20 rounded-lg bg-[var(--brand-1)]"></div>
            <p className="font-mono text-sm">--brand-1</p>
            <p className="text-xs text-[var(--neutral-500)]">#0B2A45 • Primário</p>
          </div>
          <div>
            <div className="mb-2 h-20 rounded-lg bg-[var(--brand-2)]"></div>
            <p className="font-mono text-sm">--brand-2</p>
            <p className="text-xs text-[var(--neutral-500)]">#FF6B00 • Acento</p>
          </div>
          <div>
            <div className="mb-2 h-20 rounded-lg border bg-[var(--surface-elev-01)]"></div>
            <p className="font-mono text-sm">--surface-elev-01</p>
            <p className="text-xs text-[var(--neutral-500)]">#FFFFFF • Cards</p>
          </div>
          <div>
            <div className="mb-2 h-20 rounded-lg bg-[var(--surface-elev-02)]"></div>
            <p className="font-mono text-sm">--surface-elev-02</p>
            <p className="text-xs text-[var(--neutral-500)]">#F8FAFC • Background</p>
          </div>
        </div>
      </section>

      {/* Spacing Scale */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Escala de Espaçamento (baseline 8px)</h2>
        <div className="space-y-3 rounded-xl border p-6">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded bg-[var(--brand-2)]"></div>
            <code className="font-mono text-sm">--spacing-1: 8px</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-4 rounded bg-[var(--brand-2)]"></div>
            <code className="font-mono text-sm">--spacing-2: 16px</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-6 rounded bg-[var(--brand-2)]"></div>
            <code className="font-mono text-sm">--spacing-3: 24px</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-8 rounded bg-[var(--brand-2)]"></div>
            <code className="font-mono text-sm">--spacing-4: 32px</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 rounded bg-[var(--brand-2)]"></div>
            <code className="font-mono text-sm">--spacing-6: 48px</code>
          </div>
        </div>
      </section>

      {/* Typography Scale */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Escala Tipográfica (ratio ~1.25)</h2>
        <div className="space-y-4 rounded-xl border p-6">
          <div>
            <p className="mb-1 text-4xl">Hero Title (48-56px)</p>
            <code className="text-xs text-[var(--neutral-500)]">Montserrat 700, LH 1.1, letter-spacing -0.02em</code>
          </div>
          <div>
            <p className="mb-1 text-3xl">Section Title (40px)</p>
            <code className="text-xs text-[var(--neutral-500)]">Montserrat 700, LH 1.2</code>
          </div>
          <div>
            <p className="mb-1 text-2xl">Card Title (32px)</p>
            <code className="text-xs text-[var(--neutral-500)]">Montserrat 600, LH 1.3</code>
          </div>
          <div>
            <p className="mb-1 text-lg">Body Large (18px)</p>
            <code className="text-xs text-[var(--neutral-500)]">Inter 400, LH 1.6, max-width 72ch</code>
          </div>
          <div>
            <p className="mb-1 text-base">Body Regular (16px)</p>
            <code className="text-xs text-[var(--neutral-500)]">Inter 400, LH 1.6</code>
          </div>
        </div>
      </section>

      {/* Component Structure */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Estrutura de Componentes</h2>
        <div className="space-y-6">
          <div className="rounded-xl border p-6">
            <h3 className="mb-4 text-xl">Card (Solução/Notícia)</h3>
            <ol className="list-inside list-decimal space-y-2 text-sm">
              <li><strong>Thumb/Ícone:</strong> 16:10 aspect ratio ou ícone 64px</li>
              <li><strong>Badge:</strong> Categoria/Tag em --brand-2 (10% opacity)</li>
              <li><strong>Título:</strong> Max 70 caracteres, line-clamp-2, min-height 3.5rem</li>
              <li><strong>Meta:</strong> Data + tempo de leitura (se news)</li>
              <li><strong>Features:</strong> Max 3 bullets, line-clamp-2 cada</li>
              <li><strong>CTA:</strong> Link com arrow, hover translate-x-1</li>
            </ol>
            <div className="mt-4 rounded-lg bg-[var(--surface-elev-02)] p-4">
              <code className="text-xs">
                border: 1px solid var(--border-soft)<br/>
                border-radius: 12px<br/>
                box-shadow: subtle on hover<br/>
                transition: transform 200ms
              </code>
            </div>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-4 text-xl">Botões</h3>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-[var(--brand-1)] px-6 py-3 text-white">
                Primário
              </button>
              <button className="rounded-lg border-2 border-[var(--brand-1)] px-6 py-3 text-[var(--brand-1)]">
                Secundário
              </button>
              <button className="px-6 py-3 text-[var(--brand-1)] underline-offset-4 hover:underline">
                Terciário
              </button>
            </div>
            <p className="mt-4 text-sm text-[var(--neutral-700)]">
              Estados: hover (scale-105), focus (ring-2), disabled (opacity-50)
            </p>
          </div>
        </div>
      </section>

      {/* Copy Rules */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Regras de Copy</h2>
        <div className="space-y-4 rounded-xl border p-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-2)]"></div>
            <div>
              <strong>Títulos:</strong> Max 70 caracteres. Benefício direto + prova.
              <p className="text-sm text-[var(--neutral-700)]">
                ✅ "Redução de 30% em custos" | ❌ "Soluções inovadoras"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-2)]"></div>
            <div>
              <strong>Subtextos:</strong> 1 frase, max 100 caracteres.
              <p className="text-sm text-[var(--neutral-700)]">
                Complemento do título com detalhe tangível.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-2)]"></div>
            <div>
              <strong>Bullets:</strong> Max 80 caracteres. Dados > adjetivos.
              <p className="text-sm text-[var(--neutral-700)]">
                ✅ "SLA médio 72h" | ❌ "Atendimento rápido"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-2)]"></div>
            <div>
              <strong>CTAs:</strong> Verbo + resultado. "Solicitar Orçamento" > "Clique aqui"
            </div>
          </div>
        </div>
      </section>

      {/* Grid & Layout */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Grid & Layout</h2>
        <div className="rounded-xl border p-6">
          <ul className="space-y-2 text-sm">
            <li><strong>Desktop:</strong> 12 colunas, max-width 1440px, gap 24px</li>
            <li><strong>Mobile:</strong> 4 colunas, padding 24px</li>
            <li><strong>Section spacing:</strong> py-12 (96px) desktop / py-8 (64px) mobile</li>
            <li><strong>Card grid:</strong> 1 col mobile / 2 col tablet / 4 col desktop</li>
            <li><strong>Constrast:</strong> AA mínimo em todos os pares de cor</li>
          </ul>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-6 text-2xl text-[var(--brand-1)]">Checklist de Acessibilidade</h2>
        <div className="rounded-xl border p-6">
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Contraste AA verificado (4.5:1 texto, 3:1 UI)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Foco visível em todos elementos interativos</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Texto ≥ 16px (14px apenas em meta)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Labels em todos inputs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Aria-labels em ícones sem texto</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Linha de leitura ≤ 72 caracteres</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
