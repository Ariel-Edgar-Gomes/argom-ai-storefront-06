
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { 
  MessageSquare, 
  Bot, 
  User, 
  CheckCircle, 
  Zap, 
  TrendingUp,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

export const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string, timestamp: string}>>([]);

  const demoSteps = [
    {
      step: 1,
      title: "Cliente envia mensagem",
      userMessage: "Olá! Gostaria de saber mais sobre os vossos produtos",
      description: "Cliente inicia conversa via WhatsApp"
    },
    {
      step: 2,
      title: "IA analisa a intenção",
      processing: "Analisando intenção do cliente...",
      description: "Sistema processa linguagem natural em português angolano"
    },
    {
      step: 3,
      title: "Resposta personalizada",
      botMessage: "Olá! Que bom ter-vos aqui! 😊 Tenho várias soluções que podem interessar-vos. Trabalham em que área específica?",
      description: "IA responde de forma natural e contextualizada"
    },
    {
      step: 4,
      title: "Cliente responde",
      userMessage: "Temos uma loja de roupa em Luanda e queremos aumentar as vendas online",
      description: "Cliente fornece mais contexto sobre o negócio"
    },
    {
      step: 5,
      title: "IA personaliza oferta",
      botMessage: "Perfeito! Para lojas de moda, temos uma solução especial que já ajudou mais de 50 empresas em Luanda a aumentar vendas em +300%. Posso agendar uma demonstração gratuita para hoje?",
      description: "Sistema oferece solução específica com dados locais"
    },
    {
      step: 6,
      title: "Conversão realizada",
      userMessage: "Sim, por favor! Que horas têm disponível?",
      result: "Cliente convertido com sucesso!",
      description: "Lead qualificado e pronto para venda"
    }
  ];

  useEffect(() => {
    if (isPlaying && currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        const step = demoSteps[currentStep];
        
        if (step.userMessage) {
          setMessages(prev => [...prev, {
            type: 'user',
            content: step.userMessage,
            timestamp: new Date().toLocaleTimeString()
          }]);
        } else if (step.botMessage) {
          setMessages(prev => [...prev, {
            type: 'bot',
            content: step.botMessage,
            timestamp: new Date().toLocaleTimeString()
          }]);
        }
        
        setCurrentStep(prev => prev + 1);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    
    if (currentStep >= demoSteps.length) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep]);

  const startDemo = () => {
    setIsPlaying(true);
    if (currentStep >= demoSteps.length) {
      resetDemo();
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setMessages([]);
    setIsPlaying(false);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
              Demonstração Interativa
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Veja a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              IA em Ação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Experimente uma conversa real entre cliente e nossa IA - assista como cada interação se transforma em oportunidade
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Chat Interface */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 h-[600px] flex flex-col">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">WhatsApp Business</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={resetDemo}
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                        : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        {message.type === 'bot' ? (
                          <Bot className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}

                {currentStep < demoSteps.length && demoSteps[currentStep]?.processing && (
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-purple-400">{demoSteps[currentStep].processing}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="grid gap-4">
                {demoSteps.map((step, index) => (
                  <Card key={index} className={`transition-all duration-500 ${
                    index === currentStep 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 scale-105' 
                      : index < currentStep 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-white/5 border-white/10'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index < currentStep 
                            ? 'bg-green-500' 
                            : index === currentStep 
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                              : 'bg-white/10'
                        }`}>
                          {index < currentStep ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : index === currentStep ? (
                            <Zap className="w-5 h-5 text-white animate-pulse" />
                          ) : (
                            <span className="text-sm font-medium text-white">{step.step}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium ${
                            index === currentStep ? 'text-cyan-400' : 'text-white'
                          }`}>
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Results Panel */}
              {currentStep >= demoSteps.length && (
                <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Conversão Realizada!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Lead qualificado e pronto para follow-up de vendas
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-green-400">2m 15s</div>
                        <div className="text-xs text-muted-foreground">Tempo Total</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-cyan-400">6</div>
                        <div className="text-xs text-muted-foreground">Mensagens</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-purple-400">100%</div>
                        <div className="text-xs text-muted-foreground">Automático</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
