
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quanto tempo demora para implementar um agente de IA?",
      answer: "Nossos agentes de IA são implementados em até 7 dias úteis. Projetos mais complexos podem levar até 14 dias, mas sempre mantemos comunicação transparente sobre prazos e progresso."
    },
    {
      question: "Os agentes funcionam 24 horas por dia?",
      answer: "Sim! Nossos agentes de IA trabalham 24/7, 365 dias por ano. Eles não precisam de descanso, férias ou intervalos, garantindo atendimento constante para seus clientes."
    },
    {
      question: "Posso personalizar a personalidade do meu agente?",
      answer: "Absolutamente! Cada agente é customizado para refletir a personalidade e tom da sua marca. Definimos juntos o estilo de comunicação, conhecimento específico e abordagem de vendas."
    },
    {
      question: "Qual é o custo de manutenção dos sistemas?",
      answer: "Oferecemos suporte vitalício incluído no projeto. Atualizações menores são gratuitas, e melhorias maiores são discutidas conforme necessário. Transparência total nos custos."
    },
    {
      question: "Como garanto que o agente não dará respostas erradas?",
      answer: "Implementamos múltiplas camadas de segurança: treinamento específico, bases de conhecimento validadas, filtros de conteúdo e monitoramento contínuo. Testamos extensivamente antes do lançamento."
    },
    {
      question: "Posso integrar com WhatsApp, Instagram e outras plataformas?",
      answer: "Sim! Nossos agentes podem ser integrados com WhatsApp, Instagram, Facebook, Telegram, site, e-mail e outras plataformas. Atendimento omnichannel completo."
    },
    {
      question: "E se eu não ficar satisfeito com o resultado?",
      answer: "Oferecemos revisões ilimitadas até sua completa satisfação. Se ainda assim não atender suas expectativas, devolvemos 100% do investimento nos primeiros 30 dias."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "1) Consultoria gratuita para entender suas necessidades, 2) Proposta personalizada, 3) Desenvolvimento com atualizações regulares, 4) Testes e ajustes, 5) Entrega e treinamento da equipe."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">FAQ</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8">
            Perguntas <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossos serviços de inteligência artificial e automação empresarial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group bg-card/40 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-8 text-left hover:bg-muted/10 transition-colors duration-300 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <HelpCircle className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {faq.question}
                        </h3>
                        {openItems.includes(index) && (
                          <p className="text-muted-foreground font-light leading-relaxed animate-fade-in">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-6 h-6 text-cyan-400 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 transition-colors duration-300" />
                      )}
                    </div>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl border border-cyan-500/20">
            <h3 className="text-2xl font-semibold mb-4">
              Ainda tem <span className="text-cyan-400">dúvidas?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Nossa equipe está pronta para esclarecer qualquer questão específica sobre seu projeto.
            </p>
            <a 
              href="https://wa.me/244951720655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              <HelpCircle className="w-5 h-5" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
