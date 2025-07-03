
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OwnerSection } from "@/components/OwnerSection";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Heart, Lightbulb, Rocket, Star, Globe, Zap } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900/20 to-background">
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated background elements - Responsivo */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 sm:top-1/3 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 sm:left-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Header />
        
        {/* Hero Section - Mobile Otimizada */}
        <section className="pt-20 sm:pt-32 pb-12 sm:pb-24 relative px-4 sm:px-0">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 border border-cyan-500/30 mb-6 sm:mb-8 animate-fade-in">
                <Star className="w-4 sm:w-6 h-4 sm:h-6 text-cyan-400" />
                <span className="text-xs sm:text-base uppercase tracking-wider text-cyan-400 font-semibold">Conheça Nossa História</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light mb-6 sm:mb-10 leading-tight animate-slide-up">
                Quem{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
                  Somos
                </span>
              </h1>
              
              <p className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed mb-8 sm:mb-12 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
                Somos <span className="text-cyan-400 font-medium">visionários</span> em inteligência artificial,{" "}
                <span className="text-purple-400 font-medium">transformando</span> o futuro dos negócios através da{" "}
                <span className="text-emerald-400 font-medium">inovação tecnológica</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                  <span>Presença Global</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                  <span>Inovação Contínua</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
                  <span>Excelência Reconhecida</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção do Fundador */}
        <OwnerSection />

        {/* Missão, Visão e Valores - Mobile Otimizada */}
        <section className="py-12 sm:py-24 relative px-4 sm:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-4 sm:mb-6">
                Nossos{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-normal">
                  Fundamentos
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4 sm:px-0">
                Os pilares que guiam nossa jornada na transformação digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-10 text-center relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-white group-hover:text-cyan-400 transition-colors">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    Democratizar o acesso à inteligência artificial, oferecendo soluções inovadoras 
                    que impulsionam o crescimento e a transformação digital dos nossos clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-10 text-center relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-white group-hover:text-purple-400 transition-colors">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    Ser a empresa líder em soluções de IA no mercado lusófono, 
                    reconhecida pela excelência, inovação e impacto transformador.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-10 text-center relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-white group-hover:text-emerald-400 transition-colors">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    Inovação, integridade, excelência no atendimento e compromisso 
                    com o sucesso dos nossos clientes em cada projeto desenvolvido.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nossa História - Mobile Otimizada */}
        <section className="py-12 sm:py-24 relative px-4 sm:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
                Nossa{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
                  Jornada
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
                Uma história de inovação, dedicação e transformação digital
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-12 lg:p-16 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div>
                      <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6 sm:mb-8"></div>
                      
                      <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
                        <p>
                          A <span className="text-cyan-400 font-medium">Argom Tech</span> nasceu da visão de tornar 
                          a inteligência artificial acessível e prática para empresas de todos os tamanhos. 
                          Fundada com o propósito de conectar tecnologia avançada com aplicação real, 
                          começamos nossa jornada focados em criar soluções que realmente fazem a diferença.
                        </p>
                        
                        <p>
                          Desde o início, nossa abordagem tem sido <span className="text-purple-400 font-medium">centrada no cliente</span>, 
                          entendendo suas necessidades específicas e desenvolvendo soluções personalizadas que não apenas atendem, 
                          mas superam expectativas. Cada projeto é uma oportunidade de inovar e criar valor real.
                        </p>

                        <p>
                          Hoje, orgulhamo-nos de ser parceiros de confiança de centenas de empresas, 
                          ajudando-as a navegar na era digital com <span className="text-emerald-400 font-medium">confiança e eficiência</span>. 
                          Nosso compromisso continua sendo o mesmo: transformar desafios em oportunidades 
                          através da tecnologia.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 p-6 sm:p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl sm:text-6xl lg:text-7xl font-light bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                            +5
                          </div>
                          <div className="text-base sm:text-lg text-white/90 font-medium">Anos de Inovação</div>
                          <div className="text-sm text-muted-foreground mt-2">Transformando o Futuro</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Estatísticas - Mobile Otimizada */}
        <section className="py-12 sm:py-24 relative px-4 sm:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                Números que{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
                  Inspiram
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="group text-center p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  +5
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-lg">Anos de Experiência</div>
                <div className="text-cyan-400 text-xs sm:text-sm mt-1 sm:mt-2">Em constante evolução</div>
              </div>
              
              <div className="group text-center p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  +1000
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-lg">Clientes Satisfeitos</div>
                <div className="text-emerald-400 text-xs sm:text-sm mt-1 sm:mt-2">Confiança conquistada</div>
              </div>
              
              <div className="group text-center p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  +500
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-lg">Projetos Entregues</div>
                <div className="text-purple-400 text-xs sm:text-sm mt-1 sm:mt-2">Soluções implementadas</div>
              </div>
              
              <div className="group text-center p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-lg">Suporte Especializado</div>
                <div className="text-orange-400 text-xs sm:text-sm mt-1 sm:mt-2">Sempre disponível</div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais - Mobile Otimizada */}
        <section className="py-12 sm:py-24 relative px-4 sm:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
                Nossos{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-normal">
                  Diferenciais
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
                O que nos torna únicos no mercado de soluções tecnológicas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors">Inovação Constante</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Sempre na vanguarda das últimas tecnologias de IA e desenvolvimento, 
                    garantindo soluções de ponta para nossos clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-white group-hover:text-emerald-400 transition-colors">Foco no Cliente</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Cada solução é personalizada para atender às necessidades específicas, 
                    garantindo resultados que superam expectativas.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-white group-hover:text-purple-400 transition-colors">Qualidade Premium</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Compromisso com a excelência em cada linha de código e cada interação, 
                    entregando sempre o melhor resultado possível.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default QuemSomos;
