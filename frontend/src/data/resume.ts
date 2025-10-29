import type { ResumeData } from '../types/resume';

// Contact methods - phone is conditionally compiled out in production
const contactMethods = [
  {
    type: 'email' as const,
    label: 'Email',
    value: 'thekylevenable@gmail.com',
    href: 'mailto:thekylevenable@gmail.com',
  },
  // Phone contact only in development - completely removed from production bundle
  ...(import.meta.env.DEV ? [{
    type: 'phone' as const,
    label: 'Phone',
    value: '(330) 573-5138',
    href: 'tel:+13305735138',
  }] : []),
  {
    type: 'location' as const,
    label: 'Location',
    value: 'Cuyahoga Falls, OH',
  },
];

export const resumeData: ResumeData = {
  profile: {
    name: 'Kyle Venable',
    title: 'Information Services Leader & Full-Stack Engineer',
    headline: 'Designing resilient platforms, automating operations, and shipping experiences that enable and delight users.',
    summary: [
      'Strategic technology leader with 13+ years orchestrating infrastructure, service-provider networks, application delivery, and high-availability systems for growth-minded organizations.',
      'Blends DevOps, observability, problem solving, leadership, and forward product thinking to craft intuitive tools and experiences for technical and non-technical teams while driving measurable impact.',
    ],
    location: 'Cuyahoga Falls, Ohio',
    contact: contactMethods,
  },
  projects: [
    {
      id: 'ops-orchestration-platform',
      name: 'Infrastructure Operations Platform',
      description:
        'Unified WordPress VPS cluster provisioning, third-party integrations, and customer automation into a single pane of glass for agency stakeholders.',
      impact:
        'Reduced manual deployment time from hours to minutes while improving reliability and transparency for non-engineering teams.',
      tags: ['Product Design', 'Automation', 'UX for Ops'],
    },
    {
      id: 'docker-runtime-suite',
      name: 'Composable Docker Runtime Suite',
      description:
        'Extended docker-compose with Python-based orchestration, enabling dynamic container customization and runtime decisioning for complex workloads.',
      impact: 'Unlocked advanced deployment topologies without introducing additional infrastructure tooling or licensing.',
      tags: ['Python', 'Docker SDK', 'DevOps'],
    },
    {
      id: 'etl-reporting-platform',
      name: 'ETL & Reporting Integration Platform',
      description:
        'Full-stack platform for customer and internal reporting with automated ETL pipelines integrating multiple third-party APIs for billing, auditing, and operational workflows.',
      impact: 'Eliminated manual data entry, reduced errors by 95%, and provided real-time insights enabling data-driven strategic decisions.',
      tags: ['React', 'FastAPI', 'MongoDB', 'RabbitMQ', 'Redis', 'ETL'],
    },
    {
      id: 'twitch-broadcast-platform',
      name: 'Twitch Broadcast & Engagement Platform',
      description:
        'Comprehensive streaming solution combining 24/7 video-on-demand pipeline with interactive viewer engagement tools. Features automated scheduling, real-time rendering with MoviePy/OpenCV, shader-based interstitials, and React-based chatbot with IoT-triggered experiences including RTSP camera controls.',
      impact: 'Scaled content programming across decade-long archive while driving community engagement through immersive, responsive interactions.',
      tags: ['React', 'FastAPI', 'Video Processing', 'Realtime UX', 'Automation'],
    },
  ],
  experience: [
    {
      id: 'freelance-software-engineer',
      title: 'Freelance Software Engineer',
      organization: 'Self Employed',
      location: 'Remote',
      start: 'Jun 2023',
      isCurrent: true,
      summary:
        'Partnering with agencies and creators to deliver bespoke automation platforms, streaming pipelines, and full-stack product experiences.',
      achievements: [
        {
          title:
            'Architected infrastructure management platform consolidating VPS provisioning, monitoring, and third-party integrations for non-technical users.',
        },
        {
          title:
            'Developed Python-based Docker orchestration suite extending docker-compose with dynamic runtime configuration and advanced container controls.',
        },
        {
          title:
            'Engineered 24/7 video-on-demand pipeline with automated scheduling, real-time rendering, and shader-driven interstitial generation.',
        },
        {
          title:
            'Built interactive Twitch chatbot and engagement tools with React, Tailwind, and FastAPI, integrating multiple Twitch APIs and IoT-triggered experiences.',
        },
        {
          title:
            'Launched role-based project management and time tracking application using React and FastAPI with secure authentication.',
        },
      ],
      tags: ['Product Architecture', 'Automation', 'FastAPI', 'React', 'Python'],
    },
    {
      id: 'director-information-services',
      title: 'Director of Information Services',
      organization: 'Aheliotech',
      location: 'Columbus, OH',
      start: 'Apr 2018',
      end: 'Sep 2025',
      summary:
        'Led multidisciplinary teams delivering reliable infrastructure, observability, and data-driven insights for a statewide technology provider.',
      achievements: [
        {
          title:
            'Managed high-availability Zabbix monitoring cluster overseeing 10k+ devices and processing 6k values per second.',
        },
        {
          title:
            'Implemented Grafana and ELK stack observability suites to provide real-time operational reporting and alerting.',
        },
        {
          title:
            'Designed ETL pipelines integrating multiple APIs to automate billing, auditing, and operational workflows.',
        },
        {
          title:
            'Built API gateway platform with FastAPI and nginx, reducing manual integration overhead and accelerating feature delivery.',
        },
        {
          title:
            'Delivered full-stack reporting platform using React, MongoDB, Redis, and Celery, enabling informed strategic decisions.',
        },
        {
          title:
            'Directed DevOps initiatives using Python, Bash, Rust, Ansible, and VMware vSphere to automate core operations.',
        },
        {
          title:
            'Oversaw VoIP department, aligning Asterisk, FreePBX, Microsoft Teams, and Session Border Controller (SBC) systems for resilient communications.',
        },
      ],
      tags: ['Leadership', 'Observability', 'DevOps', 'API Design'],
    },
    {
      id: 'chief-it-engineer',
      title: 'Chief IT Engineer',
      organization: 'Web Force Systems',
      location: 'Columbus, OH',
      start: 'Jun 2012',
      end: 'Apr 2018',
      summary:
        'Delivered network architecture, VoIP services, and managed deployments for SMB clients while mentoring technical teams.',
      achievements: [
        {
          title:
            'Designed and implemented metro Ethernet and fiber network servicing 100+ businesses with carrier-grade reliability.',
        },
        {
          title:
            'Engineered and maintained VoIP network with 2,000+ endpoints using Asterisk, FreePBX, FreeSWITCH, and Kamailio.',
        },
        {
          title:
            'Managed Cisco IOS infrastructure with complex BGP, OSPF, QoS, and VLAN configurations.',
        },
        {
          title:
            'Led technicians through full project lifecycle from pre-sales to implementation and support.',
        },
      ],
      tags: ['Networking', 'VoIP', 'Team Leadership'],
    },
    {
      id: 'research-associate',
      title: 'Research Associate',
      organization: 'Ohio University Avionics Engineering Center',
      location: 'Athens, OH',
      start: 'Sep 2010',
      end: 'May 2012',
      summary:
        'Supported NASA Langley NextGen Integrated Intelligent Flight Deck research with simulation and systems integration.',
      achievements: [
        {
          title:
            'Developed interface between flight simulator and simulation model using C# .NET and MATLAB/Simulink.',
        },
        {
          title:
            'Maintained Windows Server 2008 file server, Subversion version control, and Hyper-V virtualization environment.',
        },
      ],
      tags: ['Research', 'Simulation', 'Systems Integration'],
    },
  ],
  education: [
    {
      id: 'ohio-university',
      institution: 'Ohio University',
      location: 'Athens, OH',
      credential: 'Electrical Engineering & Computer Science Coursework',
      details: 'Focused on avionics systems, embedded development, and human factors within the NextGen flight deck program.',
    },
  ],
  skills: [
    {
      id: 'devops-platforms',
      name: 'DevOps & Platforms',
      items: [
        'CI/CD',
        'Microsoft Azure',
        'AWS',
        'GCP',
        'Docker',
        'Kubernetes',
        'MongoDB',
        'PostgreSQL',
        'MySQL/MariaDB',
        'Redis',
        'Celery',
        'Microsoft Graph API',
      ],
    },
    {
      id: 'ai-development',
      name: 'AI & Agentic Tools',
      items: [
        'Claude Code',
        'ChatGPT Codex',
        'RAG',
        'MCP',
        'AI-Assisted Development',
        'Prompt Engineering'
      ],
    },
    {
      id: 'languages-frameworks',
      name: 'Languages & Frameworks',
      items: [
        'Python',
        'React',
        'Node.js',
        'Golang',
        'Rust',
        'Bash',
        'PHP',
        'C# / .NET',
      ],
    },
    {
      id: 'automation-infra',
      name: 'Automation & Infrastructure',
      items: [
        'Ansible',
        'ETL & Integrations',
        'VMware vSphere',
        'Microsoft Hyper-V',
        'TrueNAS'
      ],
    },
    {
      id: 'observability',
      name: 'Monitoring & Observability',
      items: [
        'Zabbix',
        'Grafana',
        'Prometheus',
        'Loki',
        'Elasticsearch/Logstash/Kibana (ELK)',
        'Real-time Monitoring'
      ],
    },
    {
      id: 'networking',
      name: 'Networking & Telecom',
      items: [
        'Cisco IOS',
        'Juniper',
        'Ubiquiti',
        'BGP',
        'OSPF',
        'QoS',
        '802.1Q (VLAN)',
        'Metro Ethernet',
        'VoIP',
        'Session Border Controllers',
        'SIP',
      ],
    },
    {
      id: 'telephony-platforms',
      name: 'Telephony Platforms',
      items: [
        'Asterisk',
        'FreePBX',
        'FreeSWITCH',
        'Kamailio'
      ],
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems & Directory Services',
      items: [
        'Red Hat Enterprise Linux / CentOS / Rocky Linux',
        'Debian / Ubuntu',
        'FreeBSD',
        'Windows Server',
        'LDAP',
        'Microsoft Entra ID',
        'Windows Active Directory',
      ],
    },
  ],
};
