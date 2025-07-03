
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Globe, 
  Building2, 
  CreditCard, 
  ShoppingCart, 
  Users, 
  MessageCircle, 
  Search,
  Code,
  Zap,
  Shield,
  CheckCircle,
  Star,
  Eye,
  Download,
  Filter
} from "lucide-react";
import { useState } from "react";

const Sistemas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const systems = [
    {
      id: 1,
      title: "Landing Page Premium",
      description: "Páginas de conversão otimizadas para capturar leads e vender produtos com design moderno e responsivo",
      price: "85.000",
      category: "Landing Page",
      icon: Globe,
      features: ["Design responsivo", "Otimizado para SEO", "Integração com analytics", "Formulários de contato", "A/B Testing", "Performance otimizada"],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      rating: 4.9,
      downloads: 150,
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 2,
      title: "Sistema de Gestão Empresarial",
      description: "ERP completo para gestão de empresas com módulos financeiro, vendas e controle de estoque integrado",
      price: "450.000",
      category: "ERP",
      icon: Building2,
      features: ["Gestão financeira", "Controle de estoque", "Relatórios avançados", "Multi-usuário", "Dashboard executivo", "Integração bancária"],
      technologies: ["React", "Node.js", "PostgreSQL"],
      rating: 4.8,
      downloads: 89,
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Sistema Bancário Digital",
      description: "Plataforma bancária completa com segurança avançada, transações em tempo real e interface moderna",
      price: "850.000",
      category: "Fintech",
      icon: CreditCard,
      features: ["Transações seguras", "Dashboard analítico", "API integrada", "Compliance bancário", "2FA avançado", "Auditoria completa"],
      technologies: ["React", "Node.js", "MongoDB", "Redis"],
      rating: 5.0,
      downloads: 45,
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 4,
      title: "E-commerce Avançado",
      description: "Loja virtual completa com painel administrativo, gateway de pagamento e gestão de produtos",
      price: "320.000",
      category: "E-commerce",
      icon: ShoppingCart,
      features: ["Catálogo de produtos", "Carrinho de compras", "Pagamentos online", "Painel admin", "Marketing automation", "Analytics de vendas"],
      technologies: ["React", "Next.js", "Stripe API"],
      rating: 4.7,
      downloads: 203,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 5,
      title: "Sistema de CRM",
      description: "Gestão completa de relacionamento com clientes, pipeline de vendas e automação de marketing",
      price: "180.000",
      category: "CRM",
      icon: Users,
      features: ["Gestão de leads", "Pipeline de vendas", "Automação de marketing", "Relatórios de vendas", "Integração WhatsApp", "Mobile app"],
      technologies: ["React", "Express.js", "MySQL"],
      rating: 4.6,
      downloads: 127,
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      id: 6,
      title: "Sistema de Reservas",
      description: "Plataforma completa para gestão de reservas e agendamentos com calendário integrado",
      price: "220.000",
      category: "Reservas",
      icon: Building2,
      features: ["Calendário integrado", "Notificações automáticas", "Pagamentos online", "Dashboard gerencial", "App mobile", "Relatórios detalhados"],
      technologies: ["React", "Node.js", "MongoDB"],
      rating: 4.5,
      downloads: 98,
      image: "photo-1556740758-90de374c12ad"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(systems.map(s => s.category)))];
  
  const filteredSystems = systems.filter(system => {
    const matchesSearch = system.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === "Todos" || system.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleWhatsApp = (systemName: string) => {
    const message = `Olá! Tenho interesse no sistema "${systemName}". Gostaria de mais informações.`;
    window.open(`https://wa.me/244951720655?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 px-4 py-2">
                <Code className="w-4 h-4 mr-2" />
                Sistemas Completos
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Catálogo de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Sistemas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Soluções completas desenvolvidas, testadas e otimizadas. 
              Escolha o sistema ideal para o seu negócio e tenha tudo funcionando em questão de horas.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Code, number: "6+", label: "Sistemas Disponíveis" },
                { icon: Shield, number: "100%", label: "Código Seguro" },
                { icon: Zap, number: "24h", label: "Entrega Rápida" },
                { icon: CheckCircle, number: "99%", label: "Satisfação" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Pesquisar sistemas, funcionalidades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-muted-foreground/20 focus:border-cyan-400"
                />
              </div>
              
              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={activeFilter === category ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                        activeFilter === category
                          ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                          : "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
                      }`}
                      onClick={() => setActiveFilter(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid - Layout em Matriz */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredSystems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSystems.map((system) => (
                <Card key={system.id} className="group bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted-foreground/20 hover:border-cyan-500/50 overflow-hidden h-full flex flex-col">
                  {/* System Image */}
                  <div className="relative h-40 bg-gradient-to-br from-muted to-muted/50 overflow-hidden flex-shrink-0">
                    <img 
                      src={`https://images.unsplash.com/${system.image}?w=300&h=160&fit=crop`}
                      alt={system.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-cyan-500 text-white text-xs">
                        {system.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 bg-background/90 rounded-lg flex items-center justify-center">
                        <system.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2 p-4 flex-shrink-0">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {system.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 ml-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium">{system.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {system.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4 p-4 pt-0 flex-1 flex flex-col">
                    {/* Technologies */}
                    <div className="flex-shrink-0">
                      <h4 className="font-semibold text-xs mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-1">
                        {system.technologies.slice(0, 2).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                            {tech}
                          </Badge>
                        ))}
                        {system.technologies.length > 2 && (
                          <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                            +{system.technologies.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-xs mb-2">Funcionalidades:</h4>
                      <ul className="space-y-1">
                        {system.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        <li className="text-xs text-muted-foreground">
                          +{system.features.length - 2} funcionalidades
                        </li>
                      </ul>
                    </div>

                    {/* Stats and Price */}
                    <div className="flex-shrink-0 space-y-3">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{system.downloads}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-cyan-400">
                            {system.price} <span className="text-xs text-muted-foreground">AOA</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-xs"
                          onClick={() => handleWhatsApp(`${system.title} - Preview`)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Ver
                        </Button>
                        <Button 
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 text-xs"
                          onClick={() => handleWhatsApp(system.title)}
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nenhum sistema encontrado</h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar sua pesquisa ou filtros
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("Todos");
                }}
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Systems CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light mb-6">
              Precisa de um <span className="text-cyan-400 font-normal">Sistema Personalizado?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desenvolvemos soluções sob medida para as necessidades específicas do seu negócio. 
              Nossa equipe especializada pode criar qualquer tipo de sistema que você precisar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => handleWhatsApp("sistema personalizado")}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => handleWhatsApp("consultoria técnica")}
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4"
              >
                Consultoria Técnica
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sistemas;
