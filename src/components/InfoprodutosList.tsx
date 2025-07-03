
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, ShoppingBag, Users, Search } from "lucide-react";
import { useState } from "react";

export const InfoprodutosList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const produtos = [
    {
      id: 1,
      titulo: "Automação com IA - Guia Completo 2024",
      preco: "49.500",
      precoOriginal: "99.700",
      categoria: "Automação",
      rating: 4.9,
      downloads: 15420,
      popular: true,
      icon: "🤖",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      titulo: "Templates de Currículos IA Premium",
      preco: "19.700",
      precoOriginal: "39.700",
      categoria: "Carreiras",
      rating: 4.8,
      downloads: 8934,
      icon: "📄",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 3,
      titulo: "Biblioteca de Prompts ChatGPT Pro",
      preco: "29.700",
      precoOriginal: "59.700",
      categoria: "Produtividade",
      rating: 4.9,
      downloads: 12678,
      icon: "💬",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 4,
      titulo: "Sistema de Vendas Automatizado com IA",
      preco: "69.700",
      precoOriginal: "129.700",
      categoria: "Vendas",
      rating: 4.7,
      downloads: 5432,
      destaque: true,
      icon: "💰",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 5,
      titulo: "Ferramentas de Marketing Digital",
      preco: "39.500",
      precoOriginal: "79.500",
      categoria: "Marketing",
      rating: 4.6,
      downloads: 7234,
      icon: "📈",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      id: 6,
      titulo: "Scripts de Automação Python",
      preco: "25.000",
      precoOriginal: "50.000",
      categoria: "Programação",
      rating: 4.8,
      downloads: 9876,
      icon: "🐍",
      image: "photo-1555949963-aa79dcee981c"
    },
    {
      id: 7,
      titulo: "Pack Design Gráfico IA",
      preco: "35.000",
      precoOriginal: "70.000",
      categoria: "Design",
      rating: 4.7,
      downloads: 6543,
      icon: "🎨",
      image: "photo-1561736778-92e52a7769ef"
    },
    {
      id: 8,
      titulo: "E-book Freelancer Digital",
      preco: "15.500",
      precoOriginal: "31.500",
      categoria: "Negócios",
      rating: 4.5,
      downloads: 11234,
      icon: "💼",
      image: "photo-1507003211169-0a1dd7228f2d"
    }
  ];

  // Filtragem dos produtos baseada na pesquisa
  const filteredProdutos = produtos.filter(produto =>
    produto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Produtos a serem exibidos (limitados ou todos)
  const produtosExibidos = showAll ? filteredProdutos : filteredProdutos.slice(0, 6);

  return (
    <section id="produtos" className="py-12 bg-gradient-to-br from-background to-slate-900/20 relative">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-3">
            Escolha Seu <span className="text-cyan-400 font-bold">Produto</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Produtos desenvolvidos por especialistas e testados por milhares de profissionais.
          </p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative max-w-lg mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Pesquisar infoprodutos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card/40 backdrop-blur-sm border-border/20 focus:border-cyan-500/50 focus:ring-cyan-500/20"
          />
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 max-w-6xl mx-auto mb-8">
          {produtosExibidos.map((produto) => (
            <Card 
              key={produto.id} 
              className={`relative group hover-glow bg-card/40 backdrop-blur-sm border hover:bg-card/60 transition-all duration-300 hover:scale-105 h-full flex flex-col ${
                produto.popular ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : 'border-border/20'
              } ${
                produto.destaque ? 'border-purple-500/50 ring-1 ring-purple-500/20' : ''
              }`}
            >
              {/* Badge Pequeno */}
              {(produto.popular || produto.destaque) && (
                <div className="absolute -top-1 left-2 z-10">
                  <Badge className={`text-xs px-1.5 py-0.5 shadow-lg ${produto.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-pink-600'}`}>
                    {produto.popular ? '🔥' : '⭐'}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-2 pt-4 px-3 flex-shrink-0">
                {/* Imagem Pequena */}
                <div className="relative mb-2 overflow-hidden rounded-lg group/image">
                  <img 
                    src={`https://images.unsplash.com/${produto.image}?w=300&h=120&fit=crop`}
                    alt={produto.titulo}
                    className="w-full h-16 object-cover transition-all duration-500 group-hover/image:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  <div className="absolute top-1 right-1 flex items-center gap-0.5 bg-yellow-400/90 px-1.5 py-0.5 rounded-full">
                    <Star className="w-2.5 h-2.5 fill-yellow-600 text-yellow-600" />
                    <span className="text-xs font-bold text-yellow-800">{produto.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xs mb-1 group-hover:text-cyan-400 transition-colors leading-tight line-clamp-2 min-h-[2rem]">
                  {produto.titulo}
                </CardTitle>
                
                <Badge variant="outline" className="text-xs w-fit">
                  {produto.categoria}
                </Badge>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between p-3 pt-0">
                {/* Stats Compactos */}
                <div className="flex items-center justify-between text-xs text-muted-foreground bg-muted/30 p-1.5 rounded mb-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-2.5 h-2.5 text-cyan-400" />
                    <span>{(produto.downloads/1000).toFixed(0)}k</span>
                  </div>
                  <span className="text-green-400 font-medium text-xs">Vitalício</span>
                </div>

                {/* Pricing Compacto */}
                <div className="bg-gradient-to-r from-muted/40 to-muted/20 p-2 rounded-lg border border-border/10 mb-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-cyan-400">{produto.preco}</div>
                    <div className="text-xs text-muted-foreground line-through">{produto.precoOriginal}</div>
                    <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 text-xs mt-1">
                      {Math.round((1 - parseInt(produto.preco.replace(/\D/g, '')) / parseInt(produto.precoOriginal.replace(/\D/g, ''))) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-1.5 p-3 pt-0 flex-shrink-0">
                {/* Botões Compactos */}
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 text-xs py-1.5 h-7"
                >
                  Ver Detalhes
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-xs py-1.5 h-7">
                  <ShoppingBag className="mr-1 h-2.5 w-2.5" />
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mensagem se não encontrar produtos */}
        {filteredProdutos.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum produto encontrado para "{searchTerm}"</p>
          </div>
        )}

        {/* Botão Ver Mais */}
        {filteredProdutos.length > 6 && (
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline" 
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-6 py-2 rounded-lg"
            >
              {showAll ? 'Ver Menos' : `Ver Mais (${filteredProdutos.length - 6} produtos)`}
            </Button>
          </div>
        )}

        {/* CTA Compacto */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-sm max-w-lg mx-auto">
            <h3 className="text-lg font-light mb-2">
              Dúvidas? <span className="text-cyan-400 font-bold">Fale conosco!</span>
            </h3>
            <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-4 py-1.5 rounded-lg text-sm">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
