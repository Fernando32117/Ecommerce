import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  hidden?: boolean;
}

const Footer = ({ hidden = false }: FooterProps) => {
  if (hidden) return null;

  return (
    <footer className="bg-accent p- mt-12 w-full gap-1">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Sobre Mim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
              Sobre
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
              Sou especialista em desenvolvimento de softwares modernos, criando
              soluções digitais inovadoras com foco em experiência do usuário e
              performance.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
              >
                <a
                  href="https://www.linkedin.com/in/gerfernandosouza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
              >
                <a
                  href="https://github.com/Fernando32117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
              >
                <a
                  href="https://portifolio-fernando-souza.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Carrinho
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Minha Conta
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
              Categorias
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/tnis"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Tênis
                </Link>
              </li>
              <li>
                <Link
                  href="/category/calas"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Calças
                </Link>
              </li>
              <li>
                <Link
                  href="/category/camisetas"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Camisetas
                </Link>
              </li>
              <li>
                <Link
                  href="/category/acessrios"
                  className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
              Contato
            </h3>
            <div className="space-y-3 text-sm">
              <div className="text-muted-foreground flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/5561983162291?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20da%20sua%20aplica%C3%A7%C3%A3o%20Ecommerce%2C%20gostaria%20de%20falar%20a%20respeito%20de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  (61) 98316-2291
                </a>
              </div>
              <div className="text-muted-foreground flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <div className="flex flex-col">
                  <a
                    href="mailto:nando32117@gmail.com?subject=Contato%20Ecommerce&body=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20da%20sua%20aplica%C3%A7%C3%A3o%20Ecommerce%2C%20gostaria%20de%20falar%20a%20respeito%20de"
                    className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                  >
                    nando32117@gmail.com
                  </a>
                  <div className="mt-1 flex gap-2">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=nando32117@gmail.com&su=Contato%20Ecommerce&body=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20da%20sua%20aplica%C3%A7%C3%A3o%20Ecommerce%2C%20gostaria%20de%20falar%20a%20respeito%20de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                      title="Enviar pelo Gmail"
                    >
                      Gmail
                    </a>
                    <a
                      href="https://outlook.live.com/mail/0/deeplink/compose?to=nando32117@gmail.com&subject=Contato%20Ecommerce&body=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20da%20sua%20aplica%C3%A7%C3%A3o%20Ecommerce%2C%20gostaria%20de%20falar%20a%20respeito%20de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                      title="Enviar pelo Outlook Web"
                    >
                      Outlook
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-muted-foreground flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
                  Lunabel - Novo Gama, GO
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 h-1 border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

        {/* Rodapé Inferior */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">
            © 2025 Fernando Souza. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
