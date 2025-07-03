import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Clock, Star, CheckCircle, Play, Award, Target, ArrowRight, TrendingUp, Shield, Zap, Sparkles, Trophy, Globe, GraduationCap, Brain, Cpu, Lightbulb, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cursos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Fundamentos de IA para Negócios",
      description: "Aprenda como implementar inteligência artificial no seu negócio de forma prática e eficiente.",
      duration: "8 semanas",
      students: 1247,
      rating: 4.9,
      price: "R$ 497",
      originalPrice: "R$ 697",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=250",
      topics: ["Conceitos básicos de IA", "Automação de processos", "Análise de dados", "ROI em IA"],
      level: "Iniciante",
      badge: "Mais Popular",
      category: "Negócios",
      lessons: 42,
      projects: 8
    },
    {
      id: 2,
      title: "Criação de Agentes Inteligentes",
      description: "Domine a arte de criar assistentes virtuais personalizados para diferentes plataformas.",
      duration: "10 semanas",
      students: 892,
      rating: 4.8,
      price: "R$ 697",
      originalPrice: "R$ 897",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=250",
      topics: ["Desenvolvimento de chatbots", "Processamento de linguagem", "Integração multi-canal", "Personalização avançada"],
      level: "Intermediário",
      badge: "Novo",
      category: "Desenvolvimento",
      lessons: 56,
      projects: 12
    },
    {
      id: 3,
      title: "Automação com IA",
      description: "Transforme seus processos manuais em fluxos automatizados inteligentes.",
      duration: "6 semanas",
      students: 654,
      rating: 4.7,
      price: "R$ 397",
      originalPrice: "R$ 497",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250",
      topics: ["Workflow automation", "Machine Learning aplicado", "Integração de sistemas", "Monitoramento inteligente"],
      level: "Avançado",
      badge: "Limitado",
      category: "Automação",
      lessons: 38,
      projects: 6
    },
    {
      id: 4,
      title: "Machine Learning na Prática",
      description: "Construa modelos de ML do zero e aplique em casos reais de negócio.",
      duration: "12 semanas",
      students: 435,
      rating: 4.9,
      price: "R$ 897",
      originalPrice: "R$ 1.197",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&h=250",
      topics: ["Algoritmos de ML", "Redes neurais", "Deep Learning", "Deploy de modelos"],
      level: "Avançado",
      badge: "Exclusivo",
      category: "Machine Learning",
      lessons: 68,
      projects: 15
    },
    {
      id: 5,
      title: "IA Generativa e LLMs",
      description: "Explore o mundo dos Large Language Models e IA generativa moderna.",
      duration: "9 semanas",
      students: 756,
      rating: 4.8,
      price: "R$ 797",
      originalPrice: "R$ 997",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&h=250",
      topics: ["GPT e transformers", "Fine-tuning", "Prompt engineering", "API integrations"],
      level: "Intermediário",
      badge: "Trending",
      category: "IA Generativa",
      lessons: 51,
      projects: 10
    },
    {
      id: 6,
      title: "Computer Vision Avançada",
      description: "Desenvolva sistemas de visão computacional para reconhecimento e análise.",
      duration: "11 semanas",
      students: 298,
      rating: 4.7,
      price: "R$ 697",
      originalPrice: "R$ 897",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=250",
      topics: ["Processamento de imagens", "Object detection", "Face recognition", "OCR sistemas"],
      level: "Avançado",
      badge: "Especializado",
      category: "Computer Vision",
      lessons: 62,
      projects: 14
    }
  ];

  // Filtragem dos cursos baseada na pesquisa
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cursos a serem exibidos (limitados ou todos)
  const cursosExibidos = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  const benefits = [
    {
      icon: BookOpen,
      title: "Conteúdo Atualizado",
      description: "Material sempre atual com as últimas tendências em IA",
      color: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Mentoria Personalizada",
      description: "Suporte direto dos nossos especialistas",
      color: "from-emerald-400 via-cyan-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Certificado reconhecido no mercado",
      color: "from-amber-400 via-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Projetos Práticos",
      description: "Aplique o conhecimento em casos reais",
      color: "from-green-400 via-emerald-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Metodologia Comprovada",
      description: "Aprenda com nossa metodologia testada e aprovada por milhares de alunos",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Garantia de 30 dias",
      description: "Satisfação garantida ou seu dinheiro de volta, sem perguntas",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Acesso Vitalício",
      description: "Uma vez matriculado, tenha acesso para sempre ao conteúdo",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "2,793+", label: "Alunos Formados", icon: Users },
    { number: "4.8", label: "Avaliação Média", icon: Star },
    { number: "95%", label: "Taxa de Conclusão", icon: Trophy },
    { number: "50+", label: "Países Atendidos", icon: Globe }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Mais Popular":
        return "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500";
      case "Novo":
        return "bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500";
      case "Limitado":
        return "bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500";
      default:
        return "bg-gradient-to-r from-cyan-500 to-blue-500";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "text-emerald-300 bg-emerald-500/20 border-emerald-400/30";
      case "Intermediário":
        return "text-amber-300 bg-amber-500/20 border-amber-400/30";
      case "Avançado":
        return "text-rose-300 bg-rose-500/20 border-rose-400/30";
      default:
        return "text-cyan-300 bg-cyan-500/20 border-cyan-400/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Negócios":
        return TrendingUp;
      case "Desenvolvimento":
        return Cpu;
      case "Automação":
        return Zap;
      case "Machine Learning":
        return Brain;
      case "IA Generativa":
        return Lightbulb;
      case "Computer Vision":
        return Target;
      default:
        return BookOpen;
    }
  };

  const handleCourseAccess = (courseId: number) => {
    navigate(`/curso/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-slate-950"></div>
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-xs uppercase tracking-wider text-violet-400 font-medium">
                Educação Premium em IA
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-light mb-6 leading-tight">
              Cursos de{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-normal italic">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-base text-white/70 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Transforme sua carreira com conhecimento avançado em IA. 
              <span className="text-violet-300"> Metodologia exclusiva</span>, projetos práticos e 
              <span className="text-cyan-300"> mentoria especializada</span>.
            </p>
            
            {/* Compact Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <stat.icon className="w-5 h-5 text-violet-400 mb-2 mx-auto group-hover:text-cyan-400 transition-colors duration-300" />
                      <div className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/70 font-medium text-xs">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 border-0 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  Explorar Cursos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-violet-400/50 px-6 py-3 font-medium rounded-lg transition-all duration-300 backdrop-blur-sm">
                <Play className="mr-2 w-4 h-4" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/5 via-transparent to-indigo-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
              <GraduationCap className="w-4 h-4 text-violet-400" />
              <span className="text-xs uppercase tracking-wider text-violet-400 font-medium">
                Programas Exclusivos
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-light mb-3">
              Nossos <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-normal italic">Cursos</span>
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Programas estruturados para transformar profissionais em especialistas
            </p>
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative max-w-lg mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-white/60" />
            </div>
            <Input
              type="text"
              placeholder="Pesquisar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/5 backdrop-blur-xl border border-white/10 focus:border-violet-500/50 focus:ring-violet-500/20 text-white placeholder:text-white/60"
            />
          </div>

          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
            {cursosExibidos.map((course, index) => {
              const CategoryIcon = getCategoryIcon(course.category);
              return (
                <Card key={course.id} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-violet-500/30 transition-all duration-500 group overflow-hidden rounded-xl hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/10 relative h-full flex flex-col">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-transparent to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-36">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent z-10"></div>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Enhanced Badge */}
                    <div className={`absolute top-2 left-2 ${getBadgeColor(course.badge)} rounded-md px-2 py-1 z-20 shadow-lg backdrop-blur-sm`}>
                      <span className="text-white text-xs font-bold">{course.badge}</span>
                    </div>
                    
                    {/* Price Tag */}
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 z-20 border border-white/10">
                      <div className="text-right">
                        <div className="text-white text-sm font-bold">{course.price}</div>
                        <div className="text-white/60 text-xs line-through">{course.originalPrice}</div>
                      </div>
                    </div>

                    {/* Category & Level */}
                    <div className="absolute bottom-2 left-2 flex gap-2 z-20">
                      <div className="bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 border border-white/10 flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3 text-violet-400" />
                        <span className="text-white text-xs font-medium">{course.category}</span>
                      </div>
                      <div className={`${getLevelColor(course.level)} rounded-md px-2 py-1 border backdrop-blur-sm`}>
                        <span className="text-xs font-semibold">{course.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <CardHeader className="pb-2 p-3 relative z-10 flex-shrink-0">
                    {/* Stats Row */}
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-semibold">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-violet-400" />
                          <span className="text-white/80">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-violet-400" />
                        <span className="text-white/80">{course.duration}</span>
                      </div>
                    </div>

                    <CardTitle className="text-base text-white group-hover:text-violet-300 transition-colors mb-2 leading-tight line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-3 flex-1 flex flex-col relative z-10">
                    {/* Course Stats */}
                    <div className="flex items-center justify-between mb-3 text-xs bg-white/5 rounded-lg p-2">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-cyan-400" />
                        <span className="text-white/80">{course.lessons} aulas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3 text-cyan-400" />
                        <span className="text-white/80">{course.projects} projetos</span>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="mb-3 flex-1">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-1.5 text-sm">
                        <CheckCircle className="w-3 h-3 text-violet-400" />
                        O que você aprenderá:
                      </h4>
                      <ul className="space-y-1">
                        {course.topics.slice(0, 2).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-white/80 text-xs">
                            <div className="w-1 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full flex-shrink-0 mt-1.5"></div>
                            <span className="leading-relaxed">{topic}</span>
                          </li>
                        ))}
                        {course.topics.length > 2 && (
                          <li className="flex items-start gap-2 text-white/60 text-xs">
                            <div className="w-1 h-1 bg-violet-400/60 rounded-full flex-shrink-0 mt-1.5"></div>
                            <span>+{course.topics.length - 2} tópicos adicionais</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      onClick={() => handleCourseAccess(course.id)}
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-violet-500/20 relative overflow-hidden group text-sm"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Play className="w-3 h-3" />
                        Assistir Aulas
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mensagem se não encontrar cursos */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-8 mb-8">
              <p className="text-white/60">Nenhum curso encontrado para "{searchTerm}"</p>
            </div>
          )}

          {/* Botão Ver Mais */}
          {filteredCourses.length > 6 && (
            <div className="text-center mb-8">
              <Button 
                onClick={() => setShowAll(!showAll)}
                variant="outline" 
                className="border-2 border-violet-500/50 text-violet-400 hover:bg-violet-500/10 px-6 py-2 rounded-lg"
              >
                {showAll ? 'Ver Menos' : `Ver Mais (${filteredCourses.length - 6} cursos)`}
              </Button>
            </div>
          )}

          {/* Enhanced Course Navigation */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3">
              <span className="text-white/70 text-sm">Mais de <span className="text-violet-400 font-semibold">15 cursos</span> disponíveis</span>
              <Button variant="outline" className="border-violet-400/50 text-violet-400 hover:bg-violet-500/10 text-sm px-3 py-1 rounded-lg">
                Ver Todos
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-violet-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-violet-400" />
              <span className="text-xs uppercase tracking-wider text-violet-400 font-medium">
                Vantagens Exclusivas
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-light mb-4">
              Por Que Somos{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-normal italic">
                Únicos
              </span>
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Uma experiência de aprendizado transformadora, com metodologia exclusiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center rounded-xl group hover:scale-105 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="pb-4 relative z-10 p-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-base text-white mb-2 group-hover:text-violet-300 transition-colors">{benefit.title}</CardTitle>
                  <p className="text-white/70 leading-relaxed text-sm">{benefit.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300 transition-colors text-sm">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-violet-300" />
              <span className="text-xs uppercase tracking-wider text-violet-300 font-medium">
                Transforme Sua Carreira
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-light mb-4 leading-tight">
              Pronto para se Tornar um{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-normal italic">
                Especialista em IA?
              </span>
            </h2>
            <p className="text-base text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Junte-se a mais de <span className="text-violet-300 font-semibold">2.793 profissionais</span> que já transformaram suas carreiras 
              com nossos programas exclusivos de Inteligência Artificial
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 border-0 px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-violet-400/50 px-8 py-3 font-medium rounded-lg transition-all duration-300 backdrop-blur-sm">
                <Users className="mr-2 w-4 h-4" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;
