import React from 'react';
import { Code, Database, Cpu, BarChart2 } from 'lucide-react';

const technologies = [
  { name: 'React JS', icon: Code, color: 'text-blue-500' },
  { name: 'Python', icon: Cpu, color: 'text-yellow-500' },
  { name: 'Machine Learning', icon: BarChart2, color: 'text-green-500' },
  { name: 'SQL', icon: Database, color: 'text-purple-500' },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-16 bg-gradient-to-r from-primary/20 to-accent/20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Innovación en Tecnología Avanzada</h1>
        <p className="text-xl mb-8">Cordillera Labs: Desarrolladores de Soluciones Tecnológicas de Vanguardia</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center bg-card p-2 rounded-full">
              <tech.icon className={`w-6 h-6 ${tech.color} mr-2`} />
              <span className="text-sm font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full hover:bg-primary/90 transition duration-300 inline-block">
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;