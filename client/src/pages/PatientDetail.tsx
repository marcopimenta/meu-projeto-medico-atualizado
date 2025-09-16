import { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Clock, Plus, ChevronDown, X, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const PatientDetail = () => {
  const { id } = useParams();
  const [isConsultationActive, setIsConsultationActive] = useState(false);
  const [consultationTime, setConsultationTime] = useState("00:00:00");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [showConsultationDetails, setShowConsultationDetails] = useState(false);

  const patient = {
    name: "Novo Paciente",
    age: "Idade não informada",
    insurance: "Não informado",
    firstConsult: "Sem registro"
  };

  const medicalSections = [
    { id: "clinicos", title: "Antec. clínicos", subtitle: "Inserir informação" },
    { id: "cirurgicos", title: "Antec. cirúrgicos", subtitle: "Inserir informação" },
    { id: "familiares", title: "Antec. familiares", subtitle: "Inserir informação" },
    { id: "habitos", title: "Hábitos", subtitle: "Inserir informação" }
  ];

  const consultationData = {
    date: "09 AGO 2025",
    doctor: "Marco Tulio",
    duration: "05:30 (30 minutos)",
    complaint: "Dor na barriga",
    currentHistory: "Há mais ou menos 20 dias, evoluiu com desconforto abdominal constante que piora com café e comidas ácidas. Se permanece longos períodos em jejum,também sente o aumento da dor. Relata aumento da halitose.",
    pastHistory: "Não relata internações anteriores e cirurgias prévias.",
    physicalExam: "BNF sem SA\nMVUA sem alterações\ndor à palpação de região epigástrica, halitose\nedema de MMII+/4+",
    diagnosis: "K29 - Gastrite e duodenite"
  };

  const openModal = (sectionId: string) => {
    setActiveModal(sectionId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const startConsultation = () => {
    setIsConsultationActive(true);
    // Start timer logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black tracking-wider">SIP</div>
          <nav className="flex space-x-6">
            <button className="text-muted-foreground hover:text-foreground">Painel</button>
            <button className="text-muted-foreground hover:text-foreground">Agenda</button>
            <button className="text-foreground font-medium border-b-2 border-primary">Prontuários</button>
            <button className="text-muted-foreground hover:text-foreground">Gestão</button>
            <button className="text-muted-foreground hover:text-foreground">Afya Pay</button>
            <button className="text-muted-foreground hover:text-foreground">Marketing</button>
            <button className="text-muted-foreground hover:text-foreground">Outros</button>
          </nav>
          <div className="w-8 h-8 bg-muted rounded-full"></div>
        </div>
      </header>

      {/* New Version Banner */}
      <div className="bg-blue-50 border border-blue-200 p-4 mx-6 mt-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-blue-800">SIP de cara nova!</h3>
            <p className="text-blue-700">
              Está disponível o novo SIP, feito para deixar seu atendimento moderno, prático e ainda mais inteligente.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-blue-700">
              Conhecer a nova versão
            </Button>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-card border-r border-border p-6">
          <h2 className="text-lg font-semibold mb-4">Prontuário</h2>
          
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-4"
            onClick={startConsultation}
          >
            <Play className="h-4 w-4 mr-2" />
            Iniciar atendimento
          </Button>

          <div className="flex items-center mb-6">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">Duração</span>
            <span className="ml-auto font-mono">{consultationTime}</span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">Resumo</h3>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Tabela de acompanhamento</h3>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => setShowConsultationDetails(!showConsultationDetails)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar tag
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Patient Info */}
          <div className="bg-card rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-2xl font-bold">
                PT
              </div>
              <div>
                <h1 className="text-2xl font-bold">{patient.name}</h1>
                <p className="text-muted-foreground">Idade: {patient.age}</p>
                <p className="text-muted-foreground">Convênio: {patient.insurance}</p>
                <p className="text-muted-foreground">Primeira consulta: {patient.firstConsult}</p>
              </div>
            </div>
          </div>

          {/* Medical History Sections */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {medicalSections.map((section) => (
              <Card 
                key={section.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openModal(section.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{section.title}</h3>
                      <p className="text-muted-foreground text-sm">{section.subtitle}</p>
                    </div>
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Diagnostics Section */}
          <Collapsible open={isDiagnosticsOpen} onOpenChange={setIsDiagnosticsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border">
              <span className="font-medium">ÚLTIMOS DIAGNÓSTICOS</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDiagnosticsOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="bg-card rounded-lg p-4">
                <p className="text-muted-foreground">Filtrar: Todos</p>
                
                {showConsultationDetails && (
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-primary-foreground rounded p-2 text-center">
                        <div className="text-lg font-bold">{consultationData.date.split(' ')[0]}</div>
                        <div className="text-xs">{consultationData.date.split(' ')[1]}</div>
                        <div className="text-xs">{consultationData.date.split(' ')[2]}</div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Por: {consultationData.doctor}</p>
                        <p className="text-sm text-primary">{consultationData.duration}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-primary">Atendimento</h4>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">Queixa principal:</h5>
                        <p className="text-sm">{consultationData.complaint}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">História da moléstia atual:</h5>
                        <p className="text-sm">{consultationData.currentHistory}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">Histórico e antecedentes:</h5>
                        <p className="text-sm">{consultationData.pastHistory}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">Exame físico:</h5>
                        <p className="text-sm whitespace-pre-line">{consultationData.physicalExam}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">Hipótese diagnóstica:</h5>
                        <p className="text-sm">{consultationData.diagnosis}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium">Condutas:</h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </main>
      </div>

      {/* Modals */}
      {medicalSections.map((section) => (
        <Dialog key={section.id} open={activeModal === section.id} onOpenChange={closeModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                {section.title}
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary">Descrição</label>
                <Textarea 
                  placeholder="Digite aqui"
                  className="mt-1"
                  rows={6}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  As informações foram salvas com sucesso
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  {section.id === 'clinicos' ? 'Medicamentos em uso' : 
                   section.id === 'cirurgicos' ? 'Antec. clínicos' :
                   section.id === 'familiares' ? 'Antec. cirúrgicos' : 'Antec. familiares'}
                </Button>
                <Button variant="outline" className="flex-1">
                  {section.id === 'clinicos' ? 'Antec. cirúrgicos' :
                   section.id === 'cirurgicos' ? 'Antec. familiares' :
                   section.id === 'familiares' ? 'Hábitos' : 'Alergias'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default PatientDetail;