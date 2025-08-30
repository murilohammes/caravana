import React from 'react';
import { Instagram } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem é{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Júlia Mello
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Sou <span className="font-semibold text-purple-600">Júlia Mello</span>, tenho 19 anos e sou Nail Designer em Pelotas. 
                No último evento, nossa caravana foi a maior de todas, e agora quero que essa nova experiência seja ainda melhor.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Amo minha profissão e acredito que esse encontro é uma oportunidade única para crescer e aprender 
                junto com as melhores profissionais do Brasil.
              </p>
              <a
                href="https://www.instagram.com/juliamello_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Veja meu trabalho no Instagram
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-2">
                <img
                  src="https://i.imgur.com/lFTXMvN.jpeg"
                  alt="Júlia Mello - Nail Designer"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;