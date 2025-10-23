import { Header } from '../Header';
import { Footer } from '../Footer';
import { WhatsAppButton } from '../WhatsAppButton';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Upload,
  Send
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { useState } from 'react';

export function Contact() {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-1)] to-[#06192a] py-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="text-center">
            <h1 className="mb-4 text-4xl text-white lg:text-5xl">
              Entre em Contato
            </h1>
            <p className="text-lg text-white/90">
              Nossa equipe está pronta para atender você e encontrar a melhor solução para sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="text-xl">Telefones</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-1 text-[var(--neutral-700)]">(11) 3456-7890</p>
                <p className="mb-1 text-[var(--neutral-700)]">(11) 98765-4321</p>
                <p className="text-sm text-[var(--neutral-500)]">Seg a Sex, 8h às 18h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="text-xl">E-mail</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-1">
                  <a 
                    href="mailto:contato@rodotec.com.br"
                    className="text-[var(--brand-1)] hover:underline"
                  >
                    contato@rodotec.com.br
                  </a>
                </p>
                <p className="mb-1">
                  <a 
                    href="mailto:orcamento@rodotec.com.br"
                    className="text-[var(--brand-1)] hover:underline"
                  >
                    orcamento@rodotec.com.br
                  </a>
                </p>
                <p className="text-sm text-[var(--neutral-500)]">Respondemos em até 24h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-xl">Endereço</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-1 text-[var(--neutral-700)]">Av. Industrial, 1234</p>
                <p className="mb-1 text-[var(--neutral-700)]">Distrito Industrial</p>
                <p className="mb-1 text-[var(--neutral-700)]">São Paulo - SP</p>
                <p className="text-sm text-[var(--neutral-500)]">CEP: 01234-567</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <Card>
              <CardHeader>
                <h2 className="text-[var(--brand-1)]">Solicite um Orçamento</h2>
                <p className="text-[var(--neutral-700)]">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input 
                        id="company" 
                        placeholder="Nome da empresa"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento de Atuação *</Label>
                    <Select>
                      <SelectTrigger id="segment">
                        <SelectValue placeholder="Selecione o segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transporte">Transporte e Logística</SelectItem>
                        <SelectItem value="industria">Indústria</SelectItem>
                        <SelectItem value="construcao">Construção Civil</SelectItem>
                        <SelectItem value="mineracao">Mineração</SelectItem>
                        <SelectItem value="agricola">Agrícola</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="(11) 98765-4321"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade *</Label>
                      <Input 
                        id="city" 
                        placeholder="Cidade"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado *</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="UF" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SP">SP</SelectItem>
                          <SelectItem value="RJ">RJ</SelectItem>
                          <SelectItem value="MG">MG</SelectItem>
                          <SelectItem value="PR">PR</SelectItem>
                          <SelectItem value="RS">RS</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="BA">BA</SelectItem>
                          <SelectItem value="DF">DF</SelectItem>
                          <SelectItem value="GO">GO</SelectItem>
                          <SelectItem value="ES">ES</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem / Descrição do Projeto *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva sua necessidade ou projeto..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Anexar Arquivo (Opcional)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('file')?.click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Escolher Arquivo
                      </Button>
                      {fileName && (
                        <span className="text-sm text-[var(--neutral-700)]">{fileName}</span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--neutral-500)]">
                      Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 10MB)
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="privacy" className="cursor-pointer text-sm">
                      Li e aceito a{' '}
                      <a href="/privacidade" className="text-[var(--brand-1)] hover:underline">
                        Política de Privacidade
                      </a>
                      {' '}e autorizo o uso dos meus dados para contato comercial.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[var(--brand-1)] hover:bg-[var(--brand-1)]/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-1)]/10 text-[var(--brand-1)]">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl">Horário de Atendimento</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--neutral-700)]">Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--neutral-700)]">Sábado:</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--neutral-700)]">Domingo:</span>
                    <span className="text-[var(--neutral-500)]">Fechado</span>
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-l-[var(--brand-2)] bg-[var(--neutral-50)] p-4">
                    <p className="text-sm">
                      <strong>Atendimento de Emergência 24/7</strong><br />
                      Para clientes com contrato de suporte
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl">Como Chegar</h3>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg bg-[var(--neutral-200)] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-12 w-12 text-[var(--neutral-500)]" />
                      <p className="text-sm text-[var(--neutral-500)]">
                        Mapa interativo
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-[var(--neutral-700)]">
                      <strong>De carro:</strong> Acesso pela Marginal Tietê, saída Av. Industrial
                    </p>
                    <p className="text-[var(--neutral-700)]">
                      <strong>Transporte público:</strong> Metrô Linha Azul + Ônibus 123
                    </p>
                    <p className="text-[var(--neutral-700)]">
                      <strong>Estacionamento:</strong> Gratuito para visitantes
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl">Links Úteis</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a 
                    href="/catalogo" 
                    className="block text-[var(--brand-1)] hover:underline"
                  >
                    → Baixar Catálogo de Produtos
                  </a>
                  <a 
                    href="/rede" 
                    className="block text-[var(--brand-1)] hover:underline"
                  >
                    → Encontrar Assistência Técnica
                  </a>
                  <a 
                    href="/trabalhe-conosco" 
                    className="block text-[var(--brand-1)] hover:underline"
                  >
                    → Trabalhe Conosco
                  </a>
                  <a 
                    href="/faq" 
                    className="block text-[var(--brand-1)] hover:underline"
                  >
                    → Perguntas Frequentes
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="11987654321" />
    </div>
  );
}
