# Design Process

<div align="justify">
This document outlines the design process followed to create this portfolio, from strategy to implementation.
</div>

## 1. Discovery & Strategy

- **Goal Definition**: Create a personal brand presence highlighting software engineering skills and clean architecture.
- **Target Audience**: Recruiters, clients, and developers.
- **Key Message**: Professionalism and technical depth.

## 2. Information Architecture

- **Sitemap**:
  - Home (Hero Section)
  - Portfolio (Selected Works)
  - Tech Stack (Carousel)
  - How I Work (Methodology)
  - About Me (Background & Education)
  - Contact (Call to Action)
- **User Flow**: Single-page smooth scroll for quick access.

## 3. Visual Design & UI

- **Color Palette**: Dark mode (`primary-900`) with green accents (`accent-500`) for a code-editor aesthetic.
- **Typography**: Sans-serif fonts for readability.
- **Iconography**: SVG icons for high resolution.
- **Layout**: Mobile-first grid system using Tailwind CSS.

## 4. Prototyping

<p align="justify">
<strong>High-Fidelity (Responsive Mockups)</strong><br>
Creation of pixel-perfect mockups for iPhone, iPad, and Desktop. This verified the adaptation of the style guidelines and layout across different screen sizes before coding.
</p>

<div align="center">
  <a href="https://www.figma.com/design/EnLeG3hl38UUAxb6l3LLUQ/PORTFOLIO?node-id=4-44&t=3VNqfpyuha1prcFb-1">
    <img src="https://img.shields.io/badge/View_Design_in_Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="View Design in Figma" />
  </a>
</div>

## 5. Design Artifacts & Visualization

Visual assets created to guide development:

<table>
    <thead>
        <tr>
            <th align="center" width="10%" style="text-align: center;">#</th>
            <th align="center" width="50%" style="text-align: center;">Preview</th>
            <th align="center" width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center" valign="middle"><strong>1</strong></td>
            <td align="center" valign="middle">
                <img src="images/01-style-guidelines.webp" alt="Style Guidelines" width="400">
            </td>
            <td align="justify" valign="middle">
                <strong>Style Guidelines</strong><br>
                Defines the portfolio's visual identity: color codes (Dark & Green), typography, and UI states. Acts as the source of truth for CSS variables.
            </td>
        </tr>
        <tr>
            <td align="center" valign="middle"><strong>2</strong></td>
            <td align="center" valign="middle">
                <img src="images/02-mockup-iphone-ipad-desktop.webp" alt="Multi-device Mockup" width="400">
            </td>
            <td align="justify" valign="middle">
                <strong>Responsive Mockups</strong><br>
                High-fidelity visualization across Mobile, Tablet, and Desktop. Validates the layout responsiveness and application of the style guidelines.
            </td>
        </tr>
    </tbody>
</table>

## 6. Development Phase

- **Implementation**: Semantic HTML5, utility-first CSS (Tailwind), and vanilla JavaScript.
- **Refinement**: Tuning animations (typing, scroll fade-ins).
