// MTP Distribution — single source of content for the homepage.
// All copy/figures sourced from the MTP Distribution business docs + sitemap.

export const company = {
  name: "MTP Distribution",
  legal: "MTP Distribution Trading LLC",
  tagline: "Powered by Technology, Secure by Solution",
  positioning: "Value-Added Distributor · UAE & Oman",
  uaePhone: "+971 54 749 9407",
  omanPhone: "+968 9545 5970",
  whatsapp: "https://wa.me/971547499407",
  email: "info@mtpdistribution.com",
};

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Brands", href: "/brands" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Events & News", href: "/events-news" },
  { label: "About", href: "/about" },
];

export const stats = [
  { value: "5+", label: "Years in business" },
  { value: "12", label: "Business regions" },
  { value: "30+", label: "Global brands" },
  { value: "100+", label: "Projects delivered" },
];

export type Solution = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  brands: string;
};

export const solutions: Solution[] = [
  {
    slug: "cctv-video-surveillance",
    title: "CCTV & Video Surveillance",
    short: "IP cameras, VMS, ANPR & analytics",
    desc: "A complete IP video stack — fixed, PTZ, thermal and panoramic cameras, VMS, ANPR/LPR and AI analytics with surveillance-grade storage.",
    brands: "Bosch · Mobotix · Milesight · Digifort",
  },
  {
    slug: "access-control-intrusion",
    title: "Access Control & Intrusion",
    short: "Biometrics, AI face recognition & alarms",
    desc: "Entry management, multi-factor and biometric authentication, AI facial recognition and intrusion detection — integrated with CCTV and fire.",
    brands: "Bosch · STid · SAFR · Oosto",
  },
  {
    slug: "fire-alarm-systems",
    title: "Fire Alarm & Life Safety",
    short: "Addressable detection & evacuation",
    desc: "Addressable, intelligent fire detection with combined audible-visual alarm and safe-egress guidance, interlocked with BMS and access control.",
    brands: "Bosch",
  },
  {
    slug: "public-address-conference",
    title: "Public Address & Conference",
    short: "Voice evacuation, paging & PAVA",
    desc: "IP-based, zoned PA/PAVA platforms for voice-evacuation messaging, routine paging, background music and conferencing.",
    brands: "Bosch",
  },
  {
    slug: "networking-server-storage",
    title: "Networking, Server & Storage",
    short: "SAN, HCI & industrial switching",
    desc: "Surveillance-grade SAN/HCI/edge storage, industrial PoE switching and structured cabling — the backbone beneath every video deployment.",
    brands: "Infortrend · Lilin · Premiumline",
  },
  {
    slug: "ibms-psim-control-room",
    title: "IBMS, PSIM & Control Room",
    short: "Unified command & video walls",
    desc: "PSIM software correlating CCTV, access, fire and building systems into one operating picture — visualised on video walls in 24/7 control rooms.",
    brands: "OODA World · WEYTEC · Planar",
  },
  {
    slug: "power-solutions",
    title: "Power Solutions (UPS)",
    short: "Critical power & data-centre UPS",
    desc: "Vendor-neutral AC/DC power protection — from desktop UPS to full data-centre power architecture, batteries and solar.",
    brands: "Atenco · Effekta",
  },
];

export type Brand = { name: string; file: string };

export const brands: Brand[] = [
  { name: "Bosch", file: "bosch.png" },
  { name: "Milesight", file: "milesight.png" },
  { name: "Lilin", file: "lilin.png" },
  { name: "IQSight", file: "iqsight.jpg" },
  { name: "Redvision", file: "redvision.jpg" },
  { name: "Digifort", file: "digifort.jpg" },
  { name: "Infortrend", file: "infortrend.png" },
  { name: "Premiumline", file: "premiumline.jpg" },
  { name: "STid", file: "stid.png" },
  { name: "Allegion", file: "allegion.svg" },
  { name: "Quanika", file: "quanika.png" },
  { name: "Wavelynx", file: "wavelynx.png" },
  { name: "SAFR", file: "safr.png" },
  { name: "Oosto", file: "oosto.png" },
  { name: "OODA World", file: "ooda-world.png" },
  { name: "CTF", file: "ctf.jpg" },
  { name: "WEYTEC", file: "weytec.png" },
  { name: "Planar", file: "planar.png" },
  { name: "Atenco", file: "atenco.webp" },
  { name: "Effekta", file: "effekta.png" },
];

