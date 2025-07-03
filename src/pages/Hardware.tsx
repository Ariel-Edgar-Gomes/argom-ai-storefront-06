import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Smartphone, 
  Laptop, 
  Headphones,
  Mouse,
  Keyboard,
  Camera,
  Printer,
  Router,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  CreditCard,
  Search
} from "lucide-react";
import { useState } from "react";

const Hardware = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredProducts = [
    {
      name: "Laptop Dell Inspiron 15",
      price: "180,000 Kz",
      originalPrice: "200,000 Kz",
      image: "photo-1531297484001-80022131f5a1",
      rating: 4.8,
      features: ["Intel i5", "8GB RAM", "256GB SSD", "15.6\" Full HD"]
    },
    {
      name: "iPhone 14 Pro",
      price: "450,000 Kz",
      originalPrice: "500,000 Kz",
      image: "photo-1486312338219-ce68d2c6f44d",
      rating: 4.9,
      features: ["128GB", "Camera Pro", "Face ID", "5G"]
    },
    {
      name: "Monitor Samsung 24\"",
      price: "85,000 Kz",
      originalPrice: "95,000 Kz",
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.7,
      features: ["Full HD", "IPS", "75Hz", "HDMI"]
    },
    {
      name: "Teclado Mecânico",
      price: "35,000 Kz",
      originalPrice: "40,000 Kz",
      image: "photo-1541140532154-b024d705b90a",
      rating: 4.6,
      features: ["RGB", "Switch Blue", "USB-C", "Retroiluminado"]
    },
    {
      name: "SSD Kingston 500GB",
      price: "28,000 Kz",
      originalPrice: "32,000 Kz",
      image: "photo-1591799264318-7e6ef8ddb7ea",
      rating: 4.8,
      features: ["SATA III", "500GB", "Leitura 550MB/s", "3 Anos Garantia"]
    },
    {
      name: "Headset Gamer",
      price: "15,000 Kz",
      originalPrice: "18,000 Kz",
      image: "photo-1484704849700-f032a568e944",
      rating: 4.5,
      features: ["7.1 Surround", "Microfone", "LED RGB", "Confortável"]
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega em Luanda",
      description: "Entrega rápida em toda Luanda em 24-48h"
    },
    {
      icon: Shield,
      title: "Garantia Oficial",
      description: "Todos os produtos com garantia do fabricante"
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      description: "Multicaixa, TPA, Transferência bancária"
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/244951720655', '_blank');
  };

  const filteredProducts = featuredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.features.some(feature => 
      feature.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">
                Hardware & Equipamentos
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light mb-8">
              Tecnologia de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">Qualidade</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Equipamentos informáticos de marcas reconhecidas mundialmente, 
              com garantia oficial e suporte técnico especializado em Angola.
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
            >
              <ShoppingCart className="mr-3 h-6 w-6" />
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light mb-6">
              Produtos em <span className="text-cyan-400">Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Os mais procurados pelos nossos clientes em Angola
            </p>
            
            {/* Search Area */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-muted-foreground/20 focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="group bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <img 
                    src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=200&h=200&q=80`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 py-0.5">
                    Promoção
                  </Badge>
                </div>
                
                <CardContent className="p-2 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-2 h-2 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.rating})</span>
                  </div>
                  
                  <h3 className="text-xs font-semibold mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-col gap-0.5 mb-2">
                    <span className="text-sm font-bold text-cyan-400">{product.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  
                  <ul className="space-y-0.5 mb-2 flex-1">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    size="sm"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 text-xs h-7"
                  >
                    <ShoppingCart className="mr-1 h-2 w-2" />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ver Mais Produtos Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 px-8 py-3"
            >
              Ver Mais Produtos
            </Button>
          </div>

          {searchTerm && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado para "{searchTerm}"
              </p>
              <Button 
                variant="ghost" 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-cyan-400 hover:text-cyan-500"
              >
                Limpar pesquisa
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-light mb-6">
            Precisa de Algo <span className="text-cyan-400">Específico?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não encontrou o que procura? Entre em contacto connosco. 
            Temos uma vasta rede de fornecedores e podemos conseguir qualquer equipamento.
          </p>
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
          >
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hardware;
