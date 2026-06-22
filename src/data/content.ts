// Extended content for inner pages. Sourced from MTP business docs.

export type SolutionDetail = {
  overview: string;
  capabilities: string[];
  components: string[];
  integrations: string;
  deployments: string;
};

export const solutionDetail: Record<string, SolutionDetail> = {
  "cctv-video-surveillance": {
    overview:
      "A complete IP video-surveillance stack that has evolved from passive footage recording into intelligent systems that identify abnormal events and behaviours in real time — built on cameras, VMS and surveillance-grade storage.",
    capabilities: [
      "High-resolution IP cameras — fixed, dome, bullet, PTZ, multi-sensor, panoramic and thermal",
      "VMS for recording, live monitoring, multi-site federation and video-wall control",
      "ANPR / LPR for automatic number-plate recognition at entries and traffic points",
      "AI analytics — intrusion, line-crossing, loitering, crowd, object-left-behind, people counting",
      "Surveillance-grade NVRs, recording servers and redundant storage arrays",
    ],
    components: [
      "IP security cameras",
      "Video Management Software (VMS)",
      "ANPR / LPR application cameras",
      "Advanced video analytics",
      "Video storage (NVR / SAN / edge)",
      "Surveillance accessories & PoE",
    ],
    integrations:
      "Cameras (PoE) → switches → VMS / recording servers → storage → operator clients & video wall. Integrates with access control (event-driven recording), intrusion (alarm verification), ANPR (gate control) and PSIM for unified situational awareness.",
    deployments:
      "Retail, hospitals, hotels, data centres, banks, airports, metro stations, industrial units and city / safe-city surveillance.",
  },
  "access-control-intrusion": {
    overview:
      "Modern access control and intrusion detection that protects people and assets by governing who can enter a work area, recording movements, and raising alarms on unauthorised entry — now extended with AI-based face recognition.",
    capabilities: [
      "Smart cards, RFID credentials and card-cum-readers",
      "IP access controllers and management software",
      "Multi-factor and biometric authentication — fingerprint, face, IRIS",
      "AI facial recognition with watchlist alerting and touchless access",
      "Intrusion / alarm systems and sensors, with time-and-attendance reporting",
    ],
    components: [
      "IP access controllers",
      "Biometric & face-recognition readers",
      "RFID smart cards & credentials",
      "Intrusion sensors & alarm panels",
      "Electronic locking hardware",
      "Access-control management software",
    ],
    integrations:
      "Readers / biometric devices → IP controllers → ACS software, cross-linked to fire (door release), CCTV (event recording), intrusion (alarm) and HR / time-attendance. SAFR and Oosto engines add face recognition.",
    deployments:
      "Government, energy, healthcare, banking, data centres, corporate offices and critical infrastructure.",
  },
  "fire-alarm-systems": {
    overview:
      "An addressable, intelligent fire-detection and evacuation system that ensures employee safety and business continuity by detecting fire conditions early and guiding occupants along safe egress routes.",
    capabilities: [
      "Addressable loop architecture — every device carries a unique ID and location",
      "Continuous self-monitoring of device health and faults",
      "Combined audible + visual alarm with safe-egress guidance",
      "IP-based panels for networked, multi-building campuses",
      "Life-safety interlocks with BMS, lifts, dampers and access control",
    ],
    components: [
      "Addressable smoke / heat / multi-criteria detectors",
      "Intelligent Fire Alarm Control Panel (FACP)",
      "Manual call points, sounders, strobes, beacons",
      "I-O modules for HVAC, lifts and dampers",
    ],
    integrations:
      "Detectors → addressable loop → intelligent FACP → (IP network) → BMS. Cross-links to access control (door release) and PA / voice-alarm (evacuation messaging).",
    deployments:
      "Commercial buildings, industrial / process facilities, healthcare, hospitality, education and government.",
  },
  "public-address-conference": {
    overview:
      "An advanced IP-based public-address and voice-alarm (PAVA) platform — voice messages guide occupants during an emergency, and people are most likely to follow a clear voice command during evacuation.",
    capabilities: [
      "IP-based, zoned audio distribution with centralised GUI control",
      "Interface to music players and dry contacts from other systems",
      "Emergency voice-evacuation messaging triggered by fire alarm",
      "Routine paging, background music and conferencing",
    ],
    components: [
      "Digital controllers / audio routers",
      "Mixing amplifiers",
      "Call stations / paging microphones",
      "Ceiling, wall, horn & column speakers",
      "Touch-screen management GUI",
      "Conference / discussion components",
    ],
    integrations:
      "Controllers / routers → amplifiers → zoned speaker network, managed from a touch-screen GUI. Tight integration with the fire alarm system makes it a true PAVA life-safety platform.",
    deployments:
      "Large buildings, malls, transport hubs, campuses, industrial plants and conference environments.",
  },
  "networking-server-storage": {
    overview:
      "The storage and network backbone that surveillance and IT workloads run on — purpose-engineered for the high write-throughput, retention and resilience demands of video.",
    capabilities: [
      "Purpose-built SAN storage sized for continuous video recording",
      "Hyper-Converged Infrastructure (HCI) and edge appliances for remote sites",
      "RAID / NVR failover and edge-to-core architectures",
      "Industrial-grade PoE switching for harsh / outdoor environments",
      "Structured cabling, cabinets, fibre and passive infrastructure",
    ],
    components: [
      "SAN / HCI / edge storage",
      "SAS & RAID storage systems",
      "Industrial PoE switches",
      "Cabinets, enclosures & fibre panels",
      "Structured cabling & connectivity",
      "Illuminators & PoE accessories",
    ],
    integrations:
      "The foundation layer beneath the video system — cameras → PoE switches → core network → SAN / HCI / RAID storage, with edge appliances at remote nodes. Storage and power sizing are the two pain points MTP solves for partners.",
    deployments:
      "Data centres, large multi-site surveillance, industrial and distributed sites.",
  },
  "ibms-psim-control-room": {
    overview:
      "An integrated platform for monitoring and controlling the critical parameters of a building or estate — plus the PSIM software and the physical control-room / video-wall environment operators sit in.",
    capabilities: [
      "Unified command & control with aggregated visualisation",
      "PSIM correlating CCTV, access, fire, intrusion and building systems",
      "Smart energy, street-light, water and environmental management",
      "Video walls and professional displays for 24/7 operations",
      "Control-room KVM, operator workflow and technical consoles",
    ],
    components: [
      "PSIM software",
      "Video walls / professional displays",
      "Control-room KVM & management",
      "Operator workflow systems",
      "Technical control-room furniture",
    ],
    integrations:
      "All subsystems (CCTV, ACS, fire, PA, power, building plant) feed a PSIM / unified command layer, visualised on a video wall in a purpose-built control room — the top of the stack that ties every other line together.",
    deployments:
      "Safe-city / smart-city, energy & utilities, transport hubs, free zones, large campuses and government command centres.",
  },
  "power-solutions": {
    overview:
      "Vendor-neutral power solutions positioned as a single source for all power-related products and services — specialising in AC and DC power conversion, power quality and power protection.",
    capabilities: [
      "UPS from the smallest desktop unit to industrial / data-centre designs",
      "Batteries, battery solutions and solar power systems",
      "Vendor-neutral, turn-key and custom power design",
      "Critical-power monitoring for data centres",
      "On-site services and preventive maintenance",
    ],
    components: [
      "UPS systems",
      "Batteries & battery solutions",
      "Solar power systems",
      "Critical-power / DC solutions",
      "Monitoring & management",
    ],
    integrations:
      "Power protection underpins every other line — cameras, controllers, storage, PSIM and control rooms all depend on clean, continuous power. MTP designs power to the project's load profile and integrates monitoring into IBMS.",
    deployments:
      "Data centres, industrial & process facilities, critical infrastructure and any site requiring guaranteed uptime.",
  },
};

