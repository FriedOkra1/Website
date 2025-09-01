# Portfolio Website

A modern, responsive portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Features

- 🎨 **Modern Design**: Clean and professional design with gradient accents
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Astro for optimal performance
- 🎯 **SEO Friendly**: Optimized for search engines
- 🎭 **Smooth Animations**: Subtle hover effects and transitions
- 📧 **Contact Form**: Ready-to-use contact form
- 🚀 **Easy to Customize**: Well-structured code for easy modifications

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and experience highlights
- **Projects**: Showcase of your work with technology tags
- **Skills**: Organized display of your technical skills
- **Contact**: Contact information and contact form

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

To build the site for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Personal Information

Update the following files to customize your portfolio:

1. **`src/pages/index.astro`**: 
   - Change "Your Name" to your actual name
   - Update the hero section description
   - Modify the about section content
   - Add your real projects
   - Update skills and technologies
   - Change contact information

2. **`src/layouts/Layout.astro`**:
   - Update the navigation title
   - Modify the footer copyright

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Modify the gradient classes in `src/styles/global.css`
- Layout: Adjust spacing and grid layouts in the component files
- Typography: Change font sizes and weights in the Tailwind classes

### Adding New Sections

To add new sections:

1. Create a new section in `src/pages/index.astro`
2. Add navigation links in `src/layouts/Layout.astro`
3. Style using Tailwind CSS classes

## Technologies Used

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Vite](https://vitejs.dev) - Build tool

## Deployment

This Astro site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use the GitHub Actions workflow
- **Any static hosting service**

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Astro and Tailwind CSS
