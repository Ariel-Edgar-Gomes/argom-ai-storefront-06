
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  Shield,
  Globe,
  Sparkles,
  Award,
  Bot,
  Smartphone
} from "lucide-react";

export const WorkflowSection = () => {
  const workflowSteps = [
    {
      icon: MessageSquare,
      title: "Cliente Contacta",
      description: "Multi-canal: WhatsApp, Instagram, Facebook, Website",
      details: "Captura automática e inteligente de leads de qualquer plataforma",
      color: "from-blue-500 to-cyan-500",
      delay: "0s",
      metrics: "2.3k/dia"
    },
    {
      icon: Brain,
      title: "IA Processa",
      description: "Análise avançada com NLP em português angolano",
      details: "Compreende intenção, emoção e contexto cultural em tempo real",
      color: "from-purple-500 to-violet-500",
      delay: "0.3s",
      metrics: "<0.5s"
    },
    {
      icon: Target,
      title: "Resposta Personalizada",
      description: "Conversação natural adaptada ao perfil único",
      details: "Personalização baseada em histórico, comportamento e preferências",
      color: "from-green-500 to-emerald-500",
      delay: "0.6s",
      metrics: "95% precisão"
    },
    {
      icon: TrendingUp,
      title: "Conversão Inteligente",
      description: "Funil otimizado com técnicas de vendas avançadas",
      details: "Persuasão ética, objeções antecipadas e closes personalizados",
      color: "from-orange-500 to-red-500",
      delay: "0.9s",
      metrics: "87% taxa"
    }
  ];

  const integrations = [
    { name: "WhatsApp", logo: "💬", status: "Ativo", users: "2.1M", conversion: "89%" },
    { name: "Instagram", logo: "📷", status: "Ativo", users: "1.8M", conversion: "76%" },
    { name: "Facebook", logo: "📘", status: "Ativo", users: "3.2M", conversion: "82%" },
    { name: "Website", logo: "🌐", status: "Ativo", users: "890K", conversion: "91%" },
    { name: "Email", logo: "📧", status: "Ativo", users: "1.5M", conversion: "67%" },
    { name: "SMS", logo: "📱", status: "Ativo", users: "750K", conversion: "85%" }
  ];

  const aiCapabilities = [
    { icon: Bot, title: "Processamento de Linguagem Natural", desc: "Compreende dialetos angolanos" },
    { icon: Shield, title: "Segurança Avançada", desc: "Encriptação end-to-end" },
    { icon: Globe, title: "Multi-idioma", desc: "Português, Inglês, Espanhol" },
    { icon: Smartphone, title: "Mobile-First", desc: "Otimizado para dispositivos móveis" }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900/50 to-slate-800/50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium bg-cyan-500/10 px-8 py-4 rounded-full border border-cyan-500/20 backdrop-blur-sm">
              Como Funciona
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Workflow{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Revolucionário
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Descobra como nossa tecnologia de ponta transforma cada interação numa oportunidade de negócio otimizada
          </p>
        </div>

        {/* Enhanced Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {workflowSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{ animationDelay: step.delay }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-700 hover:-translate-y-4 h-full relative overflow-hidden group">
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Enhanced Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                  </div>

                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-xs text-cyan-400 font-medium mb-4">
                    {step.details}
                  </p>
                  
                  {/* Metrics */}
                  <div className={`inline-block bg-gradient-to-r ${step.color} bg-opacity-20 px-4 py-2 rounded-full`}>
                    <span className="text-sm font-semibold text-white">{step.metrics}</span>
                  </div>
                </CardContent>

                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">
            Capacidades{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Avançadas de IA
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-sm font-medium text-white mb-2">{capability.title}</div>
                  <div className="text-xs text-muted-foreground">{capability.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Integration Matrix */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">
            Integração{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Universal
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{integration.logo}</div>
                      <div>
                        <div className="text-sm font-medium text-white">{integration.name}</div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400">{integration.status}</span>
                        </div>
                      </div>
                    </div>
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-sm font-medium text-cyan-400">{integration.users}</div>
                      <div className="text-xs text-muted-foreground">Usuários</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-sm font-medium text-green-400">{integration.conversion}</div>
                      <div className="text-xs text-muted-foreground">Conversão</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Real-time Results */}
        <Card className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-cyan-500/20 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Sistema Operacional</span>
            </div>
            <h3 className="text-3xl font-light mb-4">
              Resultados em{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
                Tempo Real
              </span>
            </h3>
            <p className="text-muted-foreground">
              Acompanhe o desempenho da sua automação minuto a minuto com métricas avançadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 group">
              <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-light text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-2">Operação Contínua</div>
              <div className="text-xs text-cyan-400">99.9% Uptime</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-2 group">
              <Users className="w-10 h-10 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-light text-green-400 mb-2">∞</div>
              <div className="text-sm text-muted-foreground mb-2">Clientes Simultâneos</div>
              <div className="text-xs text-green-400">Sem Limites</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 group">
              <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-light text-yellow-400 mb-2">&lt;0.5s</div>
              <div className="text-sm text-muted-foreground mb-2">Tempo de Resposta</div>
              <div className="text-xs text-yellow-400">Ultra Rápido</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-2 group">
              <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-light text-purple-400 mb-2">97%</div>
              <div className="text-sm text-muted-foreground mb-2">Taxa de Conversão</div>
              <div className="text-xs text-purple-400">Líder do Mercado</div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="mt-8 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
            <div className="text-center mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h4 className="text-lg font-medium text-white">Atividade Ao Vivo</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between p-2 bg-green-500/10 rounded border-l-2 border-green-400">
                <span className="text-green-400">Nova conversão - WhatsApp Business</span>
                <span className="text-xs text-muted-foreground">agora</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-blue-500/10 rounded border-l-2 border-blue-400">
                <span className="text-blue-400">Lead qualificado - Instagram DM</span>
                <span className="text-xs text-muted-foreground">2s atrás</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-purple-500/10 rounded border-l-2 border-purple-400">
                <span className="text-purple-400">Follow-up automático enviado</span>
                <span className="text-xs text-muted-foreground">5s atrás</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
