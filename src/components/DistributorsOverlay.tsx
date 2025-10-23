import { useState } from 'react';
import { MapPin, Phone, Navigation, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface DistributorsOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Distributor {
  id: string;
  name: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  type: 'Próprio' | 'Parceiro';
}

export function DistributorsOverlay({ open, onOpenChange }: DistributorsOverlayProps) {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  // Mock data - In production, this would come from an API
  const distributors: Distributor[] = [
    {
      id: '1',
      name: 'Rodotec São Paulo - Matriz',
      state: 'SP',
      city: 'São Paulo',
      address: 'Av. Industrial, 2500 - Vila Leopoldina',
      phone: '(11) 3456-7890',
      whatsapp: '11987654321',
      type: 'Próprio'
    },
    {
      id: '2',
      name: 'Rodotec Campinas',
      state: 'SP',
      city: 'Campinas',
      address: 'Rod. Santos Dumont, km 47 - Distrito Industrial',
      phone: '(19) 3234-5678',
      whatsapp: '19987654321',
      type: 'Próprio'
    },
    {
      id: '3',
      name: 'AutoParts Rio - Parceiro Autorizado',
      state: 'RJ',
      city: 'Rio de Janeiro',
      address: 'Av. Brasil, 15000 - Parada de Lucas',
      phone: '(21) 3567-8901',
      whatsapp: '21987654321',
      type: 'Parceiro'
    },
    {
      id: '4',
      name: 'Sul Peças - Parceiro Autorizado',
      state: 'RS',
      city: 'Porto Alegre',
      address: 'Av. Assis Brasil, 3500 - Sarandi',
      phone: '(51) 3456-7890',
      whatsapp: '51987654321',
      type: 'Parceiro'
    }
  ];

  const states = Array.from(new Set(distributors.map(d => d.state))).sort();
  const cities = selectedState 
    ? Array.from(new Set(distributors.filter(d => d.state === selectedState).map(d => d.city))).sort()
    : [];

  const filteredDistributors = distributors.filter(d => {
    if (selectedState && d.state !== selectedState) return false;
    if (selectedCity && d.city !== selectedCity) return false;
    return true;
  });

  const handleWhatsApp = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(`Olá! Vim através do site da Rodotec e gostaria de mais informações sobre produtos e serviços.`);
    window.open(`https://wa.me/55${whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleRoute = (address: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl gap-0 p-0">
        <DialogHeader className="border-b border-[var(--border-soft)] p-6">
          <DialogTitle className="flex items-center gap-2 text-2xl text-[var(--brand-1)]">
            <MapPin className="h-6 w-6" strokeWidth={2} />
            Rede de Distribuidores
          </DialogTitle>
          <p className="mt-2 text-sm text-[var(--neutral-600)]">
            Encontre o distribuidor mais próximo de você. Cobertura em 26 estados.
          </p>
        </DialogHeader>

        <div className="grid gap-0 lg:grid-cols-[380px_1fr]">
          {/* Left Panel - Filters and List */}
          <div className="flex flex-col border-r border-[var(--border-soft)]">
            {/* Filters */}
            <div className="border-b border-[var(--border-soft)] p-4">
              <div className="space-y-3">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                    Estado (UF)
                  </label>
                  <Select value={selectedState} onValueChange={(value) => {
                    setSelectedState(value);
                    setSelectedCity('');
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os estados</SelectItem>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedState && selectedState !== 'all' && (
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                      Cidade
                    </label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as cidades</SelectItem>
                        {cities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="mt-3 text-xs text-[var(--neutral-500)]">
                {filteredDistributors.length} {filteredDistributors.length === 1 ? 'distribuidor encontrado' : 'distribuidores encontrados'}
              </div>
            </div>

            {/* Distributors List */}
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-[var(--border-soft)]">
                {filteredDistributors.map((distributor) => (
                  <Card key={distributor.id} className="rounded-none border-0 shadow-none">
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-[var(--brand-1)]">{distributor.name}</h4>
                        <Badge 
                          variant={distributor.type === 'Próprio' ? 'default' : 'secondary'}
                          className={distributor.type === 'Próprio' ? 'bg-[var(--brand-2)]' : ''}
                        >
                          {distributor.type}
                        </Badge>
                      </div>
                      
                      <div className="mb-3 space-y-1 text-sm text-[var(--neutral-600)]">
                        <p className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                          {distributor.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                          {distributor.phone}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs"
                          onClick={() => handleRoute(distributor.address)}
                        >
                          <Navigation className="mr-1.5 h-3.5 w-3.5" strokeWidth={2} />
                          Rota
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#25D366] text-xs hover:bg-[#25D366]/90"
                          onClick={() => handleWhatsApp(distributor.whatsapp, distributor.name)}
                        >
                          <MessageCircle className="mr-1.5 h-3.5 w-3.5" strokeWidth={2} />
                          WhatsApp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredDistributors.length === 0 && (
                  <div className="p-8 text-center text-[var(--neutral-500)]">
                    <MapPin className="mx-auto mb-3 h-12 w-12 opacity-30" strokeWidth={1.5} />
                    <p>Nenhum distribuidor encontrado</p>
                    <p className="mt-1 text-sm">Tente ajustar os filtros</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Map Placeholder */}
          <div className="hidden lg:block">
            <div className="relative h-full min-h-[600px] bg-[var(--surface-elev-02)]">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-[var(--neutral-300)]" strokeWidth={1.5} />
                  <p className="text-lg font-medium text-[var(--neutral-600)]">Mapa Interativo</p>
                  <p className="mt-2 text-sm text-[var(--neutral-500)]">
                    Visualização dos distribuidores no mapa
                  </p>
                </div>
              </div>

              {/* Map Markers (visual indication) */}
              {filteredDistributors.slice(0, 3).map((distributor, index) => (
                <div
                  key={distributor.id}
                  className="absolute rounded-full bg-[var(--brand-2)] p-2 shadow-lg"
                  style={{
                    left: `${30 + index * 20}%`,
                    top: `${40 + index * 10}%`,
                  }}
                >
                  <MapPin className="h-5 w-5 text-white" strokeWidth={2} fill="white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border-soft)] bg-[var(--surface-elev-02)] p-4">
          <p className="text-center text-xs text-[var(--neutral-500)]">
            Não encontrou o que procura? Entre em contato: <a href="tel:1134567890" className="font-medium text-[var(--brand-1)] hover:underline">(11) 3456-7890</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
