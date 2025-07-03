
import { Button } from "@/components/ui/button";
import { Bot, Zap, ArrowRight, Star, Shield, TrendingUp, Play, Sparkles, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900"></div>
      
      {/* Subtle animated elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto container-padding relative z-10 max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Clean floating badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white/90">#1 em Automação com IA em Angola</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Simplified headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95]">
              <span className="block text-white">Agentes de IA que</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
                Multiplicam as suas Vendas
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              Tecnologia de ponta que trabalha 24/7 para converter visitantes em clientes
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-base text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Sistema Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>30+ Empresas Angolanas</span>
              </div>
            </div>
          </div>

          {/* Clean CTA section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-10 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Bot className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Criar o Meu Agente IA
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-10 py-6 rounded-xl hover:bg-white/10 group backdrop-blur-sm border border-white/20"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white/90">Ver Demonstração</span>
              </Button>
            </div>

            {/* Simplified trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  400%
                </div>
                <div className="text-sm text-white/80">Aumento em Vendas</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-white/80">Disponibilidade</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  2s
                </div>
                <div className="text-sm text-white/80">Tempo de Resposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
