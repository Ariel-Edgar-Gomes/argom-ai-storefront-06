
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Zap, Headphones, ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  const workProcess = [
    {
      icon: Globe,
      title: "100% Digital",
      description: "Processo completamente online e sem burocracias desnecessárias, adaptado à realidade angolana",
      step: "01",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Análise profunda com especialistas em IA e automação, focada no mercado angolano",
      step: "02",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Zap,
      title: "Desenvolvimento Ágil",
      description: "Metodologia moderna com entregas incrementais e feedback contínuo em português",
      step: "03",
      gradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: Headphones,
      title: "Suporte Vitalício",
      description: "Acompanhamento contínuo para garantir performance optimizada no contexto local",
      step: "04",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">Metodologia</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8">
            Como <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Trabalhamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Um processo estruturado e transparente que garante resultados excepcionais em cada projecto de automação empresarial em Angola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group bg-card/40 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10 h-full flex flex-col">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed flex-1">{step.description}</p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mx-auto" />
                  </div>
                </CardContent>
              </Card>
              
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-cyan-400/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
