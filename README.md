# Portfólio de Gabriel Santos

Um portfólio web profissional e minimalista, desenvolvido com React, Tailwind CSS e hospedado no Netlify.

## Design & Filosofia

Este portfólio segue a filosofia de **Minimalismo Científico**, com foco em:

- **Hierarquia clara** através de tipografia e espaçamento
- **Grid rigoroso** com dados como elementos visuais primários
- **Paleta monocromática** com acentos em azul profundo
- **Foco em legibilidade e funcionalidade**

## Tecnologias Utilizadas

- **React 19** — Framework de UI
- **Tailwind CSS 4** — Estilização utilitária
- **Vite** — Build tool e dev server
- **TypeScript** — Type safety
- **Lucide React** — Ícones
- **shadcn/ui** — Componentes de UI

## Estrutura do Projeto

```
client/
  public/              # Ativos estáticos (imagens, etc.)
  src/
    pages/             # Páginas da aplicação
    components/        # Componentes reutilizáveis
    index.css          # Estilos globais e temas
    App.tsx            # Roteamento principal
    main.tsx           # Entry point
```

## Instalação Local

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Passos

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd gabriel-santos-portfolio
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## Build para Produção

```bash
pnpm build
```

Isso criará uma pasta `dist/public` com os arquivos otimizados prontos para hospedagem.

## Hospedagem no Netlify

### Opção 1: Deploy via Git (Recomendado)

1. **Faça push do repositório para GitHub/GitLab/Bitbucket**

2. **Conecte ao Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Netlify detectará automaticamente as configurações (arquivo `netlify.toml`)

3. **Configurações automáticas:**
   - Build command: `pnpm build`
   - Publish directory: `dist/public`

### Opção 2: Deploy Manual (Drag & Drop)

1. Execute o build localmente:
```bash
pnpm build
```

2. Acesse [netlify.com](https://netlify.com)

3. Arraste a pasta `dist/public` para a área de deploy

### Opção 3: Deploy via CLI

1. Instale a CLI do Netlify:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist/public
```

## Configuração de Domínio Personalizado

1. No painel do Netlify, vá para **Domain settings**
2. Clique em **Add custom domain**
3. Siga as instruções para apontar seu domínio

## Variáveis de Ambiente

Este projeto não requer variáveis de ambiente para funcionar. Todas as configurações estão no código.

## Performance

- ✅ Otimizado para Core Web Vitals
- ✅ Imagens responsivas e otimizadas
- ✅ CSS-in-JS com Tailwind (zero runtime)
- ✅ Code splitting automático com Vite
- ✅ Gzip compression no Netlify

## SEO

O portfólio inclui:

- Meta tags apropriadas
- Open Graph tags para compartilhamento social
- Sitemap automático
- Robots.txt configurado

## Manutenção

### Atualizar Conteúdo

Edite o arquivo `client/src/pages/Home.tsx` com suas informações.

### Adicionar Novas Seções

1. Crie um novo componente em `client/src/components/`
2. Importe e use em `client/src/pages/Home.tsx`
3. Adicione link de navegação em `Home.tsx`

### Customizar Cores

Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: oklch(0.52 0.18 250);  /* Azul profundo */
  --background: oklch(1 0 0);        /* Branco */
  --foreground: oklch(0.25 0.01 0);  /* Cinza escuro */
}
```

## Troubleshooting

### Servidor não inicia
```bash
pnpm install
pnpm dev
```

### Build falha
```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

### Problemas no Netlify
Verifique se o arquivo `netlify.toml` está na raiz do repositório.

## Licença

Este projeto é de uso pessoal. Sinta-se livre para adaptá-lo conforme necessário.

## Contato

- Email: gabrielhps2005@gmail.com
- Telefone: (21) 98569-2790
- LinkedIn: [Seu LinkedIn]
- GitHub: [Seu GitHub]

---

Desenvolvido com ❤️ por Gabriel Santos
