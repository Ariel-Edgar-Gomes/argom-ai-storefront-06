
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Star, Zap, Shield } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "500%",
      label: "Crescimento em Vendas",
      description: "Média de aumento dos nossos clientes",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      value: "50+",
      label: "Empresas Transformadas",
      description: "Negócios revolucionados com IA",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Operação Contínua",
      description: "Vendas acontecendo sempre",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Star,
      value: "99%",
      label: "Satisfação Premium",
      description: "Taxa de aprovação dos clientes",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Zap,
      value: "2s",
      label: "Tempo de Resposta",
      description: "Velocidade extrema de processamento",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Segurança Garantida",
      description: "Proteção total de dados",
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400 font-medium bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              Resultados Comprovados
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light mb-6">
            Números que{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Falam por Si
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Resultados reais de empresas que transformaram seus negócios com nossa tecnologia
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <div className={`text-2xl lg:text-3xl font-light mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                <h3 className="font-medium text-white mb-2 text-sm lg:text-base">{stat.label}</h3>
                <p className="text-xs lg:text-sm text-white/70">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-white">
              Pronto para <span className="text-cyan-400 font-normal">Transformar</span> seu Negócio?
            </h3>
            <p className="text-lg text-white/70 mb-6">
              Junte-se às empresas que já estão no futuro da automação
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400">ROI Garantido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400">Suporte Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
