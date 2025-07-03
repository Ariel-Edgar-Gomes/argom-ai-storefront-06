
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Argom<span className="text-cyan-400">Tech</span> Store
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Especializada em soluções com inteligência artificial, automações para redes sociais 
              e sistemas de atendimento que vendem 24/7.
            </p>
            <div className="text-lg font-semibold text-cyan-400">
              "Tecnologia que vende por você."
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-cyan-400 transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-cyan-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-primary-foreground/80 hover:text-cyan-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:argomtechstore@gmail.com" 
                className="flex items-center text-primary-foreground/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                argomtechstore@gmail.com
              </a>
              <a 
                href="https://wa.me/244951720655" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-cyan-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Comercial
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Argom Tech Store. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/192SHvEu4C/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/arielgomestech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@argomtechoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-cyan-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
