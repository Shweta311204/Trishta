import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SevenSistersMap from "@/components/SevenSistersMap";
import SafetyFeatures from "@/components/SafetyFeatures";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, MapPin } from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Active Tourist IDs", value: "12,847", icon: Users, trend: "+15%" },
    { label: "Safety Reports", value: "1,203", icon: Shield, trend: "+8%" },
    { label: "Safe Zones Mapped", value: "847", icon: MapPin, trend: "+12%" },
    { label: "Response Time", value: "< 3 min", icon: TrendingUp, trend: "-20%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center gradient-card shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <Badge variant="outline" className="text-success">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16">
        <div className="container mx-auto px-4">
          <SevenSistersMap />
        </div>
      </section>

      {/* Safety Features Section */}
      <section id="report" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety & Security Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety tools designed specifically for tourists exploring the Seven Sisters of India
            </p>
          </div>
          <SafetyFeatures />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">About NE SafeTour</h2>
            <p className="text-lg text-muted-foreground">
              NE SafeTour is the first comprehensive tourist safety platform designed specifically 
              for the Seven Sisters of India. Our innovative blend of blockchain technology, 
              AI-powered monitoring, and community-driven reporting ensures that every visitor 
              to Northeast India can explore with confidence and peace of mind.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Innovation First</CardTitle>
                  <CardDescription>
                    Combining blockchain, AI, and geo-fencing for unparalleled tourist safety
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Privacy Protected</CardTitle>
                  <CardDescription>
                    End-to-end encryption with auto-delete features to protect your data
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Community Driven</CardTitle>
                  <CardDescription>
                    Local insights and tourist experiences powering safer travel for everyone
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 NE SafeTour. Making Northeast India tourism safer for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;