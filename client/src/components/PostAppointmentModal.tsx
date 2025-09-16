import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, RotateCcw, User, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PostAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientName: string;
  appointmentTime: string;
  appointmentDate: string;
}

interface AppointmentOutcome {
  type: 'completed' | 'missed' | 'return';
  label: string;
  icon: React.ReactNode;
  reportLink: string;
  description: string;
}

const PostAppointmentModal = ({
  isOpen,
  onClose,
  patientName,
  appointmentTime,
  appointmentDate
}: PostAppointmentModalProps) => {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const { toast } = useToast();

  const outcomes: AppointmentOutcome[] = [
    {
      type: 'completed',
      label: 'Atendimento Realizado',
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      reportLink: 'Atendimentos realizados',
      description: 'Paciente foi atendido normalmente'
    },
    {
      type: 'missed',
      label: 'Atendimento Não Realizado',
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      reportLink: 'Faltas por paciente',
      description: 'Paciente faltou ao atendimento'
    },
    {
      type: 'return',
      label: 'Paciente para Retorno',
      icon: <RotateCcw className="w-6 h-6 text-blue-600" />,
      reportLink: 'Pacientes para retorno',
      description: 'Paciente confirmado para retorno'
    }
  ];

  const handleOutcomeSelect = (outcomeType: string) => {
    setSelectedOutcome(outcomeType);
  };

  const handleConfirm = () => {
    if (!selectedOutcome) {
      toast({
        title: "Seleção obrigatória",
        description: "Por favor, selecione uma opção para continuar.",
        variant: "destructive"
      });
      return;
    }

    const outcome = outcomes.find(o => o.type === selectedOutcome);
    
    // Aqui seria implementada a lógica para salvar no backend
    // Por agora, apenas mostra confirmação
    
    toast({
      title: "Marcação realizada!",
      description: `${outcome?.label} registrado para ${patientName}. Dados enviados para ${outcome?.reportLink}.`,
    });

    // Reseta o modal e fecha
    setSelectedOutcome(null);
    onClose();
  };

  const handleCancel = () => {
    setSelectedOutcome(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Marcação Pós-Atendimento</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações do Paciente */}
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-medium">{patientName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">{appointmentDate} às {appointmentTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opções de Marcação */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Selecione o resultado do atendimento:</h3>
            
            {outcomes.map((outcome) => (
              <Card
                key={outcome.type}
                className={`cursor-pointer transition-all ${
                  selectedOutcome === outcome.type
                    ? 'ring-2 ring-black bg-gray-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleOutcomeSelect(outcome.type)}
                data-testid={`outcome-${outcome.type}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    {outcome.icon}
                    <div className="flex-1">
                      <div className="font-medium">{outcome.label}</div>
                      <div className="text-sm text-gray-600">{outcome.description}</div>
                      <div className="text-xs text-blue-600 mt-1">
                        → Será registrado em: {outcome.reportLink}
                      </div>
                    </div>
                    <div className="w-4 h-4">
                      {selectedOutcome === outcome.type && (
                        <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={handleCancel}
              data-testid="button-cancel"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleConfirm}
              className="bg-black hover:bg-gray-800 text-white"
              data-testid="button-confirm"
            >
              Confirmar Marcação
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostAppointmentModal;