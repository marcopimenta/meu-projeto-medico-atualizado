import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  ChevronDown,
  Bell,
  User,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-card border-r p-6 pt-20 fixed left-0 top-16 bottom-0 overflow-y-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Pacientes do dia</h2>
        <div className="text-center text-muted-foreground py-8">
          <Calendar className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
          <p>Nenhum paciente agendado para hoje</p>
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

        {/* Filters */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-foreground">Período</span>
            <div className="flex items-center space-x-1 bg-card border rounded px-3 py-2 cursor-pointer hover:bg-muted/50 transition-colors">
              <span className="text-foreground">Últimos 30 dias</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-foreground">Profissional</span>
            <div className="flex items-center space-x-1 bg-card border rounded px-3 py-2 cursor-pointer hover:bg-muted/50 transition-colors">
              <span className="text-foreground">Marco Tulio</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          <Card className="bg-card border text-center p-6 hover:shadow-card transition-shadow cursor-pointer" onClick={() => navigate("/agenda")}>
            <div className="text-4xl font-light text-muted-foreground mb-2">0</div>
            <div className="text-muted-foreground text-sm">Pacientes agendados</div>
            <Calendar className="w-6 h-6 text-muted-foreground mx-auto mt-2" />
          </Card>

          <Card className="bg-card border text-center p-6 hover:shadow-card transition-shadow">
            <div className="text-4xl font-light text-muted-foreground mb-2">0</div>
            <div className="text-muted-foreground text-sm">Pacientes confirmados</div>
            <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto mt-2" />
          </Card>

          <Card className="bg-card border text-center p-6 hover:shadow-card transition-shadow">
            <div className="text-4xl font-light text-muted-foreground mb-2">0</div>
            <div className="text-muted-foreground text-sm">Pacientes atendidos</div>
            <CheckCircle className="w-6 h-6 text-health mx-auto mt-2" />
          </Card>

          <Card className="bg-card border text-center p-6 hover:shadow-card transition-shadow">
            <div className="text-4xl font-light text-muted-foreground mb-2">0</div>
            <div className="text-muted-foreground text-sm">Pacientes que faltaram</div>
            <Clock className="w-6 h-6 text-muted-foreground mx-auto mt-2" />
          </Card>

          <Card className="bg-card border text-center p-6 hover:shadow-card transition-shadow cursor-pointer" onClick={() => navigate("/gestao")}>
            <div className="text-4xl font-light text-muted-foreground mb-2">5</div>
            <div className="text-muted-foreground text-sm">Módulos de gestão</div>
            <Settings className="w-6 h-6 text-muted-foreground mx-auto mt-2" />
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-5 gap-6">
          {/* Conheca o prontuário */}
          <Card className="bg-card border p-6 hover:shadow-card transition-shadow">
            <h3 className="text-lg font-semibold text-foreground mb-4">Conheça o prontuário</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Adicione seu primeiro paciente e comece a usar o sistema SIP
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/9a12e73d-0dfc-402b-8b6f-2d403224a0eb.png" 
                alt="Médica ilustração" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </Card>

          {/* Pacientes Chart */}
          <Card className="bg-card border p-6 text-center hover:shadow-card transition-shadow">
            <h4 className="text-foreground font-medium mb-4">Pacientes</h4>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="hsl(var(--border))" strokeWidth="3"/>
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="0"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-primary font-medium">100%</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Novos</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span className="text-muted-foreground">Recorren...</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-2 text-xs">
              <span className="text-primary font-medium">100%</span>
              <span className="text-muted-foreground">0%</span>
            </div>
          </Card>

          {/* Procedimentos realizados */}
          <Card className="bg-card border p-6 text-center hover:shadow-card transition-shadow">
            <h4 className="text-foreground font-medium mb-4">Procedimentos realizados</h4>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="hsl(var(--border))" strokeWidth="3"/>
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="#f59e0b" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="0"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">2</div>
                  <div className="text-xs text-muted-foreground">Procedimentos</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-muted-foreground">Retorno</span>
              </div>
            </div>
          </Card>

          {/* Pacientes x Convênio */}
          <Card className="bg-card border p-6 text-center hover:shadow-card transition-shadow">
            <h4 className="text-foreground font-medium mb-4">Pacientes x Convênio</h4>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="hsl(var(--border))" strokeWidth="3"/>
                <circle cx="21" cy="21" r="15.5" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="0"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">2</div>
                  <div className="text-xs text-muted-foreground">Pacientes</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Particul...</span>
              </div>
            </div>
          </Card>

          {/* Duração do atendimento */}
          <Card className="bg-card border p-6 text-center hover:shadow-card transition-shadow">
            <h4 className="text-foreground font-medium mb-4">Duração do atendimento</h4>
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-muted-foreground mr-2" />
              <span className="text-2xl font-light text-foreground">30min</span>
            </div>
            <div className="text-sm text-primary">Tipo de atendimento</div>
            <div className="mt-4 bg-primary/10 rounded p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Prepare seu consultório para receber...</span>
                <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs flex items-center justify-center">C</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">3 etapas • Cerca de 9 minutos</div>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary/20 rounded"></div>
                <div className="text-xs text-muted-foreground mt-1">Particular</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <div className="text-xs text-muted-foreground mt-1">Convênio</div>
              </div>
            </div>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;