export type BrandInfo = {
  origin: string;
  makes: string;
  line: string;
};

export const brandInfo: Record<string, BrandInfo> = {
  Bosch: { origin: "Germany", makes: "Security & safety systems OEM — the anchor of MTP's portfolio.", line: "Access · Intrusion · PA · Fire" },
  Milesight: { origin: "Global", makes: "IP cameras, NVRs and AIoT sensing.", line: "CCTV & VMS" },
  Lilin: { origin: "Taiwan", makes: "IP cameras, VMS, NVR and storage.", line: "CCTV · Network · Storage" },
  IQSight: { origin: "Global", makes: "CCTV / surveillance cameras.", line: "CCTV" },
  Redvision: { origin: "UK", makes: "Rugged PTZ and specialist cameras.", line: "CCTV" },
  Digifort: { origin: "Brazil", makes: "Intelligent video-monitoring software / VMS.", line: "VMS" },
  Infortrend: { origin: "Taiwan", makes: "Enterprise SAN / data-storage systems.", line: "Storage" },
  Premiumline: { origin: "Global", makes: "Structured cabling & networking.", line: "Cabling & Networking" },
  STid: { origin: "France", makes: "Secure RFID readers & credentials.", line: "Access Control" },
  Allegion: { origin: "Global", makes: "Security & access-control hardware.", line: "Access Control" },
  Quanika: { origin: "Global", makes: "Access-control & integration software.", line: "Access Control" },
  Wavelynx: { origin: "USA", makes: "Open-standard readers & credentials.", line: "Access Control" },
  SAFR: { origin: "USA", makes: "AI facial-recognition platform (RealNetworks).", line: "AI Face Recognition" },
  Oosto: { origin: "Global", makes: "AI facial-recognition / vision (formerly AnyVision).", line: "AI Face Recognition" },
  "OODA World": { origin: "Global", makes: "PSIM / situational-awareness software.", line: "PSIM" },
  CTF: { origin: "Global", makes: "Control-room solutions.", line: "Control Room" },
  WEYTEC: { origin: "Switzerland", makes: "Control-room KVM & multi-display management.", line: "Control Room" },
  "Technology Desking": { origin: "Global", makes: "Technical control-room furniture / consoles.", line: "Control Room" },
  Planar: { origin: "USA", makes: "Video walls & professional displays.", line: "Video Wall" },
  Atenco: { origin: "Global", makes: "UPS / power protection.", line: "Power" },
  Effekta: { origin: "Germany", makes: "UPS, solar & power systems.", line: "Power" },
};

