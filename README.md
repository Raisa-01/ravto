# Ravto - Youth-Focused Software Agency Website

A modern, visually stunning website for Ravto software agency featuring a sci-fi aesthetic, smooth animations, and a clean light theme.

## 🚀 Features

- **Beautiful Hero Section** - Eye-catching landing with animated gradients and floating elements
- **Services Showcase** - Display of all services with interactive cards:
  - Website Design
  - Flutter App Development
  - UI Mockups (Figma)
  - Social Media Graphics (Canva)
  - Branding Packages
- **About Section** - Company highlights and statistics
- **Contact Form** - Functional contact form with validation
- **Multiple Pages** - Services, About, Contact, Privacy Policy, Terms of Service
- **Smooth Animations** - Framer Motion powered animations throughout
- **Fully Responsive** - Works perfectly on all devices
- **SEO Optimized** - Proper meta tags and descriptions

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Shadcn UI components
- **Routing**: Wouter
- **Animations**: Framer Motion (via Tailwind CSS animations)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React + React Icons
- **Backend**: Express.js
- **Build Tool**: Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **VS Code** - [Download here](https://code.visualstudio.com/)

## 🔧 Setup Instructions for VS Code

### 1. Clone or Download the Project

If you're working from Replit, download all files to your local machine.

### 2. Open in VS Code

```bash
# Navigate to the project directory
cd path/to/ravto-website

# Open in VS Code
code .
```

### 3. Install Dependencies

Open the integrated terminal in VS Code (`Terminal` → `New Terminal` or `` Ctrl+` ``) and run:

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 4. Environment Setup (Optional)

Create a `.env` file in the root directory if you need environment variables:

```bash
# .env
SESSION_SECRET=your-secret-key-here
NODE_ENV=development
```

### 5. Start the Development Server

In the VS Code terminal, run:

```bash
npm run dev
```

This command will:
- Start the Express backend server
- Start the Vite development server for the frontend
- Both will run on **http://localhost:5000**

### 6. View the Website

Open your browser and navigate to:
```
http://localhost:5000
```

You should see the Ravto homepage with all animations and features working!

## 📁 Project Structure

```
ravto-website/
├── client/                    # Frontend code
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   └── examples/    # Component examples
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Privacy.tsx
│   │   │   └── Terms.tsx
│   │   ├── lib/             # Utilities
│   │   ├── hooks/           # Custom React hooks
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                   # Backend code
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage
│   └── index.ts             # Server entry point
├── shared/                   # Shared types
│   └── schema.ts            # Data schemas
├── attached_assets/          # Generated images
│   └── generated_images/    # Logo and hero images
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Colors

Edit `client/src/index.css` to change the color scheme. The current palette uses:
- **Primary**: Electric blue (220° hue)
- **Accent**: Purple to cyan gradient
- **Background**: Off-white

### Content

- **Services**: Edit `client/src/components/ServicesSection.tsx`
- **About Text**: Edit `client/src/components/AboutSection.tsx`
- **Contact Email**: Edit `client/src/components/ContactSection.tsx`
- **Footer Links**: Edit `client/src/components/Footer.tsx`

### Images

Replace the generated images in `attached_assets/generated_images/` with your own:
- Hero background image
- Logo (if you decide to use one)

## 📱 Pages Available

1. **Home** (`/`) - Complete landing page with all sections
2. **Services** (`/services`) - Dedicated services page
3. **About** (`/about`) - About Ravto page
4. **Contact** (`/contact`) - Contact form page
5. **Privacy Policy** (`/privacy`) - Privacy policy details
6. **Terms of Service** (`/terms`) - Terms and conditions

## 🐛 Troubleshooting

### Port Already in Use

If port 5000 is already in use, you can change it in `server/index.ts`:

```typescript
const PORT = process.env.PORT || 3000; // Change to your preferred port
```

### Dependencies Not Installing

Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Hot Reload Not Working

Restart the development server:
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

This will create optimized files in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Recommended VS Code Extensions

For the best development experience, install these VS Code extensions:

1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **Tailwind CSS IntelliSense** - Tailwind autocomplete
4. **TypeScript Vue Plugin (Volar)** - Better TypeScript support
5. **Auto Rename Tag** - Rename HTML tags automatically

## 📞 Support

For any issues or questions about the website, contact:
- Email: hello@ravto.com

## 📄 License

Copyright © 2025 Ravto. All rights reserved.

---

Built with ❤️ by Ravto - Youth-Focused Software Agency
