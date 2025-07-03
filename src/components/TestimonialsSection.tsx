
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "E-commerce Premium",
      role: "CEO & Fundadora",
      text: "Nossa receita aumentou 280% em apenas 3 meses. O agente IA da Argom Tech transformou completamente nossa operação de vendas online.",
      rating: 5,
      avatar: "M"
    },
    {
      name: "João Santos",
      company: "Consultoria Estratégica",
      role: "Diretor de Vendas",
      text: "Impressionante como a IA consegue qualificar leads melhor que nossa equipe humana. Fechamos mais negócios trabalhando menos.",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Ana Costa",
      company: "Tech Solutions",
      role: "Head de Marketing",
      text: "O ROI foi imediato. Reduzimos 75% dos custos operacionais e aumentamos a satisfação dos clientes significativamente.",
      rating: 5,
      avatar: "A"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">Histórias de Sucesso</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8">
            O Que Dizem <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Nossos Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Resultados reais de empresas que transformaram seus negócios com nossas soluções de inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-card/40 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-cyan-400/30" />
                </div>
                
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-8 font-light leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400 font-medium">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
