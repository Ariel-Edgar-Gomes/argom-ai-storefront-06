
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bot, MessageSquare, ArrowRight, Sparkles, MessageCircle, Facebook, Instagram, Send, CheckCircle, Info, Zap } from "lucide-react";
import { useState } from "react";

const Agentes = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Descrição do negócio:", description);
    // Aqui seria processado o teste do agente
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in">
            <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm sm:text-base">Teste Grátis</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight animate-slide-up">
            <span className="text-white">Teste Seu </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Agente de IA
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4 animate-fade-in">
            Descreva seu negócio e veja como nossa IA pode revolucionar seu atendimento
          </p>

          {/* Ícones de redes sociais */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 flex-wrap">
            <div className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-2xl border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-110">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 group-hover:text-green-300" />
            </div>
            
            <div className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-2xl border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
              <Facebook className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:text-blue-300" />
            </div>
            
            <div className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-pink-500/20 rounded-2xl border border-pink-500/30 hover:bg-pink-500/30 transition-all duration-300 hover:scale-110">
              <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400 group-hover:text-pink-300" />
            </div>
            
            <div className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/20 rounded-2xl border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110">
              <Send className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 group-hover:text-cyan-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-12 sm:mb-16 hover:shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-500/20">
            <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl sm:text-3xl text-white mb-4">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 animate-pulse" />
                <span className="text-xl sm:text-3xl">Descreva Seu Negócio</span>
              </CardTitle>
              <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
                Quanto mais detalhes, melhor será seu agente personalizado
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <label className="block text-white font-medium text-base sm:text-lg">
                    Conte-nos sobre seu trabalho e negócio:
                  </label>
                  
                  <Textarea 
                    placeholder="• Que produtos ou serviços você oferece?
• Qual é seu público-alvo?
• Quais são as principais dúvidas dos seus clientes?
• Como você gostaria que o agente respondesse?
• Que tom de voz usar? (formal, descontraído, técnico...)

Exemplo: 'Sou dentista e atendo crianças e adultos. Ofereço limpeza, obturações e clareamento. Meus clientes sempre perguntam sobre preços, horários disponíveis e se dói. Gostaria que o agente fosse acolhedor e tranquilizasse sobre os procedimentos.'"
                    className="min-h-[250px] sm:min-h-[300px] bg-white/5 border-white/20 text-white placeholder:text-white/40 text-sm sm:text-base leading-relaxed resize-none focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all duration-300 rounded-xl"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  
                  <div className="text-xs sm:text-sm text-white/60 bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-3 sm:p-4 border border-white/10">
                    <div className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-cyan-400">Dica:</strong> Seja específico! Quanto mais informações você fornecer, mais personalizado e eficaz será seu agente.
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={description.length < 50}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  <MessageSquare className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-lg">Testar Meu Agente de IA</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-center text-white/60 text-xs sm:text-sm">
                  ✨ Teste completamente gratuito • Sem compromisso • Resultado em minutos
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de Informações Necessárias */}
      <section className="pb-12 sm:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
            <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-white mb-4">
                <Info className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                <span className="text-lg sm:text-2xl">Informações Necessárias para Seu Agente</span>
              </CardTitle>
              <p className="text-white/70 text-sm sm:text-base max-w-3xl mx-auto">
                Para criar um agente personalizado e eficaz, precisamos conhecer alguns detalhes sobre seu negócio
              </p>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-lg sm:text-xl">📋</span>
                    Sobre seu Negócio
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Produtos/Serviços: </span>
                        <span className="text-white/70">O que você oferece aos clientes</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Público-alvo: </span>
                        <span className="text-white/70">Quem são seus clientes ideais</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Valores/Preços: </span>
                        <span className="text-white/70">Faixas de preço dos seus serviços</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Horário de funcionamento: </span>
                        <span className="text-white/70">Quando você atende</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-lg sm:text-xl">💬</span>
                    Personalização
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Tom de voz: </span>
                        <span className="text-white/70">Formal, descontraído, técnico, acolhedor</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Dúvidas frequentes: </span>
                        <span className="text-white/70">Principais perguntas dos clientes</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Diferencial: </span>
                        <span className="text-white/70">O que te destaca da concorrência</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-medium">Políticas: </span>
                        <span className="text-white/70">Cancelamento, garantia, pagamento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">Dica Importante</span>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Quanto mais detalhes você fornecer, mais personalizado e eficaz será seu agente de IA. 
                  Ele será capaz de responder perguntas específicas e representar fielmente sua marca e valores.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agentes;
