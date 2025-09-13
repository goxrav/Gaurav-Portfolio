# Overview

This is a modern full-stack web application built with React and Express.js, featuring a space-themed portfolio website. The project showcases a personal portfolio for "Alex Nova" with interactive UI components, 3D visualizations, and a contact form system. The application uses a monorepo structure with shared TypeScript types and modern web development practices including server-side rendering capabilities and comprehensive UI component library.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Built with React 18 using TypeScript and functional components with hooks
- **UI Framework**: Radix UI primitives with shadcn/ui component system for consistent design
- **Styling**: Tailwind CSS with custom space-themed color palette and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Development Setup**: Custom Vite integration for SSR-like development experience
- **API Structure**: RESTful endpoints with structured error handling and request logging
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Session Management**: Basic in-memory storage with interface for future database integration

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema Management**: Shared schema definitions between client and server
- **Development Storage**: In-memory storage implementation for development/testing
- **Production Ready**: Database configuration supports PostgreSQL via connection URL

## Authentication and Authorization
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Storage Interface**: Abstracted storage layer supporting CRUD operations for users
- **Session Handling**: Cookie-based session management setup (connect-pg-simple)
- **Security**: Prepared for secure password hashing and session management

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

## Development and Build Tools
- **Vite**: Fast build tool with React plugin and development optimizations
- **TypeScript**: Full type safety across frontend, backend, and shared modules
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Database and Data Management
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migrations and schema management
- **Neon Database**: Serverless PostgreSQL database connector
- **Zod**: Schema validation and type inference

## Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod
- **Input OTP**: One-time password input components

## Development Experience
- **Replit Plugins**: Development banner, cartographer, and runtime error overlay
- **Date-fns**: Modern date manipulation library
- **Nanoid**: URL-safe unique ID generator
- **Three.js Types**: 3D graphics library type definitions for space-themed animations