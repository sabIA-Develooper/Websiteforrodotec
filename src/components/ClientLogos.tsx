interface ClientLogosProps {
  title?: string;
}

export function ClientLogos({ title = 'Empresas que confiam na Rodotec' }: ClientLogosProps) {
  // Mock client names - in real scenario these would be logos
  const clients = [
    'Transportadora ABC',
    'Logística XYZ',
    'Frota Brasil',
    'Express Cargo',
    'Trans Nacional',
    'Rodoviário Sul',
    'Mega Transportes',
    'Cargo Prime'
  ];

  return (
    <section className="border-y bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-6">
        {title && (
          <h3 className="mb-12 text-center text-[var(--neutral-700)]">{title}</h3>
        )}
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg border border-[var(--neutral-200)] bg-[var(--neutral-50)] p-6 transition-all hover:border-[var(--brand-1)] hover:shadow-sm"
            >
              <div className="text-center font-['Montserrat'] text-[var(--neutral-500)]">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
