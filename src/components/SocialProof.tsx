import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Veja o que quem já foi achou da{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              experiência
            </span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              src="https://www.youtube.com/embed/F-EpgXLtwcs"
              title="Testemunho 1"
              className="w-full h-64 md:h-72"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              src="https://www.youtube.com/embed/bIRxxwRagEQ"
              title="Testemunho 2"
              className="w-full h-64 md:h-72"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            No último evento, tivemos palestras com nomes de referência como{' '}
            <span className="font-semibold text-purple-600">Lara Machado (Bluwe)</span> e{' '}
            <span className="font-semibold text-purple-600">Katiane Brito (UZE Nails)</span>.
            Em 2026, a nova edição promete ser ainda maior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;