import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section">
        <div className="container text-center">
          <p className="kicker">Management Consulting & Training</p>
          <h1 className="h1">
            From Data to Decisions, <span className="text-slate-500">with Heart</span>.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Gyromitra Inc. helps organizations modernize with clarity—combining strategy, research,
            and hands-on advisory across data management, cybersecurity, technology innovation,
            and project delivery. We turn best practices into practical roadmaps and measurable outcomes.
          </p>
        </div>
      </section>

      {/* MAIN SERVICE LINKS */}
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* TRAINING SERVICES */}
            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Training Services</h3>
                <p className="text-slate-700 mb-4">
                  Master advanced Power BI skills with expert-led training. Our comprehensive 4-week program
                  covers data modeling, DAX functions, performance optimization, and enterprise governance.
                  Led by Microsoft Certified Trainers with 20+ years of experience.
                </p>
                <div className="text-sm text-slate-600 mb-4">
                  • Star schema modeling for messy data<br/>
                  • Advanced DAX: CALCULATE, iterators, time intelligence<br/>
                  • Performance tuning & storage modes<br/>
                  • Row-level security & governance<br/>
                  • Microsoft Fabric integration
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                    Next Cohort: Oct 15, 2025
                  </span>
                </div>
              </div>
              <Link href="/training" className="btn btn-primary w-full group-hover:bg-blue-700 transition-colors">
                Explore Training
              </Link>
              <div className="mt-3">
                <a
                  href="https://maven.com/gyromitra/powerbi-pro-skills/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  View Maven Course Details →
                </a>
              </div>
            </div>

            {/* CONSULTING SERVICES */}
            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
                <p className="text-slate-700 mb-4">
                  Transform your organization's data capabilities with our expert consulting services.
                  From strategic planning to hands-on implementation, we deliver measurable outcomes
                  across data management, analytics, and technology innovation.
                </p>
                <ul className="text-sm text-slate-600 text-left space-y-2 mb-4">
                  <li>• Strategic Advisory & Planning</li>
                  <li>• Data Management & Analytics</li>
                  <li>• Technology & Innovation Advisory</li>
                  <li>• Cybersecurity & Risk Management</li>
                  <li>• Project & Program Management</li>
                  <li>• Governance & Operating Models</li>
                </ul>
                <div className="text-sm text-slate-500">
                  Serving Canadian organizations (primary) and international clients
                </div>
              </div>
              <a href="#services" className="btn btn-primary w-full group-hover:bg-blue-700 transition-colors">
                Explore Consulting
              </a>
            </div>

            {/* CONTACT US */}
            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-slate-700 mb-4">
                  Ready to start your transformation journey? Book a discovery call to discuss your
                  organization's goals and challenges. We'll help you identify the right path forward
                  and create a customized roadmap for success.
                </p>
                <div className="text-sm text-slate-600 mb-4">
                  • Free initial consultation<br/>
                  • Customized solution recommendations<br/>
                  • Flexible engagement models<br/>
                  • Proven track record of success<br/>
                  • End-to-end project support
                </div>
                <div className="text-sm text-slate-500">
                  Available for Canadian and international clients
                </div>
              </div>
              <a href="#contact" className="btn btn-primary w-full group-hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES DETAILS */}
      <section id="services" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Consulting Services</h2>
          <p className="mt-3 text-slate-700">Designed to move from insight to impact quickly.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-semibold">Strategic Advisory & Planning</h3>
              <p className="mt-2 text-slate-700">
                Organizational strategy, operating model design, and measurable roadmaps that align people,
                process, and technology to outcomes.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Data Management & Analytics</h3>
              <p className="mt-2 text-slate-700">
                Data governance, data quality frameworks, ELT/integration, and BI (Power BI / Microsoft Fabric)
                that enable confident decision-making.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Technology & Innovation Advisory</h3>
              <p className="mt-2 text-slate-700">
                Cloud adoption, AI/ML readiness, and practical digital transformation planning backed by market research.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Cybersecurity & Risk Management</h3>
              <p className="mt-2 text-slate-700">
                Identity and access, cloud security, risk & compliance, and security-by-design practices integrated with delivery.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Project & Program Management</h3>
              <p className="mt-2 text-slate-700">
                PMO setup, planning & scheduling, risk management, change enablement, and benefits realization with Agile or hybrid delivery.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Governance & Operating Models</h3>
              <p className="mt-2 text-slate-700">
                Governance structures, performance frameworks, and data stewardship models that scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR CONSULTING */}
      <section id="why-us" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Why Choose Our Consulting</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h4 className="font-semibold">Senior-only expertise</h4>
              <p className="mt-2 text-slate-700">Engagements led by seasoned consultants—no handoffs to junior teams.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Cross-sector experience</h4>
              <p className="mt-2 text-slate-700">Public & private sector outcomes across finance, healthcare, and tech.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Strategy to execution</h4>
              <p className="mt-2 text-slate-700">Roadmaps that translate into shipped capabilities and measurable value.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Data-driven decisions</h4>
              <p className="mt-2 text-slate-700">Governance & BI foundations so leaders act on trusted data.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Tailored solutions</h4>
              <p className="mt-2 text-slate-700">Every engagement reflects your context, constraints, and priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING CASE HIGHLIGHTS */}
      <section id="cases" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Consulting Case Highlights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-semibold">Data Governance Program Launch</h3>
              <p className="mt-2 text-slate-700">
                Established enterprise governance & data quality practices for a provincial government,
                enabling consistent, compliant analytics.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Cloud Adoption Roadmap</h3>
              <p className="mt-2 text-slate-700">
                Planned and guided cloud migration for a public agency—balancing cost, security, and operational readiness.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Analytics Modernization</h3>
              <p className="mt-2 text-slate-700">
                Delivered Power BI dashboards across multiple sources—accelerating executive insights and action.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Cybersecurity Policy & IAM</h3>
              <p className="mt-2 text-slate-700">
                Rolled out identity & access policies and awareness initiatives for a national institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-neutral-200">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Book a discovery call</h2>
            <p className="mt-3 text-slate-700">
              Tell us a bit about your goals and constraints. We’ll follow up promptly.
            </p>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
