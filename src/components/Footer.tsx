import { Link } from './Link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-[var(--neutral-900)] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Rodotec */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-2)]">
                <span className="font-['Montserrat'] text-xl text-white">R</span>
              </div>
              <span className="font-['Montserrat'] text-xl">RODOTEC</span>
            </div>
            <p className="text-sm text-[var(--neutral-200)]">
              Soluções industriais e de manutenção que mantêm sua operação sempre em movimento.
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="#" 
                className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="mb-4 font-['Montserrat']">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solucoes/manutencao-frotas" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Manutenção de Frotas
                </Link>
              </li>
              <li>
                <Link href="/solucoes/eletrica-automacao" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Elétrica e Automação
                </Link>
              </li>
              <li>
                <Link href="/solucoes/pecas-reposicao" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Peças e Reposição
                </Link>
              </li>
              <li>
                <Link href="/solucoes/servicos-campo" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Serviços de Campo
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Ver Todas
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="mb-4 font-['Montserrat']">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/downloads" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Downloads e Catálogos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/rede" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Rede de Assistência
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 font-['Montserrat']">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" />
                <div>
                  <p className="text-[var(--neutral-200)]">(11) 3456-7890</p>
                  <p className="text-[var(--neutral-200)]">(11) 98765-4321</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" />
                <a 
                  href="mailto:contato@rodotec.com.br" 
                  className="text-[var(--neutral-200)] transition-colors hover:text-[var(--brand-2)]"
                >
                  contato@rodotec.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" />
                <p className="text-[var(--neutral-200)]">
                  Av. Industrial, 1234<br />
                  São Paulo - SP, 01234-567
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[var(--neutral-700)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--neutral-200)] md:flex-row">
            <p>© {new Date().getFullYear()} Rodotec. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/termos" className="transition-colors hover:text-[var(--brand-2)]">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="transition-colors hover:text-[var(--brand-2)]">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
