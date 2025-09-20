import { Logo } from "@/components/ui/logo";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export const HeroSection = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-gradient-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/10"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center p-12 w-full">
        {/* Logo */}
        <div className="mb-12 slide-in-left">
          <Logo size="lg" />
          <p className="text-muted-foreground mt-4 text-center max-w-md font-inter leading-relaxed">
            Adceleration is a performance-driven advertising technology and conversions partner that transforms your marketing into measurable growth.
          </p>
        </div>

        {/* Main Illustration */}
        <div className="relative mb-8 slide-in-left">
          <img 
            src={heroIllustration}
            alt="Adceleration advertising technology and conversion optimization"
            className="w-full max-w-lg h-auto rounded-2xl shadow-primary float-animation"
          />
          
          {/* Floating metrics */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold text-gradient">+247%</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Active Leads</p>
                <p className="text-2xl font-bold text-gradient">15.2K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-lg slide-in-left">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-border/30">
            <Target className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Targeted Campaigns</h3>
            <p className="text-sm text-muted-foreground">Precision-focused advertising that reaches your ideal customers</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-border/30">
            <BarChart3 className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Real-time Analytics</h3>
            <p className="text-sm text-muted-foreground">Live performance tracking and optimization insights</p>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-primary rounded-full opacity-10 float-animation"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-primary rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-4 w-8 h-8 bg-primary-glow rounded-full opacity-15 float-animation" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  );
};