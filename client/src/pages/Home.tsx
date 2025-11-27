import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube, ExternalLink, Code2, BookOpen, Briefcase } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Científico
 * - Hierarquia clara através de tipografia e espaçamento
 * - Grid rigoroso com dados como elementos visuais primários
 * - Paleta monocromática com acentos em azul profundo
 * - Foco em legibilidade e funcionalidade
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">Gabriel Santos</div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-primary transition-colors">Sobre</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experiência</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projetos</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Habilidades</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/hero-background.png" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Gabriel Santos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Estudante de Engenharia de Computação | Pesquisador em IA e Segurança de Redes
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Desenvolvedor apaixonado por pesquisa científica, machine learning e sistemas de rede. 
              Atualmente cursando Engenharia de Computação no CEFET/RJ com foco em inovação e aprendizado contínuo.
            </p>
            <div className="flex gap-4">
              <a href="#contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Entrar em Contato
                </Button>
              </a>
              <a href="https://github.com/gabrielengcomp" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Ver GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um estudante de Engenharia de Computação no CEFET/RJ, atualmente no 6º período, 
                com forte interesse em pesquisa científica, inteligência artificial e segurança de redes.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Tenho experiência prática em desenvolvimento de sistemas, análise de dados e implementação 
                de soluções tecnológicas. Sou proativo, pontual e sempre em busca de aprender novas tecnologias 
                e metodologias.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold min-w-fit">Localização:</span>
                  <span className="text-muted-foreground">Petrópolis, Rio de Janeiro</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold min-w-fit">Idade:</span>
                  <span className="text-muted-foreground">20 anos (26/01/2005)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold min-w-fit">Email:</span>
                  <a href="mailto:gabrielhps2005@gmail.com" className="text-primary hover:text-primary/80">
                    gabrielhps2005@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold min-w-fit">Telefone:</span>
                  <a href="tel:+5521985692790" className="text-primary hover:text-primary/80">
                    (21) 98569-2790
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/research-visual.png" 
                alt="research visualization" 
                className="w-full rounded-lg border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Experiências Extracurriculares</h2>
          <div className="space-y-8">
            {/* Research 1 */}
            <div className="border-l-4 border-primary pl-6 py-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-semibold">Identificação de Aplicações em Tráfego VPN Criptografado</h3>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded">06/2025 - presente</span>
              </div>
              <p className="text-primary font-medium mb-3">Iniciação Científica | CEFET/RJ Campus Petrópolis</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Pesquisa envolvendo criação de dataset de tráfego criptografado, extração de features estatísticas 
                e aplicação de técnicas de machine learning para classificação de serviços. Estudo de impacto de 
                tráfego de background e análise crítica de privacidade em VPNs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Machine Learning</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Scapy</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Análise de Dados</span>
              </div>
            </div>

            {/* Research 2 */}
            <div className="border-l-4 border-primary pl-6 py-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-semibold">Implementação de Testes de Turing Automatizados</h3>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded">10/2025 - presente</span>
              </div>
              <p className="text-primary font-medium mb-3">Iniciação Científica | Laboratório Nacional de Computação Científica (LNCC)</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Desenvolvimento de framework para avaliação automatizada de Inteligências Artificiais usando 
                modelos de linguagem (LLMs). Construção de benchmarks, templates de perguntas verificáveis, 
                grafos de conhecimento e métodos estatísticos para seleção de instâncias.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">LLMs</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">IA</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Benchmarking</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Grafos de Conhecimento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projetos Acadêmicos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Sistema de Imobiliária</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Implementação de banco de dados em MySQL com interface gráfica em Python para 
                realização de consultas. Projeto da disciplina de Banco de Dados.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">MySQL</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">GUI</span>
              </div>
              <a href="https://github.com/gabrielengcomp/sgbd_system" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                Ver Repositório <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Sistema de Advocacia</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Programa em Java para simulação de gerenciador de escritório de advocacia com 
                interface Javax.Swing. Projeto da disciplina de Programação Orientada a Objetos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Java</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Swing</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">OOP</span>
              </div>
              <a href="https://github.com/gabrielengcomp/LawFirmManager" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                Ver Repositório <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Dicionário em Árvore AVL</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Implementação de dicionário utilizando árvore AVL (árvore binária de busca auto-balanceada) 
                em C. Projeto da disciplina de Algoritmos e Estruturas de Dados II.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">C</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Estruturas de Dados</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Algoritmos</span>
              </div>
              <a href="https://github.com/gabrielengcomp/DictionaryAVL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                Ver Repositório <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 4 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Snake em Assembly</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Implementação do jogo Snake em simulador de processador 16 bits (criado pelo IST - Portugal). 
                Projeto da disciplina de Arquitetura de Computadores.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Assembly</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Arquitetura</span>
              </div>
              <a href="https://github.com/gabrielengcomp/SnakeGame" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                Ver Repositório <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 5 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Rede Empresarial</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Simulação de rede no Cisco Packet Tracer para suporte de 300 PCs, subdivididos em 3 VLANs 
                e 3 Servidores, com rede wireless e IoTs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Cisco Packet Tracer</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Redes</span>
                <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">VLAN</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                Ver Detalhes <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Habilidades e Ferramentas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Linguagens de Programação
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">C/C++</li>
                <li className="text-muted-foreground">Java</li>
                <li className="text-muted-foreground">Python</li>
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Bancos de Dados
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">MySQL</li>
                <li className="text-muted-foreground">SQLite</li>
                <li className="text-muted-foreground">Conhecimento sólido em BD</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Ferramentas & Tecnologias
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Linux (Ubuntu, Kali)</li>
                <li className="text-muted-foreground">Git/GitHub</li>
                <li className="text-muted-foreground">Oracle VirtualBox</li>
              </ul>
            </div>

            {/* Specialized Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Competências Especializadas</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Programação avançada e estruturas de dados</li>
                <li className="text-muted-foreground">Orientação a Objetos</li>
                <li className="text-muted-foreground">Redes de Computadores e Virtualização</li>
              </ul>
            </div>

            {/* AI & ML */}
            <div>
              <h3 className="text-xl font-semibold mb-4">IA e Machine Learning</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Conhecimentos em IA e ML</li>
                <li className="text-muted-foreground">Análise de dados</li>
                <li className="text-muted-foreground">Scikit-Learn</li>
              </ul>
            </div>

            {/* Network Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Ferramentas de Rede</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Cisco Packet Tracer</li>
                <li className="text-muted-foreground">Wireshark</li>
                <li className="text-muted-foreground">Scapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Formação Acadêmica</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Bacharelado em Engenharia de Computação</h3>
              <p className="text-primary font-medium mb-2">CEFET/RJ, Petrópolis</p>
              <p className="text-muted-foreground">2023 - Conclusão Prevista: 2027 | 6º período | C.R.: 8,17</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Ensino Médio Completo</h3>
              <p className="text-primary font-medium mb-2">Colégio Santa Mônica, São Gonçalo</p>
              <p className="text-muted-foreground">Concluído em 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Competências Profissionais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Proatividade</h3>
                <p className="text-muted-foreground">Sempre buscando novas oportunidades e desafios</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Pontualidade</h3>
                <p className="text-muted-foreground">Compromisso com prazos e responsabilidades</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Adaptação</h3>
                <p className="text-muted-foreground">Flexível e capaz de se adaptar a novos ambientes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Trabalho em Grupo</h3>
                <p className="text-muted-foreground">Colaborativo e comunicativo com o time</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Comunicação</h3>
                <p className="text-muted-foreground">Fácil comunicação e expressão de ideias</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Aprendizado Contínuo</h3>
                <p className="text-muted-foreground">Motivado e sempre em evolução</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 md:py-32 border-b border-border bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Objetivos Profissionais</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Adquirir experiência profissional, aprendendo sobre o mercado de trabalho e para aplicar e 
            ampliar meus conhecimentos acadêmicos, desenvolver habilidades práticas na área e contribuir 
            com dedicação e aprendizado constante.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Vamos Conversar</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia, 
                pesquisa e inovação. Sinta-se à vontade para entrar em contato comigo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:gabrielhps2005@gmail.com" className="text-primary hover:text-primary/80">
                    gabrielhps2005@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">📱</span>
                  <a href="tel:+5521985692790" className="text-primary hover:text-primary/80">
                    (21) 98569-2790
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Conecte-se Comigo</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/gabriel-santos-computacao/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-secondary/80 text-primary transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/gabrielengcomp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-secondary/80 text-primary transition-colors"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@GabrielHenrique-wz1xv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-secondary/80 text-primary transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 Gabriel Santos. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React + Tailwind CSS | Hospedado no Netlify</p>
        </div>
      </footer>
    </div>
  );
}