export const industryInfo: Record<string, { desc: string; needs: string[]; anchors: string }> = {
  "oil-gas-energy": { desc: "High security & safety budgets and critical-infrastructure protection demand ruggedised CCTV, fire, PA and power.", needs: ["Ruggedised CCTV", "Fire & gas detection", "PA / PAVA", "Critical power"], anchors: "PDO · Oman LNG" },
  government: { desc: "Large multi-site programmes spanning surveillance, access and PSIM under long-term frameworks.", needs: ["City surveillance", "Access control", "PSIM", "Control rooms"], anchors: "Royal Court Affairs · Salalah Free Zone · MoH" },
  "law-enforcement": { desc: "City surveillance, ANPR / LPR, face recognition and command-and-control rooms for public safety.", needs: ["ANPR / LPR", "Face recognition", "Command & control", "Video walls"], anchors: "Royal Oman Police" },
  healthcare: { desc: "Access control, fire / life-safety, PA and patient-area surveillance across medical campuses.", needs: ["Access control", "Fire & life-safety", "PA", "Surveillance"], anchors: "King Abdullah Medical City · Oman MoH" },
  hospitality: { desc: "Guest-area CCTV, access, PA / background music and fire across hotels and resorts.", needs: ["Guest-area CCTV", "Access", "Background music", "Fire"], anchors: "Crowne Plaza" },
  retail: { desc: "Loss prevention, people-counting analytics and multi-site management for retail estates.", needs: ["Loss prevention", "People counting", "Multi-site VMS", "Access"], anchors: "Lulu Hypermarket" },
  transport: { desc: "Airports, metro and free zones — large camera counts, storage and video walls.", needs: ["Large-scale CCTV", "Storage", "Video walls", "PSIM"], anchors: "Salalah Free Zone" },
  banking: { desc: "Branch surveillance, access, intrusion and compliance-grade retention.", needs: ["Branch CCTV", "Access", "Intrusion", "Compliant storage"], anchors: "Target vertical" },
  "data-centres": { desc: "Access control, environmental / IBMS monitoring and critical UPS / power.", needs: ["Access control", "IBMS monitoring", "Critical power", "Storage"], anchors: "Target vertical" },
  education: { desc: "Campus CCTV, access, PA and safeguarding across schools and universities.", needs: ["Campus CCTV", "Access", "PA", "Safeguarding"], anchors: "Rawafed Private School" },
};

