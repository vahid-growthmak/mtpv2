import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTP Distribution | Security & Infrastructure Value-Added Distributor",
  description:
    "MTP Distribution is a Dubai-headquartered Value-Added Distributor carrying 30+ global security, safety, IT, AI and power brands across seven solution lines — supplied and supported across UAE and Oman.",
  metadataBase: new URL("https://mtpdistribution.com"),
  openGraph: {
    title: "MTP Distribution | Powered by Technology, Secure by Solution",
    description:
      "30+ global security brands, in-stock and engineered across UAE and Oman — fire, CCTV, access control, AI, networking, control rooms and power.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
