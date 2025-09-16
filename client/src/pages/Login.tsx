import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // For now, simulate successful login and redirect to dashboard
      // TODO: Implement actual Supabase authentication
      if (email && password) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o painel...",
        });
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, preencha todos os campos.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Credenciais inválidas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth with Supabase
    toast({
      title: "Em breve",
      description: "Login com Google será implementado em breve.",
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-black tracking-wider">SIP</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email de acesso"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Senha
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              <div className="mt-3 text-right">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full h-12 border-gray-300 text-gray-700 font-medium text-base hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Entrar com Google
            </Button>
          </form>

          {/* Sign up link */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-sm">
              Você ainda não tem uma conta iClinic?
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 font-medium text-sm"
            >
              Teste o Afya iClinic gratuitamente
            </a>
          </div>

          {/* Terms and Privacy */}
          <div className="text-center text-xs text-gray-500">
            Ao clicar em "Entrar", você aceita nossos{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Termos de uso
            </a>{" "}
            e{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Política de Privacidade
            </a>
            .
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 items-center justify-center p-8">
        <div className="max-w-md text-center space-y-6">
          <div className="bg-pink-500 text-white px-6 py-3 rounded-full inline-block font-bold text-lg">
            Afya Pay
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Solução de pagamentos com maquininha, link de pagamento e antecipação integrada ao iClinic.
            </h2>
            
            <p className="text-gray-600">
              Você escolhe como cobrar, e o registro é feito automaticamente no financeiro. 
              Mais precisão, menos tempo perdido com tarefas manuais!
            </p>
          </div>

          {/* Illustration placeholder */}
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl mx-auto flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xl">$</span>
                </div>
                <p className="font-semibold">Afya Pay Integration</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-20 right-8 w-6 h-6 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-20 left-8 w-10 h-10 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-10 right-12 w-4 h-4 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;