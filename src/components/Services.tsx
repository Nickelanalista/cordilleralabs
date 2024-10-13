import React from 'react';
import { Brain, BarChart, Database, Code } from 'lucide-react';

const services = [
  { icon: Brain, title: 'Inteligencia Artificial', description: 'Soluciones de IA personalizadas para automatizar y optimizar sus procesos de negocio.' },
  { icon: BarChart, title: 'Machine Learning', description: 'Modelos avanzados de ML para análisis predictivo y toma de decisiones basada en datos.' },
  { icon: Database, title: 'Análisis de Big Data', description: 'Análisis exhaustivo de datos para descubrir insights valiosos para su organización.' },
  { icon: Code, title: 'Desarrollo de Software', description: 'Soluciones de software a medida para satisfacer sus necesidades empresariales únicas.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 text-center">
              <service.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;