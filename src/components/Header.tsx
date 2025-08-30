import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Júlia Mello
            </h1>
          </div>
          <a
            href="https://wa.me/5553997105666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Chamar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;