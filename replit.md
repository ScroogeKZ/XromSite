# Overview

This is a full-stack web application for a Kazakhstani stainless steel manufacturing company called ХРОМ-KZ. The application serves as a corporate website showcasing the company's products, services, and capabilities, with a contact form system for lead generation. Built with React on the frontend and Express.js on the backend, it features a modern, responsive design using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Data Storage**: In-memory storage with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot module replacement via Vite integration in development mode

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared TypeScript schemas for type safety across the stack
- **Tables**: Users table and contact requests table with proper relationships
- **Connection**: Configured for Neon Database via connection string

## API Structure
- **Contact Submission**: POST /api/contact for form submissions
- **Contact Management**: GET /api/contact-requests for retrieving submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Validation**: Request validation using shared Zod schemas

## Development Environment
- **Hot Reload**: Vite development server with Express middleware integration
- **Type Safety**: Shared TypeScript types between client and server
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Development Tools**: Replit-specific plugins for enhanced development experience

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database configured via DATABASE_URL environment variable
- **Drizzle Kit**: Database migration and schema management tool

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for server-side code

## Utility Libraries
- **Wouter**: Lightweight routing library for React
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library with validation
- **Zod**: TypeScript-first schema validation library
- **date-fns**: Date utility library for formatting and manipulation