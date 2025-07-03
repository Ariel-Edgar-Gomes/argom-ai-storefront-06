
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  BookOpen, 
  Download, 
  Users, 
  Star, 
  Clock, 
  CheckCircle, 
  Lock,
  FileText,
  Video,
  Award,
  MessageCircle,
  Heart,
  Share2,
  ChevronRight,
  Target,
  Brain,
  Zap,
  Trophy,
  ArrowLeft,
  ChevronLeft
} from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: string;
  completed: boolean;
}

interface Module {
  title: string;
  lessons: Lesson[];
}

interface Material {
  name: string;
  type: string;
  size: string;
}

interface Course {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  totalLessons: number;
  completedLessons: number;
  image: string;
  modules: Module[];
  materials: Material[];
  certificate: boolean;
  level: string;
}

const CursoDetalhes = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([0, 1, 2]);

  // Dados do curso (em produção viria de uma API)
  const courseData: Record<string, Course> = {
    "1": {
      title: "Fundamentos de IA para Negócios",
      description: "Aprenda como implementar inteligência artificial no seu negócio de forma prática e eficiente.",
      instructor: "Dr. Carlos Silva",
      duration: "8 semanas",
      students: 1247,
      rating: 4.9,
      totalLessons: 42,
      completedLessons: 3,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400",
      modules: [
        {
          title: "Introdução à Inteligência Artificial",
          lessons: [
            { id: 1, title: "O que é IA?", duration: "15 min", type: "video", completed: true },
            { id: 2, title: "História da IA", duration: "20 min", type: "video", completed: true },
            { id: 3, title: "Tipos de IA", duration: "18 min", type: "video", completed: true },
            { id: 4, title: "Quiz: Conceitos Básicos", duration: "10 min", type: "quiz", completed: false }
          ]
        },
        {
          title: "IA nos Negócios",
          lessons: [
            { id: 5, title: "Casos de Uso Práticos", duration: "25 min", type: "video", completed: false },
            { id: 6, title: "ROI em Projetos de IA", duration: "30 min", type: "video", completed: false },
            { id: 7, title: "Implementação Estratégica", duration: "22 min", type: "video", completed: false }
          ]
        },
        {
          title: "Ferramentas e Tecnologias",
          lessons: [
            { id: 8, title: "Plataformas de IA", duration: "28 min", type: "video", completed: false },
            { id: 9, title: "APIs e Integração", duration: "35 min", type: "video", completed: false },
            { id: 10, title: "Projeto Prático", duration: "45 min", type: "project", completed: false }
          ]
        }
      ],
      materials: [
        { name: "Guia Completo de IA para Negócios", type: "PDF", size: "2.5 MB" },
        { name: "Templates de Implementação", type: "ZIP", size: "1.2 MB" },
        { name: "Checklist de ROI", type: "PDF", size: "800 KB" },
        { name: "Slides das Aulas", type: "PPT", size: "15 MB" }
      ],
      certificate: true,
      level: "Iniciante"
    }
  };

  // Verificação segura do courseId
  if (!courseId || !courseData[courseId]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Curso não encontrado</h1>
          <Button onClick={() => navigate('/cursos')} className="bg-gradient-to-r from-violet-600 to-indigo-600 w-full sm:w-auto">
            Voltar aos Cursos
          </Button>
        </div>
      </div>
    );
  }

  const course = courseData[courseId];
  const progressPercentage = (course.completedLessons / course.totalLessons) * 100;
  const allLessons = course.modules.flatMap(module => module.lessons);

  const handleLessonClick = (lessonIndex: number) => {
    setCurrentLesson(lessonIndex);
  };

  const handlePreviousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const handleNextLesson = () => {
    if (currentLesson < allLessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const markLessonComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson]);
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "quiz": return Brain;
      case "project": return Target;
      default: return BookOpen;
    }
  };

  const isFirstLesson = currentLesson === 0;
  const isLastLesson = currentLesson === allLessons.length - 1;
  const currentLessonData = allLessons[currentLesson];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-slate-950"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/cursos')}
              className="text-white/70 hover:text-white p-0 text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Voltar aos Cursos</span>
              <span className="sm:hidden">Voltar</span>
            </Button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/50" />
            <span className="text-white/70 text-sm sm:text-base truncate">{course.title}</span>
          </div>

          {/* Course Header */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="xl:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs sm:text-sm">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold text-sm sm:text-base">{course.rating}</span>
                    <span className="text-white/70 text-xs sm:text-sm">({course.students.toLocaleString()} alunos)</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
                    <span className="text-white/70 text-xs sm:text-sm">{course.duration}</span>
                  </div>
                </div>
                
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">{course.title}</h1>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">{course.description}</p>
                
                {/* Progress */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm sm:text-base">Seu Progresso</span>
                    <span className="text-violet-400 font-semibold text-sm sm:text-base">
                      {course.completedLessons}/{course.totalLessons} aulas
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                  <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 w-full sm:w-auto">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Continuar Assistindo
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Favoritar
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                    <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>

            {/* Instructor Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6 h-fit">
              <h3 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                Seu Instrutor
              </h3>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl">CS</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{course.instructor}</h4>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">Especialista em IA com 15+ anos de experiência</p>
                <Button variant="outline" className="border-violet-400/50 text-violet-400 hover:bg-violet-500/10 w-full text-xs sm:text-sm">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Video Player */}
            <div className="xl:col-span-2">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 mb-4 sm:mb-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black rounded-t-xl relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 rounded-full p-4 sm:p-6">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 leading-tight">
                      Aula {currentLesson + 1}: {currentLessonData?.title || 'Carregando...'}
                    </h3>
                    
                    {/* Lesson Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <Button
                        variant="outline"
                        onClick={handlePreviousLesson}
                        disabled={isFirstLesson}
                        className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                      >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Aula Anterior</span>
                        <span className="sm:hidden">Anterior</span>
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 sm:gap-4 order-first sm:order-none">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
                          <span className="text-white/70 text-xs sm:text-sm">{currentLessonData?.duration}</span>
                        </div>
                        {completedLessons.includes(currentLesson) && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                            <span className="text-green-400 text-xs sm:text-sm">Concluída</span>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        variant="outline"
                        onClick={handleNextLesson}
                        disabled={isLastLesson}
                        className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                      >
                        <span className="hidden sm:inline">Próxima Aula</span>
                        <span className="sm:hidden">Próxima</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                      </Button>
                    </div>
                    
                    <div className="flex justify-center">
                      {!completedLessons.includes(currentLesson) && (
                        <Button 
                          onClick={markLessonComplete}
                          className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-xs sm:text-sm"
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Marcar como Concluída
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="playlist" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/5 backdrop-blur-xl border border-white/10 h-auto">
                  <TabsTrigger value="playlist" className="data-[state=active]:bg-violet-600 text-xs sm:text-sm py-2 sm:py-3">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Playlist</span>
                    <span className="sm:hidden">Aulas</span>
                  </TabsTrigger>
                  <TabsTrigger value="materials" className="data-[state=active]:bg-violet-600 text-xs sm:text-sm py-2 sm:py-3">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Materiais</span>
                    <span className="sm:hidden">Material</span>
                  </TabsTrigger>
                  <TabsTrigger value="certificate" className="data-[state=active]:bg-violet-600 text-xs sm:text-sm py-2 sm:py-3">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Certificado</span>
                    <span className="sm:hidden">Cert.</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="playlist" className="mt-4 sm:mt-6">
                  <div className="space-y-4 sm:space-y-6">
                    {course.modules.map((module, moduleIndex) => (
                      <Card key={moduleIndex} className="bg-white/5 backdrop-blur-xl border border-white/10">
                        <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                          <CardTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                            {module.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 sm:p-6 pt-0">
                          {module.lessons.map((lesson, lessonIndex) => {
                            const LessonIcon = getLessonIcon(lesson.type);
                            const globalIndex = course.modules.slice(0, moduleIndex).reduce((acc, mod) => acc + mod.lessons.length, 0) + lessonIndex;
                            
                            return (
                              <div
                                key={lesson.id}
                                className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                  currentLesson === globalIndex
                                    ? "bg-violet-600/20 border border-violet-500/50"
                                    : "bg-white/5 hover:bg-white/10"
                                }`}
                                onClick={() => handleLessonClick(globalIndex)}
                              >
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  completedLessons.includes(globalIndex)
                                    ? "bg-green-500"
                                    : lesson.id <= 4
                                    ? "bg-violet-600"
                                    : "bg-gray-600"
                                }`}>
                                  {completedLessons.includes(globalIndex) ? (
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                  ) : lesson.id <= 4 ? (
                                    <LessonIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                  ) : (
                                    <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-white font-medium text-sm sm:text-base truncate">{lesson.title}</h4>
                                  <p className="text-white/60 text-xs sm:text-sm">{lesson.duration}</p>
                                </div>
                                {currentLesson === globalIndex && (
                                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 flex-shrink-0" />
                                )}
                              </div>
                            );
                          })}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="materials" className="mt-4 sm:mt-6">
                  <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                        Materiais do Curso
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      {course.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors gap-3">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-white font-medium text-sm sm:text-base truncate">{material.name}</h4>
                              <p className="text-white/60 text-xs sm:text-sm">{material.type} • {material.size}</p>
                            </div>
                          </div>
                          <Button variant="outline" className="border-violet-400/50 text-violet-400 hover:bg-violet-500/10 text-xs sm:text-sm flex-shrink-0">
                            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">Download</span>
                            <span className="sm:hidden">↓</span>
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="certificate" className="mt-4 sm:mt-6">
                  <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Certificado de Conclusão</h3>
                      <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
                        Complete todas as aulas e projetos para receber seu certificado oficial
                      </p>
                      <div className="bg-white/5 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <div className="text-xs sm:text-sm text-white/60 mb-2">Progresso para Certificação</div>
                        <Progress value={progressPercentage} className="h-2 sm:h-3" />
                        <div className="text-xs sm:text-sm text-violet-400 mt-2">{progressPercentage.toFixed(0)}% concluído</div>
                      </div>
                      {progressPercentage === 100 ? (
                        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 w-full sm:w-auto text-sm">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Baixar Certificado
                        </Button>
                      ) : (
                        <Button disabled className="bg-gray-600 w-full sm:w-auto text-sm">
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Complete o curso para liberar
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Stats */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                    Suas Conquistas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs sm:text-sm">Aulas Assistidas</span>
                    <span className="text-violet-400 font-bold text-sm sm:text-base">{course.completedLessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs sm:text-sm">Tempo Estudado</span>
                    <span className="text-violet-400 font-bold text-sm sm:text-base">2h 30m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs sm:text-sm">Sequência</span>
                    <span className="text-violet-400 font-bold text-sm sm:text-base">3 dias</span>
                  </div>
                </CardContent>
              </Card>

              {/* Next Lesson */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                    Próxima Aula
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <h4 className="text-white font-medium text-sm sm:text-base">Casos de Uso Práticos</h4>
                    <p className="text-white/60 text-xs sm:text-sm">Aprenda como aplicar IA em cenários reais</p>
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-xs sm:text-sm">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Assistir Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                    Comunidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
                    Conecte-se com outros alunos e tire suas dúvidas
                  </p>
                  <Button variant="outline" className="w-full border-violet-400/50 text-violet-400 hover:bg-violet-500/10 text-xs sm:text-sm">
                    Acessar Fórum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CursoDetalhes;
