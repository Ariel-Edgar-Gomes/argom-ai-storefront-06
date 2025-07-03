
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  Smile,
  Globe,
  Target,
  Award,
  Lightbulb
} from "lucide-react";

export const BenefitsFeatures = () => {
  const features = [
    {
      icon: Rocket,
      title: "Crescimento Acelerado",
      description: "Aumente as suas vendas exponencialmente com automação inteligente que nunca para de trabalhar para si.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "O seu negócio funciona sem interrupções, capturando oportunidades mesmo enquanto dorme.",
      gradient: "from-purple-500/10 to-violet-500/10",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Retorno médio de 350% no investimento nos primeiros 90 dias para empresas angolanas.",
      gradient: "from-green-500/10 to-emerald-500/10",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Escalabilidade Infinita",
      description: "Atenda milhares de clientes simultaneamente sem contratar mais funcionários.",
      gradient: "from-orange-500/10 to-red-500/10",
      color: "text-orange-400"
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Protecção de dados com padrões internacionais de segurança e conformidade GDPR.",
      gradient: "from-indigo-500/10 to-blue-500/10",
      color: "text-indigo-400"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançados",
      description: "Insights em tempo real para optimização contínua e tomada de decisões baseada em dados.",
      gradient: "from-pink-500/10 to-rose-500/10",
      color: "text-pink-400"
    },
    {
      icon: Smile,
      title: "Satisfação Premium",
      description: "99% de satisfação do cliente através de atendimento personalizado em português angolano.",
      gradient: "from-yellow-500/10 to-orange-500/10",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Velocidade Extrema",
      description: "Respostas instantâneas em menos de 2 segundos, superando qualquer concorrência.",
      gradient: "from-cyan-500/10 to-blue-500/10",
      color: "text-cyan-400"
    },
    {
      icon: Globe,
      title: "Integração Universal",
      description: "Conecta-se com todas as plataformas que já usa: WhatsApp, Instagram, Facebook, website.",
      gradient: "from-violet-500/10 to-purple-500/10",
      color: "text-violet-400"
    },
    {
      icon: Target,
      title: "Precisão Laser",
      description: "Targeting inteligente que identifica e converte os prospects mais qualificados.",
      gradient: "from-red-500/10 to-pink-500/10",
      color: "text-red-400"
    },
    {
      icon: Award,
      title: "Tecnologia Premiada",
      description: "Soluções reconhecidas internacionalmente e adaptadas para o mercado angolano.",
      gradient: "from-emerald-500/10 to-green-500/10",
      color: "text-emerald-400"
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Actualizações automáticas com as últimas inovações em inteligência artificial.",
      gradient: "from-amber-500/10 to-yellow-500/10",
      color: "text-amber-400"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
              Vantagens Exclusivas
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Porque escolher a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              ArgomTech?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Mais do que tecnologia, oferecemos uma transformação completa do seu negócio com resultados mensuráveis e garantidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/40 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
