
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, MessageCircle, Info } from "lucide-react";

interface SystemCardProps {
  system: {
    id: number;
    title: string;
    description: string;
    price: string;
    category: string;
    icon: React.ElementType;
    features: string[];
    image: string;
  };
  onContact: (systemName: string) => void;
}

export const SystemCard = ({ system, onContact }: SystemCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppContact = (type: string) => {
    onContact(`${system.title}${type === 'preview' ? ' - Preview' : ''}`);
  };

  return (
    <Card className="relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-5 flex-shrink-0 relative z-10">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 cursor-help">
                <system.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Categoria: {system.category}</p>
            </TooltipContent>
          </Tooltip>
          <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-xs">
            {system.category}
          </Badge>
        </div>
        
        <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl group/image">
          {!imageLoaded && !imageError && (
            <Skeleton className="w-full h-24 sm:h-28 rounded-xl" />
          )}
          {!imageError && (
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={`https://images.unsplash.com/${system.image}?w=500&h=280&fit=crop`}
                alt={system.title}
                className={`w-full h-24 sm:h-28 object-cover transition-all duration-500 group-hover/image:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
          {imageError && (
            <div className="w-full h-24 sm:h-28 bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center border border-cyan-500/10">
              <span className="text-muted-foreground text-xs">Imagem não disponível</span>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2">
          <CardTitle className="text-base sm:text-lg mb-1 flex-1">{system.title}</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mt-0.5 cursor-help flex-shrink-0" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{system.description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{system.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 pt-0 flex-1 flex flex-col">
        <div className="space-y-1.5 flex-1">
          <h4 className="font-semibold text-xs sm:text-sm">Funcionalidades:</h4>
          <ul className="space-y-0.5">
            {system.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-1.5 text-xs">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-muted-foreground text-xs">{feature}</span>
              </li>
            ))}
            {system.features.length > 3 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <li className="flex items-start gap-1.5 text-xs cursor-help">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-xs">
                      +{system.features.length - 3} funcionalidades...
                    </span>
                  </li>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-1">
                    {system.features.slice(3).map((feature, index) => (
                      <p key={index} className="text-xs">• {feature}</p>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
          </ul>
        </div>

        <div className="pt-3 sm:pt-4 border-t border-gradient-to-r from-cyan-500/20 via-cyan-500/30 to-cyan-500/20 mt-auto">
          <div className="mb-3 sm:mb-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
                {system.price} <span className="text-sm text-muted-foreground">AOA</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Pagamento único</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button 
              variant="outline" 
              className="group/btn flex-1 border-cyan-500/40 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-600/10 hover:border-cyan-400 text-xs py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden"
              onClick={() => handleWhatsAppContact('preview')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
              <Eye className="w-3 h-3 mr-1.5 relative z-10" />
              <span className="relative z-10">Preview</span>
            </Button>
            <Button 
              className="group/btn flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-primary-foreground text-xs py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden border-0"
              onClick={() => handleWhatsAppContact('buy')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
              <MessageCircle className="w-3 h-3 mr-1.5 relative z-10" />
              <span className="relative z-10 font-semibold">Comprar Agora</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
