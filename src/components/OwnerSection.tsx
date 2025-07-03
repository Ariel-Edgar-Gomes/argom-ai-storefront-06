
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Quote, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OwnerSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/30 to-background"></div>
      <div className="absolute top-1/4 left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced Header - Mobile Otimizada */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 border border-cyan-500/30 mb-6 sm:mb-8">
            <Award className="w-4 sm:w-6 h-4 sm:h-6 text-cyan-400" />
            <span className="text-xs sm:text-base uppercase tracking-wider text-cyan-400 font-semibold">Liderança Visionária</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight">
            Conheça o{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
              Fundador
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            A mente por trás da <span className="text-cyan-400 font-medium">revolução tecnológica</span> que 
            está transformando o mercado de <span className="text-purple-400 font-medium">inteligência artificial</span>
          </p>
        </div>

        {/* Enhanced Main content - Mobile Otimizada */}
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-500">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Enhanced Image section - Mobile Otimizada */}
                <div className="lg:col-span-2 relative">
                  <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"></div>
                    <img 
                      src="/lovable-uploads/d297046d-f50b-4543-9e17-206b212f646e.png" 
                      alt="Ariel Edgar Gomes - Fundador da Argom Tech"
                      className="w-full h-full object-contain object-center relative z-10 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Enhanced Content section - Mobile Otimizada */}
                <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative">
                  {/* Header info */}
                  <div className="mb-8 sm:mb-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 sm:mb-3 text-white">
                      Ariel Edgar Gomes
                    </h3>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <p className="text-lg sm:text-xl lg:text-2xl font-light">
                        CEO & Fundador{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
                          Argom Tech
                        </span>
                      </p>
                    </div>
                    
                    <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6 sm:mb-8"></div>
                  </div>

                  {/* Enhanced Quote - Mobile Otimizada */}
                  <div className="mb-8 sm:mb-12 relative">
                    <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4">
                      <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-cyan-400/30" />
                    </div>
                    <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed italic pl-6 sm:pl-8 relative">
                      "Nossa missão é democratizar o acesso à inteligência artificial, 
                      transformando cada negócio em uma potência digital através de 
                      soluções inovadoras e acessíveis."
                    </blockquote>
                  </div>

                  {/* Enhanced Stats Grid - Mobile Otimizada */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="text-center group/stat cursor-pointer p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30">
                      <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                        <Target className="w-5 sm:w-7 h-5 sm:h-7 text-cyan-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                        +5 Anos
                      </div>
                      <div className="text-xs sm:text-sm text-white/80 font-medium">Experiência em IA</div>
                    </div>
                    
                    <div className="text-center group/stat cursor-pointer p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-green-400/30">
                      <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                        <Users className="w-5 sm:w-7 h-5 sm:h-7 text-green-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                        +1000
                      </div>
                      <div className="text-xs sm:text-sm text-white/80 font-medium">Clientes Atendidos</div>
                    </div>
                    
                    <div className="text-center group/stat cursor-pointer p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30 sm:col-span-1">
                      <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                        <Award className="w-5 sm:w-7 h-5 sm:h-7 text-purple-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-white/80 font-medium">Dedicação</div>
                    </div>
                  </div>

                  {/* Social Links - Mobile Otimizada */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <span className="text-white/70 text-sm font-medium">Conecte-se:</span>
                    <div className="flex gap-3">
                      <Button size="sm" variant="ghost" className="w-8 sm:w-10 h-8 sm:h-10 p-0 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                        <Linkedin className="w-3 sm:w-4 h-3 sm:h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-8 sm:w-10 h-8 sm:h-10 p-0 rounded-full bg-white/10 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                        <Instagram className="w-3 sm:w-4 h-3 sm:h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-8 sm:w-10 h-8 sm:h-10 p-0 rounded-full bg-white/10 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300">
                        <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
