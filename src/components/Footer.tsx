import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/Logo%20Cordillera%20Labs%20Rect%20white.png?alt=media&token=e9dfa431-b965-4147-ad0d-80f10453ddbe"
              alt="Logo de Cordillera Labs"
              className="h-8"
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Cordillera Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;