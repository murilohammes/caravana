import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const includes = [
    'Hospedagem inclusa',
    'Ingresso do evento',
    'Transporte de ida e volta',
    'Jantar + café da manhã',
    'Certificado de participação'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pacote completo por apenas
            </h2>
            <div className="text-6xl md:text-7xl font-bold mb-2">
              R$ 1.000
              <span className="text-2xl md:text-3xl">,00</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              {includes.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center text-left">
                  <Check className="w-6 h-6 text-emerald-300 mr-3 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {includes.slice(3).map((item, index) => (
                <div key={index} className="flex items-center text-left">
                  <Check className="w-6 h-6 text-emerald-300 mr-3 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <p className="text-xl mb-2 font-medium">
              Pagamento facilitado via PIX, cartão ou dinheiro
            </p>
            <p className="text-lg opacity-90">
              Parcelamento disponível
            </p>
          </div>

          <a
            href="https://wa.me/5553997105666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;