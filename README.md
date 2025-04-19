# Angular Developer Portfolio

A modern, responsive portfolio website for an Angular developer with 6+ years of experience. Built with Angular 19 and Angular Material.

## Features

- Responsive design that works on all devices
- Modern UI with animations and transitions
- Lazy-loaded components for better performance
- Contact form with validation
- Showcase of projects and skills
- Timeline of work experience

## Technologies Used

- Angular 19
- Angular Material
- TypeScript
- SCSS
- RxJS
- FontAwesome

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Customization

### Personal Information

Update the following files with your personal information:

- `src/app/components/about/about.component.ts` - Update your bio and skills
- `src/app/components/experience/experience.component.ts` - Update your work experience
- `src/app/components/projects/projects.component.ts` - Update your projects
- `src/app/components/contact/contact.component.ts` - Update your contact information

### Images

Replace the placeholder images in the `src/assets/images` directory with your own:

- `src/assets/images/profile.jpg` - Your profile picture
- `src/assets/images/projects/*.jpg` - Project screenshots

### Styling

The color scheme can be customized by modifying the CSS variables in `src/styles.scss`.

## Building for Production

To build the application for production:

```
npm run build
```

The build artifacts will be stored in the `dist/portfolio` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular team for the amazing framework
- Angular Material for the UI components
- FontAwesome for the icons
