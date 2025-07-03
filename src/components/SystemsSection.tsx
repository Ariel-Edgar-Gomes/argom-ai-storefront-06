
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Building2, CreditCard, ShoppingCart, Users, MessageCircle, Filter } from "lucide-react";
import { SystemCard } from "./SystemCard";

export const SystemsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const systems = [
    {
      id: 1,
      title: "Landing Page Premium",
      description: "Páginas de conversão otimizadas para capturar leads e vender produtos",
      price: "85.000",
      category: "Landing Page",
      icon: Globe,
      features: ["Design responsivo", "Otimizado para SEO", "Integração com analytics", "Formulários de contato", "A/B Testing", "Performance otimizada"],
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 2,
      title: "Sistema de Gestão Empresarial",
      description: "ERP completo para gestão de empresas com módulos financeiro, vendas e estoque",
      price: "450.000",
      category: "Sistema de Gestão",
      icon: Building2,
      features: ["Gestão financeira", "Controle de estoque", "Relatórios avançados", "Multi-usuário", "Dashboard executivo", "Integração bancária"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Sistema Bancário Digital",
      description: "Plataforma bancária completa com segurança avançada e interface moderna",
      price: "850.000",
      category: "Sistema Bancário",
      icon: CreditCard,
      features: ["Transações seguras", "Dashboard analítico", "API integrada", "Compliance bancário", "2FA avançado", "Auditoria completa"],
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 4,
      title: "E-commerce Avançado",
      description: "Loja virtual completa com painel administrativo e gateway de pagamento",
      price: "320.000",
      category: "E-commerce",
      icon: ShoppingCart,
      features: ["Catálogo de produtos", "Carrinho de compras", "Pagamentos online", "Painel admin", "Marketing automation", "Analytics de vendas"],
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 5,
      title: "Sistema de CRM",
      description: "Gestão completa de relacionamento com clientes e pipeline de vendas",
      price: "180.000",
      category: "CRM",
      icon: Users,
      features: ["Gestão de leads", "Pipeline de vendas", "Automação de marketing", "Relatórios de vendas", "Integração WhatsApp", "Mobile app"],
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(systems.map(s => s.category)))];
  
  const filteredSystems = activeFilter === "Todos" 
    ? systems 
    : systems.filter(system => system.category === activeFilter);

  const handleWhatsAppContact = (systemName: string) => {
    const message = `Olá! Tenho interesse no sistema "${systemName}". Gostaria de mais informações.`;
    window.open(`https://wa.me/244951720655?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="systems" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">Sistemas</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções completas desenvolvidas, testadas e otimizadas. 
            Escolha o sistema ideal e tenha seu negócio online em questão de horas.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            <span>Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  activeFilter === category
                    ? "bg-cyan-500 hover:bg-cyan-600 text-primary-foreground"
                    : "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Grid de Sistemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredSystems.map((system, index) => (
            <div
              key={system.id}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <SystemCard 
                system={system} 
                onContact={handleWhatsAppContact} 
              />
            </div>
          ))}
        </div>

        {/* Mensagem se não houver sistemas */}
        {filteredSystems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-muted-foreground text-lg mb-4">
              Nenhum sistema encontrado nesta categoria.
            </div>
            <Button
              variant="outline"
              onClick={() => setActiveFilter("Todos")}
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
            >
              Ver Todos os Sistemas
            </Button>
          </div>
        )}

        <div className="text-center mt-6 sm:mt-8">
          <Card className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border-2 border-cyan-500/20 inline-block max-w-xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Precisa de um <span className="text-cyan-400">Sistema Personalizado?</span>
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm">
                Desenvolvemos soluções sob medida para as necessidades específicas do seu negócio.
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-sm px-4 py-2 transition-all duration-200 hover:scale-105"
                onClick={() => handleWhatsAppContact("sistema personalizado")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento Personalizado
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
