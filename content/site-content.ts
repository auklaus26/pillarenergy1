import type { Route } from "next";

export type NavItem = {
  href: Route;
  label: string;
};

export type ServiceItem = {
  id: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type ProjectItem = {
  reference: string;
  title: string;
  category: string;
  capacity: string;
  status: string;
  note: string;
};

export const siteConfig = {
  companyName: "Pillar Energy",
  legalName: "WYNNSEAS GLOBAL PTY LTD",
  email: "info@pillarenergy.com.au",
  location: "Melbourne, Australia",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[],
  footerLegal: "A brand by WYNNSEAS GLOBAL PTY LTD.",
  contactCategories: [
    "New Infrastructure Project",
    "System Planning",
    "System Maintenance",
    "Operational Support",
    "General Enquiry"
  ],
  services: [
    {
      id: "solar",
      label: "Section 4.1",
      title: "Solar & Battery Systems",
      summary:
        "Planning and delivery for residential, commercial, and project-based systems with a focus on suitability, integration, and long-term performance.",
      bullets: [
        "Residential systems",
        "Commercial systems",
        "Project-based applications"
      ]
    },
    {
      id: "storage",
      label: "Section 4.2",
      title: "Energy Storage Solutions",
      summary:
        "Stand-alone battery systems, hybrid solar plus battery systems, and future-ready configurations designed for long-term operation and compliance.",
      bullets: [
        "Stand-alone battery systems",
        "Hybrid solar + battery systems",
        "Future-ready configurations"
      ]
    },
    {
      id: "electrical",
      label: "Section 4.3",
      title: "Electrical Installations",
      summary:
        "Residential and commercial electrical works delivered with compliance to Australian regulations as the baseline standard.",
      bullets: [
        "Residential electrical installations",
        "Commercial electrical installations",
        "Energy-related electrical works"
      ]
    },
    {
      id: "projects",
      label: "Section 4.4",
      title: "Project-Based Energy Services",
      summary:
        "Feasibility studies, system planning, technical coordination, and partner-based delivery for broader project structures.",
      bullets: [
        "Feasibility studies",
        "System planning",
        "Technical coordination"
      ]
    }
  ] satisfies ServiceItem[],
  planningProjects: [
    {
      reference: "PLAN-001",
      title: "Residential Energy System Planning",
      category: "Solar + Battery",
      capacity: "Custom scalable",
      status: "Planning",
      note: "Status-level presentation only"
    },
    {
      reference: "PLAN-002",
      title: "Small Commercial Energy Storage Planning",
      category: "Battery Storage",
      capacity: "50kWh - 150kWh",
      status: "Planning",
      note: "Status-level presentation only"
    }
  ] satisfies ProjectItem[],
  chinese: {
    title: "立于根基，行至久远",
    intro:
      "PILLAR ENERGY 是由 WYNNSEAS GLOBAL PTY LTD 运营的澳大利亚能源服务品牌，专注于以系统结构、合规标准与长期运行能力为基础的能源解决方案。",
    philosophy:
      "我们相信真正可靠的能源系统建立在稳固结构之上，而不是建立在短期趋势之上。",
    services: [
      "太阳能与储能系统",
      "能源存储解决方案",
      "住宅及商业电气安装",
      "项目型能源系统支持"
    ],
    contact:
      "欢迎通过官网表单或邮箱与我们联系，我们将以项目化方式进行评估与回复。"
  }
};
