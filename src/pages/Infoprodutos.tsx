
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InfoprodutosHero } from "@/components/InfoprodutosHero";
import { InfoprodutosList } from "@/components/InfoprodutosList";

const Infoprodutos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InfoprodutosHero />
        <InfoprodutosList />
      </main>
      <Footer />
    </div>
  );
};

export default Infoprodutos;
