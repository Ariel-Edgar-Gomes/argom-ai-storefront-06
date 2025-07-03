
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Star, FileText, Download, Eye, Sparkles, Zap, Users, Search, Filter, TrendingUp, Award, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const Curriculos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const templates = [
    {
      id: 1,
      name: "Executive Pro",
      description: "Template moderno para executivos e gestores sêniores",
      price: "15.000",
      originalPrice: "20.000",
      rating: 4.9,
      reviews: 128,
      image: "/placeholder.svg",
      category: "Executivo",
      popular: true,
      features: ["ATS Friendly", "2 Idiomas", "Design Premium"]
    },
    {
      id: 2,
      name: "Tech Master",
      description: "Perfeito para desenvolvedores e profissionais de TI",
      price: "12.000",
      originalPrice: "16.000",
      rating: 4.8,
      reviews: 95,
      image: "/placeholder.svg",
      category: "Tecnologia",
      features: ["Seção Projetos", "Skills Tech", "Portfolio Link"]
    },
    {
      id: 3,
      name: "Creative Plus",
      description: "Ideal para designers e profissionais criativos",
      price: "10.000",
      originalPrice: "14.000",
      rating: 4.7,
      reviews: 73,
      image: "/placeholder.svg",
      category: "Criativo",
      features: ["Layout Visual", "Portfólio", "Cores Customizadas"]
    },
    {
      id: 4,
      name: "Business Elite",
      description: "Template corporativo elegante para alta gestão",
      price: "18.000",
      originalPrice: "25.000",
      rating: 5.0,
      reviews: 156,
      image: "/placeholder.svg",
      category: "Corporativo",
      popular: true,
      features: ["Executive Level", "Premium Design", "Multi-seções"]
    },
    {
      id: 5,
      name: "Academic Scholar",
      description: "Para acadêmicos, pesquisadores e doutores",
      price: "8.000",
      originalPrice: "12.000",
      rating: 4.6,
      reviews: 41,
      image: "/placeholder.svg",
      category: "Acadêmico",
      features: ["Publicações", "Pesquisas", "Certificações"]
    },
    {
      id: 6,
      name: "Minimalist Clean",
      description: "Design limpo e minimalista para todos os setores",
      price: "9.000",
      originalPrice: "13.000",
      rating: 4.5,
      reviews: 67,
      image: "/placeholder.svg",
      category: "Minimalista",
      features: ["Design Limpo", "Fácil Leitura", "Versátil"]
    }
  ];

  const categories = [
    { id: "todos", name: "Todos", count: templates.length },
    { id: "Executivo", name: "Executivo", count: templates.filter(t => t.category === "Executivo").length },
    { id: "Tecnologia", name: "Tecnologia", count: templates.filter(t => t.category === "Tecnologia").length },
    { id: "Criativo", name: "Criativo", count: templates.filter(t => t.category === "Criativo").length },
    { id: "Corporativo", name: "Corporativo", count: templates.filter(t => t.category === "Corporativo").length },
    { id: "Acadêmico", name: "Acadêmico", count: templates.filter(t => t.category === "Acadêmico").length },
    { id: "Minimalista", name: "Minimalista", count: templates.filter(t => t.category === "Minimalista").length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleWhatsAppContact = (templateName: string) => {
    const message = `Olá! Tenho interesse no template de currículo "${templateName}". Gostaria de mais informações.`;
    window.open(`https://wa.me/244951720655?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-tech-pattern">
      <div className="bg-grid min-h-screen">
        <Header />
        
        {/* Compact Hero Section */}
        <section className="pt-16 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
                <TrendingUp className="h-3 w-3 text-cyan-400" />
                <span className="text-cyan-400 font-medium text-sm">Templates Mais Vendidos</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gradient">Currículos</span> que{" "}
                <span className="text-foreground">Conquistam</span>
                <br />
                <span className="text-cyan-400">Oportunidades</span>
              </h1>
              
              <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
                Destaque-se no mercado competitivo com nossos templates profissionais. 
                Designs modernos que <span className="text-cyan-400 font-semibold">aumentam em 73%</span> suas chances de ser chamado para entrevistas.
              </p>
              
              {/* Compact Stats - Single Row */}
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                <div className="bg-background/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <Award className="h-5 w-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-cyan-400">500+</div>
                  <p className="text-xs text-muted-foreground">Profissionais Contratados</p>
                </div>
                
                <div className="bg-background/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-green-400">98%</div>
                  <p className="text-xs text-muted-foreground">Taxa de Aprovação</p>
                </div>
                
                <div className="bg-background/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <Users className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-purple-400">24h</div>
                  <p className="text-xs text-muted-foreground">Entrega Garantida</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar templates por nome ou categoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50 backdrop-blur-sm border-cyan-500/20 focus:border-cyan-500/40"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Filtros:</span>
                </div>
              </div>

              {/* Category Tabs */}
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 bg-background/20 backdrop-blur-sm">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-xs data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      {category.name}
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Enhanced Templates Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Escolha seu <span className="text-cyan-400">Template Ideal</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} encontrado{filteredTemplates.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="bg-background/10 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:scale-105 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-32 object-cover bg-muted"
                      />
                      {template.popular && (
                        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="w-full text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{template.name}</h3>
                          <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="font-medium text-sm">{template.rating}</span>
                            <span className="text-xs text-muted-foreground">({template.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {template.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1">
                        {template.features.slice(0, 2).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {template.features.length > 2 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          >
                            +{template.features.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/10">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-cyan-400">
                              {template.price}
                            </span>
                            <span className="text-xs text-muted-foreground">AOA</span>
                          </div>
                          {template.originalPrice && (
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground line-through">
                                {template.originalPrice}
                              </span>
                              <Badge className="bg-green-500/20 text-green-400 text-xs">
                                -{Math.round((1 - parseInt(template.price) / parseInt(template.originalPrice)) * 100)}%
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs"
                          onClick={() => handleWhatsAppContact(template.name)}
                        >
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-20">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Nenhum template encontrado</h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar seus filtros ou termo de busca
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("todos");
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/10 via-cyan-500/10 to-background border-2 border-cyan-500/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-grid opacity-5"></div>
              <CardContent className="p-12 lg:p-16 text-center relative">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">Serviço Premium</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Precisa de algo <span className="text-cyan-500">Único?</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Nossa equipe de designers especializados pode criar um currículo 
                    <span className="text-cyan-400 font-semibold"> totalmente personalizado</span> para o seu perfil profissional.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h4 className="font-semibold mb-1">Consultoria 1:1</h4>
                      <p className="text-sm text-muted-foreground">Sessão personalizada com nossos experts</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h4 className="font-semibold mb-1">Entrega em 48h</h4>
                      <p className="text-sm text-muted-foreground">Seu currículo pronto em tempo recorde</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h4 className="font-semibold mb-1">Garantia Total</h4>
                      <p className="text-sm text-muted-foreground">Revisões ilimitadas até sua satisfação</p>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-lg px-10 py-6 shadow-lg hover:shadow-green-500/25 transition-all duration-200 hover:scale-105"
                    onClick={() => handleWhatsAppContact("currículo personalizado")}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Solicitar Currículo Personalizado
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Curriculos;
