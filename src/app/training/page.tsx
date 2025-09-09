import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Professional Microsoft Training & Certification — Gyromitra Inc.",
  description: "Expert-led Microsoft training and certification courses. Learn Power BI, Azure, and more from a Microsoft Certified Trainer with 20+ years of hands-on experience.",
  openGraph: {
    title: "Professional Microsoft Training & Certification — Gyromitra Inc.",
    description: "Expert-led Microsoft training and certification courses. Learn Power BI, Azure, and more from a Microsoft Certified Trainer with 20+ years of hands-on experience.",
    type: "website"
  }
};

export default function TrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Gyromitra Inc. Training",
    "description": "Professional Microsoft training and certification courses led by Microsoft Certified Trainers",
    "url": "https://gyromitra.com/training",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Microsoft Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Microsoft Power BI Data Analyst Associate (PL-300)",
          "description": "Comprehensive Power BI training for PL-300 certification",
          "provider": {
            "@type": "Organization",
            "name": "Gyromitra Inc."
          },
          "offers": {
            "@type": "Offer",
            "price": "749",
            "priceCurrency": "CAD"
          }
        }
      ]
    }
  };

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
          <div className="text-center max-w-4xl mx-auto">
            <p className="kicker">Professional Development</p>
            <h1 className="h1 mt-4">
              Professional Microsoft Training <span className="text-slate-500">&amp; Certification</span>
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Master Microsoft technologies with expert-led training by a Microsoft Certified Trainer. 
              20+ years of hands-on experience in real-world enterprise implementations across government 
              and private sector organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="#courses" className="btn btn-primary">View Courses</Link>
              <Link href="#contact-training" className="btn btn-ghost">Corporate Training Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2">Our Training Approach</h2>
            <p className="mt-3 text-slate-700">Real-world experience meets certification success</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-semibold">🎯</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Hands-On Learning</h3>
              <p className="text-slate-700">Work with real datasets and scenarios from actual enterprise implementations</p>
            </div>
            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-semibold">🏆</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Certification Success</h3>
              <p className="text-slate-700">Structured curriculum designed specifically to help you pass Microsoft certification exams</p>
            </div>
            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-semibold">💼</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Industry Expertise</h3>
              <p className="text-slate-700">Learn from cross-sector experience in finance, healthcare, transportation, and government</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CATALOG */}
      <section id="courses" className="section border-t border-neutral-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2">Course Catalog</h2>
            <p className="mt-3 text-slate-700">Microsoft certification training courses</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
            {/* Power BI PL-300 Course */}
            <div className="card">
              <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                    <span className="text-sm text-slate-500">PL-300</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Microsoft Power BI Data Analyst Associate</h3>
                  <p className="text-slate-700 mb-4">
                    Master data visualization and analytics with comprehensive Power BI training. 
                    Learn data modeling, DAX functions, advanced visualizations, and enterprise security.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Data Modeling</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">DAX Functions</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Visualizations</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Row-Level Security</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    ✅ Hands-on labs with real datasets<br/>
                    ✅ Exam preparation and practice tests<br/>
                    ✅ Post-training certification guidance
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold text-slate-900">$749</div>
                    <div className="text-sm text-slate-500">+ taxes</div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/training/power-bi-pl300" className="btn btn-primary w-full lg:w-auto">
                      View Details
                    </Link>
                    <div className="text-xs text-slate-500">
                      Next cohort: Contact for dates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Power BI Pro Skills - Maven Course */}
            <div className="card">
              <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Now Available
                    </span>
                    <span className="text-sm text-slate-500">Advanced</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Power BI Pro Skills: Advanced Analytics & Governance</h3>
                  <p className="text-slate-700 mb-4">
                    Master advanced modeling, performance, governance, and Microsoft Fabric in this comprehensive
                    4-week program. Perfect for data analysts, team leads, and BI managers seeking enterprise-grade skills.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Advanced DAX</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Performance Tuning</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Row-Level Security</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Microsoft Fabric</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    ✅ 10 live sessions with hands-on practice<br/>
                    ✅ Real enterprise workflows & datasets<br/>
                    ✅ Portfolio-ready capstone project<br/>
                    ✅ Maven Guarantee & community support
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold text-slate-900">$500</div>
                    <div className="text-sm text-slate-500">CAD + taxes</div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="https://maven.com/gyromitra/powerbi-pro-skills/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full lg:w-auto"
                    >
                      Enroll Now
                    </a>
                    <div className="text-xs text-slate-500">
                      Next cohort: Oct 15—Nov 10, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR CREDENTIALS */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="h2">Your Instructor</h2>
              <p className="mt-4 text-lg text-slate-700">
                Learn from a Microsoft Certified Trainer with over 20 years of hands-on experience 
                implementing business intelligence and data management solutions across diverse sectors.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">Microsoft Certified Trainer</div>
                    <div className="text-slate-600">Authorized to deliver official Microsoft curriculum</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">Government &amp; Enterprise Experience</div>
                    <div className="text-slate-600">Central Bank of Canada, Government of Alberta, and major private sector clients</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">Cross-Sector Expertise</div>
                    <div className="text-slate-600">Finance, healthcare, transportation, and technology implementations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">Real-World Focus</div>
                    <div className="text-slate-600">Training based on actual enterprise implementations and best practices</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-4">Training Highlights</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-slate-900">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">95%</div>
                  <div className="text-sm text-slate-600">Exam Pass Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">6</div>
                  <div className="text-sm text-slate-600">Industry Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING */}
      <section id="contact-training" className="section border-t border-neutral-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2">Corporate Training</h2>
            <p className="mt-4 text-lg text-slate-700">
              Customized training programs for your organization. We can adapt our curriculum to your specific 
              use cases, data, and business requirements.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="card text-center">
                <h4 className="font-semibold mb-2">On-Site Training</h4>
                <p className="text-slate-700">Deliver training at your location with your data and scenarios</p>
              </div>
              <div className="card text-center">
                <h4 className="font-semibold mb-2">Custom Curriculum</h4>
                <p className="text-slate-700">Tailor content to your industry and specific business needs</p>
              </div>
              <div className="card text-center">
                <h4 className="font-semibold mb-2">Group Discounts</h4>
                <p className="text-slate-700">Significant savings for teams of 5 or more participants</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/#contact" className="btn btn-primary">Request Corporate Training Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
