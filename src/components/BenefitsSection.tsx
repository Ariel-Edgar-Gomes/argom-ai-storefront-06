
import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Users, Smile, BarChart3, Shield, Rocket, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "Disponibilidade ininterrupta para máxima captura de oportunidades no mercado angolano",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Retorno médio de 250% no investimento em 90 dias para empresas angolanas",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Users,
      title: "Escalabilidade",
      description: "Crescimento sem limitações de recursos humanos no contexto empresarial angolano",
      gradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: Smile,
      title: "Experiência Premium",
      description: "Satisfação do cliente elevada através de atendimento personalizado em português",
      gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      icon: BarChart3,
      title: "Insights Avançados",
      description: "Analytics em tempo real para optimização contínua do negócio",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Protecção de dados com padrões internacionais de segurança",
      gradient: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  return (
    <section id="benefits" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">Vantagens Competitivas</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8">
            Por que ter um <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Agente Inteligente?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Transforme a sua operação empresarial com tecnologia de ponta que revoluciona a forma como se relaciona com clientes e optimiza processos internos em Angola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group bg-card/40 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-cyan-500/5 border-2 border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <CardContent className="p-12 text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="flex gap-4">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-light mb-8">
              Transforme a sua empresa numa <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">máquina de vendas</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">+250%</div>
                <div className="text-lg text-muted-foreground font-light">Aumento em Conversões</div>
                <div className="text-sm text-cyan-400 mt-2">Performance Comprovada</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg text-muted-foreground font-light">Disponibilidade Total</div>
                <div className="text-sm text-cyan-400 mt-2">Sem Limitações</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">-60%</div>
                <div className="text-lg text-muted-foreground font-light">Redução de Custos</div>
                <div className="text-sm text-cyan-400 mt-2">Operacional Optimizada</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
