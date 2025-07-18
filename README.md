# 🚀 Cornholio Portfolio

A modern, interactive portfolio website built with React Router v7, featuring a unique retro-inspired design that adapts between desktop (Macintosh) and mobile (iPhone) interfaces.

## ✨ Features

### 🖥️ **Dual Interface Design**

- **Desktop**: Classic Macintosh-inspired interface with custom cursor
- **Mobile**: Modern iPhone-style interface with responsive design
- **Responsive**: Automatically switches between interfaces based on screen size

### 📱 **Portfolio Sections**

- **Landing Page**: Interactive Macintosh/iPhone themed welcome screen
- **Skillset**: Technical skills and expertise showcase
- **Projects**: Portfolio of completed projects with detailed information
- **Mindset**: Personal philosophy and professional approach
- **Resume**: Interactive resume with downloadable PDF functionality
- **Contact**: Integrated contact form with EmailJS

### 🎨 **Design Highlights**

- Custom PNG cursor for authentic retro feel
- Smooth animations and transitions
- Glass morphism effects on mobile interface
- Bootstrap 5 responsive grid system
- Google Fonts integration (Poppins & Inter)
- Font Awesome icons

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 19** - Latest React with modern features
- **React Router v7** - File-based routing system
- **TypeScript** - Type-safe development

### **Styling & UI**

- **Bootstrap 5.3** - Responsive CSS framework
- **Custom CSS** - Retro Macintosh and modern iPhone styling
- **Framer Motion** - Smooth animations
- **Font Awesome** - Icon library

### **Additional Libraries**

- **EmailJS** - Contact form integration
- **html2canvas** - Screenshot functionality
- **jsPDF** - PDF generation for resume
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cornholio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
cornholio/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── MacintoshLanding.tsx
│   │   ├── NavBar.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── routes/              # Page components
│   │   ├── home.tsx
│   │   ├── skillset.tsx
│   │   ├── projects.tsx
│   │   ├── mindset.tsx
│   │   └── resume.tsx
│   ├── styles/              # Custom CSS files
│   │   └── MacintoshLanding.css
│   ├── assets/              # Static assets
│   │   ├── logo/
│   │   └── icons/
│   ├── app.css             # Global styles
│   ├── root.tsx            # App root and layout
│   └── routes.ts           # Route configuration
├── public/                 # Public assets
├── package.json
└── README.md
```

## 🎮 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run typecheck`** - Run TypeScript type checking

## 🎨 Customization

### **Adding Your Content**

1. **Personal Information**: Update components with your details
2. **Projects**: Modify `Portfolio.tsx` with your project data
3. **Skills**: Update `Profile.tsx` and `InteractiveResume.tsx`
4. **Styling**: Customize colors and fonts in CSS files

### **Custom Cursor**

The custom cursor is configured in `MacintoshLanding.css`:

```css
cursor: url("../assets/logo/logo(light).png") 16 16, pointer;
```

### **Contact Form**

Configure EmailJS in the contact component for form functionality.

## 📱 Responsive Design

- **Desktop (>768px)**: Macintosh interface with classic styling
- **Mobile (≤768px)**: iPhone interface with modern design
- **Touch-friendly**: Optimized for mobile interactions

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

### **Deploy to Vercel/Netlify**

The app is ready for deployment to modern hosting platforms that support React Router v7.

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or collaborations, please use the contact form in the portfolio or reach out directly.

---

**Built with ❤️ using React Router v7 and modern web technologies**
