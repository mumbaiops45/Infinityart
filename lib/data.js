export const C = {
  blue: "#1e4d8c",
  blueHover: "#163d70",
  steel: "#4a7ab5",
  steelLight: "#6a9fd8",
  bluePale: "#e8f0fb",
  white: "#ffffff",
  offWhite: "#f7f9fc",
  gray50: "#f0f5fb",
  gray100: "#e2eaf5",
  gray200: "#c8d8ed",
  gray400: "#8aa3c0",
  gray600: "#4a6380",
  gray800: "#1e2e42",
  text: "#1a2e44",
  muted: "#5a7590",
  border: "#dce8f5",
  success: "#22c55e",
};

export const SERVICES = [
  { slug: "project-management", icon: "🏗", title: "Project Management", image: "/assets/projectMang.jpg" , short: "End-to-end project oversight from concept to commissioning.", desc: "We provide comprehensive project management services covering the entire lifecycle — from initial planning and design coordination to construction supervision and final handover. Our team ensures every milestone is met with precision and every stakeholder is aligned.", benefits: ["Integrated project scheduling & monitoring","Stakeholder communication management","Progress reporting & dashboards","Change management & documentation"] },
  { slug: "quality-management", icon: "✅", title: "Quality Management", image: "/assets/qualitymang.webp", short: "Rigorous quality control frameworks across all project phases.", desc: "Our quality management systems follow internationally recognised standards and are tailored to each project's needs. We embed quality at every stage — from material procurement to final inspection — ensuring zero compromise on standards.", benefits: ["Quality assurance plans & audits","Material testing & inspection","Non-conformance reporting","Continuous improvement reviews"] },
  { slug: "cost-management", icon: "💰", title: "Cost Management",image: "/assets/constmange.webp", short: "Precise estimating, budgeting, and cost control throughout.", desc: "We deploy robust cost management frameworks that provide complete financial visibility from day one. Our team tracks every rupee, identifies savings opportunities, and ensures the project is delivered within the approved budget.", benefits: ["Detailed quantity surveying & BOQs","Budget vs. actual tracking","Value engineering recommendations","Cash flow forecasting"] },
  { slug: "contract-management", icon: "📋", title: "Contract Management", image: "/assets/contract.webp", short: "BOQ preparation, tendering, and vendor procurement services.", desc: "From tender preparation to final account settlement, our contract management team handles the entire contractual lifecycle. We protect our clients' interests through robust contract frameworks and proactive vendor management.", benefits: ["Tender document preparation","Contractor prequalification","Bill checking & certification","Final account settlement"] },
  { slug: "risk-management", icon: "⚠️", title: "Risk Management", image: "/assets/Riskmanagemt.png", short: "Proactive identification and mitigation of project risks.", desc: "Our structured risk management approach identifies potential threats early and builds mitigation strategies before they impact the project. We maintain a live risk register and conduct regular reviews throughout construction.", benefits: ["Risk identification workshops","Risk register maintenance","Mitigation strategy development","Insurance & compliance advisory"] },
  {
  slug: "dispute-adjudication-proceedings",
  icon: "⚖️",
  title: "Dispute Adjudication Proceedings",
  image: "/assets/dba.jpg",
  short: "Structured, time-bound resolution of construction disputes.",
  desc: "We provide professional dispute adjudication support to resolve contractual conflicts efficiently and fairly. From claim preparation and delay analysis to representation before Dispute Adjudication Boards (DAB), our team ensures your rights are protected while minimizing project disruption. Our structured approach helps maintain cash flow stability and contractual clarity throughout the project lifecycle.",
  benefits: [
    "Contractual claim analysis & strategy development",
    "Extension of Time (EOT) & delay analysis",
    "Loss & expense / quantum assessment",
    "Representation before Dispute Adjudication Boards (DAB)",
    "Settlement negotiation & advisory support"
  ]
},
  { slug: "material-management", icon: "📦", title: "Material Management", image: "/assets/materialMang.jpg", short: "Streamlined procurement and control of materials.", desc: "We manage the entire material supply chain — from vendor identification and purchase orders to site delivery and inventory control. Our systems ensure materials are available when needed, at the right price and quality.", benefits: ["Material procurement planning","Vendor identification & evaluation","Inventory tracking & reconciliation","Wastage control & reporting"] },
];

