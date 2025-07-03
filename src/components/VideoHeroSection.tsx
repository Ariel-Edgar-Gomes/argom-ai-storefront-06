
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Sparkles, Zap, Target, TrendingUp, CheckCircle, Star, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const VideoHeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-32 right-1/4 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <Globe className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <Award className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400 tracking-wide">Automação Inteligente</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">5.0 | 200+ reviews</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-light leading-tight">
              Veja a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-normal">
                Revolução
              </span>
              <br />
              Acontecer
            </h1>

            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Descubra como nossa tecnologia de IA está transformando negócios angolanos com automação inteligente que funciona 24/7, gerando resultados extraordinários e crescimento exponencial.
            </p>

            {/* Enhanced Stats Preview */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="text-4xl font-light bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  +500%
                </div>
                <p className="text-sm text-muted-foreground">Aumento em Vendas</p>
                <CheckCircle className="w-4 h-4 text-green-400 mx-auto mt-1" />
              </div>
              <div className="text-center group">
                <div className="text-4xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">Sempre Ativo</p>
                <CheckCircle className="w-4 h-4 text-cyan-400 mx-auto mt-1" />
              </div>
              <div className="text-center group">
                <div className="text-4xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  -85%
                </div>
                <p className="text-sm text-muted-foreground">Redução de Custos</p>
                <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mt-1" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group">
                <Link to="/contato">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  Começar Transformação
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                Ver Demonstração Ao Vivo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Certificado ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Enhanced Video/Demo Section */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                {/* Advanced Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-6 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Video Preview Frame */}
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden">
                    <div className="absolute top-3 left-3 flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="pt-8 px-4 pb-4 h-full">
                      <div className="bg-green-500/20 p-2 rounded mb-2 text-xs text-green-400">WhatsApp: Nova mensagem recebida</div>
                      <div className="bg-blue-500/20 p-2 rounded mb-2 text-xs text-blue-400">IA: Analisando intenção do cliente...</div>
                      <div className="bg-purple-500/20 p-2 rounded mb-2 text-xs text-purple-400">Sistema: Resposta personalizada enviada</div>
                      <div className="bg-cyan-500/20 p-2 rounded text-xs text-cyan-400">Resultado: Cliente convertido ✓</div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Play className="w-8 h-8 text-cyan-400 ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-white font-medium mb-1">Demo: Automação Completa</div>
                          <div className="text-xs text-white/70">WhatsApp → IA → Conversão</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-white/70">AO VIVO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Feature Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Lead Capture</div>
                      <div className="text-xs text-green-400">100% Automático</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">IA Response</div>
                      <div className="text-xs text-cyan-400">&lt;1 segundo</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Conversão</div>
                      <div className="text-xs text-purple-400">95% Taxa</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Follow-up</div>
                      <div className="text-xs text-yellow-400">Inteligente</div>
                    </div>
                  </div>
                </div>

                {/* Live Metrics */}
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="text-sm font-medium text-white mb-1">Métricas em Tempo Real</div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Sistema Operacional</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-light text-cyan-400">2,347</div>
                      <div className="text-xs text-muted-foreground">Leads Hoje</div>
                    </div>
                    <div>
                      <div className="text-lg font-light text-green-400">89%</div>
                      <div className="text-xs text-muted-foreground">Conversões</div>
                    </div>
                    <div>
                      <div className="text-lg font-light text-purple-400">156k</div>
                      <div className="text-xs text-muted-foreground">AOA Gerados</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
