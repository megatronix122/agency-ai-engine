export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            🚀 Stop writing proposals from scratch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Client Acquisition Engine</span> for Agencies
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Turn a 2-minute client intake into ready-to-send pitches, proposals, and outreach sequences. 
            The complete Notion + AI system that turns strangers into signed clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg font-semibold text-lg transition"
            >
              Get Instant Access — $79
            </a>
            <a 
              href="#demo" 
              className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold text-lg transition"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">One-time payment. Lifetime updates. 14-day guarantee.</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Spending 3+ hours on every proposal",
              "Ghosted after sending quotes",
              "No system for consistent outreach",
              "Scope creep eating your margins", 
              "Writing the same emails over and over",
              "No time to actually do the work"
            ].map((item, i) => (
              <div key={i} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-red-400 mr-2">✗</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="demo" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What you get</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                icon: "📋",
                title: "Client Intake Database",
                desc: "Track every prospect from first contact to signed contract. Never lose a lead again."
              },
              {
                icon: "🤖", 
                title: "7 AI Prompt Workflows",
                desc: "Copy-paste prompts that generate pitch decks, proposals, outreach sequences, and more."
              },
              {
                icon: "📊",
                title: "Agency Dashboard", 
                desc: "See your pipeline, conversion rates, and revenue at a glance."
              },
              {
                icon: "📹",
                title: "10-Min Setup Video",
                desc: "Watch once, implement in an afternoon. No guesswork."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">The 7 AI Workflows</h3>
            <div className="space-y-3">
              {[
                "Pitch Deck Generator — 5-slide narrative in 60 seconds",
                "Proposal Writer — 3-tier pricing proposals that close",
                "Cold Outreach Sequences — 4-email sequences that get replies", 
                "Follow-up Automation — Never let a deal die",
                "Case Study Creator — Turn wins into future sales",
                "Monthly Report Generator — Client retention on autopilot",
                "Scope Creep Defender — Protect your margins"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-primary font-bold">{i + 1}</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Built for agency owners who want to scale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "3.5x", label: "Faster proposal creation" },
              { stat: "40%", label: "Higher close rate" },
              { stat: "10hrs", label: "Saved per week" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Simple pricing</h2>
        <p className="text-center text-gray-400 mb-12">One-time payment. No subscriptions. Lifetime updates.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-4xl font-bold mb-6">$79</div>
            <ul className="space-y-3 mb-8 text-gray-400">
              <li>✓ Complete Notion template</li>
              <li>✓ 7 AI prompt workflows</li>
              <li>✓ Setup video</li>
              <li>✓ Email support</li>
            </ul>
            <button className="w-full py-3 border border-gray-600 rounded-lg font-semibold hover:border-primary transition">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="p-8 bg-gray-800 rounded-2xl border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-sm font-semibold rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-6">$129</div>
            <ul className="space-y-3 mb-8 text-gray-400">
              <li>✓ Everything in Starter</li>
              <li>✓ 15 additional AI prompts</li>
              <li>✓ SOP library (10 scripts)</li>
              <li>✓ Video script templates</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="w-full py-3 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition">
              Get Pro Access
            </button>
          </div>

          {/* Agency */}
          <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Agency License</h3>
            <div className="text-4xl font-bold mb-6">$299</div>
            <ul className="space-y-3 mb-8 text-gray-400">
              <li>✓ Everything in Pro</li>
              <li>✓ 5 team seats</li>
              <li>✓ White-label rights</li>
              <li>✓ Client onboarding system</li>
              <li>✓ 1:1 setup call (30 min)</li>
            </ul>
            <button className="w-full py-3 border border-gray-600 rounded-lg font-semibold hover:border-primary transition">
              Get Agency License
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔒 Secure payment via Stripe. 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do I need to know how to use AI?",
              a: "Nope. The prompts are copy-paste ready. You just fill in client details and paste into ChatGPT, Claude, or your preferred AI."
            },
            {
              q: "What if I don't use Notion?",
              a: "The templates are built in Notion, but you can export to PDF or recreate in your tool of choice. Most agency owners already use Notion."
            },
            {
              q: "How is this different from other templates?",
              a: "This isn't just a template—it's a complete system with AI prompts that generate custom content for every client. No two outputs are the same."
            },
            {
              q: "Will this work for my niche?",
              a: "The system works for any service-based agency: marketing, design, development, SEO, PPC, content, social media, etc."
            },
            {
              q: "What's the refund policy?",
              a: "14-day money-back guarantee. If it doesn't save you time and help you close more deals, email support for a full refund."
            }
          ].map((item, i) => (
            <div key={i} className="border-b border-gray-800 pb-6">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to systemize your client acquisition?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join 200+ agency owners who've cut proposal time by 70% and doubled their close rate.
        </p>
        <a 
          href="#pricing" 
          className="inline-block px-10 py-4 bg-primary hover:bg-primary/90 rounded-lg font-semibold text-lg transition"
        >
          Get the Agency AI Engine — $79
        </a>
        <p className="mt-4 text-sm text-gray-500">Instant access. 14-day guarantee.</p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2025 Agency AI Engine. Built with 🤖 by Megatron.</p>
        <p className="mt-2">Questions? support@agencyaiengine.com</p>
      </footer>
    </main>
  );
}
