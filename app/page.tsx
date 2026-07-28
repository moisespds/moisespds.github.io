const projects = [
  {
    index: "01",
    title: "Smart Piggy",
    type: "Backend · SaaS financeiro",
    description:
      "Plataforma de gestão financeira em desenvolvimento para aplicar modelagem de domínio, APIs REST e arquitetura em camadas.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    status: "Em desenvolvimento",
  },
  {
    index: "02",
    title: "Planeja",
    type: "Mobile · Produtividade",
    description:
      "Aplicativo multiplataforma de tarefas e listas de compras com dados separados por usuário, persistência local e testes automatizados.",
    stack: ["React Native", "Expo", "TypeScript"],
    status: "Repositório privado",
  },
  {
    index: "03",
    title: "Slack Tickets",
    type: "Mobile · Ingressos",
    description:
      "Experiência mobile de descoberta de eventos, checkout demonstrativo e carteira local de ingressos.",
    stack: ["React Native", "Expo", "AsyncStorage"],
    status: "Projeto de portfólio",
    href: "https://github.com/moisespds/Slack-Tickets",
  },
  {
    index: "04",
    title: "Internet Video Downloader",
    type: "Backend · Processamento de mídia",
    description:
      "Aplicação web self-hosted que integra Django, yt-dlp e FFmpeg para obtenção e processamento de mídia.",
    stack: ["Python", "Django", "Docker"],
    status: "Código público",
    href: "https://github.com/moisespds/video-downloader",
  },
  {
    index: "05",
    title: "Knowledge",
    type: "Full stack · Formação",
    description:
      "Plataforma de artigos criada durante a formação Web Moderno, com autenticação, categorias hierárquicas e painel administrativo.",
    stack: ["Vue.js", "Node.js", "PostgreSQL"],
    status: "Projeto de formação",
  },
];

const capabilities = [
  {
    code: "BE",
    title: "Backend",
    text: "Java, Spring Boot, APIs REST, Python, Node.js e modelagem de dados.",
  },
  {
    code: "DB",
    title: "Dados",
    text: "PostgreSQL, MongoDB, SQL, persistência e integração entre aplicações.",
  },
  {
    code: "OP",
    title: "Produção",
    text: "Linux, Zabbix, redes, observabilidade e sustentação de ambientes críticos.",
  },
  {
    code: "EN",
    title: "Engenharia",
    text: "Git, arquitetura em camadas, solução de problemas e evolução contínua.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          MP<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
        </nav>
        <a className="header-cta" href="mailto:m.pradodasilva@gmail.com">
          Vamos conversar
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Backend Software Engineer
          </p>
          <h1>
            Código confiável.
            <br />
            <em>Sistemas que sustentam.</em>
          </h1>
          <p className="hero-text">
            Desenvolvedor com foco em Java e APIs REST, combinando engenharia de
            software com experiência real em infraestrutura, observabilidade e
            ambientes de alta disponibilidade.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Explorar projetos <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button secondary"
              href="https://github.com/moisespds"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="terminal-card" aria-label="Resumo técnico">
          <div className="terminal-top">
            <span />
            <span />
            <span />
            <small>moises@backend</small>
          </div>
          <div className="terminal-body">
            <p>
              <b>$</b> profile --current
            </p>
            <dl>
              <div>
                <dt>focus</dt>
                <dd>&quot;Java Backend&quot;</dd>
              </div>
              <div>
                <dt>building</dt>
                <dd>&quot;Smart Piggy&quot;</dd>
              </div>
              <div>
                <dt>background</dt>
                <dd>&quot;Critical Systems&quot;</dd>
              </div>
              <div>
                <dt>status</dt>
                <dd className="available">&quot;Open to opportunities&quot;</dd>
              </div>
            </dl>
            <p className="cursor-line">
              <b>$</b> <span className="cursor" />
            </p>
          </div>
        </aside>

        <div className="hero-rail" aria-hidden="true">
          <span>JAVA</span>
          <span>SPRING</span>
          <span>REST</span>
          <span>POSTGRESQL</span>
          <span>LINUX</span>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="section-label">
          <span>01</span>
          <p>Sobre</p>
        </div>
        <div className="about-content">
          <h2>
            Do ambiente crítico
            <br />
            ao <em>código de produção.</em>
          </h2>
          <div className="about-grid">
            <p>
              Sou formado em Redes de Computadores pela FATEC Bauru e atuo na
              TV TEM com sustentação de sistemas audiovisuais e infraestrutura
              de alta disponibilidade.
            </p>
            <p>
              Essa base me ensinou a investigar falhas, trabalhar sob pressão e
              pensar além da funcionalidade: desempenho, estabilidade e
              continuidade também fazem parte de um bom software.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities section" aria-labelledby="cap-title">
        <div className="section-label">
          <span>02</span>
          <p id="cap-title">Competências</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.code}>
              <span className="cap-code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <div className="section-label">
            <span>03</span>
            <p>Projetos selecionados</p>
          </div>
          <h2>
            Engenharia aplicada
            <br />
            a <em>problemas reais.</em>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const content = (
              <>
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span className="project-description">
                    {project.description}
                  </span>
                </div>
                <ul aria-label={`Tecnologias do ${project.title}`}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-status">
                  <span>{project.status}</span>
                  <b aria-hidden="true">{project.href ? "↗" : "—"}</b>
                </div>
              </>
            );

            return project.href ? (
              <a
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                {content}
              </a>
            ) : (
              <article className="project-row" key={project.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience section" id="experiencia">
        <div className="section-label">
          <span>04</span>
          <p>Experiência</p>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-date">11/2025 — Atual</div>
            <div>
              <p>TV TEM · Bauru</p>
              <h3>Técnico em Sistemas Audiovisuais</h3>
              <span>
                Sustentação de ambientes críticos, monitoramento com Zabbix,
                troubleshooting de redes e continuidade de serviços para mais
                de 155 cidades e 65 estações.
              </span>
            </div>
          </article>
          <article>
            <div className="timeline-date">03/2024 — 10/2025</div>
            <div>
              <p>TV TEM · Bauru</p>
              <h3>Estagiário de Suporte de TI</h3>
              <span>
                Active Directory, monitoramento, suporte a sistemas e manutenção
                preventiva, contribuindo para reduzir falhas críticas de
                equipamentos em 35%.
              </span>
            </div>
          </article>
          <article>
            <div className="timeline-date">Conclusão 12/2025</div>
            <div>
              <p>FATEC Bauru</p>
              <h3>Tecnólogo em Redes de Computadores</h3>
              <span>
                Formação em redes, Linux, segurança, bancos de dados e
                fundamentos de desenvolvimento de software.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section">
        <p className="eyebrow">
          <span /> Próximo desafio
        </p>
        <h2>
          Vamos construir algo
          <br />
          <em>que precisa funcionar?</em>
        </h2>
        <p>
          Estou aberto a oportunidades em desenvolvimento backend, full stack e
          times que valorizem aprendizado, responsabilidade e qualidade técnica.
        </p>
        <a className="contact-email" href="mailto:m.pradodasilva@gmail.com">
          m.pradodasilva@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#inicio">
          MP<span>.</span>
        </a>
        <p>Projetado e construído com intenção · Bauru, SP</p>
        <div>
          <a
            href="https://linkedin.com/in/moisespradodev"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/moisespds"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
