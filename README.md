# 🚗 Detailing Studio — Paweł Wnek

> A modern single-page web application for a professional car detailing studio. Built to boost online visibility and streamline appointment booking for customers.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Status](#project-status)
- [License](#license)

---

## About the Project

**Detailing Studio — Paweł Wnek** is a responsive, single-page web application currently under active development. The goal is to present the studio's services in a clean, professional way while making it easy for customers to get in touch and book appointments online.

### Sections

| Section | Description |
|---|---|
| **Main** | Hero area with the studio's core message |
| **Services** | Overview of available detailing packages |
| **Gallery** | Visual showcase of completed work |
| **About Us** | Background and story of the studio |
| **Book Now** | Appointment booking functionality |
| **Contact** | Contact details and inquiry form |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Vue 3](https://vuejs.org/) | Frontend framework (Composition API) |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [SCSS](https://sass-lang.com/) | Styling |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Code linting & formatting |
| [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) | Pre-commit hooks |
| Node.js `^20.19.0 \|\| >=22.12.0` | Runtime requirement |

---

## Project Structure

```
detailing-studio/
├── src/               # Application source code
├── index.html         # Entry HTML file
├── vite.config.js     # Vite configuration
├── eslint.config.js   # ESLint configuration
├── .prettierrc        # Prettier configuration
├── .husky/            # Git hooks
└── package.json
```

---

## Getting Started

### Prerequisites

Make sure you have a compatible version of Node.js installed:

```
node --version  # must be ^20.19.0 or >=22.12.0
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LG2GAME/detailing-studio.git
cd detailing-studio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Create production build (output: `dist/`) |
| `npm run preview` | Preview the production build locally |

---

## Project Status

🟡 **In active development**

Currently working on:
- [x] Project setup (Vite, Vue 3, SCSS, ESLint, Prettier, Husky)
- [x] Core application structure and routing
- [ ] Service presentation section
- [ ] Gallery implementation
- [ ] Booking system integration
- [ ] UI/UX refinements and accessibility improvements

---

## License

This project was created for commercial purposes and remains the intellectual property of its author. The source code is available solely for support and maintenance use unless otherwise agreed upon in a separate written agreement.

---

*Built with ❤️ for Detailing Studio — Pawel Wnek*