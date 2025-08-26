import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power BI PL-300 Certification Training — Gyromitra Inc.",
  description: "Master Microsoft Power BI with expert-led PL-300 certification training. Learn data modeling, DAX, visualizations, and security from a Microsoft Certified Trainer with 20+ years experience.",
  openGraph: {
    title: "Power BI PL-300 Certification Training — Gyromitra Inc.",
    description: "Master Microsoft Power BI with expert-led PL-300 certification training. Learn data modeling, DAX, visualizations, and security from a Microsoft Certified Trainer with 20+ years experience.",
    type: "website"
  },
  keywords: ["Power BI", "PL-300", "Microsoft certification", "data analyst", "training", "DAX", "data modeling", "business intelligence"]
};

export default function PowerBILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
