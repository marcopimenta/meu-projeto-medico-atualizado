import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Shield, 
  Smartphone,
  CheckCircle,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Inteligente",
      description: "Sistema avançado que sugere melhores horários baseado no histórico e disponibilidade da clínica.",
      benefits: ["Otimização automática", "Reduz conflitos", "Sugestões inteligentes"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Confirmação WhatsApp",
      description: "Envio automático de confirmações e lembretes via WhatsApp 48h antes da consulta.",
      benefits: ["Reduz 80% das faltas", "Automatizado", "Comunicação direta"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Completo",
      description: "Visualize métricas importantes, confirmações pendentes e performance da clínica em tempo real.",
      benefits: ["Relatórios em tempo real", "Métricas detalhadas", "Exportação de dados"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Gestão de Tempo",
      description: "Controle total sobre horários, durações e intervalos entre consultas de forma automática.",
      benefits: ["Configuração flexível", "Bloqueios automáticos", "Otimização de agenda"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança LGPD",
      description: "Proteção completa dos dados dos pacientes seguindo todas as normas da LGPD brasileira.",
      benefits: ["Criptografia avançada", "Conformidade LGPD", "Backup seguro"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Interface responsiva e aplicativo mobile para que seus pacientes agendem de qualquer lugar.",
      benefits: ["100% responsivo", "App mobile", "Experiência fluida"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-1" />
            Funcionalidades Poderosas
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que sua clínica precisa em 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> um só lugar</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Ferramentas profissionais desenvolvidas especificamente para clínicas de saúde, 
            estética, dentistas e médicos que buscam excelência no atendimento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-health flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-elegant">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Pronto para transformar sua clínica?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 500 clínicas que já revolucionaram seu atendimento com nosso sistema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-card text-primary hover:bg-card/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Teste Grátis por 14 Dias
              </button>
              <button className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;