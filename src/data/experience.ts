import type { ExperienceCase } from "@/types"

/**
 * Cases de trabalho profissional.
 *
 * COMO EDITAR:
 * - `summary` aparece no card; `problem`/`solution`/`highlights` só no detalhe.
 * - `restricted: true` marca link de repositório privado — o card avisa antes do clique.
 * - Screenshots vão em `public/figma/assets/cases/`. Se o arquivo não existir,
 *   o card cai para um placeholder estilizado (não quebra o layout).
 * - Revise `period` e `role` conforme sua atuação real em cada entrega.
 */
export const experience: ExperienceCase[] = [
  {
    id: "modo-massiva",
    title: "Modo Massiva",
    subtitle: "Central de Comunicados",
    company: "Sirius Development",
    period: "Jul / 2026",
    role: "Interface do zero + fluxo de automação",
    summary:
      "Painel interno para avisar, de uma vez só, todos os clientes afetados por uma queda ou manutenção — com seleção geográfica em cascata, prévia do que o cliente recebe e transmissão automatizada via n8n.",
    problem:
      "Quando uma ocorrência derrubava uma região inteira, o time de suporte avisava cliente por cliente, manualmente. O aviso demorava, saía com texto diferente a cada atendente e ninguém conseguia dizer quem já tinha sido notificado.",
    solution:
      "Criei a tela inteira do zero e liguei ela a um fluxo n8n que faz o disparo em massa. O operador escreve o comunicado (ou puxa um modelo salvo), escolhe as regiões afetadas, confere a prévia exata da mensagem e ativa a transmissão — acompanhando o status por ali mesmo.",
    highlights: [
      "Seleção geográfica em cascata: cidade → bairro → rua, com o próximo nível bloqueado até o anterior ser escolhido.",
      "Modelos de comunicado salvos e reutilizáveis, para padronizar o texto entre atendentes.",
      "Prévia em tempo real do que o cliente vai receber, antes de qualquer disparo.",
      "Estado de transmissão explícito (Em espera / Transmitindo) e histórico de comunicados enviados.",
      "Fluxo n8n orquestrando o envio em massa, desacoplado da interface.",
      "Onboarding embutido em 3 passos, para o atendente aprender a tela sem treinamento.",
    ],
    stack: ["TypeScript", "n8n", "WhatsApp API", "HTML", "CSS", "Socket.io"],
    image: "./figma/assets/cases/modo-massiva.png",
    imageAlt:
      "Painel Modo Massiva: campo de mensagem, seletores de cidade, bairro e rua, prévia do comunicado e botão Ativar.",
    links: [
      {
        label: "Branch de desenvolvimento",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/tree/claude/massiva-html-interface-vnw0jc",
        kind: "repo",
        restricted: true,
      },
    ],
    featured: true,
  },
  {
    id: "painel-cobrancas",
    title: "Painel de Cobranças",
    subtitle: "Disparo ativo, campanhas, templates e histórico",
    company: "Sirius Development",
    period: "Dez / 2025 — Abr / 2026",
    role: "Front-end das telas principais do produto",
    summary:
      "Construí as telas centrais do produto de cobrança: disparo ativo, criação de campanhas, editor de templates e histórico de envios — do roteamento à integração com a API.",
    problem:
      "O produto precisava sair de um back-end funcional para uma interface que o time de cobrança conseguisse operar sozinho, sem depender de chamada no banco ou de suporte técnico para cada disparo.",
    solution:
      "Entreguei as páginas em sequência ao longo de quatro sprints, cada uma como um PR revisado: rotas e disparo ativo, histórico, criação e listagem de templates, página de campanhas e o modal de campanha. Depois voltei para as correções de sprint e ajustes de fluxo apontados em uso real.",
    highlights: [
      "Página de disparo ativo, incluindo a criação das rotas do front.",
      "Editor de criação e listagem de templates de mensagem.",
      "Página de campanhas com modal de criação.",
      "Histórico de envios com filtros para auditoria do que foi disparado.",
      "Duas rodadas de correções detalhadas pós-sprint, a partir de feedback de uso.",
    ],
    stack: ["React", "TypeScript", "Vite", "Chakra UI", "React Query", "Socket.io-client"],
    links: [
      {
        label: "PR #9 · Disparo ativo",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/9",
        kind: "pr",
        restricted: true,
      },
      {
        label: "PR #38 · Campanhas",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/38",
        kind: "pr",
        restricted: true,
      },
      {
        label: "PR #67 · Templates e histórico",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/67",
        kind: "pr",
        restricted: true,
      },
    ],
  },
  {
    id: "integracao-erp",
    title: "Integração com ERPs de provedor",
    subtitle: "MK Solutions, Proxer e IXC",
    company: "Sirius Development",
    period: "Jun / 2026 — Jul / 2026",
    role: "Integração e correção de sincronismo",
    summary:
      "Conectei o sistema de cobrança aos ERPs usados por provedores de internet, para que a base de clientes e os títulos vencidos chegassem sozinhos — sem planilha no meio.",
    problem:
      "Cada provedor usa um ERP diferente. Sem integração, a lista de inadimplentes era exportada e importada na mão, o que atrasava a régua de cobrança e deixava clientes já pagos recebendo mensagem.",
    solution:
      "Implementei a integração com MK e Proxer, corrigi o sincronismo de clientes vencidos que trazia registros inconsistentes, e tratei a geração de PIX no disparo de campanha via IXC.",
    highlights: [
      "Integração MK Solutions e Proxer para importação da base de clientes.",
      "Correção do sincronismo de clientes vencidos, que gerava cobrança indevida.",
      "Tratamento do PIX no disparo de campanha via IXC.",
    ],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Redis", "REST"],
    links: [
      {
        label: "PR #73 · Integração MK/Proxer",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/73",
        kind: "pr",
        restricted: true,
      },
      {
        label: "PR #74 · Sync clientes vencidos",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/74",
        kind: "pr",
        restricted: true,
      },
      {
        label: "PR #80 · PIX no disparo",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/80",
        kind: "pr",
        restricted: true,
      },
    ],
  },
  {
    id: "multi-empresa",
    title: "Acesso multi-empresa",
    subtitle: "Role super_admin",
    company: "Sirius Development",
    period: "Mai / 2026",
    role: "Back-end e controle de acesso",
    summary:
      "Adicionei um nível de acesso acima do administrador comum, permitindo operar várias empresas na mesma instância sem misturar dados entre elas.",
    problem:
      "O sistema era multi-tenant, mas não existia um perfil capaz de transitar entre empresas. Dar suporte a um cliente exigia credencial daquela empresa específica.",
    solution:
      "Criei a role `super_admin` com escopo acima do tenant, mantendo o isolamento de dados intacto para os demais perfis — o dado de uma empresa continua invisível para a outra.",
    highlights: [
      "Nova role com escopo cross-tenant, sem afastar o isolamento existente.",
      "Ajuste das guards e do filtro de consultas por empresa.",
    ],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "RBAC"],
    links: [
      {
        label: "PR #69 · Role super_admin",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/69",
        kind: "pr",
        restricted: true,
      },
    ],
  },
  {
    id: "notificame",
    title: "Notificame",
    subtitle: "Múltiplos números e relatório de erros",
    company: "Sirius Development",
    period: "Jun / 2026",
    role: "Back-end e observabilidade",
    summary:
      "Habilitei o envio por vários números de WhatsApp e criei o relatório que mostra, por mensagem, o que falhou e por quê.",
    problem:
      "Com um número só, o volume de disparo esbarrava em limite de envio. E quando uma mensagem não chegava, não havia como saber se o problema era o número, o cliente ou a API.",
    solution:
      "Adicionei suporte a múltiplos números na integração e construí um relatório de erro que expõe a falha por mensagem, transformando 'não chegou' em uma causa identificável.",
    highlights: [
      "Suporte a múltiplos números de origem no disparo.",
      "Relatório de erro por mensagem, com a causa da falha.",
      "Correção de acentuação e ortografia nos textos de UI do produto.",
    ],
    stack: ["NestJS", "WhatsApp API", "Chatwoot", "Webhooks", "Redis"],
    links: [
      {
        label: "PR #70 · Múltiplos números",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/70",
        kind: "pr",
        restricted: true,
      },
      {
        label: "PR #75 · Relatório de erros",
        url: "https://github.com/SiriusDevelopment-SDA/project-charge/pull/75",
        kind: "pr",
        restricted: true,
      },
    ],
  },
]
