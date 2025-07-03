
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle, ArrowRight, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const InfoprodutosCTA = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-cyan-900/30 via-background to-blue-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-500/30 mb-8">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Oferta Por Tempo Limitado</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
              Pronto para <span className="text-cyan-400 font-bold">Transformar</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                sua Carreira?
              </span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Não perca mais tempo. <span className="text-cyan-400 font-semibold">Milhares de profissionais</span> 
              já deram o próximo passo. Sua vez chegou de acelerar seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
              >
                <ShoppingBag className="mr-3 h-6 w-6" />
                Ver Todos os Produtos
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-12 py-6 text-xl font-medium rounded-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/contato">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-card/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/20 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
              Por que mais de 50.000 profissionais confiam em nós?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">Garantia Total</h4>
                <p className="text-muted-foreground text-center">30 dias para testar. Não gostou? Devolvemos 100% do valor.</p>
              </div>
              
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">Qualidade Comprovada</h4>
                <p className="text-muted-foreground text-center">Avaliação média de 4.9/5 estrelas em mais de 5.000 reviews.</p>
              </div>
              
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">Resultados Rápidos</h4>
                <p className="text-muted-foreground text-center">98% dos clientes veem resultados nas primeiras 2 semanas.</p>
              </div>
            </div>
          </div>

          {/* Final Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 hover:bg-card/30 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50.000+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 hover:bg-card/30 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 hover:bg-card/30 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 hover:bg-card/30 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
