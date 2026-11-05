# Allanagari Renuka — Immersive 3D Developer Portfolio

A full-screen WebGL experience built with Next.js App Router, TypeScript, React Three Fiber, Drei, and Tailwind CSS. The visitor travels through a continuous 3D world along a scroll-driven path through 7 stations representing full-stack software engineering, live mobile apps, and artificial intelligence systems.

- **Live Deployed URL:** [https://portfolio-x3ud.vercel.app](https://portfolio-x3ud.vercel.app)
- **Local Dev Server:** `http://localhost:3000`

---

## 🌌 The 3D World (Scroll Journey)

A single fixed `<Canvas>` fills the viewport with the camera navigating along a `CatmullRomCurve3` driven by scroll progress, passing through 7 distinct 3D stations:

1. **Station 1 — Hero / Arrival:** Centerpiece 3D extruded name "RENUKA" with glossy metal material and floating motion over a reflective grid floor (`MeshReflectorMaterial`), with an orbiting ring of tech nodes (React, Next.js, Node.js, Python, PostgreSQL, Docker). Mouse moves lights and tilts the scene.
2. **Station 2 — About:** Floating procedural developer desk island: laptop with animated code screen, geometric potted plant, coffee mug, and orbiting glass panels displaying B.Tech CSE (AI) 88% distinction and verified certifications.
3. **Station 3 — Skills:** Chunky 3D skill tokens and spheres floating in a dynamic constellation. Hovering pushes and rotates tokens with categorized legend overlays.
4. **Station 4 — Skipp (Hero Project):** Two floating 3D phone models (Customer & Restaurant apps) rotating with cursor tilt, with glowing particle trails showing real-time orders flowing between Customer → Server → Restaurant, with direct Google Play links.
5. **Station 5 — Projects:** Curved 3D gallery wall showcasing Diagnosis of a Thyroid Disease (CNN/RNN) and Sign Language Recognition System (CNN/LSTM 30 FPS) with live demo endpoints.
6. **Station 6 — Experience:** 3D glowing timeline road with illuminated portal gates for Core Careers Pvt. Ltd., Ango Digital Technologies, and Elfinity Technologies.
7. **Station 7 — Contact:** Cosmic torus-knot core with 3D communication beacons (Email, Phone, GitHub, LinkedIn), contact form, and prominent resume download button.

---

## 🛡️ Recruiter Safety Net

- **"Skip 3D / View simple version" Toggle:** Located in the navigation bar. Instantly switches to a high-speed, accessible 2D layout with the same exact verified content.
- **Automatic Fallback:** Activates automatically if `prefers-reduced-motion` is detected or if WebGL is unavailable.
- **Canonical Resume:** Directly served at `/public/Allanagari_Renuka_Resume.pdf` and `/public/resume.pdf` (verified matching cryptographic SHA256 hash).

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (near-black `#05060A`, indigo `#6366F1`, cyan `#22D3EE`, magenta `#E879F9`)
- **3D & WebGL:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Maath (`maath`)
- **Icons:** Lucide React
- **Email Dispatch:** Nodemailer / Next.js API route (`/api/contact`)

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                     # Global layout, Person JSON-LD, SEO metadata
│   ├── page.tsx                       # Main entry (World + SimpleVersion toggle)
│   ├── api/contact/route.ts           # Serverless email dispatch handler
│   └── projects/skipp/page.tsx        # Skipp dedicated architecture page
├── components/
│   ├── canvas/
│   │   ├── World.tsx                  # Full-screen Canvas, ScrollControls & HTML overlays
│   │   ├── CameraRig.tsx              # Spline camera path, damp3 easing, pointer parallax
│   │   ├── Lights.tsx                 # Directional key lights & station point lights
│   │   ├── Effects.tsx                # Cosmic fog & ambient dust particle points
│   │   └── Loader.tsx                 # Branded Drei useProgress loader
│   ├── stations/
│   │   ├── Hero3D.tsx                 # Station 1: 3D RENUKA & orbiting tech ring
│   │   ├── About3D.tsx                # Station 2: Developer desk & orbiting credentials
│   │   ├── Skills3D.tsx               # Station 3: Chunky 3D skill tokens
│   │   ├── Skipp3D.tsx                # Station 4: Dual 3D phone models & order energy pulses
│   │   ├── Projects3D.tsx             # Station 5: Curved 3D project gallery wall
│   │   ├── Experience3D.tsx           # Station 6: Glowing timeline road & portal gates
│   │   └── Contact3D.tsx              # Station 7: Torus-knot core & uplink nodes
│   ├── ui/
│   │   ├── Nav.tsx                    # Minimal fixed top nav & 3D/2D toggle
│   │   ├── Cursor.tsx                 # Custom dot & trailing spring ring
│   │   ├── StationDots.tsx            # Floating station jump dots
│   │   └── ContactForm.tsx            # Validated message form with honeypot
│   └── simple/
│       └── SimpleVersion.tsx          # Clean 2D recruiter layout
├── data/
│   ├── profile.ts                     # Personal info, degree, certifications
│   ├── experience.ts                  # Core Careers, Ango Digital, Elfinity
│   ├── projects.ts                    # Skipp, Thyroid Diagnosis, Sign Language
│   └── skills.ts                      # Categorized technical toolkit
public/
├── models/                            # 3D assets & procedural geometry
├── skipp/                             # Skipp application assets
├── images/                            # Project scans & ASL alphabet visuals
├── Allanagari_Renuka_Resume.pdf       # Canonical resume PDF
└── resume.pdf                         # Resume alias
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file for contact form email forwarding:

```env
CONTACT_EMAIL=allanagarirenuka28@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 🚀 Running Locally & Deploying to Vercel

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```

### Deploy to Vercel
1. Push changes to GitHub: `git push origin main`
2. Import repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Deploy!
