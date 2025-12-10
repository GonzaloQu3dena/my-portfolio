# Gonzalo Quedena's Personal Portfolio

## Summary
This is Gonzalo Quedena's personal portfolio website, showcasing his skills as a Software Engineer. Designed with a modern, responsive user interface, it features dynamic elements and clean aesthetics.

## Design Process
To understand the structural approach and design thinking behind this portfolio, please refer to the [**Design Process Documentation**](docs/DESIGN_PROCESS.md).

## Features
- **Responsive Design**: Optimized for seamless viewing across mobile, tablet, and desktop devices.
- **Dynamic Typing Effect**: An engaging typewriter animation for the main heading with a custom cursor.
- **Fixed Navigation Bar**: A static header for easy navigation and a consistent user experience.
- **Social Media Integration**: Quick access to professional profiles (GitHub, LinkedIn).
- **Interactive UI**: Utilizing modern CSS frameworks for a clean and intuitive user interface.
- **Contact Integration**: Direct WhatsApp integration for quick communication.

## Technical Implementation Decisions
### Why Native HTML, CSS, and JavaScript?
In an era dominated by heavy JavaScript frameworks, I made a conscious decision to build this portfolio using **Native HTML5, CSS3, and Vanilla JavaScript**.

**Reasoning:**
1.  **Performance & Speed**: By avoiding the overhead of framework bundles (React/Vue/Angular runtimes), the site achieves near-instant load times.
2.  **Longevity & Maintenance**: Pure web standards do not depreciate. This codebase will remain functional for years without requiring updates.
3.  **Fundamental Mastery**: This project demonstrates a deep understanding of the core web technologies.
4.  **100% Static & Secure**: Being purely static, the attack surface is virtually non-existent.

## Technologies Used
- **HTML5**: For structuring the web content.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive UI development.
- **JavaScript**: Powers interactive elements, including the typing animation.
- **SVG Icons**: Scalable vector graphics for high-quality, lightweight icons.

## Project Structure
```text
my-portfolio/
├── assets/
│   ├── images/
│   │   ├── svg/       # Vector icons
│   │   └── webp/      # Optimized images
│   ├── styles/
│   │   ├── base.css   # Basic CSS reset
│   │   └── styles.css # Custom component styles
│   └── js/
│       ├── typing.js            # JavaScript for typing animation
│       └── scroll-animation.js  # Intersection Observer for fade-ins
├── docs/
│   └── DESIGN_PROCESS.md # Design methodology documentation
├── index.html            # Main landing page
└── README.md             # Project documentation
```
