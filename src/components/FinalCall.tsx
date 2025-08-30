import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const FinalCall = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            ÚLTIMAS VAGAS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            As vagas são{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              limitadas!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
            Não perca a chance de viver esse momento incrível com as maiores marcas e profissionais do Brasil. 
            Clique no botão abaixo e fale comigo agora.
          </p>
        </div>

        <a
          href="https://wa.me/5553997105666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
        >
          Quero garantir minha vaga
          <ArrowRight className="w-8 h-8 ml-3" />
        </a>

        <p className="mt-6 text-gray-300 text-sm">
          💳 Parcelamento disponível • 📱 Resposta imediata no WhatsApp
        </p>
      </div>
    </section>
  );
};

export default FinalCall;