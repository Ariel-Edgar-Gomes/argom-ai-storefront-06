import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, FileText, Mail, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Agentes com IA",
      description: "Assistentes virtuais inteligentes para múltiplas plataformas",
      features: ["Atendimento 24/7", "Personalidade única", "Multi-canal"],
      hasPage: true,
      link: "/agentes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Hardware & Equipamentos",
      description: "Equipamentos informáticos de qualidade com garantia oficial",
      features: ["Marcas reconhecidas", "Garantia oficial", "Suporte técnico"],
      hasPage: true,
      link: "/hardware",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Automação Social",
      description: "Presença digital inteligente nas redes sociais",
      features: ["Engajamento automático", "Conteúdo personalizado", "Gestão de comunidade"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: FileText,
      title: "Currículos Profissionais",
      description: "Templates premium otimizados para recrutadores",
      features: ["Design internacional", "ATS-friendly", "Personal branding"],
      hasPage: true,
      link: "/curriculos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Mail,
      title: "Cartas de Apresentação",
      description: "Comunicação persuasiva personalizada",
      features: ["Copywriting profissional", "Adaptação psicográfica", "Storytelling estratégico"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400 font-medium bg-cyan-500/10 px-4 py-2 rounded-full">
              Nossas Especialidades
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            O Que <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Fazemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Soluções completas em inteligência artificial desenvolvidas para maximizar resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {service.hasPage && service.link && (
                  <Link to={service.link}>
                    <Button 
                      size="sm"
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0 transition-all duration-300`}
                    >
                      Configurar Agora
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
