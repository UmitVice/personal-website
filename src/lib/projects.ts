export const projectCategoryLabels = {
  individual: "Individual Project",
  company: "Company Project",
} as const;

export interface Project {
  id: string;
  title: string;
  category: keyof typeof projectCategoryLabels;
  company: string | null;
  role: string;
  technologies: readonly string[];
  domains: readonly string[];
  /** Opening paragraph is the card summary; remaining paragraphs appear in the disclosure. */
  description: readonly [string, ...string[]];
  links: readonly { label: string; href: string }[];
  name?: string;
  image?: string;
  imageAlt?: string;
  tone?: string;
}

export const portfolioProjects: Project[] = [
  {
    "id": "evidencedesk",
    "name": "EvidenceDesk",
    "title": "EvidenceDesk | AI Support Copilot with Human Review",
    "category": "individual",
    "company": null,
    "role": "Independent Developer",
    "technologies": [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Cloudflare Workers AI"
    ],
    "domains": [
      "Retrieval-Augmented Generation",
      "Human-in-the-Loop AI"
    ],
    "description": [
      "I independently designed and built EvidenceDesk, an AI support copilot that turns a support ticket into a source-backed draft note for human review. The application connects document retrieval, structured AI responses and an explicit approval workflow in a complete web product.",
      "I developed the Python backend with FastAPI and a bounded LangGraph workflow, combining PostgreSQL full-text search with pgvector similarity search and reciprocal rank fusion. Cloudflare Workers AI provides embeddings and generation, while citation and quotation checks connect generated claims to the retrieved documentation.",
      "I built the Next.js and TypeScript interface for ticket analysis, source inspection, approval or rejection, and saved-note history. Session and tenant authorization restrict access to records. Approval saves the exact reviewed proposal in a database transaction, with retry handling designed to prevent duplicate notes; model output cannot directly execute a write.",
      "The project includes automated API, database and browser tests, CI/CD, and a published evaluation record that separates retrieval results from answer-quality assessment. EvidenceDesk is an independent portfolio demonstration using fictional support cases. Its evaluation documents limitations, and human review of semantic answer quality remains pending."
    ],
    "links": [
      {
        "label": "View Application",
        "href": "https://evidencedesk-web.vercel.app/"
      },
      {
        "label": "View Source Code",
        "href": "https://github.com/UmitVice/evidencedesk"
      },
      {
        "label": "Evaluation Record",
        "href": "https://evidencedesk-web.vercel.app/evaluations"
      }
    ],
    "image": "/projects/evidencedesk-preview.png",
    "imageAlt": "EvidenceDesk support copilot with sample tickets and a human review workflow",
    "tone": "green"
  },
  {
    "id": "vaniras",
    "name": "Vaniras",
    "title": "Vaniras | AI and Machine Learning Stock Forecasting",
    "category": "individual",
    "company": null,
    "role": "Independent Developer",
    "technologies": [
      "Python",
      "XGBoost",
      "Node.js",
      "Next.js",
      "TypeScript"
    ],
    "domains": [
      "AI / ML",
      "Financial Research"
    ],
    "description": [
      "I independently designed and developed Vaniras, an AI and machine learning project for stock forecasting and financial research. I owned the work from architecture and implementation through deployment and product delivery, connecting the forecasting workflows with a complete web application.",
      "The project brings together data processing, machine learning pipelines, model evaluation and forecast APIs. My work covered both the forecasting-related functionality and the application layers needed to make its outputs available through backend services and a user-facing product.",
      "I worked with Python and XGBoost for machine learning, Node.js for backend development, and Next.js with TypeScript for the web application. The engineering scope connected data workflows, model outputs, APIs and frontend implementation rather than treating the model and the interface as unrelated deliverables.",
      "Vaniras demonstrates independent product ownership across applied machine learning and full stack development, including architecture, integration, evaluation and deployment for a financial research product."
    ],
    "links": [
      {
        "label": "View Application",
        "href": "https://app.vaniras.com/"
      }
    ],
    "image": "/projects/vaniras-preview.png",
    "imageAlt": "Vaniras market intelligence product preview",
    "tone": "blue"
  },
  {
    "id": "life-world",
    "name": "Life World",
    "title": "Life World | Real Estate Marketplace",
    "category": "individual",
    "company": null,
    "role": "Independent Developer",
    "technologies": [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "MongoDB"
    ],
    "domains": [
      "Real Estate",
      "Marketplace"
    ],
    "description": [
      "I independently developed Life World, a real estate marketplace focused on property discovery and a clear browsing experience. The product brings property information, search and listing presentation into a single application, helping visitors explore homes and compare the details that matter to them.",
      "I worked with Next.js, JavaScript, TypeScript and MongoDB, connecting the web interface with the application's property data. My contribution combined application implementation with the presentation of structured information, including property details and the browsing flows around them.",
      "The public experience supports searching by location and property type and presents listing information such as images, amenities and pricing. The product connects the initial browsing experience with the detailed information visitors use to compare individual properties.",
      "Life World demonstrates my independent work across a database-backed web product, from the application structure and data integration to the user-facing experience. It complements Vaniras by showing full stack development in a marketplace setting rather than a machine learning product."
    ],
    "links": [
      {
        "label": "View Application",
        "href": "https://life-world.vercel.app/"
      }
    ],
    "image": "/projects/life-world-preview.png",
    "imageAlt": "Life World real estate marketplace product preview",
    "tone": "green"
  },
  {
    "id": "bolt-insight",
    "title": "Bolt Insight | Market Research and AI Products",
    "category": "company",
    "company": "Bolt Insight",
    "role": "Software Engineer",
    "technologies": [
      "Python"
    ],
    "domains": [
      "AI Integration",
      "Full Stack Development"
    ],
    "description": [
      "I worked as a Software Engineer on customer-facing market research and AI web products at Bolt Insight. My contribution covered frontend development, backend functionality, AI integrations and application data flows, together with performance work and production delivery.",
      "I contributed across the interface and the services supporting it, connecting user-facing functionality with backend behavior and AI capabilities. Python development was also part of my engineering work at the company. This scope involved multiple connected application layers rather than only a standalone interface or an isolated integration.",
      "The work brought applied AI integration into a commercial web-product environment. My contribution concerned the implementation and connection of the product's functionality, including how data and AI-related capabilities became part of the customer-facing application.",
      "I also worked on application performance and production delivery. Together, these responsibilities demonstrate hands-on full stack engineering within AI-enabled research products, covering implementation, integration and delivery across the application experience and its supporting functionality."
    ],
    "links": [
      {
        "label": "Company and Product Overview",
        "href": "https://www.boltinsight.com/"
      }
    ]
  },
  {
    "id": "marti",
    "title": "Marti Technologies | Trip Share, Web and Mobile Platforms",
    "category": "company",
    "company": "Marti Technologies",
    "role": "Team Lead and Software Engineer",
    "technologies": [
      "React Native",
      "Python",
      "Android Studio",
      "WebView",
      "iOS",
      "Android"
    ],
    "domains": [
      "Mobility",
      "Real-Time Systems"
    ],
    "description": [
      "At Marti Technologies, I combined team leadership with hands-on software engineering across high-traffic mobility products. My work included Trip Share and the wider application ecosystem, spanning web applications, mobile WebView experiences, CRM systems, administration panels, backend functionality and real-time systems.",
      "The scope covered customer-facing mobility experiences and the operational software supporting them. I remained involved in development while carrying team leadership responsibilities, working across connected parts of the product environment rather than presenting the role as management alone.",
      "My mobile development experience included React Native and Android Studio, with work on applications for both iOS and Android. I also contributed to WebView experiences, connecting web development with the mobile application environment. Python development formed part of my wider engineering work at Marti.",
      "Beyond the mobile interfaces, my responsibilities included operational applications and production work. This project portfolio brings together team leadership, full stack engineering and mobile development in a high-traffic mobility setting, with contributions across both the customer experience and the software supporting day-to-day operations."
    ],
    "links": [
      {
        "label": "Company Website",
        "href": "https://www.marti.tech/"
      },
      {
        "label": "iOS Application",
        "href": "https://apps.apple.com/us/app/marti-tag-scooter/id1454358771"
      },
      {
        "label": "Android Application",
        "href": "https://play.google.com/store/apps/details?id=com.martitech.marti"
      }
    ]
  },
  {
    "id": "vodafone",
    "title": "Vodafone | Enterprise, Ecommerce and Mobile Products",
    "category": "company",
    "company": "Vodafone",
    "role": "Software Engineer",
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "REST APIs"
    ],
    "domains": [
      "Enterprise",
      "iOS / Android"
    ],
    "description": [
      "I worked as a Software Engineer on enterprise, ERP, ecommerce and mobile product experiences associated with Vodafone. The portfolio included Vodafone Yanımda, cryptocurrency-related product experiences, and application delivery across web, iOS and Android.",
      "My web development work used React, Next.js and TypeScript, with PostgreSQL and REST APIs forming part of the application stack. I contributed to software implementation and integrations across enterprise and customer-facing products, working with interfaces, application data and connected services.",
      "The engineering scope combined frontend development with database-backed application functionality and API integration. My contribution connected the presentation layer with the application data and services behind it, bringing together the different parts of a working web product.",
      "The wider work also included mobile application delivery for iOS and Android. Public references include Vodafone Business Red Konsol and Vodafone Yanımda. Across these product contexts, my experience spans enterprise application development, ecommerce interfaces, API integration and mobile delivery."
    ],
    "links": [
      {
        "label": "Red Konsol Product Page",
        "href": "https://www.vodafone.com.tr/vodafone-business/red-konsol"
      },
      {
        "label": "Vodafone Yanımda on iOS",
        "href": "https://apps.apple.com/tr/app/vodafone-yan%C4%B1mda/id489845659?l=tr"
      },
      {
        "label": "Vodafone Yanımda on Android",
        "href": "https://play.google.com/store/apps/details?id=com.vodafone.selfservis"
      }
    ]
  },
  {
    "id": "hb-campaign-panel",
    "title": "HB Campaign Panel | Enterprise Campaign Management",
    "category": "company",
    "company": "Vodafone",
    "role": "Software Engineer",
    "technologies": [
      "React",
      "Next.js",
      "PostgreSQL"
    ],
    "domains": [
      "Campaign Management"
    ],
    "description": [
      "I developed HB Campaign Panel, an internal enterprise campaign-management application at Vodafone. My work covered implementation using React, Next.js and PostgreSQL, connecting a web interface with the application’s database-backed functionality.",
      "This project forms a distinct part of my Vodafone work alongside the broader enterprise, ecommerce and mobile portfolio."
    ],
    "links": []
  },
  {
    "id": "ai-planety",
    "title": "Talent500 | AI Planety",
    "category": "company",
    "company": "Talent500",
    "role": "Software Engineer | End-to-End Product Ownership",
    "technologies": [],
    "domains": [
      "AI SaaS",
      "Full Stack Development",
      "Product Ownership"
    ],
    "description": [
      "I independently developed AI Planety within my Software Engineer role at Talent500, taking responsibility for the product from initial implementation through delivery. This AI SaaS company project gave me end-to-end ownership across the application's engineering and delivery lifecycle.",
      "My responsibilities covered requirements, software architecture, frontend and backend development, integrations and application data flows. The scope involved delivering a complete application and connecting its different layers rather than contributing only an isolated feature or a single part of the interface.",
      "I also handled debugging, testing, deployment, iteration and production support. This extended my ownership beyond the first implementation into the work needed to deliver and support the product.",
      "AI Planety demonstrates product-level responsibility within an engineering role, combining architecture, implementation, integration and production delivery. Alongside this project, my broader Talent500 experience included international HR technology, third-party integrations, a React to Next.js migration and Python development."
    ],
    "links": [
      {
        "label": "Talent500 Website",
        "href": "https://talent500.com/"
      }
    ]
  },
  {
    "id": "canvas",
    "title": "Talent500 | HR Technology and React to Next.js Migration",
    "category": "company",
    "company": "Talent500",
    "role": "Software Engineer",
    "technologies": [
      "React",
      "Next.js"
    ],
    "domains": [
      "HR Technology",
      "Migration"
    ],
    "description": [
      "I contributed to international HR technology products at Talent500 as a Software Engineer, including web application development, third-party integrations and a React to Next.js migration for the Canvas project. This work brought application modernization and integration into an existing commercial web-product environment.",
      "The migration work involved application modernization within an existing web-product environment. My contribution connected React development with the transition to Next.js, alongside work integrating external services into the wider product. The scope brought frontend implementation and third-party integration together within international HR technology applications.",
      "This work complements the separate AI Planety project by showing experience with an established HR technology application as well as independently delivered product functionality. My wider engineering experience at Talent500 also included Python development.",
      "Public references for the wider HR technology portfolio include Talent500 and the Hy Vee Experience portal. Together, this work demonstrates hands-on application development, framework migration and integration experience in a commercial HR software environment."
    ],
    "links": [
      {
        "label": "Canvas Portal (login required)",
        "href": "https://canvas.talent500.co/"
      },
      {
        "label": "Talent500 Website",
        "href": "https://talent500.com/"
      },
      {
        "label": "Hy Vee Experience Portal (login required)",
        "href": "https://hyvee.talent500.co/experience/login"
      }
    ]
  },
  {
    "id": "optimus",
    "title": "Optimus Software | Trading, Investment and Mobile Platforms",
    "category": "company",
    "company": "Optimus Software",
    "role": "Team Lead and Software Engineer",
    "technologies": [
      "React",
      "React Native",
      "Node.js",
      "Python",
      "MongoDB",
      "REST APIs",
      "Android Studio",
      "iOS",
      "Android"
    ],
    "domains": [
      "Trading",
      "Investment"
    ],
    "description": [
      "At Optimus Software, I combined team leadership with hands-on software engineering across high-traffic trading platforms, investment websites and mobile applications. My work spanned frontend and backend development, third-party integrations and mobile delivery across the company's client portfolio.",
      "I contributed to web trading experiences for ING Yatırım and PhillipCapital. Across the broader portfolio, I worked with React, Node.js, MongoDB and REST APIs, connecting application interfaces with backend functionality, data and external services. Python development was also part of my engineering experience at Optimus.",
      "My mobile work included React Native development for iOS and Android, with Android Studio used in the development workflow. These contributions covered the wider client portfolio, extending my work beyond trading and investment-related web experiences into cross-platform mobile application delivery.",
      "I remained directly involved in implementation while carrying team leadership responsibilities. This experience brings together practical full stack engineering, mobile application development and technical team leadership in financial and client-product environments, with contributions across web interfaces, backend functionality and mobile applications."
    ],
    "links": [
      {
        "label": "Optimus Client References",
        "href": "https://obt.com.tr/en/referanslarimiz/"
      },
      {
        "label": "ING Yatırım Client Reference",
        "href": "https://www.ingyatirim.com.tr/"
      },
      {
        "label": "PhillipCapital Client Reference",
        "href": "https://www.phillipcapital.com.tr/"
      }
    ]
  }
];

export const individualProjects = portfolioProjects.filter((project) => project.category === "individual");
export const projects = portfolioProjects.filter((project) => project.category === "company");
