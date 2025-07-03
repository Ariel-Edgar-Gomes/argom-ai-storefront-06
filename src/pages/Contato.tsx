
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <div className="min-h-screen bg-tech-pattern">
      <div className="bg-grid min-h-screen">
        <Header />
        
        {/* Compact Hero Section */}
        <section className="pt-24 pb-12 section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-purple-600/10"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto container-padding relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6 animate-fade-in shadow-lg">
                <div className="relative">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="h-4 w-4 text-cyan-400 opacity-40" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-cyan-400 tracking-wide">Conecte-se Connosco</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in block mb-2">
                  Vamos
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
                  Conversar
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground/90 mb-8 animate-slide-up max-w-3xl mx-auto leading-relaxed font-light">
                Transformamos suas ideias em 
                <span className="relative mx-2">
                  <span className="text-cyan-400 font-semibold">soluções inteligentes</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </span>
                com tecnologia de ponta e inovação constante
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Consultoria Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>Suporte Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="section-padding relative">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
              
              {/* Enhanced Contact Form */}
              <div className="lg:col-span-2">
                <Card className="cyber-border hover-glow backdrop-blur-md bg-background/60 shadow-2xl border-cyan-500/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5"></div>
                  
                  <CardHeader className="pb-10 relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                          <MessageCircle className="h-7 w-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                          Envie-nos uma Mensagem
                        </CardTitle>
                        <CardDescription className="text-lg text-muted-foreground/80 leading-relaxed">
                          Preencha o formulário abaixo e a nossa equipa entrará em contacto consigo em até 24 horas com uma proposta personalizada
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-10 relative">
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4 group">
                          <Label htmlFor="nome" className="text-base font-semibold text-foreground/90 flex items-center gap-2">
                            Nome Completo
                            <span className="text-red-400">*</span>
                          </Label>
                          <Input
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            required
                            className="bg-background/90 backdrop-blur-sm border-border/60 h-14 text-base transition-all duration-500 focus:border-cyan-400 focus:ring-cyan-400/30 focus:ring-4 focus:bg-background hover:border-cyan-300/50 group-hover:border-cyan-300/30"
                            placeholder="O seu nome completo"
                          />
                        </div>
                        <div className="space-y-4 group">
                          <Label htmlFor="telefone" className="text-base font-semibold text-foreground/90">Telefone</Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            className="bg-background/90 backdrop-blur-sm border-border/60 h-14 text-base transition-all duration-500 focus:border-cyan-400 focus:ring-cyan-400/30 focus:ring-4 focus:bg-background hover:border-cyan-300/50 group-hover:border-cyan-300/30"
                            placeholder="+244 xxx xxx xxx"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4 group">
                        <Label htmlFor="email" className="text-base font-semibold text-foreground/90 flex items-center gap-2">
                          Email
                          <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/90 backdrop-blur-sm border-border/60 h-14 text-base transition-all duration-500 focus:border-cyan-400 focus:ring-cyan-400/30 focus:ring-4 focus:bg-background hover:border-cyan-300/50 group-hover:border-cyan-300/30"
                          placeholder="o.seu@email.com"
                        />
                      </div>
                      
                      <div className="space-y-4 group">
                        <Label htmlFor="assunto" className="text-base font-semibold text-foreground/90 flex items-center gap-2">
                          Assunto
                          <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="assunto"
                          name="assunto"
                          value={formData.assunto}
                          onChange={handleInputChange}
                          required
                          className="bg-background/90 backdrop-blur-sm border-border/60 h-14 text-base transition-all duration-500 focus:border-cyan-400 focus:ring-cyan-400/30 focus:ring-4 focus:bg-background hover:border-cyan-300/50 group-hover:border-cyan-300/30"
                          placeholder="Qual é o seu projeto ou necessidade?"
                        />
                      </div>
                      
                      <div className="space-y-4 group">
                        <Label htmlFor="mensagem" className="text-base font-semibold text-foreground/90 flex items-center gap-2">
                          Mensagem
                          <span className="text-red-400">*</span>
                        </Label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          value={formData.mensagem}
                          onChange={handleInputChange}
                          required
                          rows={7}
                          className="bg-background/90 backdrop-blur-sm border-border/60 text-base transition-all duration-500 focus:border-cyan-400 focus:ring-cyan-400/30 focus:ring-4 focus:bg-background hover:border-cyan-300/50 group-hover:border-cyan-300/30 resize-none"
                          placeholder="Descreva detalhadamente o seu projeto, objetivos e como podemos ajudar a transformar as suas ideias em realidade..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full h-16 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 font-bold text-lg transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <Send className="mr-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                        <span>Enviar Mensagem</span>
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Contact Information */}
              <div className="space-y-10">
                
                {/* Contact Details */}
                <Card className="cyber-border hover-glow backdrop-blur-md bg-background/60 shadow-2xl border-cyan-500/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5"></div>
                  
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        Informações de Contacto
                      </span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-8 relative">
                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 group cursor-pointer">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-xl text-foreground mb-1">Email</p>
                        <p className="text-muted-foreground/80 text-base hover:text-cyan-400 transition-colors">contato@argomtech.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group cursor-pointer">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-xl text-foreground mb-1">Telefone</p>
                        <p className="text-muted-foreground/80 text-base hover:text-blue-400 transition-colors">+244 951 720 655</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-600/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 group cursor-pointer">
                      <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-xl text-foreground mb-1">Horário de Atendimento</p>
                        <p className="text-muted-foreground/80 text-base">Segunda a Sexta-feira</p>
                        <p className="text-muted-foreground/60 text-sm mt-1">Das 9h às 18h (WAT)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Why Choose Us */}
                <Card className="cyber-border hover-glow backdrop-blur-md bg-background/60 shadow-2xl border-cyan-500/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-600/5"></div>
                  
                  <CardHeader className="relative">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                      Por que Escolher a ArgomTech?
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <ul className="space-y-6">
                      {[
                        { text: "Expertise em Inteligência Artificial", icon: "🤖" },
                        { text: "Soluções Personalizadas", icon: "🎯" }, 
                        { text: "Suporte Técnico 24/7", icon: "🛠️" },
                        { text: "ROI Comprovado", icon: "📈" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-600/10 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 group cursor-pointer">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="h-5 w-5 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <span className="text-foreground/90 font-semibold text-base flex items-center gap-3">
                              {item.text}
                              <span className="text-xl">{item.icon}</span>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Enhanced Response Time Guarantee */}
                <Card className="cyber-border hover-glow backdrop-blur-md bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border-cyan-500/40 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-purple-600/10"></div>
                  
                  <CardContent className="p-8 text-center relative">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 shadow-2xl">
                      <Clock className="h-10 w-10 text-white" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-ping opacity-30"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      Resposta Rápida Garantida
                    </h3>
                    <p className="text-muted-foreground/80 text-base leading-relaxed">
                      Comprometemo-nos a responder a todas as consultas em até 
                      <span className="text-cyan-400 font-bold mx-1">24 horas</span>
                      com uma proposta detalhada e personalizada
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contato;
