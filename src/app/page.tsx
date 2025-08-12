import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="kicker">Management Consulting</p>
            <h1 className="h1">
              From Data to Decisions, <span className="text-slate-500">with Heart</span>.
            </h1>
            <p className="text-lg text-slate-700">
              Gyromitra Inc. helps organizations modernize with clarity—combining strategy, research,
              and hands-on advisory across data management, cybersecurity, technology innovation,
              and project delivery. We turn best practices into practical roadmaps and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">Book a discovery call</a>
              <a href="#services" className="btn btn-ghost">Explore services</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-500 sm:grid-cols-3">
              <li>Public Sector</li>
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Technology</li>
              <li>Utilities & Energy</li>
              <li>Transportation</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="mb-3 text-sm font-semibold text-slate-500 uppercase tracking-widest">
              Offerings
            </h3>
            <ul className="grid gap-3 text-slate-900">
              <li>• Strategic Advisory & Planning</li>
              <li>• Data Management & Analytics</li>
              <li>• Technology & Innovation Advisory</li>
              <li>• Cybersecurity & Risk Management</li>
              <li>• Project & Program Management</li>
              <li>• Governance & Operating Models</li>
            </ul>
            <div className="mt-6 text-sm text-slate-500">
              Primary: Canadian organizations (public & private). Secondary: international.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Services</h2>
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

      {/* WHY US */}
      <section id="why-us" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Why work with us</h2>
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

      {/* CASES */}
      <section id="cases" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="h2">Case Highlights</h2>
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
