import Link from 'next/link';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Subsentry</span>
          </div>
          <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            Save up to $4,800/year on software subscriptions
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Find and Consolidate
            <span className="text-blue-600"> Duplicate Subscriptions</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Stop paying for 5 different Notion accounts across teams. Automatically identify duplicates,
            consolidate plans, and save thousands instantly.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
              See How It Works
            </Link>
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: DollarSign, value: '$400/mo', label: 'Average Savings' },
            { icon: CheckCircle, value: '10k+', label: 'Companies Saved' },
            { icon: Zap, value: '5 min', label: 'Setup Time' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border">
              <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Section */}
        <div className="bg-white rounded-2xl p-12 mb-20 shadow-sm border">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Hidden Cost of Growth
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5x Notion Accounts",
                desc: "Marketing has their own. Engineering has theirs. Sales too. $900/mo across teams when one enterprise plan is $500.",
                savings: "$4,800/year"
              },
              {
                title: "Zombie Subscriptions",
                desc: "Free trials that auto-converted. Tools from ex-employees. Services nobody remembers signing up for.",
                savings: "$2,400/year"
              },
              {
                title: "Duplicate Tools",
                desc: "3 different project managers, 2 video conferencing tools, 4 design platforms across the company.",
                savings: "$3,600/year"
              },
            ].map((problem, i) => (
              <div key={i} className="border rounded-xl p-6">
                <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {problem.savings} Lost
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Subsentry Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Your Bank', desc: 'Securely link your business accounts with Plaid' },
              { step: '02', title: 'AI Scans', desc: 'Our AI identifies all your software subscriptions' },
              { step: '03', title: 'Find Duplicates', desc: 'Discover overlapping tools across your teams' },
              { step: '04', title: 'Consolidate', desc: 'Cancel redundant plans and save instantly' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today. See your savings in under 5 minutes.
          </p>
          <Link href="/dashboard" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2 text-lg font-semibold">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm opacity-75">No credit card required • Cancel anytime</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 Subsentry. Save your software budget.</p>
        </div>
      </footer>
    </div>
  );
}
