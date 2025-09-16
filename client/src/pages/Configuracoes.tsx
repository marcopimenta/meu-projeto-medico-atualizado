import { Settings, Building, CreditCard, Users, Package, FileText, Calendar, MessageSquare, Printer, User, Download, Stethoscope, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const Configuracoes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Configurações da clínica</h2>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
                <Building className="w-4 h-4" />
                <span className="font-medium">Perfil da clínica</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <FileText className="w-4 h-4" />
                <span>Convênios</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <CreditCard className="w-4 h-4" />
                <span>Finanças</span>
              </a>
              
              <div className="pl-3">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                  <span>Categorias financeiras</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                  <span>Centro de custo</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                  <span>Configurações financeiras</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                  <span>Contas bancárias</span>
                </a>
              </div>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Users className="w-4 h-4" />
                <span>Equipe</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Package className="w-4 h-4" />
                <span>Regras de repasse</span>
              </a>
            </nav>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Configurações da conta</h3>
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <User className="w-4 h-4" />
                  <span>Usuários</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Building className="w-4 h-4" />
                  <span>Clínicas</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                  <span>Comunicação</span>
                </a>
                
                <div className="pl-3">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Permissões de envio</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>SMS enviados</span>
                  </a>
                </div>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Download className="w-4 h-4" />
                  <span>Exportar dados</span>
                </a>
              </nav>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Configs. de profissionais</h3>
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span>Agenda</span>
                </a>
                
                <div className="pl-3">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Agenda do prof. saúde</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Agendamento online ✓</span>
                  </a>
                </div>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <FileText className="w-4 h-4" />
                  <span>Convênios</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Stethoscope className="w-4 h-4" />
                  <span>Procedimentos</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                  <span>Comunicação</span>
                </a>
                
                <div className="pl-3">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>SMS</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>E-mail</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>E-mail aniversariantes</span>
                  </a>
                </div>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Printer className="w-4 h-4" />
                  <span>Impressões</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <FileText className="w-4 h-4" />
                  <span>Prontuário</span>
                </a>
                
                <div className="pl-3">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Seções</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Exames e procedimentos</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    <span>Prescrições</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-green-700">Bem vindo ao iClinic. Seu período de avaliação termina em 5 dias</span>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Assine agora
                </Button>
              </div>
            </div>
            
            <h1 className="text-2xl font-semibold text-gray-800">Clínicas</h1>
            <p className="text-gray-600">
              Você está alterando as configurações da clínica: <span className="text-blue-600">Clínica Marco Tulio</span>
            </p>
          </div>

          {/* Clinic Data Form */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-600">DADOS DA CLÍNICA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" defaultValue="Clínica Marco Tulio" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" defaultValue="marcotulioap@gmail.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="cnes">Número do CNES</Label>
                  <Input id="cnes" className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">TELEFONES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Label htmlFor="telefone">Telefone</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input placeholder="(__) ____-____" className="flex-1" />
                  </div>
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-6">
                  ADICIONAR TELEFONE
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Configuracoes;