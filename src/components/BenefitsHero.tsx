
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const BenefitsHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide">Transformação Digital Garantida</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light mb-8 leading-tight animate-fade-in">
            Revolucione o seu{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-normal">
              Negócio
            </span>
            <br />
            com Inteligência Artificial
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-12 font-light leading-relaxed max-w-4xl mx-auto animate-fade-in">
            Descubra como a nossa tecnologia de ponta pode aumentar as suas vendas em{" "}
            <span className="text-cyan-400 font-semibold">+300%</span>, reduzir custos operacionais e 
            proporcionar uma experiência premium aos seus clientes 24/7.
          </p>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-3xl mx-auto">
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">+300%</span>
              </div>
              <p className="text-muted-foreground text-sm">Aumento em Vendas</p>
            </div>
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                <span className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">24/7</span>
              </div>
              <p className="text-muted-foreground text-sm">Disponibilidade</p>
            </div>
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">-70%</span>
              </div>
              <p className="text-muted-foreground text-sm">Redução de Custos</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <Link to="/contato">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105">
              <Link to="/agentes">
                Ver Soluções
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
