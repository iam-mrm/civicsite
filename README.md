# Civic Portal

A modern, user-friendly civic services website built with Astro and Tailwind CSS. Designed to help people navigate major life events and government services with ease.

## 🚀 Features

- **Modern Tech Stack**: Astro 5, TypeScript, Tailwind CSS 4
- **Component-Based Architecture**: Reusable, maintainable components
- **Type Safety**: Full TypeScript support with strict configuration
- **SEO Optimized**: Built-in SEO utilities and structured data
- **Developer Experience**: ESLint, Prettier, Husky pre-commit hooks
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Environment Configuration**: Flexible environment-based configuration

## � Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Hero.astro
│   ├── SearchBar.astro
│   ├── LifeEventCard.astro
│   ├── LifeEventsGrid.astro
│   ├── QuickActions.astro
│   └── TrustIndicators.astro
├── data/               # Data layer and content
│   ├── lifeEvents.ts
│   └── siteConfig.ts
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Astro pages and routes
│   ├── index.astro
│   └── life-events/
│       ├── index.astro
│       └── [slug].astro
├── styles/             # Global styles
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── formatting.ts
│   ├── validation.ts
│   ├── seo.ts
│   └── index.ts
├── config/             # Configuration files
│   └── environment.ts
└── env.d.ts           # Environment types
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd civicsite
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |

## 🧩 Component Architecture

The project follows a modular component architecture:

- **Hero**: Main hero section with title and subtitle
- **SearchBar**: Search functionality with placeholder text
- **LifeEventCard**: Individual life event cards with emoji, title, and description
- **LifeEventsGrid**: Grid container for life events
- **QuickActions**: Quick action buttons section
- **TrustIndicators**: Trust metrics and social proof

## 📊 Data Management

Content is managed through TypeScript files in the `src/data/` directory:

- **lifeEvents.ts**: Array of life events with metadata
- **siteConfig.ts**: Site configuration and settings

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

- `SITE_URL`: Your production URL
- `SITE_TITLE`: Site title
- `SITE_DESCRIPTION`: Site description
- `CONTACT_EMAIL`: Contact email address
- Feature flags for enabling/disabling features

### TypeScript Configuration

- Strict TypeScript mode enabled
- Path aliases configured for clean imports
  - `@/components/*` → `src/components/*`
  - `@/types/*` → `src/types/*`
  - `@/data/*` → `src/data/*`
  - `@/utils/*` → `src/utils/*`

## 🎨 Styling

- **Tailwind CSS 4** with Vite integration
- **Custom color palette**: Indigo and blue tones
- **Responsive design**: Mobile-first approach
- **Component-scoped styles**: Each component maintains its own styles

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting and formatting: `npm run lint:fix && npm run format`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a pull request

## 📝 Code Quality

- **ESLint**: Code linting with TypeScript and Astro support
- **Prettier**: Code formatting with consistent style
- **Husky**: Pre-commit hooks for code quality
- **TypeScript**: Full type safety with strict mode

## � License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@civic-portal.example.com
- Create an issue in the repository
- Check the documentation for common questions
