
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Car, 
  Home, 
  Utensils,
  PlayCircle,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

export const UseCasesCarousel = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      category: "E-commerce",
      title: "Loja Online Automatizada",
      description: "Transforme visitantes em compradores com IA que nunca dorme",
      results: {
        sales: "+450%",
        conversion: "12.5%",
        response: "<1s"
      },
      features: [
        "Recomendações personalizadas",
        "Checkout guiado por IA",
        "Recuperação de carrinho abandonado",
        "Upselling inteligente"
      ],
      color: "from-green-500 to-emerald-500",
      videoTime: "2:30"
    },
    {
      icon: Stethoscope,
      category: "Saúde",
      title: "Clínica Digital",
      description: "Agendamentos automáticos e triagem inteligente de pacientes",
      results: {
        sales: "+280%",
        conversion: "8.9%",
        response: "2s"
      },
      features: [
        "Agendamento automático",
        "Triagem de sintomas",
        "Lembretes de consulta",
        "Histórico do paciente"
      ],
      color: "from-blue-500 to-cyan-500",
      videoTime: "3:15"
    },
    {
      icon: GraduationCap,
      category: "Educação",
      title: "Escola Inteligente",
      description: "Matrículas automáticas e suporte educacional 24/7",
      results: {
        sales: "+320%",
        conversion: "15.2%",
        response: "1s"
      },
      features: [
        "Processo de matrícula automatizado",
        "Suporte aos estudantes",
        "Informações sobre cursos",
        "Acompanhamento acadêmico"
      ],
      color: "from-purple-500 to-violet-500",
      videoTime: "2:45"
    },
    {
      icon: Car,
      category: "Automóvel",
      title: "Concessionária Virtual",
      description: "Vendas de veículos com test-drive virtual e financiamento IA",
      results: {
        sales: "+380%",
        conversion: "9.7%",
        response: "1s"
      },
      features: [
        "Catálogo interativo",
        "Simulação de financiamento",
        "Agendamento de test-drive",
        "Avaliação de troca"
      ],
      color: "from-orange-500 to-red-500",
      videoTime: "4:00"
    },
    {
      icon: Home,
      category: "Imobiliário",
      title: "Imobiliária Digital",
      description: "Tours virtuais e negociação automatizada de propriedades",
      results: {
        sales: "+500%",
        conversion: "11.3%",
        response: "<1s"
      },
      features: [
        "Tours virtuais 360°",
        "Filtros inteligentes",
        "Negociação automatizada",
        "Documentação digital"
      ],
      color: "from-teal-500 to-green-500",
      videoTime: "3:30"
    },
    {
      icon: Utensils,
      category: "Restauração",
      title: "Restaurante Inteligente",
      description: "Pedidos automáticos e recomendações personalizadas",
      results: {
        sales: "+350%",
        conversion: "18.5%",
        response: "1s"
      },
      features: [
        "Menu interativo",
        "Pedidos por voz/texto",
        "Recomendações personalizadas",
        "Entrega otimizada"
      ],
      color: "from-yellow-500 to-orange-500",
      videoTime: "2:15"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
              Casos de Sucesso
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Soluções para{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Cada Negócio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Veja como diferentes sectores em Angola estão a revolucionar os seus negócios
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 h-full group">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <useCase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <PlayCircle className="w-4 h-4" />
                          <span>{useCase.videoTime}</span>
                        </div>
                      </div>

                      {/* Category & Title */}
                      <div className="mb-4">
                        <div className="text-sm text-cyan-400 font-medium mb-2">{useCase.category}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white/5 rounded-lg">
                        <div className="text-center">
                          <div className={`text-lg font-light bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                            {useCase.results.sales}
                          </div>
                          <div className="text-xs text-muted-foreground">Vendas</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-light bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                            {useCase.results.conversion}
                          </div>
                          <div className="text-xs text-muted-foreground">Conversão</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-light bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                            {useCase.results.response}
                          </div>
                          <div className="text-xs text-muted-foreground">Resposta</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex-1">
                        <div className="space-y-2">
                          {useCase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-cyan-400 font-medium">Ver Demonstração</span>
                          <PlayCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Stats Summary */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-light text-green-400 mb-2">+380%</div>
                <div className="text-sm text-muted-foreground">Média de Crescimento</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-light text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Negócios Transformados</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-light text-purple-400 mb-2">&lt;48h</div>
                <div className="text-sm text-muted-foreground">Tempo de Implementação</div>
              </div>
              <div className="text-center">
                <PlayCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-light text-yellow-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
