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

const Footer = () => {
  return (
    <footer className="bg-accent p- mt-12 w-full gap-1">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Sobre Mim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sobre</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sou especialista em desenvolvimento de softwares modernos, criando
              soluções digitais inovadoras com foco em experiência do usuário e
              performance.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/gerfernandosouza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/Fernando32117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://portifolio-fernando-souza.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Carrinho
                </Link>
              </li>
              <li>
                <Link
                  href="/authentication"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Minha Conta
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tênis
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Calças
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Camisetas
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="text-muted-foreground flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(61) 98316-2291</span>
              </div>
              <div className="text-muted-foreground flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>nando32117@gmail.com</span>
              </div>
              <div className="text-muted-foreground flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Gama - Brasília, DF</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Rodapé Inferior */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2025 Fernando Souza. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
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
