
import { Shield, Zap, HeadphonesIcon, Repeat, Award, Users, Clock, Download } from "lucide-react";

export const InfoprodutosBenefits = () => {
  const beneficios = [
    {
      icon: Zap,
      titulo: "Acesso Instantâneo",
      descricao: "Receba todos os materiais imediatamente após a confirmação do pagamento.",
      cor: "from-yellow-400/20 to-orange-400/20",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: Shield,
      titulo: "30 Dias de Garantia",
      descricao: "Não ficou satisfeito? Devolvemos 100% do seu dinheiro sem burocracias.",
      cor: "from-green-400/20 to-emerald-400/20",
      iconColor: "text-green-400",
      borderColor: "border-green-400/30"
    },
    {
      icon: Repeat,
      titulo: "Atualizações Gratuitas",
      descricao: "Receba todas as atualizações e novos conteúdos sem custo adicional.",
      cor: "from-blue-400/20 to-cyan-400/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-400/30"
    },
    {
      icon: HeadphonesIcon,
      titulo: "Suporte Especializado",
      descricao: "Nossa equipe está sempre disponível para tirar suas dúvidas.",
      cor: "from-purple-400/20 to-pink-400/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-400/30"
    },
    {
      icon: Award,
      titulo: "Certificado Premium",
      descricao: "Comprove suas habilidades com certificados reconhecidos no mercado.",
      cor: "from-cyan-400/20 to-blue-400/20",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: Users,
      titulo: "Comunidade VIP",
      descricao: "Acesso exclusivo à nossa comunidade de +10.000 profissionais.",
      cor: "from-indigo-400/20 to-purple-400/20",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-400/30"
    },
    {
      icon: Clock,
      titulo: "Acesso Vitalício",
      descricao: "Uma vez comprado, o produto é seu para sempre. Sem mensalidades.",
      cor: "from-rose-400/20 to-pink-400/20",
      iconColor: "text-rose-400",
      borderColor: "border-rose-400/30"
    },
    {
      icon: Download,
      titulo: "Download Ilimitado",
      descricao: "Baixe quantas vezes quiser, em qualquer dispositivo.",
      cor: "from-teal-400/20 to-green-400/20",
      iconColor: "text-teal-400",
      borderColor: "border-teal-400/30"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-slate-900/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full px-6 py-3 border border-cyan-500/30 mb-8">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Garantias e Benefícios</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Por que nossos <span className="text-cyan-400 font-bold">Produtos</span> são únicos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Muito mais que produtos digitais. Uma experiência completa de transformação profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="group relative">
              <div className={`relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border-2 ${beneficio.borderColor} hover:bg-card/50 transition-all duration-500 hover:scale-105 h-full`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${beneficio.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${beneficio.cor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <beneficio.icon className={`w-7 h-7 ${beneficio.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {beneficio.titulo}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {beneficio.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 group">
            <div className="text-5xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">50K+</div>
            <div className="text-xl font-semibold mb-2">Clientes Satisfeitos</div>
            <div className="text-sm text-muted-foreground">Em mais de 100 países</div>
          </div>
          <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 group">
            <div className="text-5xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">98.5%</div>
            <div className="text-xl font-semibold mb-2">Taxa de Satisfação</div>
            <div className="text-sm text-muted-foreground">Baseado em +5.000 reviews</div>
          </div>
          <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 group">
            <div className="text-5xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-xl font-semibold mb-2">Suporte Disponível</div>
            <div className="text-sm text-muted-foreground">Todos os dias do ano</div>
          </div>
        </div>
      </div>
    </section>
  );
};
