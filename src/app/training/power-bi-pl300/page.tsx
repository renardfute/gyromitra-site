"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";

// Note: Since this is a client component, metadata needs to be handled differently
// We'll add it via head tags or move the interactive parts to separate components

export default function PowerBIPL300Page() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Power BI PL-300" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Microsoft Power BI Data Analyst Associate (PL-300) Certification Training",
    "description": "Master Microsoft Power BI with expert-led PL-300 certification training. Learn data modeling, DAX, visualizations, and security from a Microsoft Certified Trainer.",
    "provider": {
      "@type": "Organization",
      "name": "Gyromitra Inc.",
      "url": "https://gyromitra.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "749",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": "instructor-led",
    "educationalLevel": "Professional",
    "timeRequired": "P5D",
    "teaches": [
      "Data Preparation & Modeling",
      "DAX Functions & Calculations", 
      "Advanced Visualizations",
      "Row-Level Security",
      "Performance Optimization"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "Business Analysts, Data Professionals, IT Professionals"
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const curriculumSections = [
    {
      id: "data-preparation",
      title: "Data Preparation & Modeling",
      content: [
        "Connect to various data sources (Excel, SQL Server, Web APIs, Cloud services)",
        "Transform and clean data using Power Query Editor",
        "Design efficient data models with proper relationships",
        "Implement star schema and dimensional modeling principles",
        "Configure data refresh and gateway connections"
      ]
    },
    {
      id: "dax-calculations",
      title: "DAX Functions & Calculations",
      content: [
        "Master fundamental DAX syntax and functions",
        "Create calculated columns and measures",
        "Implement time intelligence functions",
        "Build complex calculations with CALCULATE and filter context",
        "Optimize DAX performance for large datasets"
      ]
    },
    {
      id: "visualizations",
      title: "Advanced Visualizations & Reports",
      content: [
        "Design compelling dashboards and reports",
        "Use custom visuals and formatting techniques",
        "Implement drill-through and cross-filtering",
        "Create mobile-optimized layouts",
        "Build paginated reports for operational reporting"
      ]
    },
    {
      id: "security",
      title: "Row-Level Security & Governance",
      content: [
        "Implement row-level security (RLS) for data protection",
        "Configure workspace security and access controls",
        "Manage content distribution and sharing",
        "Set up automated data refresh schedules",
        "Monitor usage and performance metrics"
      ]
    },
    {
      id: "deployment",
      title: "Deployment & Performance Optimization",
      content: [
        "Deploy solutions to Power BI Service",
        "Configure apps and workspaces for distribution",
        "Optimize report performance and loading times",
        "Implement best practices for scalability",
        "Troubleshoot common performance issues"
      ]
    }
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      
      <div className="container py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* HERO SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="kicker">Microsoft PL-300 Certification</p>
              <h1 className="h1 mt-4">
                Master Microsoft Power BI: <span className="text-slate-500">PL-300 Certification Training</span>
              </h1>
              <p className="mt-6 text-lg text-slate-700">
                Transform data into business intelligence with expert-led training. Led by a Microsoft Certified 
                Trainer with 20+ years of hands-on BI implementation experience across government and enterprise environments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="btn btn-primary">Enroll Now</button>
                <Link href="/#contact" className="btn btn-ghost">Contact for Corporate Training</Link>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-500">Price</div>
                  <div className="text-2xl font-semibold">$749 <span className="text-sm font-normal text-slate-500">+ taxes</span></div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Duration</div>
                  <div className="font-semibold">5 days (40 hours)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Delivery</div>
                  <div className="font-semibold">Live instruction with hands-on labs</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Materials</div>
                  <div className="font-semibold">Study guides & practice datasets</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Support</div>
                  <div className="font-semibold">Post-training certification guidance</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Next Cohort</div>
                  <div className="font-semibold">Contact for dates</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <button className="btn btn-primary w-full">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center">Course Overview</h2>
            <p className="mt-4 text-lg text-slate-700 text-center">
              Unlock the power of data visualization and analytics with our comprehensive PL-300 Microsoft Power BI 
              Data Analyst Associate certification training.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">Data Preparation & Modeling</div>
                      <div className="text-slate-600 text-sm">Transform raw data into analytical models</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">Advanced Visualizations</div>
                      <div className="text-slate-600 text-sm">Create compelling dashboards and reports</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">DAX Functions & Calculations</div>
                      <div className="text-slate-600 text-sm">Master Power BI's formula language</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">Row-Level Security</div>
                      <div className="text-slate-600 text-sm">Implement enterprise-grade data security</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">Performance Optimization</div>
                      <div className="text-slate-600 text-sm">Build efficient, scalable solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <div>
                      <div className="font-medium">Real-World Applications</div>
                      <div className="text-slate-600 text-sm">Apply skills through actual case studies</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Business Analysts seeking Microsoft certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Data professionals transitioning to Power BI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>IT professionals supporting BI initiatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Organizations implementing self-service analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR TRAINING */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center">Why Choose Our Training?</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Practitioner-Led Instruction</h3>
                    <p className="text-slate-700">
                      Learn from someone who has implemented Power BI solutions for major organizations including 
                      Central Bank of Canada and Government of Alberta
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">🔬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hands-On Learning</h3>
                    <p className="text-slate-700">
                      Work with real datasets and scenarios from actual enterprise implementations
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Certification Success</h3>
                    <p className="text-slate-700">
                      Structured curriculum designed to pass the PL-300 exam with comprehensive study materials
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Industry Expertise</h3>
                    <p className="text-slate-700">
                      Benefit from cross-sector experience in finance, healthcare, transportation, and government
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center">Course Curriculum</h2>
            <p className="mt-4 text-slate-700 text-center">
              Comprehensive coverage of all PL-300 exam objectives with hands-on practice
            </p>
            <div className="mt-12 space-y-4">
              {curriculumSections.map((section) => (
                <div key={section.id} className="card">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <span className="text-slate-500 text-xl">
                      {expandedSection === section.id ? '−' : '+'}
                    </span>
                  </button>
                  {expandedSection === section.id && (
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <ul className="space-y-2">
                        {section.content.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING DETAILS */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center">Training Details</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="card">
                <h3 className="font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>5 days of live, instructor-led training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>Comprehensive study guides and reference materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>Hands-on labs with real enterprise datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>Practice exam questions and mock tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>Post-training certification guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold">✅</span>
                    <span>30-day email support after training</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-4">Prerequisites</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basic understanding of data concepts and Excel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Familiarity with databases is helpful but not required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access to Power BI Desktop (free download)</span>
                  </li>
                </ul>
                <h3 className="font-semibold mb-4 mt-6">Certification</h3>
                <p className="text-slate-700">
                  Upon completion, you'll be prepared to take the Microsoft PL-300 exam and earn the 
                  Microsoft Certified: Power BI Data Analyst Associate certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL SHARING & CTA */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2">Ready to Master Power BI?</h2>
            <p className="mt-4 text-lg text-slate-700">
              Join hundreds of professionals who have advanced their careers with our expert-led training.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="btn btn-primary">Enroll Now - $749</button>
              <Link href="/#contact" className="btn btn-ghost">Contact for Group Training</Link>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="text-sm text-slate-500 mb-4">Share this course:</div>
              <div className="flex gap-4 justify-center">
                <button className="text-slate-600 hover:text-slate-900 transition">
                  LinkedIn
                </button>
                <button className="text-slate-600 hover:text-slate-900 transition">
                  Twitter
                </button>
                <button className="text-slate-600 hover:text-slate-900 transition">
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
