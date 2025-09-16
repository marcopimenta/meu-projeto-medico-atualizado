import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Plus, ExternalLink } from "lucide-react";

interface GoogleCalendarProps {
  professionalName?: string;
  professionalEmail?: string;
  showInline?: boolean;
}

const GoogleCalendarIntegration = ({ 
  professionalName = "Marco Tulio", 
  professionalEmail = "marcotulioap@gmail.com",
  showInline = true 
}: GoogleCalendarProps) => {
  // URLs do Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/u/0?cid=${professionalEmail}`;
  const createEventUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250127T090000/20250127T100000&details=Consulta%20médica&location=Clínica%20SIP&text=Consulta%20-%20Paciente`;

  const handleOpenCalendar = () => {
    window.open(googleCalendarUrl, '_blank');
  };

  const handleCreateEvent = () => {
    window.open(createEventUrl, '_blank');
  };

  const handleViewSchedule = () => {
    const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(professionalEmail)}&ctz=America/Sao_Paulo&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&bgcolor=%23ffffff`;
    window.open(embedUrl, '_blank');
  };

  if (!showInline) {
    return (
      <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
        <Button 
          onClick={handleCreateEvent}
          className="w-full bg-black hover:bg-gray-800 text-white"
          data-testid="button-schedule-google"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Agendamento
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Google Agenda - {professionalName}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Sincronizado com Google Calendar</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Email: {professionalEmail}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Button 
              onClick={handleCreateEvent}
              className="w-full bg-black hover:bg-gray-800 text-white"
              data-testid="button-create-event"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Novo Evento
            </Button>
            <Button 
              onClick={handleOpenCalendar}
              variant="outline" 
              className="w-full"
              data-testid="button-open-calendar"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir Google Agenda
            </Button>
            <Button 
              onClick={handleViewSchedule}
              variant="outline" 
              className="w-full"
              data-testid="button-view-schedule"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Visualizar Agenda
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleCalendarIntegration;