# Chinmaya R B | Executive Professional Portfolio

A premium, high-performance, and responsive personal portfolio website designed for showcasing software engineering expertise, full-stack architectures, and cybersecurity credentials. 

The application is built using a luxury design system with modern glassmorphism, responsive timelines, and dynamic theme switching, powered by a lightweight Node.js server optimized for cloud deployment.

---

## 💎 Design & Key Features

- **Luxury Theme Engine**: Real-time theme toggling between **Obsidian Black & Champagne Gold** (Dark Mode) and **Alabaster Cream & Bronze Gold** (Light Mode).
- **Responsive Layout**: Designed from the ground up to support desktop, tablet, and mobile viewport heights smoothly.
- **Glassmorphic UI**: Tailored visual system utilizing fine golden outlines, soft background blur effects, and smooth micro-animations.
- **Interactive Experience Timeline**: Expandable/collapsible history nodes showcasing professional achievements.
- **Project Showcases**: Engineered cards detailing project tags, metrics, and architecture modals.
- **Validated Contact System**: Integrated contact form with user validation, clipboard copy indicators, and a clean, responsive layout.

---

## 🛠️ Tech Stack

- **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Variables, Flexbox/Grid layouts), Vanilla JavaScript (DOM Manipulation, ScrollReveal, Custom Animations).
- **Backend/Server**: Node.js `http` module server routing (zero external runtime dependencies).
- **Deployment & Cloud**: Pre-configured for serverless functions on [Vercel](https://vercel.com) using standard JSON routing rules.

---

## 📂 Codebase Structure

```text
├── index.html         # Main portfolio markup, embedded luxury CSS, & interactive JS
├── server.js          # Lightweight Node.js server serving files & assets
├── package.json       # App metadata and starting script configurations
├── vercel.json        # Routing overrides for seamless Vercel deployment
└── headshot.jpg       # Professional profile image
```

- **[index.html](file:///d:/Myy%20Portfolio/index.html)**: Houses the entire HTML structure, the responsive CSS variables, layout stylesheets, and all client-side logic (dynamic modals, scroll tracking, theme toggle, and page tilt effects).
- **[server.js](file:///d:/Myy%20Portfolio/server.js)**: Configures the HTTP server, handles routing for image assets, and serves the index markup. Runs default on port `8000`.
- **[package.json](file:///d:/Myy%20Portfolio/package.json)**: Identifies `node server.js` as the startup command under standard npm lifecycle commands.
- **[vercel.json](file:///d:/Myy%20Portfolio/vercel.json)**: Configures route redirection patterns to route all incoming HTTP requests straight to `server.js` for serverless function compilation on the Vercel edge network.

---

## 🚀 Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine.

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ChinmayaRB/Portfolio.git
   cd Portfolio
   ```

2. **Run the server**:
   ```bash
   npm start
   ```
   *Alternatively, run the server file directly:*
   ```bash
   node server.js
   ```

3. **Access the application**:
   Open [http://localhost:8000/](http://localhost:8000/) in your web browser.

---

## ☁️ Deployment

This project is fully configured for deployment on **Vercel** with Node.js serverless functions:

1. Push your code changes to your GitHub repository.
2. Link the repository to your Vercel Dashboard.
3. Vercel will auto-detect the configuration in `vercel.json` and deploy it instantly.

---

## 👤 About Chinmaya R B

**Software Engineer & Full-Stack Architect**  
Specialized in Java development, enterprise spring architectures, database optimizations, and security auditing.

- 🎓 **Education**: Bachelor of Engineering (Computer Science & Engineering) – Jain Institute of Technology, Davangere (CGPA: 7.5/10)
- 💼 **Experience**:
  - **Software Development Engineer Intern** @ KodNest Technologies (Spring Boot, MySQL, Azure Cloud deployment)
  - **Software Engineer Intern** @ Infosys Springboard 6.0 (REST API architectures, security practices)
  - **Cybersecurity Analyst Intern** @ TCS (Vulnerability remediation, network encryption protocols)
- 🏆 **Key Certifications**:
  - Oracle Java Foundations
  - Microsoft Azure AI Essentials Professional Certificate (Credential ID: `39d86cc8309697ab16a8d68cf25b0fd1373c8ab96e1f9715890094353e62f672`)
  - Infosys Springboard Full Stack & Software Engineering Badge
  - TCS Cybersecurity Threat Analysis Badge
  - NPTEL AI: Concepts Certification

### Featured Projects in Portfolio

1. **Intelligent Quiz System** (Python, Django, MySQL, REST APIs)
2. **AI Diagnosis Assistant** (Python, ML, Multimodal AI pipelines)
3. **Hotel Management System** (Python, JavaScript, Normalization-focused MySQL)

---

## 📬 Contact & Connect

- **Email**: [chinmayarb2223@gmail.com](mailto:chinmayarb2223@gmail.com)
- **LinkedIn**: [linkedin.com/in/chinmayarb](https://www.linkedin.com/in/chinmayarb)
- **GitHub**: [github.com/ChinmayaRB](https://github.com/ChinmayaRB)

---

&copy; 2026 Chinmaya R B. Designed for Security, Scalability, and Rich Web Aesthetics.
