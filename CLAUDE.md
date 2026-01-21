Cochl Design System
A comprehensive React-based design system for Cochl web products.
📁 Project Structure
cochl-design-system/
├── src/
│   ├── components/
│   │   ├── DesignSystem.jsx      # Main design system component
│   │   ├── IconNav.jsx           # Left icon navigation rail
│   │   ├── Sidebar.jsx           # Collapsible sidebar navigation
│   │   ├── Preview.jsx           # Component preview thumbnails
│   │   └── pages/
│   │       ├── Overview.jsx      # Component overview page
│   │       ├── NavigationDetail.jsx  # Navigation documentation
│   │       └── TabsDetail.jsx    # Tabs documentation
│   ├── App.jsx
│   └── index.js
├── public/
├── CLAUDE.md                     # This file
├── package.json
└── README.md
🚀 Quick Start
bash# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
📦 Dependencies
json{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "vite": "^4.4.0"
  }
}
🎨 Components
Disclosure

Navigation - Global navigation bars, footers, page navigation
Tabs - Content organization across screens

Feedback

Alert - Info, success, warning, error alerts
Progress - Loading bars and spinners
Skeleton - Loading placeholders

Overlay

Menu - Dropdown menus, notification panels
Tooltip - Hover explanations
Modal - Dialog windows

Data Display

Card - Content wrapper components
Chip - Selection tags
Table - Data tables with headers

Form

Button - Primary, secondary, outlined styles
Input Field - Text inputs with labels
Checkbox - Selection components

Analytics

Heatmap - Visual data grids
PieChart - Proportional data display

🎯 Design Tokens
Colors
css--primary: #6366f1;        /* Indigo 500 */
--primary-light: #818cf8;  /* Indigo 400 */
--primary-dark: #4f46e5;   /* Indigo 600 */
--accent: #14b8a6;         /* Teal 500 */
--bg-light: #EBEDFC;       /* Light purple background */
Typography

Font Family: system-ui, sans-serif
Headings: 3xl (30px), 2xl (24px), xl (20px)
Body: sm (14px), xs (12px)

Spacing

Container padding: 17px (top/bottom), 50px (between labels)
Global nav height: 66px
Icon size: 25px

📐 Navigation Specifications
Types

Global Navigation Bar - Top-level app navigation
Footer - Copyright and links
2nd Level Navigation - Project/category filters
Page Navigation - Tab-based page sections

States

Enabled - Default state
Hovered - Font weight changes to bold
Pressed/Selected - Same as hovered with active indicator

Color Variants

Dark - Dark background with light text
Light - Light background with dark text

📝 Usage Guidelines
Do ✅

Use filled icons for selected navigation items
Use distinct styling for focus states with badges
Maintain consistent destinations across screens

Don't ❌

Use outlined icons on selected items
Use text color alone for focus states
Mix navigation patterns inconsistently

🔗 Resources

Figma Design Kit
Component Documentation
API Reference

📄 License
© 2026 Cochl Inc. All rights reserved.
