import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ClinicaAgenda</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              A solução completa para agendamento de consultas em clínicas de saúde. 
              Moderno, seguro e eficiente.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produto</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Preços</a></li>
              <li><a href="#demo" className="hover:text-background transition-colors">Demonstração</a></li>
              <li><a href="#integrations" className="hover:text-background transition-colors">Integrações</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#help" className="hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#docs" className="hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contato</a></li>
              <li><a href="#status" className="hover:text-background transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@clinicaagenda.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 3000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 ClinicaAgenda. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm text-background/60 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-background transition-colors">
              Política de Privacidade
            </a>
            <a href="#terms" className="hover:text-background transition-colors">
              Termos de Uso
            </a>
            <a href="#lgpd" className="hover:text-background transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;