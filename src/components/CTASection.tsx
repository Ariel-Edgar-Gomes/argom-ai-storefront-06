
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/244951720655', '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-gradient-to-r from-primary/5 to-cyan-500/10 border-2 border-cyan-500/20 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          
          <CardContent className="p-12 lg:p-16 text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-cyan-400 animate-pulse" />
                <Zap className="absolute -top-2 -right-2 w-6 h-6 text-blue-400" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-light mb-8">
              Pronto para <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Revolucionar</span> o seu Negócio?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              A nossa equipa de especialistas está preparada para transformar a sua visão em realidade. 
              Vamos criar juntos o futuro do seu negócio com inteligência artificial de ponta em Angola.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                INICIAR CONVERSA AGORA
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">Consulta Gratuita</div>
                <p className="text-muted-foreground font-light">Análise completa e estratégia personalizada sem compromisso</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">Implementação Rápida</div>
                <p className="text-muted-foreground font-light">Entrega em até 7 dias com metodologia ágil comprovada</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">Suporte Contínuo</div>
                <p className="text-muted-foreground font-light">Acompanhamento dedicado para maximizar os seus resultados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
