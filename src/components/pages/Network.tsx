import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation,
  MessageCircle,
  Mail,
  Wrench,
  Package,
  Shield
} from 'lucide-react';

export function Network() {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const units = [
    {
      id: '1',
      name: 'Rodotec São Paulo - Matriz',
      type: 'Próprio',
      state: 'SP',
      city: 'São Paulo',
      address: 'Av. Industrial, 2500 - Vila Leopoldina, São Paulo - SP',
      cep: '05041-001',
      phone: '(11) 3456-7890',
      whatsapp: '11987654321',
      email: 'saopaulo@rodotec.com.br',
      hours: 'Seg-Sex: 7h-18h | Sáb: 8h-12h',
      services: ['Manutenção', 'Peças', 'Consultoria', 'Automação'],
      emergency: true,
    },
    {
      id: '2',
      name: 'Rodotec Campinas',
      type: 'Próprio',
      state: 'SP',
      city: 'Campinas',
      address: 'Rod. Santos Dumont, km 47 - Distrito Industrial, Campinas - SP',
      cep: '13069-901',
      phone: '(19) 3234-5678',
      whatsapp: '19987654321',
      email: 'campinas@rodotec.com.br',
      hours: 'Seg-Sex: 7h-18h | Sáb: 8h-12h',
      services: ['Manutenção', 'Peças', 'Automação'],
      emergency: true,
    },
    {
      id: '3',
      name: 'Rodotec Rio de Janeiro',
      type: 'Próprio',
      state: 'RJ',
      city: 'Rio de Janeiro',
      address: 'Av. Brasil, 12500 - Bonsucesso, Rio de Janeiro - RJ',
      cep: '21041-020',
      phone: '(21) 3567-8901',
      whatsapp: '21987654321',
      email: 'riodejaneiro@rodotec.com.br',
      hours: 'Seg-Sex: 7h-18h | Sáb: 8h-12h',
      services: ['Manutenção', 'Peças', 'Consultoria'],
      emergency: true,
    },
    {
      id: '4',
      name: 'AutoParts Rio - Parceiro Autorizado',
      type: 'Parceiro',
      state: 'RJ',
      city: 'Rio de Janeiro',
      address: 'Av. Brasil, 15000 - Parada de Lucas, Rio de Janeiro - RJ',
      cep: '21250-001',
      phone: '(21) 3234-5678',
      whatsapp: '21998765432',
      email: 'contato@autopartsrio.com.br',
      hours: 'Seg-Sex: 8h-18h',
      services: ['Peças', 'Manutenção'],
      emergency: false,
    },
    {
      id: '5',
      name: 'Rodotec Belo Horizonte',
      type: 'Próprio',
      state: 'MG',
      city: 'Belo Horizonte',
      address: 'Av. Cristiano Machado, 8500 - Palmares, Belo Horizonte - MG',
      cep: '31155-152',
      phone: '(31) 3456-7890',
      whatsapp: '31987654321',
      email: 'belohorizonte@rodotec.com.br',
      hours: 'Seg-Sex: 7h-18h | Sáb: 8h-12h',
      services: ['Manutenção', 'Peças', 'Automação', 'Consultoria'],
      emergency: true,
    },
    {
      id: '6',
      name: 'Rodotec Porto Alegre',
      type: 'Próprio',
      state: 'RS',
      city: 'Porto Alegre',
      address: 'Av. Assis Brasil, 3500 - Sarandi, Porto Alegre - RS',
      cep: '91140-001',
      phone: '(51) 3456-7890',
      whatsapp: '51987654321',
      email: 'portoalegre@rodotec.com.br',
      hours: 'Seg-Sex: 7h-18h | Sáb: 8h-12h',
      services: ['Manutenção', 'Peças', 'Consultoria'],
      emergency: true,
    },
    {
      id: '7',
      name: 'Sul Peças - Parceiro Autorizado',
      type: 'Parceiro',
      state: 'RS',
      city: 'Caxias do Sul',
      address: 'Rua Ludovico Cavinato, 2000 - Ana Rech, Caxias do Sul - RS',
      cep: '95012-000',
      phone: '(54) 3234-5678',
      whatsapp: '54987654321',
      email: 'contato@sulpecas.com.br',
      hours: 'Seg-Sex: 8h-18h',
      services: ['Peças'],
      emergency: false,
    },
  ];

  const states = Array.from(new Set(units.map(u => u.state))).sort();
  const cities = selectedState 
    ? Array.from(new Set(units.filter(u => u.state === selectedState).map(u => u.city))).sort()
    : [];

  const filteredUnits = units.filter(unit => {
    const matchesState = !selectedState || selectedState === 'all' || unit.state === selectedState;
    const matchesCity = !selectedCity || selectedCity === 'all' || unit.city === selectedCity;
    const matchesType = selectedType === 'all' || unit.type === selectedType;
    return matchesState && matchesCity && matchesType;
  });

  const handleWhatsApp = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(`Olá! Vim através do site da Rodotec e gostaria de mais informações.`);
    window.open(`https://wa.me/55${whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleRoute = (address: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`, '_blank');
  };

  const serviceIcons: Record<string, any> = {
    'Manutenção': Wrench,
    'Peças': Package,
    'Automação': Zap,
    'Consultoria': Shield,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-1)] to-[#0a1f35] py-20 text-white lg:py-32">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-[var(--brand-2)] text-white">Rede de Assistência</Badge>
            <h1 className="mb-6 font-['Montserrat'] text-5xl tracking-tight lg:text-6xl">
              Cobertura Nacional com Excelência
            </h1>
            <p className="text-xl leading-relaxed text-white/90">
              26 unidades próprias e parceiros autorizados em todo o Brasil, 
              prontos para atender sua operação 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[var(--border-soft)] bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">26</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Unidades Brasil</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">24/7</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Suporte Emergencial</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">4h</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">SLA Médio</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-['Montserrat'] text-5xl text-[var(--brand-2)]">95%</div>
              <p className="text-sm uppercase tracking-wider text-[var(--neutral-600)]">Disponibilidade Peças</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Units */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <Card className="mb-12 border-2 border-[var(--border-soft)] shadow-lg">
            <CardHeader className="border-b border-[var(--border-soft)] bg-[var(--surface-elev-02)]">
              <h2 className="font-['Montserrat'] text-2xl text-[var(--brand-1)]">
                Encontre a Unidade Mais Próxima
              </h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--neutral-700)]">
                    Tipo de Unidade
                  </label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="Próprio">Unidades Próprias</SelectItem>
                      <SelectItem value="Parceiro">Parceiros Autorizados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--neutral-700)]">
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
                    <label className="mb-2 block text-sm font-medium text-[var(--neutral-700)]">
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

              <div className="mt-4 text-sm text-[var(--neutral-500)]">
                {filteredUnits.length} {filteredUnits.length === 1 ? 'unidade encontrada' : 'unidades encontradas'}
              </div>
            </CardContent>
          </Card>

          {/* Units Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredUnits.map((unit) => (
              <Card 
                key={unit.id}
                className="overflow-hidden border-2 border-[var(--border-soft)] transition-all hover:border-[var(--brand-2)] hover:shadow-xl"
              >
                <CardHeader className="border-b border-[var(--border-soft)] bg-[var(--surface-elev-02)]">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <Badge 
                      variant={unit.type === 'Próprio' ? 'default' : 'secondary'}
                      className={unit.type === 'Próprio' ? 'bg-[var(--brand-2)]' : ''}
                    >
                      {unit.type}
                    </Badge>
                    {unit.emergency && (
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        24/7
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-['Montserrat'] text-xl text-[var(--brand-1)]">
                    {unit.name}
                  </h3>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Address */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2 text-sm text-[var(--neutral-700)]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" strokeWidth={1.5} />
                      <div>
                        <p>{unit.address}</p>
                        <p className="text-[var(--neutral-500)]">CEP: {unit.cep}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mb-4 space-y-2 border-t border-[var(--border-soft)] pt-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-700)]">
                      <Phone className="h-4 w-4 shrink-0 text-[var(--brand-2)]" strokeWidth={1.5} />
                      <a href={`tel:${unit.phone.replace(/\D/g, '')}`} className="hover:text-[var(--brand-1)]">
                        {unit.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-700)]">
                      <Mail className="h-4 w-4 shrink-0 text-[var(--brand-2)]" strokeWidth={1.5} />
                      <a href={`mailto:${unit.email}`} className="hover:text-[var(--brand-1)]">
                        {unit.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[var(--neutral-700)]">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" strokeWidth={1.5} />
                      <span>{unit.hours}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)]">
                      Serviços Disponíveis
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {unit.services.map((service) => {
                        const Icon = serviceIcons[service];
                        return (
                          <Badge 
                            key={service} 
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            {Icon && <Icon className="h-3 w-3" strokeWidth={2} />}
                            {service}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid gap-2">
                    <Button
                      className="w-full bg-[#25D366] hover:bg-[#25D366]/90"
                      onClick={() => handleWhatsApp(unit.whatsapp, unit.name)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" strokeWidth={2} />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleRoute(unit.address)}
                    >
                      <Navigation className="mr-2 h-4 w-4" strokeWidth={2} />
                      Como Chegar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredUnits.length === 0 && (
            <div className="py-16 text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-[var(--neutral-300)]" strokeWidth={1.5} />
              <h3 className="mb-2 text-xl text-[var(--neutral-600)]">Nenhuma unidade encontrada</h3>
              <p className="text-[var(--neutral-500)]">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="border-t border-[var(--border-soft)] bg-red-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-red-100 p-4">
              <Shield className="h-12 w-12 text-red-600" strokeWidth={1.5} />
            </div>
            <h2 className="mb-4 font-['Montserrat'] text-3xl text-[var(--brand-1)]">
              Suporte Emergencial 24/7
            </h2>
            <p className="mb-6 text-lg text-[var(--neutral-600)]">
              Precisa de atendimento urgente? Nossa equipe está pronta para te atender
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
              >
                <Phone className="mr-2 h-5 w-5" strokeWidth={2} />
                0800 123 4567
              </Button>
              <Button 
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90"
              >
                <MessageCircle className="mr-2 h-5 w-5" strokeWidth={2} />
                WhatsApp Emergência
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
