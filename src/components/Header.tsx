
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ChevronDown, ChevronRight, Home, Info, Briefcase, GraduationCap, Phone, ShoppingBag, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isCurrentPage = (path: string) => location.pathname === path;

  const serviceItems = [
    { 
      title: "Todos os Serviços", 
      action: () => scrollToSection('services'),
      icon: Briefcase
    },
    { 
      title: "Agentes de IA", 
      href: "/agentes",
      icon: MessageCircle
    },
    { 
      title: "Currículos", 
      href: "/curriculos",
      icon: Info
    },
    { 
      title: "Sistemas & Websites", 
      href: "/sistemas",
      icon: Briefcase
    },
    { 
      title: "Hardware & Equipamentos", 
      href: "/hardware",
      icon: ShoppingBag
    },
    { 
      title: "Cursos de IA", 
      href: "/cursos",
      icon: GraduationCap
    },
    { 
      title: "Infoprodutos", 
      href: "/infoprodutos",
      icon: ShoppingBag
    }
  ];

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 border-b border-border/20 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-tight hover:text-cyan-400 transition-colors">
            Argom<span className="text-cyan-400 font-medium">Tech</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/quem-somos"
              className={`text-muted-foreground hover:text-cyan-400 transition-colors font-medium ${
                isCurrentPage('/quem-somos') ? 'text-cyan-400' : ''
              }`}
            >
              Quem Somos
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors flex items-center font-medium">
                Serviços
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/20 shadow-xl">
                <DropdownMenuItem asChild>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Todos os Serviços
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/agentes"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/agentes') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Agentes de IA
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/curriculos"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/curriculos') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Currículos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/sistemas"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/sistemas') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Sistemas & Websites
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/hardware"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/hardware') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Hardware & Equipamentos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/cursos"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/cursos') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Cursos de IA
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/infoprodutos"
                    className={`text-muted-foreground hover:text-cyan-400 transition-colors ${
                      isCurrentPage('/infoprodutos') ? 'text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    Infoprodutos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/beneficios"
              className={`text-muted-foreground hover:text-cyan-400 transition-colors font-medium ${
                isCurrentPage('/beneficios') ? 'text-cyan-400' : ''
              }`}
            >
              Benefícios
            </Link>
            <Link 
              to="/contato"
              className={`text-muted-foreground hover:text-cyan-400 transition-colors font-medium ${
                isCurrentPage('/contato') ? 'text-cyan-400' : ''
              }`}
            >
              Contato
            </Link>
          </nav>

          <Button asChild className="hidden lg:flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 px-6 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            <Link to="/contato">
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale Connosco
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-cyan-400 p-2 transition-transform duration-200 hover:scale-110">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-xl border-l border-border/20">
              <SheetHeader className="text-left pb-6">
                <SheetTitle className="text-xl font-light tracking-tight">
                  Argom<span className="text-cyan-400 font-medium">Tech</span>
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link 
                    to="/"
                    className={`flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-muted/50 ${
                      isCurrentPage('/') ? 'text-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <Home className="h-5 w-5" />
                    Início
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link 
                    to="/quem-somos"
                    className={`flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors py-3 px-4 rounded-xl hover:bg-muted/50 ${
                      isCurrentPage('/quem-somos') ? 'text-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <Info className="h-5 w-5" />
                    Quem Somos
                  </Link>
                </SheetClose>

                <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5" />
                      Serviços
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-90' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1">
                    {serviceItems.map((item, index) => (
                      <SheetClose key={index} asChild>
                        {item.href ? (
                          <Link 
                            to={item.href}
                            className={`flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-muted/30 ${
                              isCurrentPage(item.href) ? 'text-cyan-400 bg-cyan-500/10' : ''
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                          </Link>
                        ) : (
                          <button
                            onClick={item.action}
                            className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/30"
                          >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                          </button>
                        )}
                      </SheetClose>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <SheetClose asChild>
                  <Link 
                    to="/beneficios"
                    className={`flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors py-3 px-4 rounded-xl hover:bg-muted/50 ${
                      isCurrentPage('/beneficios') ? 'text-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <Star className="h-5 w-5" />
                    Benefícios
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link 
                    to="/contato"
                    className={`flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors py-3 px-4 rounded-xl hover:bg-muted/50 ${
                      isCurrentPage('/contato') ? 'text-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <Phone className="h-5 w-5" />
                    Contato
                  </Link>
                </SheetClose>

                <Separator className="my-4" />

                <SheetClose asChild>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 font-medium rounded-xl transition-all duration-300 hover:scale-105">
                    <Link to="/contato" className="flex items-center justify-center w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Fale Connosco
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
