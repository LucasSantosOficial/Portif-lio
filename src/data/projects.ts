import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "contratos",
    title: "Gerador de Contratos",
    description:
      "Aplicação web para emissão automatizada de contratos a partir de campos preenchidos. Foco em produtividade do time administrativo.",
    url: "https://lucassantosoficial.github.io/Projeto_Emissao_Contratos/",
    tags: ["JavaScript", "HTML", "CSS", "Automação"],
    highlight: true,
  },
  {
    id: "certificados",
    title: "Gerador de Certificados",
    description:
      "Ferramenta para gerar certificados em lote a partir de uma lista de participantes — exporta direto para PDF.",
    url: "https://lucassantosoficial.github.io/certificados-site/",
    tags: ["JavaScript", "Canvas", "PDF"],
  },
  {
    id: "certificados-corrida",
    title: "Certificados / Corrida",
    description:
      "Variação especializada do gerador de certificados, voltada para eventos esportivos com layout próprio.",
    url: "https://lucassantosoficial.github.io/Certificado_Corridas/",
    tags: ["JavaScript", "Eventos", "PDF"],
  },
  {
    id: "cha",
    title: "Chá de Panela Interativo",
    description:
      "Site temático para um chá de panela com mecânica de escolha de presentes e mensagens — UX divertida e responsiva.",
    url: "https://lucassantosoficial.github.io/cha-de-panela-site/",
    tags: ["HTML", "CSS", "Interação"],
  },
  {
    id: "qrcode",
    title: "Tempo Juntos",
    description:
      "Página personalizada com contador em tempo real, gerada via QRCode. Projeto criativo para datas marcantes.",
    url: "https://lucassantosoficial.github.io/QRCODE/",
    tags: ["JavaScript", "Date API", "Design"],
  },
  {
    id: "garage",
    title: "Soma Mecânica RP",
    description:
      "Calculadora dedicada a uma comunidade de RP — soma valores de serviços mecânicos com persistência local.",
    url: "https://lucassantosoficial.github.io/garage_finance/",
    tags: ["JavaScript", "LocalStorage", "Comunidade"],
  },
]
