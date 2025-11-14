# Sedrick Wall Premium Portfolio

## Overview

This is a premium personal brand website for Sedrick Wall, showcasing his work across four domains: Product Leadership, Real Estate Investment & Property Management, Community Leadership (TheMenOnMission.org), and Life & Family. The application is a full-stack TypeScript project built with React, Express, and PostgreSQL, featuring a modern, luxury aesthetic with interactive animations and smooth user experiences.

The site includes a one-page scrolling home layout with dedicated pages for Real Estate, Community, and Blog sections. It emphasizes narrative-driven storytelling with timeline components, interactive case studies, testimonials, and rich media presentations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (no React Router dependency)
- Client code lives in `/client/src`

**UI Component System:**
- Shadcn UI component library (New York style variant) with Radix UI primitives
- TailwindCSS for styling with custom design tokens
- Framer Motion for animations and transitions
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**Design System:**
- Color palette: White (#FFFFFF), Gold (#C9A86A), Black (#000000), Navy (#0A0E27)
- Typography: Poppins/Satoshi for headings, Inter for body text
- Spacing system based on Tailwind's 4px grid (4, 8, 12, 16, 20, 24, 32)
- Dark mode support via class-based theme switching
- Custom hover, elevation, and glow effects defined in global CSS

**State Management:**
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- No global state management library (Redux, Zustand, etc.)

**Key Page Structure:**
- Home: Single-page scrolling design with hero, domains, timeline, portfolio, testimonials, and contact sections
- Real Estate: Dedicated page showcasing investment strategies and property management
- Community: Page highlighting Men on Mission movement and events
- Blog: Post listing with filtering and mock data structure

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- Custom Vite middleware integration for SSR/development
- HTTP server created via Node's `http` module
- API routes prefixed with `/api`

**Request/Response Handling:**
- Express JSON body parser with raw body capture for webhooks
- Request logging middleware for API routes
- CORS and security handled at middleware level
- Static file serving through Vite in development, Express in production

**Storage Layer:**
- In-memory storage implementation (`MemStorage`) as the default
- Storage interface (`IStorage`) designed for easy swapping to database implementations
- Currently implements user CRUD operations (getUser, getUserByUsername, createUser)
- Database schema defined with Drizzle ORM ready for PostgreSQL migration

### Data Storage Solutions

**Database ORM:**
- Drizzle ORM configured for PostgreSQL
- Schema definitions in `/shared/schema.ts`
- Drizzle Zod integration for runtime validation
- Migration files output to `/migrations`
- Connection via `@neondatabase/serverless` driver

**Current Schema:**
- Users table with id (UUID), username (unique), and password fields
- Prepared for expansion to support blog posts, projects, testimonials, etc.

**Storage Pattern:**
- Abstract storage interface allows switching between in-memory and database implementations
- Shared types between client and server via `/shared` directory
- Type-safe insert schemas generated from Drizzle tables

### Authentication & Authorization

**Current State:**
- User schema exists with username/password fields
- No authentication middleware currently implemented
- Session management dependencies installed (connect-pg-simple)
- Structure ready for session-based or token-based auth

**Planned Implementation:**
- Session-based authentication using Express sessions
- PostgreSQL session store via connect-pg-simple
- Protected API routes for content management
- Public read access, authenticated write access pattern

## External Dependencies

### Core Framework Dependencies
- **React 18** - Frontend UI library
- **Express** - Backend web framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type system for both client and server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Pre-built component library (30+ Radix UI components)
- **Framer Motion** - Animation library for interactions
- **Lucide React** - Icon library

### Database & ORM
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **Drizzle Zod** - Schema validation integration
- **PostgreSQL** - Primary database (not yet provisioned, but configured)

### State Management
- **TanStack Query v5** - Server state management and caching
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Development Tools
- **Replit Plugins** - Vite plugins for Replit environment (cartographer, dev banner, runtime error overlay)
- **TSX** - TypeScript execution for development
- **ESBuild** - Production bundler for server code

### Session & Storage
- **connect-pg-simple** - PostgreSQL session store for Express sessions
- Currently using in-memory storage, ready to migrate to PostgreSQL

### Utilities
- **date-fns** - Date formatting and manipulation
- **clsx** & **tailwind-merge** - Conditional className utilities
- **nanoid** - Unique ID generation
- **cmdk** - Command palette component
- **embla-carousel-react** - Carousel/slider component

### Fonts & Assets
- **Google Fonts** - Inter and Poppins loaded via CDN
- **Generated Images** - Placeholder images stored in `/attached_assets/generated_images/`

### Build Output
- Client builds to `/dist/public`
- Server bundles to `/dist/index.js`
- Production start command runs bundled server code