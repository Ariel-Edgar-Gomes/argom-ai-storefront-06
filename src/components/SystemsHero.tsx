import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Rocket } from "lucide-react";

export const SystemsHero = () => {
  const scrollToSystems = () => {
    document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-500/5 to-background"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">
            <Zap className="w-3 h-3 mr-1" />
            Sistemas Prontos para Uso
          </Badge>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
              Prontas para Deploy
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sistemas desenvolvidos, testados e otimizados. Escolha, personalize e 
            coloque seu negócio online em questão de horas, não meses.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { icon: Code, label: "Código Limpo" },
              { icon: Zap, label: "Deploy Rápido" },
              { icon: Shield, label: "100% Seguro" },
              { icon: Rocket, label: "Performance" }
            ].map((feature, index) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-primary hover:from-cyan-600 hover:to-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            onClick={scrollToSystems}
          >
            Ver Todos os Sistemas
            <Rocket className="w-5 h-5 ml-2" />
          </Button>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "5+", label: "Sistemas Disponíveis" },
              { number: "24/7", label: "Suporte Incluído" },
              { number: "100%", label: "Código Próprio" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};