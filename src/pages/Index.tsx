import HeroSection from "@/components/HeroSection";
import PortfolioTabs from "@/components/PortfolioTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Portfolio Loading...</h1>
        <p className="text-gray-300">If you see this, React is working!</p>
      </div>
      <HeroSection />
      <PortfolioTabs />
    </div>
  );
};

export default Index;
