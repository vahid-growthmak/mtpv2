import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p} className={`mtp-arr-ur ${p.className ?? ""}`}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p} className={`mtp-arr-r ${p.className ?? ""}`}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.4a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .4l-.8 1.1a12 12 0 0 1-5.2-5.2l1.1-.8a1 1 0 0 0 .4-1L10 4.8a1 1 0 0 0-1-.8H6a2 2 0 0 0-2 2Z" />
  </svg>
);
export const Chat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
  </svg>
);
export const Search = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const Download = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Camera = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 8h3l1.5-2h9L18 8h3v11H3z" />
    <circle cx="12" cy="13" r="3.2" />
  </svg>
);
export const Fingerprint = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4a8 8 0 0 0-8 8M20 12a8 8 0 0 0-4-7M8 20a10 10 0 0 1-1-8 5 5 0 0 1 9 1M12 12v3a4 4 0 0 0 1 3M16 13v2a8 8 0 0 0 .5 3" />
  </svg>
);
export const Flame = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c2 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0C7 13 10 11 12 3Z" />
  </svg>
);
export const Speaker = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" />
    <path d="M16 9a3 3 0 0 1 0 6M18.5 7a6 6 0 0 1 0 10" />
  </svg>
);
export const Server = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="7" rx="1.5" />
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);
export const Grid = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);
export const Power = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v9" />
    <path d="M7 6a8 8 0 1 0 10 0" />
  </svg>
);

export const solutionIcons = {
  "cctv-video-surveillance": Camera,
  "access-control-intrusion": Fingerprint,
  "fire-alarm-systems": Flame,
  "public-address-conference": Speaker,
  "networking-server-storage": Server,
  "ibms-psim-control-room": Grid,
  "power-solutions": Power,
} as const;