export const projectDetail: Record<string, { challenge: string; approach: string; outcome: string; facts: { k: string; v: string }[] }> = {
  "royal-oman-police": {
    challenge: "A nationwide law-enforcement body needed wide-area city surveillance with automated vehicle and face identification feeding a central command room.",
    approach: "MTP supplied IP cameras, ANPR/LPR, AI face recognition and a PSIM command layer visualised on a control-room video wall, integrated across multiple sites.",
    outcome: "A unified situational-awareness platform enabling faster response and evidence-grade recording across the network.",
    facts: [{ k: "Vertical", v: "Law Enforcement" }, { k: "Lines", v: "CCTV · PSIM · Face Recognition" }, { k: "Scope", v: "Multi-site city surveillance" }],
  },
  "petroleum-development-oman": {
    challenge: "A critical energy operator required ruggedised, integrated security and life-safety across high-hazard process sites.",
    approach: "Ruggedised CCTV, fire detection, PA/PAVA and critical UPS power designed to the site load profile and harsh-environment requirements.",
    outcome: "Reliable, continuously monitored protection of people and critical energy infrastructure.",
    facts: [{ k: "Vertical", v: "Oil & Gas / Energy" }, { k: "Lines", v: "CCTV · Fire · Power" }, { k: "Scope", v: "Critical infrastructure" }],
  },
  "oman-lng": {
    challenge: "A high-hazard LNG facility needed integrated fire, access and surveillance with continuous monitoring.",
    approach: "Addressable fire detection interlocked with access control and CCTV, engineered for process-facility standards.",
    outcome: "Integrated life-safety and security across a complex, high-consequence environment.",
    facts: [{ k: "Vertical", v: "Oil & Gas / Energy" }, { k: "Lines", v: "Fire · Access · CCTV" }, { k: "Scope", v: "Process facility" }],
  },
  "king-abdullah-medical-city": {
    challenge: "A major medical campus required access control, fire / life-safety, PA and patient-area surveillance at scale.",
    approach: "An integrated access, fire and PA platform with surveillance tuned to healthcare workflows and compliance.",
    outcome: "A safer campus with unified, standards-compliant security and life-safety.",
    facts: [{ k: "Vertical", v: "Healthcare" }, { k: "Lines", v: "Access · Fire · PA" }, { k: "Scope", v: "Medical campus" }],
  },
};

export const partnerPerks = [
  { title: "One multi-brand source", desc: "30+ brands across seven lines on a single consolidated invoice — stop juggling fifteen distributors." },
  { title: "Project pricing & deal registration", desc: "Register your opportunities and win them with protected pricing and commercial support." },
  { title: "Engineering pre-sales", desc: "We design your BoM, size storage and power, and de-risk integration before you bid." },
  { title: "Access to premium & AI lines", desc: "Differentiate with AI face recognition, PSIM and control-room tech that helps you win bids." },
  { title: "Training & certification", desc: "Vendor certification that keeps your engineers tender-eligible and warranty-qualified." },
  { title: "Regional stock & fast logistics", desc: "Dubai import/re-export and Oman presence for dependable availability and lead times." },
];

