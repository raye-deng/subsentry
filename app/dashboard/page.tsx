'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  DollarSign,
  Calendar,
  Users,
  Zap,
  X,
  Star,
  Sparkles,
  Target,
} from 'lucide-react';

// Mock data for MVP
const mockSubscriptions = [
  {
    id: 1,
    name: 'Notion',
    plan: 'Team Plan',
    price: 15,
    billing: 'monthly',
    users: 8,
    category: 'Productivity',
    isDuplicate: true,
    duplicateCount: 4,
    lastUsed: '2 hours ago',
    renewalDate: '2026-02-15',
  },
  {
    id: 2,
    name: 'Zoom',
    plan: 'Pro',
    price: 14.99,
    billing: 'monthly',
    users: 12,
    category: 'Communication',
    isDuplicate: true,
    duplicateCount: 2,
    lastUsed: '1 day ago',
    renewalDate: '2026-02-20',
  },
  {
    id: 3,
    name: 'Figma',
    plan: 'Professional',
    price: 45,
    billing: 'monthly',
    users: 5,
    category: 'Design',
    isDuplicate: false,
    lastUsed: '4 hours ago',
    renewalDate: '2026-02-10',
  },
  {
    id: 4,
    name: 'Slack',
    plan: 'Pro',
    price: 12.50,
    billing: 'monthly',
    users: 25,
    category: 'Communication',
    isDuplicate: false,
    lastUsed: 'Just now',
    renewalDate: '2026-02-25',
  },
  {
    id: 5,
    name: 'ChatGPT Plus',
    plan: 'Plus',
    price: 20,
    billing: 'monthly',
    users: 6,
    category: 'AI',
    isDuplicate: true,
    duplicateCount: 3,
    lastUsed: '3 hours ago',
    renewalDate: '2026-02-18',
  },
];

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions);
  const [showAlert, setShowAlert] = useState(true);

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.price, 0);
  const duplicateSubs = subscriptions.filter(sub => sub.isDuplicate);
  const duplicateSavings = duplicateSubs.reduce((sum, sub) => sum + (sub.price * ((sub.duplicateCount || 1) - 1)), 0);
  const zombieCount = 1;

  const handleCancel = (id: number) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  const handleConsolidate = (id: number) => {
    const sub = subscriptions.find(s => s.id === id);
    if (sub && sub.isDuplicate) {
      const newCount = Math.max(1, (sub.duplicateCount || 1) - 1);
      if (newCount === 1) {
        setSubscriptions(subscriptions.map(s => s.id === id ? { ...s, isDuplicate: false } : s));
      } else {
        setSubscriptions(subscriptions.map(s => s.id === id ? { ...s, duplicateCount: newCount } : s));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Subsentry</span>
              <p className="text-xs text-blue-300">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Alert Banner */}
        {showAlert && (
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 mb-8 flex items-start gap-4 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Duplicate Subscriptions Detected!
              </h3>
              <p className="text-gray-300">
                We found <strong className="text-white">{duplicateSubs.length}</strong> tools with multiple subscriptions. Consolidating them could save you <strong className="text-white font-bold text-lg">${duplicateSavings.toFixed(2)}/month</strong>.
              </p>
            </div>
            <button onClick={() => setShowAlert(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">Monthly</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">${totalMonthly.toFixed(2)}</div>
            <div className="text-sm text-gray-400">Total spending</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">Duplicates</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{duplicateSubs.length}</div>
            <div className="text-sm text-red-400 font-semibold">${duplicateSavings.toFixed(2)}/mo savings</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">Zombie</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{zombieCount}</div>
            <div className="text-sm text-gray-400">Unused subs</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">Potential</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">${(duplicateSavings + 20).toFixed(2)}</div>
            <div className="text-sm text-green-400 font-semibold">/month save</div>
          </div>
        </div>

        {/* Connect Bank Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Connect Your Bank Account</h3>
              <p className="opacity-90">Automatically sync all your subscriptions and get real-time insights</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg">
            <CreditCard className="w-5 h-5" />
            Connect with Plaid
          </button>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Your Subscriptions</h2>
                <p className="text-gray-400 mt-1">{subscriptions.length} active subscriptions</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Target className="w-4 h-4" />
                Sorted by spending
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Service</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Plan</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Price</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Users</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-lg">
                          {sub.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-white text-lg">{sub.name}</div>
                          <div className="text-gray-400 text-sm">{sub.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">{sub.plan}</div>
                      <div className="text-gray-400 text-sm">{sub.billing}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-lg">${sub.price.toFixed(2)}</div>
                      {sub.isDuplicate && (
                        <div className="flex items-center gap-1 text-red-400 text-sm font-semibold mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          {sub.duplicateCount}x duplicate
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-white">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{sub.users}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-medium">Active</span>
                      </div>
                      <div className="text-gray-400 text-xs mt-1">{sub.lastUsed}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {sub.isDuplicate && (
                          <button
                            onClick={() => handleConsolidate(sub.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Consolidate
                          </button>
                        )}
                        <button
                          onClick={() => handleCancel(sub.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Duplicate Details Modal */}
        {duplicateSubs.length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Duplicate Subscription Details</h3>
                <p className="text-gray-400">Review and consolidate your duplicate subscriptions</p>
              </div>
            </div>

            <div className="space-y-4">
              {duplicateSubs.map((sub) => (
                <div key={sub.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-xl">
                        {sub.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-xl">{sub.name}</div>
                        <div className="text-gray-400">{sub.plan} • {sub.users} users</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-red-400 text-sm font-semibold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          {sub.duplicateCount}x duplicates
                        </div>
                        <div className="text-white text-lg font-bold">
                          Save ${(sub.price * ((sub.duplicateCount || 1) - 1)).toFixed(2)}/mo
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleConsolidate(sub.id)}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30"
                        >
                          <CheckCircle className="w-5 h-5" />
                          Consolidate
                        </button>
                        <button
                          onClick={() => handleCancel(sub.id)}
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/30"
                        >
                          <X className="w-5 h-5" />
                          Cancel All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
