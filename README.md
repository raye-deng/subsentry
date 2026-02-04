# Subsentry - B2B Subscription Consolidation Tool

Stop paying for 5 different Notion accounts across teams. Automatically identify duplicate subscriptions, consolidate plans, and save thousands instantly.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📊 MVP Features

### ✅ Implemented
- **Landing Page**: Product introduction with value proposition and social proof
- **Dashboard**: View all subscriptions with analytics
- **Duplicate Detection**: Identify overlapping tools across teams
- **Savings Calculator**: Show potential savings from consolidation
- **Interactive UI**: Cancel and consolidate subscriptions (mock)
- **Responsive Design**: Works on all devices

### 🔜 Planned (Post-MVP)
- Plaid API integration for real bank data
- Usage tracking via SSO integrations
- Automatic consolidation recommendations
- Team collaboration features
- Alert notifications for renewals

## 🎯 Target Users

- Companies with 10-100 employees
- Multiple teams with independent software purchasing
- No dedicated procurement/IT team
- Growing fast and accumulating tool debt

## 💡 Use Cases

1. **Duplicate Subscriptions**: 5 Notion accounts paying $900/mo → 1 enterprise plan $500/mo
2. **Zombie Subscriptions**: Tools from ex-employees still billing
3. **Forgotten Trials**: Free trials that auto-converted
4. **Unused Tools**: Paying for software nobody uses

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Bank API**: Plaid (planned)

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy with one click

```bash
vercel --prod
```

## 📄 License

MIT
