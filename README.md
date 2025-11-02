# Legacy Roleplay Documentation

Open-source documentation website for the Legacy Roleplay GTA V server, built with [Fumadocs](https://fumadocs.dev) and Next.js.

## 🎮 About

This documentation site serves as the central hub for all information about the Legacy Roleplay server. It's maintained by the community and open for contributions from anyone who wants to help improve the documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building

```bash
pnpm build
# or
npm run build
```

## 📝 Contributing

This documentation is **open source** and community-driven! We welcome contributions from everyone.

### How to Contribute

1. **Fork the repository** on GitHub
2. **Create a branch** for your changes
3. **Make your edits** to the documentation files in `/content/docs`
4. **Test locally** by running `pnpm dev`
5. **Submit a pull request** with a clear description of your changes

### Documentation Structure

- `/content/docs` - All documentation content (MDX files)
- `/src/app/docs` - Documentation layout and pages
- `/src/lib` - Shared utilities and configuration

### Adding New Documentation

Simply create a new `.mdx` file in `/content/docs` with frontmatter:

```mdx
---
title: Your Page Title
description: Brief description
---

Your content here...
```

## 🎨 Theme

The site uses a custom theme based on BD flag colors:
- **Primary Green**: `#006A44` (BD Flag Green)
- **Accent Red**: `#F42A41` (BD Flag Red)

Theme colors can be customized in `/src/app/global.css`.

## 📚 Features

- ✨ Modern, responsive design
- 🔍 Built-in search functionality
- 🌙 Dark mode support
- 📱 Mobile-friendly
- 🔗 GitHub integration for contributions
- 📖 MDX support for rich content

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Fumadocs](https://fumadocs.dev) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📄 License

This project is open source and available for the community to use and improve.

## 🔗 Links

- Documentation: [View Site](#)
- Discord: [Join Server](#)
- GitHub: [Repository](#)

---

Made with ❤️ for the Legacy Roleplay community
