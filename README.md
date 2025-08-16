# Aplicação Moderna de E-commerce

Uma plataforma de e-commerce completa construída com tecnologias web modernas, apresentando uma experiência de compra fluida, autenticação segura e integração com pagamentos via Stripe.

## 🚀 Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS + shadcn/ui
- **Banco de Dados**: PostgreSQL
- **ORM**: Drizzle
- **Gestão de Formulários**: React Hook Form + Zod
- **Autenticação**: BetterAuth
- **Processamento de Pagamentos**: Stripe
- **Gerenciamento de Estado**: React Query

## ✨ Funcionalidades

### Autenticação

- Registro e login seguros de usuários
- Rotas protegidas para usuários autenticados
- Gerenciamento de perfil

### Gestão de Produtos

- Navegação por categorias
- Variantes detalhadas de produtos
- Busca dinâmica de produtos
- Galeria de imagens dos produtos

### Carrinho de Compras

- Adicionar/remover produtos
- Ajuste de quantidades
- Atualizações em tempo real
- Carrinho persistente entre sessões

### Processo de Checkout

- Gerenciamento de múltiplos endereços
- Integração segura com Stripe
- Confirmação de pedido
- Histórico de pedidos

### Experiência do Usuário

- Design responsivo
- Animações no carrinho
- Estados de carregamento
- Notificações toast
- Validação de formulários

## 💳 Informações para Teste de Pagamento

Para testar a funcionalidade de pagamento, use o seguinte cartão de teste:

- **Número do Cartão**: 4242 4242 4242 4242
- **Data de Validade**: Qualquer data futura
- **CVV**: Quaisquer 3 dígitos

## 🏗️ Arquitetura

A aplicação segue as melhores práticas modernas:

- Server Actions para operações de backend
- Hooks customizados para busca e mutação de dados
- Arquitetura baseada em componentes
- Operações type-safe com Drizzle
- Componentes UI reutilizáveis com shadcn/ui
- Validação de formulários com Zod

## 🛠️ Estrutura de Componentes

- `src/actions` - Server Actions para operações no banco
- `src/app` - Páginas e layouts do Next.js App Router
- `src/components` - Componentes UI reutilizáveis
- `src/db` - Schema e configuração do banco de dados
- `src/hooks` - Hooks React customizados
- `src/lib` - Funções utilitárias e configurações

## 💅 Componentes UI

A aplicação utiliza componentes shadcn/ui para uma aparência moderna e consistente:

- Formulários customizados com validação
- Modais e diálogos
- Notificações toast
- Accordions
- Cards
- Carrosséis
- E muito mais!

## 🔒 Segurança

- Operações type-safe com TypeScript
- Fluxo seguro de autenticação
- Rotas de API protegidas
- Processamento seguro de pagamentos com Stripe
- Validação de entrada com Zod

## 🌟 Fluxo do Usuário

1. Navegar por produtos por categoria
2. Visualizar informações detalhadas do produto
3. Adicionar itens ao carrinho
4. Gerenciar endereços de entrega
5. Finalizar compra com Stripe
6. Visualizar confirmação do pedido
7. Acompanhar histórico de pedidos