export const PROJECTS = [
  { slug: "infinity-heights", name: "Infinity Heights Residences", type: "Residential", image: "/assets/commercial.jpg" ,area: "4.2L sqft", location: "Bengaluru", status: "Completed", year: 2022, value: "₹142 Cr", desc: "A premium 300-unit residential complex across 3 towers, delivered on time and within budget despite mid-project design changes." },
  { slug: "arttech-campus", name: "ArtTech Corporate Campus", type: "Commercial", image: "/assets/about.jpg" , area: "2.8L sqft", location: "Hyderabad", status: "Completed", year: 2023, value: "₹98 Cr", desc: "4-block IT campus for a leading tech firm, delivered in 18 months through aggressive phased planning and zero quality defects." },
  { slug: "horizon-convention", name: "Horizon Convention Centre", type: "Institutional", image: "/assets/work.jpg", area: "1.5L sqft", location: "Chennai", status: "Ongoing", year: 2024, value: "₹64 Cr", desc: "A state-of-the-art convention centre with complex MEP and acoustic requirements being managed with precision." },
  { slug: "elara-township", name: "Elara Mixed-Use Township", type: "Township", image: "/assets/renovation.jpg", area: "6.1L sqft", location: "Bengaluru", status: "Completed", year: 2021, value: "₹280 Cr", desc: "Largest township project in our portfolio — residential, retail, and amenity blocks delivered across 3 phases." },
  { slug: "skyline-it-park", name: "Skyline IT Park Phase II", type: "Commercial",image: "/assets/skyline.avif", area: "3.3L sqft", location: "Pune", status: "Ongoing", year: 2024, value: "₹115 Cr", desc: "Phase II expansion of a thriving IT park, being delivered without disruption to the operational Phase I." },
  { slug: "verdant-villas", name: "Verdant Eco Villas", type: "Residential", image:"/assets/villa.jpg", area: "1.9L sqft", location: "Mysuru", status: "Completed", year: 2022, value: "₹76 Cr", desc: "Sustainable villa development with green building standards, delivered with a GRIHA 4-star rating." },
  { slug: "msrs-convention", name: "MSRS Convention Centre", type: "Institutional", image: "/assets/mrsconvention.jpg", area: "1.2L sqft", location: "Bengaluru", status: "Completed", year: 2020, value: "₹48 Cr", desc: "Multi-purpose convention facility with 3 auditoriums and exhibition halls, delivered 2 months ahead of schedule." },
  { slug: "parkview-residences", name: "Parkview Residences", type: "Residential", image: "/assets/parkview.webp" , area: "2.4L sqft", location: "Coimbatore", status: "Completed", year: 2021, value: "₹92 Cr", desc: "Mid-range residential development with community clubhouse, pool, and retail podium." },
   { slug: "greenline-metro", name: "GreenLine Metro Corridor", type: "Metro", image: "/assets/greenmetro.jpg", area: "18 Km Corridor", location: "Bengaluru", status: "Completed", year: 2023, value: "₹1,850 Cr", desc: "Elevated metro corridor including 14 stations, viaduct construction, and integrated signaling systems delivered ahead of schedule." },

  { slug: "central-railway-terminal", name: "Bullet Train Corridor", type: "Railways", image: "/assets/bullet.avif", area: "15L sqft", location: "Mumbai", status: "Ongoing", year: 2025, value: "₹2,400 Cr", desc: "Ultra-modern rail network designed for 620 km/h high-speed operations." },

  { slug: "velocity-bullet-corridor", name: "Velocity High-Speed Rail Corridor", type: "High-Speed Rail", image: "/assets/htrain.webp", area: "72 Km Stretch", location: "Mumbai–Ahmedabad", status: "Ongoing", year: 2026, value: "₹8,900 Cr", desc: "High-speed rail infrastructure package including elevated tracks, bridge structures, depot facilities, and advanced rail systems for 320 km/h operations." }
];

