import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-card text-card-foreground py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/Logo%20Cordillera%20Labs%20Rect%20white.png?alt=media&token=e9dfa431-b965-4147-ad0d-80f10453ddbe"
            alt="Logo de Cordillera Labs"
            className="h-10 dark:invert-0 invert"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">Nosotros</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;