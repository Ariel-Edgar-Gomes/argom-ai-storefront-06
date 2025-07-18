
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Curriculos from "./pages/Curriculos";
import Sistemas from "./pages/Sistemas";
import Agentes from "./pages/Agentes";
import Cursos from "./pages/Cursos";
import CursoDetalhes from "./pages/CursoDetalhes";
import Infoprodutos from "./pages/Infoprodutos";
import Hardware from "./pages/Hardware";
import Contato from "./pages/Contato";
import Beneficios from "./pages/Beneficios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/curriculos" element={<Curriculos />} />
          <Route path="/sistemas" element={<Sistemas />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:courseId" element={<CursoDetalhes />} />
          <Route path="/infoprodutos" element={<Infoprodutos />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/beneficios" element={<Beneficios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
