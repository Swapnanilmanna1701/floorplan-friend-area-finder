# Carpet Area Calculator

A professional, responsive TypeScript + Vite web application for calculating carpet area from built-up area with customizable deduction options. Built with modern web technologies for optimal performance and developer experience.

## 🏠 Overview

The Carpet Area Calculator helps users accurately determine the usable floor area of a property by deducting wall thickness and common areas from the total built-up area. Perfect for real estate professionals, architects, and property buyers.

## ✨ Features

- **Modern TypeScript**: Type-safe development with full IntelliSense support
- **Vite Build System**: Lightning-fast development and optimized production builds
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dual Unit Support**: Calculate in Square Feet (sq. ft) or Square Meters (sq. m)
- **Flexible Deduction Options**: 
  - Percentage-based deduction (default 20%)
  - Fixed amount deduction
- **Real-time Calculation**: Instant results with debounced input handling
- **Professional UI**: Modern glassmorphism design with smooth animations
- **Educational Content**: Built-in explanation of carpet area concept
- **Embeddable**: Easy to integrate into existing websites

## 🛠️ Technology Stack

- **TypeScript**: Type-safe JavaScript development
- **Vite**: Next-generation frontend build tool
- **React**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing

## 📁 Project Structure

```
carpet-area-calculator/
├── 📁 public/
│   ├── favicon.ico
│   └── index.html
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Calculator.tsx
│   │   ├── FormHandler.tsx
│   │   ├── ResultDisplay.tsx
│   │   └── InfoBox.tsx
│   ├── 📁 types/
│   │   └── calculator.types.ts
│   ├── 📁 utils/
│   │   ├── calculations.ts
│   │   ├── validation.ts
│   │   └── debounce.ts
│   ├── 📁 styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── 📄 .gitignore
├── 📄 README.md
├── 📄 bun.lockb
├── 📄 components.json
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.ts
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
└── 📄 vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/carpet-area-calculator.git
   cd carpet-area-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build
# or
yarn build
# or
bun run build

# Preview production build
npm run preview
# or
yarn preview
# or
bun run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests (`npm test`)
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@thearchspace.com
- 💬 Website: [thearchspace.com](https://thearchspace.com)
- 🐛 Issues: GitHub Issues

## 🎯 Roadmap

- [ ] Add more regional calculation standards
- [ ] Include carpet area visualization
- [ ] Multi-language support
- [ ] API for programmatic access
- [ ] Advanced deduction presets
- [ ] PDF report generation
- [ ] Mobile app version

---

**Built with TypeScript + Vite + React ❤️ by TheArchSpace Team**

*Last updated: January 2025*
