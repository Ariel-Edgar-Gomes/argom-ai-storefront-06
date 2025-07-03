
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BenefitsComparison = () => {
  const comparisons = [
    {
      category: "Disponibilidade",
      traditional: "8h/dia (horário comercial)",
      withAI: "24/7 sem interrupções",
      impact: "+200% oportunidades capturadas"
    },
    {
      category: "Capacidade de Atendimento",
      traditional: "1-5 clientes simultâneos",
      withAI: "Ilimitado",
      impact: "Escalabilidade infinita"
    },
    {
      category: "Tempo de Resposta",
      traditional: "5-30 minutos",
      withAI: "Instantâneo (<2s)",
      impact: "+85% taxa de conversão"
    },
    {
      category: "Custo Mensal",
      traditional: "150.000 - 500.000 AOA",
      withAI: "A partir de 50.000 AOA",
      impact: "-70% custos operacionais"
    },
    {
      category: "Personalização",
      traditional: "Limitada e inconsistente",
      withAI: "100% personalizada e consistente",
      impact: "+60% satisfação do cliente"
    },
    {
      category: "Análise de Dados",
      traditional: "Manual e limitada",
      withAI: "Automática e avançada",
      impact: "Insights em tempo real"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
              Comparação Revolucionária
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light mb-8">
            Antes vs{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
              Depois
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Veja a transformação radical que a nossa tecnologia proporciona ao seu negócio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Traditional Method */}
            <Card className="bg-red-500/5 border-red-500/20">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <CardTitle className="text-2xl text-red-400">Método Tradicional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                    <div className="font-medium text-red-400 mb-2">{item.category}</div>
                    <div className="text-sm text-muted-foreground">{item.traditional}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Comparison Arrow */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="text-6xl text-cyan-400 animate-pulse">→</div>
            </div>

            {/* With AI */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Com ArgomTech IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20">
                    <div className="font-medium text-cyan-400 mb-2">{item.category}</div>
                    <div className="text-sm text-muted-foreground mb-2">{item.withAI}</div>
                    <div className="text-xs text-green-400 font-medium">✓ {item.impact}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-light mb-4">
                Pronto para a{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
                  Transformação?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Junte-se a centenas de empresas que já revolucionaram seus negócios.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                <Link to="/contato">
                  Começar Transformação
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
