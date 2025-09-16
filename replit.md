# Overview

This is a medical clinic scheduling and patient management system built as a full-stack web application. The system provides functionality for appointment scheduling, patient records management, financial tracking, and clinic administration. It features a modern React frontend with a comprehensive UI component library and an Express.js backend with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a modern component-based architecture:

- **Framework**: React with TypeScript for type safety and better development experience
- **Routing**: React Router for client-side navigation between different sections (Dashboard, Agenda, Patient Records, Management, Settings)
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system focused on medical/healthcare aesthetics
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a page-based structure with components organized by feature:
- Dashboard for overview and quick actions
- Agenda for appointment scheduling and calendar management
- Patient Records (Prontuários) for medical record management
- Management (Gestão) for financial and operational oversight
- Settings (Configurações) for clinic configuration

## Backend Architecture
The server-side uses a lightweight Express.js architecture with TypeScript:

- **Framework**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with Vite integration for seamless development experience
- **Storage Layer**: Abstracted storage interface (IStorage) with both memory and database implementations

The backend follows a modular structure with separation of concerns:
- Routes for API endpoint definitions
- Storage layer for database operations
- Schema definitions shared between client and server

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon serverless platform
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Migrations**: Drizzle Kit for database schema management
- **Schema**: Centralized schema definitions in TypeScript with Zod validation
- **Session Storage**: PostgreSQL-based session management for user authentication

The database schema includes user management tables with username/password authentication, designed to expand for patient records, appointments, and clinic data.

## External Dependencies

### Database & Backend Services
- **Neon Database**: Serverless PostgreSQL hosting for production database
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Drizzle Kit**: Database migration and schema management tool

### Frontend UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom medical theme
- **Lucide React**: Modern icon library for consistent iconography
- **TanStack React Query**: Server state management and caching

### Development & Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with runtime error handling

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

The system is designed to be deployed as a monolithic application with the frontend and backend served together, making it suitable for small to medium-sized medical clinics. The architecture supports future scaling with its modular design and type-safe interfaces.