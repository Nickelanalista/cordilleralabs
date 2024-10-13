import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Equipo de Cordillera Labs"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Sobre Cordillera Labs</h2>
            <p className="text-lg mb-6">
              Cordillera Labs es una empresa líder en desarrollo de software especializada en soluciones de IA, Machine Learning y análisis de datos. Nuestra misión es potenciar a las empresas con tecnología de vanguardia que impulse la innovación y el crecimiento.
            </p>
            <p className="text-lg mb-6">
              Fundada por un equipo de apasionados tecnólogos y científicos de datos, combinamos nuestra experiencia en ingeniería de software con un profundo conocimiento de la inteligencia artificial para crear soluciones a medida que abordan desafíos empresariales complejos.
            </p>
            <button className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full hover:bg-primary/90 transition duration-300">
              Conoce Más Sobre Nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;