export const partnerSteps = [
  { n: "01", title: "Apply", desc: "Tell us about your company, verticals and the brands you need." },
  { n: "02", title: "Qualify", desc: "We confirm fit, assign a tier and set you up with pricing and credit." },
  { n: "03", title: "Enable", desc: "Get certified, access datasheets and reference designs, and register deals." },
  { n: "04", title: "Win & deliver", desc: "Quote with our pre-sales support and deliver end-to-end with after-sales backing." },
];

export const resources = [
  { type: "Brochure", title: "MTP Company Brochure", desc: "The full portfolio, services and references in one PDF.", solution: "All" },
  { type: "Datasheet", title: "CCTV & VMS Line Card", desc: "Cameras, VMS and storage across our video brands.", solution: "CCTV" },
  { type: "Datasheet", title: "Access Control & AI Face Recognition", desc: "Readers, controllers, biometrics, SAFR and Oosto.", solution: "Access Control" },
  { type: "Datasheet", title: "Fire Alarm & Life Safety", desc: "Addressable detection and PAVA evacuation.", solution: "Fire" },
  { type: "Guide", title: "Surveillance Storage Sizing Guide", desc: "How to size SAN / HCI storage for video retention.", solution: "Networking" },
  { type: "Guide", title: "Critical Power Design Guide", desc: "Sizing UPS and DC power for security workloads.", solution: "Power" },
  { type: "Case Study", title: "City Surveillance Reference Architecture", desc: "A blueprint for ANPR, face recognition and PSIM.", solution: "PSIM" },
  { type: "Line Card", title: "Full Brand Line Card", desc: "Every brand MTP represents, mapped to solution lines.", solution: "All" },
];

export const careers = [
  { role: "Pre-Sales Solutions Engineer", location: "Dubai, UAE", type: "Full-time", team: "Engineering" },
  { role: "Business Development Manager — KSA", location: "Riyadh, KSA", type: "Full-time", team: "Sales" },
  { role: "Technical Support Engineer", location: "Muscat, Oman", type: "Full-time", team: "Support" },
  { role: "Product Manager — AI & PSIM", location: "Dubai, UAE", type: "Full-time", team: "Product" },
];

export const generalFaqs = [
  { q: "Does MTP sell directly to end-users?", a: "No. MTP is a two-tier value-added distributor — we sell through system integrators and resellers. If you're an end-user, we'll connect you with an approved partner who can deploy and support the solution." },
  { q: "Which regions does MTP cover?", a: "Our core markets are the UAE and Oman, with distribution activity across 12 business regions in the wider Middle East and active expansion toward KSA and Qatar." },
  { q: "Can MTP help design a multi-vendor system?", a: "Yes — that's the core of our value. Our engineers design the bill of materials, size storage and power, and plan cross-system integration across CCTV, access, fire, PA, PSIM and power." },
  { q: "Do you provide training and certification?", a: "We run vendor product training and certification so your engineers stay current and tender-eligible, and your projects keep their warranty terms." },
  { q: "What support do you offer after the sale?", a: "Regional stock and logistics, consolidated invoicing, warranty and RMA handling, plus on-site services and preventive maintenance — notably for industrial and data-centre power." },
];

export const aboutValues = [
  { title: "Engineering-led", desc: "We win on technical support and solution design, not price alone." },
  { title: "Multi-vendor & neutral", desc: "One source for every discipline — we recommend what fits, not a single flagship." },
  { title: "Partner-centric", desc: "Our success is defined by enabling our integrators and resellers to win." },
  { title: "Proven at scale", desc: "Blue-chip references across energy, government, healthcare and transport." },
];
