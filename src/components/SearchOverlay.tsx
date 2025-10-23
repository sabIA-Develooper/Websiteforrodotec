import { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Link } from './Link';

interface SearchOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchOverlay({ open, onOpenChange }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/novidades?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const recentSearches = [
    'Manutenção preventiva',
    'Peças de reposição',
    'Automação industrial'
  ];

  const popularTags = [
    'Frotas',
    'Retrofit',
    'IoT',
    'Manutenção',
    'Certificação',
    'SLA'
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 p-0">
        <DialogTitle className="sr-only">Buscar no site</DialogTitle>
        
        {/* Search Input */}
        <div className="border-b border-[var(--border-soft)] p-6">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[var(--neutral-500)]" strokeWidth={1.5} />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Buscar soluções, artigos, produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 border-none pl-14 pr-12 text-lg shadow-none focus-visible:ring-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--neutral-500)] hover:text-[var(--neutral-700)]"
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Search Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {!searchQuery && (
            <>
              {/* Recent Searches */}
              <div className="mb-8">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                  <Clock className="h-4 w-4" strokeWidth={2} />
                  Buscas Recentes
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-[var(--surface-elev-02)]"
                    >
                      <span className="text-[var(--neutral-700)]">{search}</span>
                      <ArrowRight className="h-4 w-4 text-[var(--neutral-400)]" strokeWidth={2} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                  Tópicos Populares
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer bg-[var(--surface-elev-02)] text-[var(--neutral-700)] hover:bg-[var(--brand-1)] hover:text-white"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Quick Links */}
          {searchQuery && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                Resultados Sugeridos
              </h3>
              <div className="space-y-2">
                <Link
                  href="/solucoes/manutencao-frotas"
                  className="block rounded-lg border border-[var(--border-soft)] p-4 transition-colors hover:bg-[var(--surface-elev-02)]"
                  onClick={() => onOpenChange(false)}
                >
                  <p className="mb-1 font-medium text-[var(--brand-1)]">Manutenção de Frotas</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Serviços completos de manutenção preventiva e preditiva
                  </p>
                </Link>
                <Link
                  href="/solucoes/pecas-reposicao"
                  className="block rounded-lg border border-[var(--border-soft)] p-4 transition-colors hover:bg-[var(--surface-elev-02)]"
                  onClick={() => onOpenChange(false)}
                >
                  <p className="mb-1 font-medium text-[var(--brand-1)]">Peças e Reposição</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Estoque com +10 mil itens disponíveis
                  </p>
                </Link>
              </div>
              
              <Button
                className="w-full bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90"
                onClick={handleSearch}
              >
                Ver todos os resultados
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
              </Button>
            </div>
          )}
        </div>

        {/* Keyboard Hints */}
        <div className="border-t border-[var(--border-soft)] bg-[var(--surface-elev-02)] px-6 py-3">
          <div className="flex items-center justify-between text-xs text-[var(--neutral-500)]">
            <span>Digite para buscar</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-white px-2 py-1 font-mono shadow-sm">Enter</kbd>
                para buscar
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-white px-2 py-1 font-mono shadow-sm">Esc</kbd>
                para fechar
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
