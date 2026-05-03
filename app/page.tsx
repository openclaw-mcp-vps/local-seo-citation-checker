export default function Home() {
  const faqs = [
    {
      q: "Which directories do you monitor?",
      a: "We check 50+ directories including Google Business Profile, Yelp, Bing Places, Apple Maps, Facebook, Foursquare, YellowPages, and more."
    },
    {
      q: "How quickly will I be alerted to inconsistencies?",
      a: "Citations are checked daily. You'll receive an email alert within 24 hours of any NAP mismatch being detected."
    },
    {
      q: "Can I monitor multiple business locations?",
      a: "Yes. Each subscription covers one location. You can purchase additional subscriptions for each additional business location."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Keep Your Business Citations{" "}
          <span className="text-[#58a6ff]">Consistent</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          CitationWatch monitors your business Name, Address &amp; Phone across 50+ local directories and alerts you the moment something goes wrong.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Monitoring — $12/mo
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "50+ Directories", desc: "Google, Yelp, Bing, Apple Maps, Facebook & dozens more checked daily." },
            { title: "Instant Alerts", desc: "Email notifications the moment a NAP inconsistency is detected." },
            { title: "Audit Reports", desc: "Full citation audit showing exactly which listings need fixing." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Per business location. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor 50+ local directories",
              "Daily automated citation checks",
              "Email alerts for inconsistencies",
              "Full NAP audit reports",
              "Google Business Profile tracking",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} CitationWatch. All rights reserved.
      </footer>
    </main>
  );
}
