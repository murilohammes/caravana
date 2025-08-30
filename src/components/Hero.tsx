import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Participe do Maior Evento de{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nail Designer
            </span>{' '}
            do Brasil com Tudo Incluso
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Saída de Pelotas para São José/SC – transporte, hospedagem, alimentação e ingresso garantidos no pacote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/AGio_MsFH54"
              title="Apresentação Júlia Mello"
              className="w-full h-64 md:h-96"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5553997105666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Quero garantir minha vaga agora
            <ArrowRight className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;