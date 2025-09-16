import { useState } from "react";
import { Search, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const patients: any[] = [];

const Prontuarios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    patient.code.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Trial Banner */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex items-center justify-between">
          <p className="text-green-700">
            Bem vindo ao SIP. Seu período de avaliação termina em 7 dias
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Assine agora
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6 pt-20">
        <h1 className="text-3xl font-bold mb-6">Prontuários</h1>

        {/* Search and Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Digite o nome, código, telefone ou CPF..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Todos os profissionais</span>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              NOVO PACIENTE
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-card rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input type="checkbox" className="rounded" />
                </TableHead>
                <TableHead>NOME</TableHead>
                <TableHead>TELEFONE</TableHead>
                <TableHead>CÓDIGO</TableHead>
                <TableHead>ÚLTIMA CONSULTA</TableHead>
                <TableHead>DATA DE NASCIMENTO</TableHead>
                <TableHead>CONVÊNIOS</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <TableRow 
                    key={patient.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => navigate(`/prontuarios/${patient.id}`)}
                  >
                    <TableCell>
                      <input type="checkbox" className="rounded" />
                    </TableCell>
                    <TableCell className="text-primary font-medium">
                      {patient.name}
                    </TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{patient.code}</TableCell>
                    <TableCell>{patient.lastConsult}</TableCell>
                    <TableCell>{patient.birthDate}</TableCell>
                    <TableCell>{patient.insurance}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground py-8">
                    Nenhum paciente encontrado. Clique em "NOVO PACIENTE" para adicionar o primeiro.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          {filteredPatients.length} resultado{filteredPatients.length !== 1 ? 's' : ''}
        </div>
      </main>
    </div>
  );
};

export default Prontuarios;