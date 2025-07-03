
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Users, ArrowDown } from "lucide-react";

export const InfoprodutosHero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 lg:py-24 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Compact Headline */}
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-6 animate-fade-in leading-[0.9]">
            <span className="block text-white mb-2">Produtos Digitais</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
              Premium
            </span>
          </h1>
          
          {/* Simplified Description */}
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Transforme sua carreira com produtos digitais que <span className="text-cyan-400 font-semibold">garantem resultados</span>
          </p>
          
          {/* Compact Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 mb-8 animate-fade-in delay-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 estrelas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>50.000+ clientes</span>
            </div>
          </div>
          
          {/* Single CTA */}
          <div className="animate-fade-in delay-700">
            <Button 
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 group"
            >
              <ShoppingBag className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Ver Produtos
              <ArrowDown className="ml-3 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
