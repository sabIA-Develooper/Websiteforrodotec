import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu, Search, ChevronDown, MapPin, Globe } from 'lucide-react';
import { Link } from './Link';
import { SearchOverlay } from './SearchOverlay';
import { DistributorsOverlay } from './DistributorsOverlay';
import logoImage from 'figma:asset/703cfd0f6e5a129d1f758e16f8258779c7976279.png';

interface HeaderProps {
  isCompact?: boolean;
}

export function Header({ isCompact = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [distributorsOpen, setDistributorsOpen] = useState(false);

  return (
    <>
      <header 
        className="fixed top-0 z-50 w-full backdrop-blur-[4px] transition-all duration-300"
        style={{ 
          backgroundColor: 'rgba(11, 42, 69, 0.95)',
          height: isCompact ? 'var(--hdr-h-compact)' : 'var(--hdr-h)',
          boxShadow: isCompact ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="mx-auto h-full max-w-[1920px] px-6">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-all duration-300">
              <img 
                src={logoImage}
                alt="RODOTEC"
                className="transition-all duration-300 brightness-0 invert"
                style={{
                  height: isCompact ? '10px' : '160px',
                  width: 'auto',
                }}
              />
            </Link>

            {/* Desktop Navigation - Centro */}
            <nav className="hidden items-center lg:flex" style={{ gap: isCompact ? '24px' : '32px' }}>
              <Link 
                href="/sobre" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Sobre
              </Link>
              
              <Link 
                href="/solucoes" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Soluções
              </Link>

              <Link 
                href="/clientes" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Clientes
              </Link>
              <Link 
                href="/novidades" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Novidades
              </Link>
              <Link 
                href="/rede" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Rede
              </Link>
              <Link 
                href="/contato" 
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Contato
              </Link>
            </nav>

            {/* Cluster de Ações - Direita */}
            <div 
              className="hidden items-center lg:flex transition-all duration-300" 
              style={{ gap: isCompact ? '8px' : '12px' }}
            >
              {/* Distribuidores Button */}
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setDistributorsOpen(true)}
              >
                <MapPin className="h-4 w-4" strokeWidth={2} />
                {!isCompact && <span className="ml-2">Distribuidores</span>}
              </Button>

              {/* Search Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" strokeWidth={2} />
              </Button>

              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <Globe className="mr-1.5 h-4 w-4" strokeWidth={2} />
                    PT
                    <ChevronDown className="ml-1 h-3.5 w-3.5" strokeWidth={2} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[120px]">
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="mr-2">🇧🇷</span>
                    Português
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="mr-2">🇺🇸</span>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="ml-2 h-6 w-px bg-white/20"></div>

              {/* CTA - Always visible */}
              <Button 
                size={isCompact ? "sm" : "default"}
                className="bg-[var(--brand-2)] font-medium transition-all hover:scale-105 hover:bg-[var(--brand-2)]/90"
                asChild
              >
                <Link href="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button 
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" strokeWidth={2} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[var(--header-dark)] text-white sm:w-[400px]">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas seções do site Rodotec
                </SheetDescription>
                
                {/* Mobile Actions */}
                <div className="mb-4 space-y-2 border-b border-white/20 pb-4 pt-8">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setMobileOpen(false);
                      setSearchOpen(true);
                    }}
                  >
                    <Search className="mr-3 h-5 w-5" strokeWidth={2} />
                    Buscar
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setMobileOpen(false);
                      setDistributorsOpen(true);
                    }}
                  >
                    <MapPin className="mr-3 h-5 w-5" strokeWidth={2} />
                    Distribuidores
                  </Button>
                </div>

                <nav className="flex flex-col gap-1">
                  <Link 
                    href="/sobre" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sobre
                  </Link>
                  <Link 
                    href="/solucoes" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Soluções
                  </Link>
                  <Link 
                    href="/clientes" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Clientes
                  </Link>
                  <Link 
                    href="/novidades" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Novidades
                  </Link>
                  <Link 
                    href="/rede" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Rede
                  </Link>
                  <Link 
                    href="/contato" 
                    className="rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contato
                  </Link>
                  <div className="my-4 h-px bg-white/20"></div>
                  <Button className="bg-[var(--brand-2)] hover:bg-[var(--brand-2)]/90" asChild>
                    <Link href="/orcamento" onClick={() => setMobileOpen(false)}>
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Overlays */}
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
      <DistributorsOverlay open={distributorsOpen} onOpenChange={setDistributorsOpen} />
    </>
  );
}