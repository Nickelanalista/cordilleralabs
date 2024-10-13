import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ponte en Contacto</h3>
            <p className="mb-6">Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestros servicios, precios o simplemente quieras saludar, estamos aquí para ayudarte.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-2" />
                <span>info@cordilleralabs.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-2" />
                <span>+56 2 2123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
          <form className="bg-card p-6 rounded-lg shadow-lg space-y-4">
            <input type="text" placeholder="Tu Nombre" className="w-full p-2 rounded-md border border-input bg-background text-foreground" />
            <input type="email" placeholder="Tu Email" className="w-full p-2 rounded-md border border-input bg-background text-foreground" />
            <textarea placeholder="Tu Mensaje" rows={4} className="w-full p-2 rounded-md border border-input bg-background text-foreground"></textarea>
            <button type="submit" className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full hover:bg-primary/90 transition duration-300">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;