export const whyMtp = [
  {
    title: "Pre-sales & solution design",
    desc: "Technical consultation, multi-vendor bill-of-materials design, storage and power sizing, and reference architectures.",
  },
  {
    title: "Specification & bid support",
    desc: "We help get brands written into consultant specs, with tender/BoQ support to meet compliance.",
  },
  {
    title: "Integration enablement",
    desc: "Cross-system design — CCTV + ACS + Fire + PA + IBMS/PSIM — so partners deliver true end-to-end.",
  },
  {
    title: "Training & certification",
    desc: "Vendor product training that keeps your engineers current and tender-eligible.",
  },
  {
    title: "Supply & logistics",
    desc: "Regional stock, Dubai import/re-export and consolidated single-invoice purchasing across 30+ brands.",
  },
  {
    title: "After-sales & service",
    desc: "Warranty, RMA handling and on-site preventive maintenance for industrial and data-centre power.",
  },
];

export type Industry = { slug: string; name: string };

export const industries: Industry[] = [
  { slug: "oil-gas-energy", name: "Oil & Gas / Energy" },
  { slug: "government", name: "Government & Public Sector" },
  { slug: "law-enforcement", name: "Law Enforcement / Defence" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "hospitality", name: "Hospitality" },
  { slug: "retail", name: "Retail" },
  { slug: "transport", name: "Transport & Critical Infra" },
  { slug: "banking", name: "Banking & Finance" },
  { slug: "data-centres", name: "Data Centres" },
  { slug: "education", name: "Education" },
];

export type Project = {
  slug: string;
  client: string;
  vertical: string;
  blurb: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "royal-oman-police",
    client: "Royal Oman Police",
    vertical: "Law Enforcement",
    blurb: "City surveillance, ANPR and command-and-control with face recognition across multi-site operations.",
    solution: "CCTV · PSIM · Face Recognition",
  },
  {
    slug: "petroleum-development-oman",
    client: "Petroleum Development Oman",
    vertical: "Oil & Gas / Energy",
    blurb: "Ruggedised CCTV, fire detection, PA and critical power protecting critical energy infrastructure.",
    solution: "CCTV · Fire · Power",
  },
  {
    slug: "oman-lng",
    client: "Oman LNG",
    vertical: "Oil & Gas / Energy",
    blurb: "Integrated security and life-safety across a high-hazard process facility with continuous monitoring.",
    solution: "Fire · Access · CCTV",
  },
  {
    slug: "king-abdullah-medical-city",
    client: "King Abdullah Medical City",
    vertical: "Healthcare",
    blurb: "Access control, fire/life-safety, PA and patient-area surveillance for a major medical campus.",
    solution: "Access · Fire · PA",
  },
];

export const clientLogos = [
  { name: "Petroleum Development Oman", file: "petroleum-development-oman.jpg" },
  { name: "Oman LNG", file: "oman-lng.jpg" },
  { name: "Royal Oman Police", file: "royal-oman-police.jpg" },
  { name: "Royal Court Affairs", file: "royal-court-affairs.jpg" },
  { name: "Oman Ministry of Health", file: "oman-ministry-of-health.jpg" },
  { name: "King Abdullah Medical City", file: "king-abdullah-medical-city.jpg" },
  { name: "Salalah Free Zone", file: "salalah-free-zone.jpg" },
  { name: "Crowne Plaza", file: "crowne-plaza.jpg" },
  { name: "Lulu Hypermarket", file: "lulu-hypermarket.jpg" },
  { name: "Rawafed Private School", file: "rawafed-private-school.jpg" },
];

export type EventItem = {
  tag: string;
  date: string;
  title: string;
  desc: string;
  type: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    tag: "Exhibition",
    date: "Jan 2027",
    title: "Intersec Dubai 2027",
    desc: "Meet the MTP team at the Gulf's largest security & safety exhibition for live demos of our AI and PSIM lines.",
    type: "upcoming",
  },
  {
    tag: "Training",
    date: "Feb 2027",
    title: "Bosch Certification Workshop",
    desc: "Hands-on partner certification on Bosch CCTV, access and PAVA — qualifying your engineers for tenders.",
    type: "upcoming",
  },
  {
    tag: "Webinar",
    date: "Mar 2027",
    title: "Designing Surveillance Storage",
    desc: "A practical session on sizing SAN/HCI storage and power for large multi-site camera deployments.",
    type: "upcoming",
  },
];

export const news = [
  {
    tag: "Portfolio",
    date: "Jun 2026",
    title: "MTP expands AI line-up with SAFR and Oosto face recognition",
    desc: "Two leading facial-recognition platforms join our access-control stack, adding watchlist alerting and touchless access.",
  },
  {
    tag: "Control Room",
    date: "May 2026",
    title: "WEYTEC and Planar added for command-and-control",
    desc: "MTP moves up the stack with KVM management and professional video walls for 24/7 control-room environments.",
  },
  {
    tag: "Channel",
    date: "Apr 2026",
    title: "New partner enablement programme launches",
    desc: "Structured tiers, certification and deal registration to help integrators win and deliver end-to-end projects.",
  },
];
