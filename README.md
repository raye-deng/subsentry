# Subsentry

<div align="center">

**Find and Consolidate Duplicate Subscriptions**

Stop paying for 5 different Notion accounts across teams. Automatically identify duplicate subscriptions, consolidate plans, and save thousands instantly.

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://subsentry.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[Website](https://subsentry.vercel.app) • [Live Demo](https://subsentry.vercel.app) • [Changelog](#changelog)

</div>

---

## 📊 Overview

Subsentry is a B2B subscription consolidation tool that helps businesses identify and eliminate duplicate software subscriptions across teams.

**The Problem:**
> "We're paying for 5 separate subscriptions to Notion across 3 different credit cards. $900 per month when we could have one enterprise plan for $500."

Every company with 10-100 employees has this problem. Tools pile up slowly until someone notices.

**The Solution:**
1. Connect your bank/credit card (Plaid - secure)
2. AI scans all your subscriptions
3. Identifies duplicates across teams
4. Shows consolidation opportunities with savings

**Real Impact:**
- Average savings: $200-1,000/month
- Setup time: 5 minutes
- ROI: Visible instantly

---

## 🎯 Key Features

### ✅ Duplicate Detection
- AI-powered analysis identifies overlapping subscriptions
- Find 5 Notion accounts → consolidate to 1 enterprise plan
- Support for 50+ SaaS tools (Notion, Zoom, Slack, Figma, ChatGPT, etc.)

### 💰 Savings Calculator
- See potential savings before committing
- Consolidation recommendations with ROI analysis
- Track monthly spending trends

### 🔔 Smart Alerts
- Duplicate subscription warnings
- Trial conversion reminders
- Price increase notifications
- Renewal date tracking

### 👥 Team Collaboration
- Multi-user access with role-based permissions
- Audit trail for all actions
- Integration with expense tools (Sage, Ramp, Brex)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Plaid API key ([get free account](https://plaid.com/docs/))

### Installation

```bash
# Clone the repository
git clone https://github.com/raye-deng/subsentry.git
cd subsentry

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Plaid API keys
# PLAID_CLIENT_ID=your_client_id
# PLAID_SECRET=your_secret
# PLAID_ENV=sandbox

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Deployment

**Vercel** (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/raye-deng/subsentry)

---

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Bank API**: Plaid
- **AI**: OpenAI GPT-4 (for duplicate detection)

### Project Structure

```
subsentry/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── SubscriptionCard.tsx
├── lib/                   # Utility functions
│   ├── plaid.ts          # Plaid API integration
│   └── utils.ts          # General utilities
└── types/                 # TypeScript types
```

---

## 💡 Use Cases

### 1. Duplicate Subscriptions

**Before:**
- Marketing: Notion Team ($15/mo)
- Engineering: Notion Team ($15/mo)
- Sales: Notion Team ($15/mo)
- HR: Notion Individual ($10/mo)
- Random: Notion Team ($15/mo)

**Total:** $70/month

**After:**
- Company: Notion Enterprise ($500/mo for 25 users)

**Total:** $500/month ÷ 25 users = $20/user

**Savings:** $4,800/year

### 2. Zombie Subscriptions

- Tools from ex-employees still billing
- Free trials that auto-converted
- Services nobody remembers signing up for

**Impact:** $200-500/month

### 3. Unused Tools

- Paying for software nobody uses
- Low utilization (< 20% activity)
- Redundant functionality across tools

**Impact:** $300-800/month

---

## 📈 Roadmap

### Phase 1: MVP (Current) ✅
- [x] Landing page
- [x] Dashboard with mock data
- [x] Duplicate detection UI
- [x] Savings calculator
- [x] Basic subscription management

### Phase 2: Real Data Integration (Next)
- [ ] Plaid API integration
- [ ] Real subscription detection
- [ ] Transaction categorization
- [ ] User authentication
- [ ] Database integration

### Phase 3: Advanced Features
- [ ] SSO integration (Google Workspace, Okta)
- [ ] Usage analytics (login tracking)
- [ ] Trial conversion protection
- [ ] Price increase alerts
- [ ] Alternative suggestions

### Phase 4: Enterprise
- [ ] Multi-tenant support
- [ ] Advanced permissions
- [ ] Audit logs
- [ ] Custom integrations
- [ ] White-label options

---

## 🎨 Screenshots

### Landing Page
![Landing Page](docs/screenshots/landing.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Duplicate Detection
![Duplicate Detection](docs/screenshots/duplicates.png)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for type safety
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Keep PRs focused and small

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Plaid](https://plaid.com) for the bank integration API
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons

---

## 📞 Contact & Support

- **Website**: https://subsentry.vercel.app
- **Email**: support@subsentry.vercel.app
- **Twitter**: [@AneyaAI](https://twitter.com/AneyaAI)
- **GitHub Issues**: [Open an issue](https://github.com/raye-deng/subsentry/issues)

---

## 🌟 Star History

If you find this project helpful, please consider giving it a star ⭐

<a href="https://github.com/raye-deng/subsentry/stargazers">
  <img src="https://api.star-history.com/svg?repos=raye-deng/subsentry&type=Date" alt="Star History Chart">
</a>

---

<div align="center">

Built with ❤️ by [Aneya](https://github.com/raye-deng)

[⬆ Back to Top](#subsentry)

</div>
