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
  ArrowRight,
  X,
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
  const zombieCount = 1; // Mock: would be calculated from usage data

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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Subsentry</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Alert Banner */}
        {showAlert && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Duplicate Subscriptions Detected!</h3>
              <p className="text-gray-600">
                We found {duplicateSubs.length} tools with multiple subscriptions. Consolidating them could save you <strong>${duplicateSavings.toFixed(2)}/month</strong>.
              </p>
            </div>
            <button onClick={() => setShowAlert(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <span className="text-sm text-gray-500">Monthly</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">${totalMonthly.toFixed(2)}</div>
            <div className="text-sm text-gray-500 mt-1">Total spending</div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              <span className="text-sm text-gray-500">Duplicates</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{duplicateSubs.length}</div>
            <div className="text-sm text-red-600 mt-1">${duplicateSavings.toFixed(2)}/mo savings</div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span className="text-sm text-gray-500">Zombie</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{zombieCount}</div>
            <div className="text-sm text-gray-500 mt-1">Unused subs</div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <TrendingDown className="w-8 h-8 text-green-600" />
              <span className="text-sm text-gray-500">Potential</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">${(duplicateSavings + 20).toFixed(2)}</div>
            <div className="text-sm text-green-600 mt-1">/month save</div>
          </div>
        </div>

        {/* Connect Bank Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mb-8 text-white flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1">Connect Your Bank Account</h3>
            <p className="opacity-90">Automatically sync all your subscriptions and get real-time insights</p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Connect with Plaid
          </button>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Your Subscriptions</h2>
            <p className="text-gray-600 mt-1">{subscriptions.length} active subscriptions</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Service</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Plan</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Price</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Users</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-700">
                          {sub.name[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{sub.name}</div>
                          <div className="text-sm text-gray-500">{sub.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">{sub.plan}</div>
                      <div className="text-sm text-gray-500">{sub.billing}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">${sub.price.toFixed(2)}</div>
                      {sub.isDuplicate && (
                        <div className="text-sm text-red-600">
                          {sub.duplicateCount}x duplicate
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-900">
                        <Users className="w-4 h-4" />
                        {sub.users}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {sub.isDuplicate ? (
                        <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          <AlertTriangle className="w-4 h-4" />
                          Duplicate
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Active
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {sub.isDuplicate && (
                          <button
                            onClick={() => handleConsolidate(sub.id)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                          >
                            <Zap className="w-4 h-4" />
                            Consolidate
                          </button>
                        )}
                        <button
                          onClick={() => handleCancel(sub.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {subscriptions.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No subscriptions found</p>
              <p className="mt-2">Connect your bank account to get started</p>
            </div>
          )}
        </div>

        {/* Savings Suggestions */}
        {duplicateSavings > 0 && (
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900">Quick Win: Consolidate Your Duplicates</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {duplicateSubs.slice(0, 2).map((sub) => (
                <div key={sub.id} className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{sub.name}</span>
                    <span className="text-green-600 font-bold">
                      Save ${(sub.price * ((sub.duplicateCount || 1) - 1)).toFixed(2)}/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {sub.duplicateCount} subscriptions detected → Consolidate to 1 team plan
                  </p>
                  <button
                    onClick={() => handleConsolidate(sub.id)}
                    className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                  >
                    View consolidation options <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
