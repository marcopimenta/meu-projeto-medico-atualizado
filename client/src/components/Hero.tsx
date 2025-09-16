import { Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Agendamento Online 24/7"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Confirmação via WhatsApp"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Redução de 80% nas faltas"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Dashboard Completo"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-health-light text-health text-sm font-medium">
                ✨ Sistema completo para clínicas de saúde
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Agende consultas com 
                <span className="text-transparent bg-clip-text bg-gradient-primary"> confiança</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Reduza faltas, otimize sua agenda e ofereça uma experiência excepcional 
                aos seus pacientes com nosso sistema inteligente de agendamento.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-health">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-soft text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 hover:bg-accent text-lg px-8 py-6"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-health" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-health" />
                <span>Suporte brasileiro</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <Card className="overflow-hidden shadow-elegant bg-gradient-card border-0">
              <img 
                src={heroImage} 
                alt="Ambiente profissional de clínica médica moderna" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">Clínicas confiam</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-health">80%</div>
                <div className="text-sm text-muted-foreground">Menos faltas</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;