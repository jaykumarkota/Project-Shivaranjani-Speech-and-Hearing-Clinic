# Shivaranjani Speech & Hearing Clinic — Website

Official website for **Shivaranjani Speech & Hearing Clinic**, located in Peerzadiguda, Uppal, Hyderabad, Telangana, India.

> Specialized speech therapy, hearing tests, hearing aids, cochlear implant support, and rehabilitation services for children and adults.

---

## About the Clinic

Shivaranjani Speech & Hearing Clinic provides comprehensive audiological and speech-language pathology services. The clinic offers diagnostic evaluations, therapeutic interventions, and rehabilitative care to patients of all ages.

### Services Offered

- **Hearing Services** — Pure tone audiometry, tympanometry, OAE, BERA, hearing aid trials & fittings
- **Speech Therapy** — Articulation therapy, language therapy, fluency management, voice therapy
- **Cochlear Implant Support** — Implant mapping, auditory verbal therapy (AVT), auditory training & rehabilitation

---

## Website Features

- 📅 **Online Appointment Booking** — Patients can book appointments directly through the website
- 🏥 **Service Pages** — Detailed pages for hearing, speech, and implant services
- 👨‍⚕️ **About the Doctor** — Professional profile and credentials
- 📍 **Clinic Location** — Embedded map and directions
- 📸 **Gallery** — Clinic photos and facilities
- ⭐ **Testimonials** — Patient reviews and feedback
- ❓ **FAQ** — Frequently asked questions
- 📞 **Floating Contact Button** — Quick access to call or WhatsApp
- 🔝 **Smooth Scrolling** — Premium Lenis-powered smooth scroll experience

---

## Tech Stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Framework    | React 19 + Vite                       |
| Routing      | React Router v7                       |
| Styling      | Vanilla CSS + CSS Custom Properties   |
| Scrolling    | Lenis (smooth scroll)                 |
| CMS          | Sanity (headless)                     |
| Icons        | React Icons + Font Awesome            |
| Carousel     | Swiper                                |
| Forms        | Axios (API submission)                |
| Notifications| React Toastify                        |
| Font         | Poppins (Google Fonts)                |
| Deployment   | Vercel                                |

---

## Project Structure

```
shivaranjani-speech-hearing/
├── public/               # Static assets, favicon, manifest
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Reusable UI components
│   ├── data/             # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── Layouts/          # Page layout wrappers
│   ├── pages/            # Route-level page components
│   ├── sanity/           # Sanity CMS client configuration
│   ├── styles/           # CSS stylesheets
│   ├── App.jsx           # Route definitions
│   └── main.jsx          # Application entry point
├── api/                  # Serverless API functions (Vercel)
├── sanity/               # Sanity Studio configuration
├── index.html            # HTML entry point with SEO meta tags
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment configuration
```

---

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the project root with the required Sanity and API credentials. Refer to the existing `.env` file for the variable names.

---

## Deployment

The website is deployed on **Vercel** with automatic deployments configured via Git. Pushing to the main branch triggers a production build and deployment.

---

## Contact

**Shivaranjani Speech & Hearing Clinic**
📍 Peerzadiguda, Uppal, Hyderabad, Telangana, India

---

*This is a private project. All rights reserved.*
