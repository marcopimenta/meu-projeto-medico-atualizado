import { 
  Calendar, 
  Search,
  Plus,
  Clock,
  FileText,
  Printer,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Header from "@/components/Header";
import GoogleCalendarIntegration from "@/components/GoogleCalendarIntegration";
import PostAppointmentModal from "@/components/PostAppointmentModal";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState("10/08 a 16/08");
  const [activeTab, setActiveTab] = useState("DIA");
  const [isPostAppointmentModalOpen, setIsPostAppointmentModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({
    name: "",
    time: "",
    date: ""
  });

  const handlePatientClick = (patientName: string, time: string, date: string) => {
    setSelectedPatient({ name: patientName, time, date });
    setIsPostAppointmentModalOpen(true);
  };


  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-card border-r p-6 pt-20 fixed left-0 top-16 bottom-0 overflow-y-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Pacientes do dia</h2>
        
        <div className="text-center text-muted-foreground py-4">
          <Calendar className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Nenhum paciente agendado</p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Conheça o prontuário</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Adicione pacientes através do Google Agenda ou crie novos agendamentos no sistema SIP
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/9a12e73d-0dfc-402b-8b6f-2d403224a0eb.png" 
              alt="Médica ilustração" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>

        {/* Main Content */}
        <div className="flex-1 p-6 pt-20 ml-80">
        {/* Welcome Banner */}
        <div className="bg-health-light border border-health/20 rounded-lg p-4 mb-6 flex items-center justify-between">
          <span className="text-health">
            Bem vindo ao SIP. Seu período de avaliação termina em 7 dias
          </span>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded">
            Assine agora
          </Button>
        </div>

        {/* Professional Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-4">Marco Tulio</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Busque um paciente" 
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <Card className="p-4 text-center cursor-pointer hover:shadow-card transition-shadow">
            <Plus className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <div className="text-sm font-medium text-foreground">Novo</div>
            <div className="text-xs text-muted-foreground">Agendamento</div>
          </Card>
          
          <Card className="p-4 text-center cursor-pointer hover:shadow-card transition-shadow">
            <Clock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <div className="text-sm font-medium text-foreground">Lista de Espera</div>
          </Card>
          
          <Card className="p-4 text-center cursor-pointer hover:shadow-card transition-shadow">
            <FileText className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <div className="text-sm font-medium text-foreground">Observações</div>
          </Card>
          
          <Card className="p-4 text-center cursor-pointer hover:shadow-card transition-shadow">
            <Printer className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <div className="text-sm font-medium text-foreground">Imprimir</div>
            <div className="text-xs text-muted-foreground">Agenda</div>
          </Card>
          
          <GoogleCalendarIntegration 
            professionalName="Marco Tulio"
            professionalEmail="marcotulioap@gmail.com"
            showInline={false}
          />
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-6">
                HOJE
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="px-6">
                {selectedDate}
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant={activeTab === "DIA" ? "default" : "outline"}
              onClick={() => setActiveTab("DIA")}
            >
              DIA
            </Button>
            <Button 
              variant={activeTab === "SEMANA" ? "default" : "outline"}
              onClick={() => setActiveTab("SEMANA")}
            >
              SEMANA
            </Button>
          </div>
        </div>

        {/* Google Calendar Embedded View */}
        <Card className="p-0 overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Google Agenda - Marco Tulio</h3>
              <GoogleCalendarIntegration 
                professionalName="Marco Tulio"
                professionalEmail="marcotulioap@gmail.com"
                showInline={false}
              />
            </div>
          </div>
          <div className="h-[700px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=marcotulioap%40gmail.com&ctz=America%2FSao_Paulo&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&bgcolor=%23ffffff"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar - Marco Tulio"
            />
          </div>
        </Card>

        {/* Floating Task Card */}
        <div className="fixed bottom-4 right-4 max-w-sm">
          <Card className="p-4 bg-card border shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                C
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Prepare seu consultório para receber...</div>
                <div className="text-sm text-muted-foreground">3 etapas • Cerca de 9 minutos</div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        </div>

        {/* Modal de Marcação Pós-Atendimento */}
        <PostAppointmentModal
          isOpen={isPostAppointmentModalOpen}
          onClose={() => setIsPostAppointmentModalOpen(false)}
          patientName={selectedPatient.name}
          appointmentTime={selectedPatient.time}
          appointmentDate={selectedPatient.date}
        />
      </div>
    </div>
  );
};

export default Agenda;