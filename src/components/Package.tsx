import React from 'react';
import { Hotel, Utensils, Ticket, Bus } from 'lucide-react';

const Package = () => {
  const features = [
    {
      icon: <Hotel className="w-12 h-12" />,
      title: 'Hospedagem no Hotel Diaudi',
      description: 'Acomodação confortável e bem localizada',
      image: 'https://i.imgur.com/0hOdowA.jpeg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Jantar dia 15 + Café dia 16',
      description: 'Refeições incluídas no pacote',
      image: 'https://i.imgur.com/rM8zxwg.jpeg',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Ticket className="w-12 h-12" />,
      title: 'Ingresso The Best Nails 2026',
      description: 'Acesso completo ao evento',
      image: 'https://i.imgur.com/y68aERT.jpeg',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <Bus className="w-12 h-12" />,
      title: 'Transporte ida e volta',
      description: 'Saindo de Pelotas com toda comodidade',
      image: 'https://i.imgur.com/UaiHOgo.jpeg',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Tudo incluso na nossa{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              caravana
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`bg-gradient-to-r ${feature.color} text-white p-4 rounded-full mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {feature.description}
                </p>
                {feature.image && (
                  <div className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;