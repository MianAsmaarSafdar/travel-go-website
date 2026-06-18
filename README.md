# ✈️ Travel-Go — Travel & Tourism Website

A responsive travel and tourism landing page built with **HTML, CSS, and Vanilla JavaScript**. It features destination exploration, tour package popups, a booking form system, and a clean modern UI.

---

## 🌐 Live Preview

> Open `index.html` in your browser to run locally — no build tools required.

---

## 📸 Features

- **Hero Section** — Full-screen background with animated headline and CTA
- **Popular Destinations** — Country cards (Japan, Italy, Thailand) with interactive tour package modals
- **Featured Destinations** — Curated packages (Santorini, Swiss Alps, Bali) with pricing and booking
- **Booking System** — Modal form to collect name, email, and number of persons with a confirmation screen
- **Stats Section** — Animated counters (travelers, destinations, tours, experience)
- **Testimonials** — Reviews from past travelers
- **Newsletter Signup** — Email subscription form
- **Responsive Navbar** — Sticky navbar with active-link tracking on scroll and quick-link sync
- **Footer** — Social links, quick navigation, and contact info

---

## 🗂️ Project Structure

```
travel-go/
├── index.html       # Main HTML structure
├── style.css        # All custom styles
└── script.js        # JavaScript (AOS init, modals, booking system)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling, animations |
| JavaScript (ES6) | Interactivity, modal logic |
| [Bootstrap 5.2](https://getbootstrap.com/) | Grid layout, navbar, responsive utilities |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Typography |
| [Pexels](https://www.pexels.com/) | Free stock images |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travel-go.git
   cd travel-go
   ```

2. **Rename the JS file** (if needed)
   ```bash
   mv 1.javascript script.js
   ```
   > The HTML file references `script.js` — make sure the filename matches.

3. **Open in browser**
   ```bash
   open index.html
   # or just double-click the file
   ```

No npm, no build step — it's pure HTML/CSS/JS.

---

## 📋 Pages & Sections

| Section | Description |
|---|---|
| `#home` | Hero with animated text and CTA button |
| `#countries` | Country cards with tour detail popups |
| `#destinations` | Featured packages with booking buttons |
| Stats | Animated statistics bar |
| `#testimonials` | Customer review cards |
| Newsletter | Email subscription banner |
| `#contact-info` | Footer with contact details |

---

## 💡 JavaScript Highlights

- **Tour Modals** — Clicking "Explore Now" on a country card dynamically generates a modal with package details and discounted pricing
- **Booking Form** — "Book Now" buttons open a form modal; on submit, a confirmation screen shows the entered details
- **Active Nav Sync** — Footer quick links update the active state in the top navbar
- **AOS Animations** — Scroll-triggered fade/zoom animations throughout the page

---

## 🎨 Color Palette

| Role | Color |
|---|---|
| Primary Blue | `#1e3c72` / `#2a5298` |
| Accent Orange | `#ff8c42` |
| Dark Background | `#0a1922` |
| Muted Text | `#b0c4de` |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Images from [Pexels](https://www.pexels.com/)
- Avatar images from [RandomUser.me](https://randomuser.me/)
- Icons from [Font Awesome](https://fontawesome.com/)
