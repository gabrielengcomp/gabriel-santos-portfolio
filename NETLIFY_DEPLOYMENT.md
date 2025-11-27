# Guia de Hospedagem no Netlify

Este documento fornece instruções passo a passo para hospedar seu portfólio no Netlify.

## Opção 1: Deploy Automático via GitHub (Recomendado)

Esta é a forma mais fácil e recomendada. Qualquer mudança no repositório será automaticamente deployada.

### Passo 1: Prepare seu Repositório GitHub

1. Crie uma conta em [github.com](https://github.com) se ainda não tiver
2. Crie um novo repositório chamado `gabriel-santos-portfolio`
3. Clone o repositório localmente:
   ```bash
   git clone https://github.com/seu-usuario/gabriel-santos-portfolio.git
   cd gabriel-santos-portfolio
   ```
4. Copie todos os arquivos do seu projeto para esta pasta
5. Faça commit e push:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio setup"
   git push origin main
   ```

### Passo 2: Conecte ao Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign up"** e escolha **"GitHub"**
3. Autorize o Netlify a acessar sua conta GitHub
4. Após fazer login, clique em **"New site from Git"**
5. Selecione **GitHub** como provedor
6. Escolha o repositório `gabriel-santos-portfolio`
7. Configure as opções de build:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist/public`
8. Clique em **"Deploy site"**

### Passo 3: Aguarde o Deploy

Netlify começará a fazer o build automaticamente. Você verá:
- Status "Building" enquanto processa
- Status "Published" quando estiver pronto
- Uma URL do tipo `seu-site-12345.netlify.app`

**Pronto!** Seu portfólio está online! 🎉

## Opção 2: Deploy Manual via CLI

Para quem prefere controle total via linha de comando.

### Passo 1: Instale a CLI do Netlify

```bash
npm install -g netlify-cli
```

### Passo 2: Faça Login

```bash
netlify login
```

Isso abrirá seu navegador para autenticação.

### Passo 3: Build Local

```bash
cd /caminho/para/gabriel-santos-portfolio
pnpm build
```

### Passo 4: Deploy

```bash
netlify deploy --prod --dir=dist/public
```

Pronto! Seu site está online.

## Opção 3: Drag & Drop (Mais Simples)

Para um deploy único e rápido, sem Git.

### Passo 1: Build Local

```bash
pnpm build
```

### Passo 2: Acesse Netlify

1. Vá para [netlify.com](https://netlify.com)
2. Faça login (ou crie uma conta)
3. Procure por **"Deploys"** no menu
4. Clique em **"Deploy manually"**

### Passo 3: Arraste a Pasta

Arraste a pasta `dist/public` para a área de upload.

Seu site estará online em poucos segundos!

## Configurar Domínio Personalizado

### Usar um Domínio Próprio

1. No painel do Netlify, vá para **Site settings**
2. Clique em **Domain management**
3. Clique em **Add custom domain**
4. Digite seu domínio (ex: gabrielsantos.com)
5. Siga as instruções para apontar seu domínio

### Usar Subdomínio do Netlify

Seu site já vem com um subdomínio gratuito como:
- `seu-site-12345.netlify.app`

Você pode customizar a parte inicial em **Site settings > General > Site name**.

## Configurações Recomendadas

### 1. Variáveis de Ambiente (se necessário)

No painel do Netlify:
1. Vá para **Site settings > Build & deploy > Environment**
2. Clique em **Edit variables**
3. Adicione qualquer variável necessária

Para este projeto, não há variáveis obrigatórias.

### 2. Redirecionamentos

O arquivo `netlify.toml` já está configurado com:
- Redirecionamento de rotas SPA para `index.html`
- Headers de segurança
- Cache otimizado para assets

### 3. HTTPS

Netlify fornece **HTTPS gratuito** automaticamente. Seu site é seguro por padrão.

## Atualizar o Site

### Se usar GitHub (Recomendado)

Qualquer push para `main` dispara um novo deploy automaticamente:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Netlify fará o build e deploy automaticamente em ~1 minuto.

### Se usar CLI

```bash
pnpm build
netlify deploy --prod --dir=dist/public
```

## Verificar Status do Deploy

1. Acesse o painel do Netlify
2. Vá para **Deploys**
3. Veja o histórico de deploys
4. Clique em qualquer deploy para ver detalhes

## Troubleshooting

### Build falha no Netlify

**Problema:** "Build failed"

**Solução:**
1. Verifique se o arquivo `netlify.toml` está na raiz
2. Certifique-se de que `pnpm` está disponível
3. Verifique se não há erros de TypeScript: `pnpm check`

### Site mostra erro 404

**Problema:** Páginas não carregam, apenas a home funciona

**Solução:**
O arquivo `netlify.toml` deve ter a regra de redirecionamento. Verifique se contém:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Domínio personalizado não funciona

**Problema:** Erro de DNS ou conexão recusada

**Solução:**
1. Aguarde 24-48 horas para propagação de DNS
2. Verifique se apontou corretamente os nameservers
3. Use ferramentas como [DNS Checker](https://dnschecker.org)

### Site muito lento

**Problema:** Carregamento lento

**Solução:**
1. Verifique o tamanho dos assets em **Analytics**
2. Comprima imagens: use ferramentas como [TinyPNG](https://tinypng.com)
3. Ative cache no navegador (já configurado)

## Monitoramento

### Analytics

1. No painel do Netlify, vá para **Analytics**
2. Veja estatísticas de:
   - Visitantes
   - Páginas mais acessadas
   - Performance

### Logs

1. Vá para **Deploys**
2. Clique em um deploy específico
3. Veja o log completo de build

## Próximos Passos

Após o deploy bem-sucedido:

1. **Teste o site:** Abra em diferentes navegadores e dispositivos
2. **Compartilhe:** Envie o link para recrutadores e contatos
3. **Monitore:** Verifique os logs de erro periodicamente
4. **Atualize:** Mantenha o portfólio atualizado com novos projetos

## Suporte

Para dúvidas sobre Netlify:
- [Documentação Oficial](https://docs.netlify.com)
- [Comunidade Netlify](https://community.netlify.com)
- [Status Page](https://www.netlify.com/status/)

---

**Parabéns!** Seu portfólio está online e pronto para impressionar recrutadores! 🚀
