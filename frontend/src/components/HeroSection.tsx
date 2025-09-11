import { MapPin, Shield, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
// @ts-ignore
import heroImage from "@/assets/northeast-hero.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Tamper-proof digital identity"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live safety monitoring"
    },
    {
      icon: Users,
      title: "Anonymous Reporting",
      description: "Safe incident reporting"
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Emergency response system"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight drop-shadow-lg">
              Smart Tourist Safety
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/95">
              For the Seven Sisters of India
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience Northeast India with confidence. Our AI-powered safety platform 
              provides real-time protection, anonymous reporting, and secure digital identity 
              for tourists exploring the beautiful Seven Sisters states.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Your Digital Tourist ID
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Explore Safety Map
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-white/20 text-white">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;