
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, ArrowRight, Sparkles, Rocket, Brain, Star } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/20 to-background"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Header section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/20 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm uppercase tracking-wider text-cyan-400 font-medium">A Nossa Essência</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Conheça a{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Argom Tech Store
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Pioneiros em <span className="text-cyan-400 font-medium">inteligência artificial empresarial em Angola</span>, 
            transformamos negócios através da automação inteligente que 
            <span className="text-purple-400 font-medium"> redefine o futuro digital angolano</span>.
          </p>
        </div>

        {/* Main content cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Building2,
              title: "A Nossa Visão",
              content: "Democratizar o acesso à inteligência artificial empresarial em Angola, capacitando negócios locais de todos os tamanhos a competir no mercado digital através de soluções automatizadas de alta performance.",
              gradient: "from-blue-500/10 to-cyan-500/10",
              iconColor: "text-blue-400",
              borderColor: "hover:border-blue-500/30"
            },
            {
              icon: Users,
              title: "O Nosso Público",
              content: "Empresários angolanos visionários, startups locais e corporações que buscam transformação digital real através de inteligência artificial aplicada estrategicamente aos seus processos de negócio.",
              gradient: "from-green-500/10 to-emerald-500/10",
              iconColor: "text-green-400",
              borderColor: "hover:border-green-500/30"
            },
            {
              icon: Target,
              title: "A Nossa Meta",
              content: "Criar ecossistemas de IA que revolucionam a forma como empresas angolanas interagem com clientes, optimizam operações e maximizam resultados exponenciais no mercado local.",
              gradient: "from-purple-500/10 to-violet-500/10",
              iconColor: "text-purple-400",
              borderColor: "hover:border-purple-500/30"
            }
          ].map((item, index) => (
            <Card 
              key={index} 
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 ${item.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-1 text-base group-hover:text-white/90 transition-colors">
                  {item.content}
                </p>
                
                <div className="flex justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced mission statement */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-cyan-500/20 relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
            
            <CardContent className="p-12 lg:p-16 relative z-10">
              <div className="flex justify-center gap-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-8 h-8 text-yellow-400 animate-ping" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-light mb-8 leading-tight">
                Transformamos{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                  Ideias em Realidade Digital
                </span>
              </h3>
              
              <p className="text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                A nossa missão é acelerar a evolução digital das empresas angolanas através de soluções de IA que 
                <span className="text-cyan-400 font-medium"> automatizam processos</span>, 
                <span className="text-purple-400 font-medium"> criam vantagens competitivas</span> e 
                <span className="text-green-400 font-medium"> geram resultados mensuráveis</span>.
              </p>
              
              {/* Clean stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group cursor-pointer p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    +200
                  </div>
                  <div className="text-base text-white/90 font-medium mb-1">Projectos Entregues</div>
                  <div className="text-sm text-cyan-400">Com Excelência</div>
                </div>
                
                <div className="text-center group cursor-pointer p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    3 Anos
                  </div>
                  <div className="text-base text-white/90 font-medium mb-1">Experiência em IA</div>
                  <div className="text-sm text-green-400">Inovação Contínua</div>
                </div>
                
                <div className="text-center group cursor-pointer p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    99.5%
                  </div>
                  <div className="text-base text-white/90 font-medium mb-1">Uptime Garantido</div>
                  <div className="text-sm text-purple-400">Máxima Confiabilidade</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