export const CASE_STUDIES = [
  { slug: "cost-recovery-bangalore", tag: "Cost Overrun Recovery", title: "Saving ₹4.2 Cr on a Stalled Residential Project in Bengaluru", sector: "Residential", location: "Bengaluru", duration: "8 months", client: "Confidential", m1v: "28%", m1l: "Cost Overrun Eliminated", m2v: "3 Mo", m2l: "Ahead of Revised Schedule", challenge: "A 300-unit residential complex had stalled mid-construction with a 28% cost overrun due to poor contractor management and scope creep. The developer was facing penalties and reputation risk.", solution: "Our team conducted a comprehensive project audit, restructured contractor agreements, eliminated non-critical scope, and re-sequenced the construction programme. We introduced daily progress tracking and weekly cost reviews.", outcome: "The project was delivered within the revised budget — saving ₹4.2 Cr — and 3 months ahead of the renegotiated deadline. The client avoided penalty clauses and achieved full occupancy certification." },
  { slug: "fast-track-it-campus", tag: "Fast-Track Delivery", title: "Delivering a 2.8L sqft IT Campus in 18 Months", sector: "Commercial", location: "Hyderabad", duration: "18 months", client: "Leading Tech Firm", m1v: "18 Mo", m1l: "Compressed Delivery", m2v: "0", m2l: "Quality Defects at Handover", challenge: "A major technology company needed their 4-block campus fully operational in 18 months — a timeline considered near-impossible by multiple contractors who declined to bid.", solution: "We deployed parallel workstreams across all 4 blocks, pre-qualified and mobilised 11 specialist contractors simultaneously, and implemented a 3-shift work cycle with BIM-based coordination to eliminate clashes.", outcome: "All 4 blocks were handed over on schedule with zero snag items recorded at final inspection — the first time the client had experienced a defect-free handover across any of their campuses worldwide." },
  { slug: "geotechnical-risk", tag: "Risk Mitigation", title: "Managing Geo-technical Risks on a Hillside Convention Centre", sector: "Institutional", location: "Coorg, Karnataka", duration: "6 months (risk phase)", client: "State Government Body", m1v: "₹2.1Cr", m1l: "Rework Cost Avoided", m2v: "6 Mo", m2l: "Delay Prevented", challenge: "A convention centre on sloped terrain revealed unexpected geological conditions during early excavation — expansive clay layers that threatened the original foundation design.", solution: "Our risk management team commissioned emergency geotechnical surveys, engaged structural consultants, and developed an alternative raft foundation scheme within 3 weeks. We managed the redesign process without halting all site activities.", outcome: "The project avoided ₹2.1 Cr in rework costs and a projected 6-month delay. The redesigned foundation has been independently certified and the project is progressing on the revised programme." },
];

export const CLIENTS = [
  "Prestige Group","Brigade Enterprises","Sobha Ltd.","Puravankara","Godrej Properties","Mantri Developers","Embassy Group","Salarpuria Sattva","RMZ Corp","Manyata Tech Park","TVS Emerald","Shapoorji Pallonji","Total Environment","Century Real Estate","Mahindra Lifespaces","Birla Estates",
];

export const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "Director, Prestige Group", text: "Infinity Art PMC brought exceptional discipline to our project. Their cost management saved us over ₹3 Cr and their team was always proactive, not reactive. Highly recommended." },
  { name: "Anita Sharma", role: "VP Projects, Brigade Enterprises", text: "The risk management approach on our IT park was outstanding. They caught issues before they became problems — every single time. A truly professional outfit." },
  { name: "Suresh Nair", role: "MD, Sobha Developers", text: "Professional, reliable, and deeply experienced. Infinity Art PMC is our go-to PMC partner for large-scale developments and we won't engage without them." },
];

export const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "10M+", label: "Sqft Managed" },
  { value: "160+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "20+", label: "Years of International Exposure in Dubai & Qatar" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];
