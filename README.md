# Portfólio | Beatriz Alves

> **I build systems. I solve real problems.**

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades técnicas e interesses nas áreas de desenvolvimento de software, dados e inteligência artificial.

🌐 **Acesse o site:** [site-portfolio-tan.vercel.app](https://site-portfolio-tan.vercel.app/)

💻 **Repositório:** [Bialves16/site-portfolio](https://github.com/Bialves16/site-portfolio)

---

## Sobre o projeto

Este projeto é meu espaço de apresentação profissional na tecnologia. A proposta é reunir projetos, conhecimentos e experiências em uma interface que reflita minha abordagem de desenvolvimento: compreender problemas, explorar possibilidades e construir soluções úteis.

O portfólio também funciona como um projeto em evolução, acompanhando meu aprendizado e desenvolvimento nas áreas de engenharia de software, dados e inteligência artificial.

## Funcionalidades

- **Apresentação profissional:** introdução ao meu perfil e às minhas áreas de interesse.
- **Projetos em destaque:** apresentação de aplicações e soluções desenvolvidas.
- **Tecnologias:** visão geral das ferramentas e linguagens com as quais trabalho.
- **Sobre mim:** informações sobre minha trajetória e abordagem de desenvolvimento.
- **Contato:** canal para conexões profissionais e oportunidades.
- **Interface responsiva:** experiência adaptada a diferentes tamanhos de tela.
- **Animações e elementos visuais:** recursos para tornar a navegação mais dinâmica.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| [Next.js](https://nextjs.org/) | Framework da aplicação |
| [React](https://react.dev/) | Construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e organização do código |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização da interface |
| [Framer Motion](https://motion.dev/) | Animações e transições |
| [Lucide React](https://lucide.dev/) | Ícones |
| [Resend](https://resend.com/) | Integração para envio de e-mails |
| [Vercel](https://vercel.com/) | Hospedagem e publicação |

## Projetos apresentados

### Finance OS
Plataforma de gestão financeira voltada à organização das finanças de empresas e ao acompanhamento de diferentes operações.

### PantryAI
Projeto de gerenciamento de estoque com foco no uso de inteligência artificial para apoiar o controle e a análise de inventário.

### Taskly
Aplicação de gerenciamento de tarefas com recursos de prioridades, categorias e filtros para organização das atividades.

## Estrutura do projeto

```text
site-portfolio/
├── app/            # Páginas, layouts e recursos da aplicação
├── components/     # Componentes reutilizáveis da interface
├── data/           # Dados utilizados pelo site
├── public/         # Arquivos estáticos e recursos visuais
├── .env.example    # Exemplo das variáveis de ambiente
├── next.config.ts  # Configurações do Next.js
├── package.json    # Dependências e scripts
├── tsconfig.json   # Configurações do TypeScript
└── README.md       # Documentação do projeto
```

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm, instalado junto com o Node.js
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/Bialves16/site-portfolio.git
```

### 2. Entre na pasta do projeto

```bash
cd site-portfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Se você quiser utilizar a funcionalidade de envio de e-mails do formulário de contato, crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias:

```env
RESEND_API_KEY=sua_chave_api
CONTACT_EMAIL=seu_email_de_destino
RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

Configure a chave da API e um remetente permitido na sua conta do Resend. Mantenha as credenciais privadas e nunca as envie para o repositório.

> As variáveis de ambiente são necessárias para os recursos que dependem delas, como o envio de mensagens pelo formulário de contato.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Inicia a aplicação em modo de produção |
| `npm run lint` | Executa a análise estática do código com ESLint |

## Publicação

O projeto está publicado na Vercel.

Para publicar uma nova versão, é possível conectar o repositório do GitHub à plataforma e configurar o processo de implantação conforme as necessidades do projeto.

Antes da publicação, verifique se as variáveis de ambiente necessárias estão configuradas no ambiente de produção.

## Objetivos de desenvolvimento

Este projeto tem como objetivos:

- Construir e manter uma aplicação web moderna.
- Aplicar boas práticas de organização e reutilização de código.
- Desenvolver interfaces funcionais e responsivas.
- Explorar animações e interações na experiência do usuário.
- Integrar serviços externos quando necessário.
- Evoluir continuamente o portfólio conforme novos projetos e conhecimentos são desenvolvidos.

## Contato

Para conhecer meus projetos ou conversar sobre oportunidades e colaborações, acesse meu [portfólio](https://site-portfolio-tan.vercel.app/).

---

<p align="center">
  Desenvolvido por <strong>Beatriz Alves</strong>
  <br />
  Software • Dados • Inteligência Artificial
</p>
