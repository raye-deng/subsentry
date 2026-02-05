import Link from 'next/link';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle, DollarSign, Play, Star, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Subsentry</span>
              <p className="text-xs text-blue-300">Stop wasting money</p>
            </div>
          </div>
          <Link href="/dashboard" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 font-semibold flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            Save up to $4,800/year on software subscriptions
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Find Duplicate
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Subscriptions</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Stop paying for 5 different Notion accounts across teams. Automatically identify duplicates, consolidate plans, and save thousands instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/dashboard" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-3 text-xl font-bold">
              Start Free
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link href="#how-it-works" className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-semibold">
              <Play className="w-6 h-6" />
              Watch Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-bold">10,000+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <div className="text-left">
                <div className="text-white font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: DollarSign, value: '$400/mo', label: 'Average Savings', color: 'from-green-500 to-emerald-600' },
            { icon: CheckCircle, value: '10k+', label: 'Companies Saved', color: 'from-blue-500 to-blue-600' },
            { icon: Zap, value: '5 min', label: 'Setup Time', color: 'from-yellow-500 to-orange-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Section */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-12 mb-24 border border-red-500/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            The Hidden Cost of Growth
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5x Notion Accounts",
                desc: "Marketing has their own. Engineering has theirs. Sales too. $900/mo across teams when one enterprise plan is $500.",
                savings: "$4,800/year",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Zombie Subscriptions",
                desc: "Free trials that auto-converted. Tools from ex-employees. Services nobody remembers signing up for.",
                savings: "$2,400/year",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Duplicate Tools",
                desc: "3 different project managers, 2 video conferencing tools, 4 design platforms across the company.",
                savings: "$3,600/year",
                color: "from-yellow-500 to-orange-500"
              },
            ].map((problem, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`bg-gradient-to-r ${problem.color} text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-6`}>
                  {problem.savings} Lost
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            How Subsentry Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Bank', desc: 'Securely link your business accounts with Plaid', color: 'from-blue-500 to-blue-600' },
              { step: '02', title: 'AI Scans', desc: 'Our AI identifies all your software subscriptions', color: 'from-purple-500 to-purple-600' },
              { step: '03', title: 'Find Dupes', desc: 'Discover overlapping tools across your teams', color: 'from-pink-500 to-pink-600' },
              { step: '04', title: 'Save Money', desc: 'Cancel redundant plans and save instantly', color: 'from-green-500 to-green-600' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30`}>
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We found $2,400/month in duplicate subscriptions within 5 minutes. This tool paid for itself instantly.",
                author: "Sarah Chen",
                role: "CTO, TechStartup"
              },
              {
                quote: "Finally a tool that actually helps us optimize our SaaS spend. Saved us $18,000 in the first year.",
                author: "Michael Rodriguez",
                role: "VP Operations, ScaleCo"
              },
              {
                quote: "Simple, fast, and effective. Our team loves using it and the ROI is undeniable.",
                author: "Emily Watson",
                role: "Founder, DesignAgency"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Award className="w-5 h-5" />
              Trusted by 10,000+ companies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stop Overpaying?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Start your free trial today. See your savings in under 5 minutes. No credit card required.
            </p>
            <Link href="/dashboard" className="bg-white text-blue-600 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-xl font-bold shadow-xl hover:shadow-2xl">
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="flex items-center justify-center gap-8 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                100% secure
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Subsentry</span>
            </div>
            <p className="text-gray-400">© 2026 Subsentry. Save your software budget.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
