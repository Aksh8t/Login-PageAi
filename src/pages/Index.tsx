import { HeroSection } from "@/components/HeroSection";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-gradient-background">
      <HeroSection />
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white/50 backdrop-blur-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
