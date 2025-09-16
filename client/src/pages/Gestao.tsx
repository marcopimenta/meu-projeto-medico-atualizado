import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  Users, 
  Calendar,
  Package,
  ClipboardList,
  Smile,
  Plus,
  Search,
  Filter,
  Download
} from "lucide-react";

const Gestao = () => {
  const [activeSection, setActiveSection] = useState("financas");

  const sidebarItems = [
    { id: "financas", label: "Finanças", icon: DollarSign },
    { id: "relatorios", label: "Relatórios", icon: FileText },
    { id: "estoque", label: "Controle de Estoque", icon: Package },
    { id: "tiss", label: "TISS", icon: ClipboardList },
    { id: "satisfacao", label: "Satisfação do Paciente", icon: Smile },
  ];

  const FinancasSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Finanças</h2>
      </div>
      
      <Tabs defaultValue="fluxo" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="fluxo">Fluxo de Caixa</TabsTrigger>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
          <TabsTrigger value="despesas">Despesas</TabsTrigger>
          <TabsTrigger value="extrato">Extrato</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fluxo" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Saldo Geral</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">R$ 0,00</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receitas do Mês</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">R$ 0,00</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">R$ 0,00</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  RECEITA
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="valor-receita">Valor</Label>
                    <Input id="valor-receita" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <Label htmlFor="descricao-receita">Descrição</Label>
                    <Input id="descricao-receita" placeholder="Descrição da receita" />
                  </div>
                  <Button className="w-full">Salvar</Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  DESPESA
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nova Despesa</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="valor-despesa">Valor</Label>
                    <Input id="valor-despesa" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <Label htmlFor="descricao-despesa">Descrição</Label>
                    <Input id="descricao-despesa" placeholder="Descrição da despesa" />
                  </div>
                  <Button className="w-full">Salvar</Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              TRANSFERÊNCIA
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="receitas" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Gestão de Receitas</h3>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Receita
            </Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Nenhuma receita registrada
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="despesas" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Gestão de Despesas</h3>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Despesa
            </Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Nenhuma despesa registrada
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="extrato" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Extrato de Transações</h3>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hoje">Hoje</SelectItem>
                  <SelectItem value="semana">Esta semana</SelectItem>
                  <SelectItem value="mes">Este mês</SelectItem>
                  <SelectItem value="ano">Este ano</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Saldo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Nenhuma transação encontrada
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );

  const RelatoriosSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Relatórios</h2>
      </div>
      
      <Tabs defaultValue="atendimentos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="atendimentos">Atendimentos</TabsTrigger>
          <TabsTrigger value="financas">Finanças</TabsTrigger>
          <TabsTrigger value="relacionamentos">Relacionamentos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="atendimentos" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Atendimentos realizados</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Pacientes para retorno</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Pacientes por período</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Pacientes por CID</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Paciente por indicação</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Faltas por paciente</CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <div className="bg-muted/20 rounded-lg p-8 text-center">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Selecione seus filtros e gere seu relatório.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="financas" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Análise de despesas</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Análise de receitas</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Repasse por profissionais</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Fluxo de caixa</CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <div className="bg-muted/20 rounded-lg p-8 text-center">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Selecione seus filtros e gere seu relatório.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="relacionamentos" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Aniversariantes</CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <div className="bg-muted/20 rounded-lg p-8 text-center">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Selecione seus filtros e gere seu relatório.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const EstoqueSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Controle de Estoque</h2>
        <div className="flex space-x-2">
          <Button variant="outline">ADICIONAR PRODUTO</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">ENTRADA</Button>
          <Button variant="destructive">SAÍDA</Button>
        </div>
      </div>
      
      <Tabs defaultValue="todos" className="w-full">
        <TabsList>
          <TabsTrigger value="todos">TODOS</TabsTrigger>
          <TabsTrigger value="estoque-baixo">ESTOQUE BAIXO</TabsTrigger>
          <TabsTrigger value="vence-30">VENCE EM 30 DIAS</TabsTrigger>
          <TabsTrigger value="vencidos">PRODUTOS VENCIDOS</TabsTrigger>
        </TabsList>
        
        <TabsContent value="todos" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquise por nome ou código do produto" className="max-w-md" />
          </div>
          
          <p className="text-sm text-muted-foreground">Exibindo: 0 produtos</p>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PRODUTO</TableHead>
                <TableHead>CÓD.</TableHead>
                <TableHead>QUANT.</TableHead>
                <TableHead>VENCE EM 30 DIAS</TableHead>
                <TableHead>VENCIDO</TableHead>
                <TableHead>ESTOQUE MÍNIMO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                  Nenhum produto cadastrado
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );

  const TissSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">TISS</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          ADICIONAR
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PACIENTE</TableHead>
            <TableHead>CONVÊNIO</TableHead>
            <TableHead>DATA DA CONSULTA</TableHead>
            <TableHead>VERSÃO TISS</TableHead>
            <TableHead>FATURADO EM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
              Nenhum registro encontrado
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );

  const SatisfacaoSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Satisfação do Paciente</h2>
      </div>
      
      <Tabs defaultValue="resultados" className="w-full">
        <TabsList>
          <TabsTrigger value="resultados">Resultados</TabsTrigger>
          <TabsTrigger value="envios">Envios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resultados" className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Resultados</h3>
            <p className="text-muted-foreground mb-4">
              Monitore constantemente o nível de satisfação dos seus pacientes, identifique e aprimore seus serviços para atender melhor às expectativas.
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <Button variant="outline" size="sm">Esta semana</Button>
            <Button variant="outline" size="sm">Últimos 15 dias</Button>
            <Button variant="outline" size="sm">Este mês</Button>
            <Button variant="outline" size="sm">90 dias atrás</Button>
            <Button variant="outline" size="sm">Todos</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>NPS</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold mb-4">0</div>
                <div className="text-sm text-muted-foreground">NPS</div>
                <div className="flex justify-center space-x-4 mt-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                    Zona Crítica
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded mr-1"></div>
                    Zona de Melhoria
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded mr-1"></div>
                    Zona de Qualidade
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded mr-1"></div>
                    Zona de Excelência
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  % de promotores - % de detratores NPS
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Satisfação dos clientes ao longo do tempo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted/20 rounded flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Gráfico de satisfação</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Respostas recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">Nenhuma resposta encontrada</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="envios">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Configurações de envio de pesquisas</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case "financas":
        return <FinancasSection />;
      case "relatorios":
        return <RelatoriosSection />;
      case "estoque":
        return <EstoqueSection />;
      case "tiss":
        return <TissSection />;
      case "satisfacao":
        return <SatisfacaoSection />;
      default:
        return <FinancasSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border min-h-[calc(100vh-64px)]">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Gestão</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Gestao;