import { Calendar, Stethoscope, Menu, ChevronDown, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b z-50">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black tracking-wider">SIP</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-black font-medium hover:text-gray-700 transition-colors">
                Painel
              </a>
              <a href="/agenda" className="text-gray-500 hover:text-black transition-colors">
                Agenda
              </a>
              <a href="/prontuarios" className="text-gray-500 hover:text-black transition-colors">
                Prontuários
              </a>
              <a href="/gestao" className="text-gray-500 hover:text-black transition-colors">
                Gestão
              </a>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600" onClick={() => window.location.href = '/configuracoes'}>
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;