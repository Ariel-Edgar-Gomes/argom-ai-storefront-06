
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Zap, BarChart3, Settings, Shield, Headphones, Brain, Rocket, Globe, Star } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "IA Conversacional Avançada",
      description: "Algoritmos de processamento de linguagem natural que compreendem contexto, emoções e intenções humanas com precisão superior a 98%",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Performance Ultra-Rápida",
      description: "Infraestrutura distribuída globalmente com resposta em menos de 500ms e processamento em tempo real usando edge computing",
      color: "yellow"
    },
    {
      icon: BarChart3,
      title: "Analytics Inteligente",
      description: "Dashboard com insights acionáveis, predição de tendências e análise comportamental avançada com machine learning",
      color: "green"
    },
    {
      icon: Settings,
      title: "Customização Extrema",
      description: "Engine de personalização que adapta comportamento, personalidade e estratégias de conversão para cada nicho específico",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Segurança Militar",
      description: "Criptografia AES-256, conformidade GDPR/LGPD, autenticação multi-fator e auditoria completa de segurança",
      color: "red"
    },
    {
      icon: Headphones,
      title: "Suporte Premium 24/7",
      description: "Equipe especializada dedicada com SLA de 99.9%, consultoria estratégica e otimização contínua de performance",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "text-blue-400",
        border: "border-blue-500/20 hover:border-blue-400/40",
        bg: "hover:bg-blue-500/5"
      },
      yellow: {
        icon: "text-yellow-400",
        border: "border-yellow-500/20 hover:border-yellow-400/40",
        bg: "hover:bg-yellow-500/5"
      },
      green: {
        icon: "text-green-400",
        border: "border-green-500/20 hover:border-green-400/40",
        bg: "hover:bg-green-500/5"
      },
      purple: {
        icon: "text-purple-400",
        border: "border-purple-500/20 hover:border-purple-400/40",
        bg: "hover:bg-purple-500/5"
      },
      red: {
        icon: "text-red-400",
        border: "border-red-500/20 hover:border-red-400/40",
        bg: "hover:bg-red-500/5"
      },
      indigo: {
        icon: "text-indigo-400",
        border: "border-indigo-500/20 hover:border-indigo-400/40",
        bg: "hover:bg-indigo-500/5"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/20 to-background"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Clean header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/20 mb-8">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="text-sm uppercase tracking-wider text-cyan-400 font-medium">Tecnologia Avançada</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Inovação{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Tecnológica
            </span>{" "}
            de Vanguarda
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto font-light leading-relaxed">
            Recursos revolucionários de <span className="text-cyan-400 font-medium">inteligência artificial</span> que 
            posicionam sua empresa na <span className="text-purple-400 font-medium">liderança da automação empresarial</span>
          </p>
        </div>

        {/* Improved features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <Card 
                key={index} 
                className={`group bg-white/5 backdrop-blur-sm border ${colorClasses.border} ${colorClasses.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon section */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-1 text-base group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Simplified bottom section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-cyan-500/20 relative overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-12 lg:p-16 relative z-10">
              <div className="flex justify-center gap-4 mb-8">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <Globe className="w-8 h-8 text-blue-400" />
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-light mb-8">
                Plataforma{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                  All-in-One
                </span>
              </h3>
              
              <p className="text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                Ecossistema completo de IA que integra todos os aspectos do seu negócio em uma única solução poderosa e escalável
              </p>
              
              {/* Clean stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-white/90">Conversação IA</div>
                </div>
                
                <div className="text-center p-4">
                  <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-white/90">Analytics Avançado</div>
                </div>
                
                <div className="text-center p-4">
                  <Shield className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-white/90">Máxima Segurança</div>
                </div>
                
                <div className="text-center p-4">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-white/90">Performance Ultra</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
