## Screenshots

### Light Theme

![Light Theme](./screenshots/light-theme.png)

### Dark Theme

![Dark Theme](./screenshots/dark-theme.png)

# React Light/Dark Mode Theme Switcher

React application that allows users to switch between light and dark themes.

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **CSS** - Modern styling with custom properties and animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/apahtardnahc/reactLightDarkMode.git
cd reactLightDarkMode
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Static assets (icons, images)
├── App.tsx          # Main application component
├── App.css          # Application styles
├── index.css        # Global styles
└── main.tsx         # Application entry point
```

## Usage

Click on either the "Light Theme" or "Dark Theme" button to switch between color schemes. The active theme will be highlighted, and smooth transitions will animate the change.

## Customization

The theme colors are defined using CSS custom properties in `App.css`. You can easily modify the color scheme by updating the CSS variables in the `:root` selector.
