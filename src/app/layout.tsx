import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-x3ud.vercel.app'),
  title: 'Allanagari Renuka — Full Stack Developer & AI Engineer',
  description:
    'Independent Full Stack Developer and AI Engineer. Production web, mobile (Skipp on Google Play), distributed backend systems, and clinical deep learning diagnostics.',
  keywords: [
    'Allanagari Renuka',
    'Renuka Allanagari',
    'Full Stack Developer',
    'AI Engineer',
    'Software Engineer',
    'Backend Developer',
    'React',
    'Next.js',
    'Capacitor',
    'Android Development',
    'Skipp Android App',
    'TensorFlow',
    'Computer Vision',
  ],
  authors: [{ name: 'Allanagari Renuka', url: 'https://portfolio-x3ud.vercel.app' }],
  creator: 'Allanagari Renuka',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-x3ud.vercel.app',
    title: 'Allanagari Renuka — Full Stack Developer & AI Engineer',
    description:
      'Editorial portfolio of Allanagari Renuka. Shipped dual Android applications on Google Play, enterprise SaaS platforms, and deep learning systems.',
    siteName: 'Allanagari Renuka Portfolio',
    images: [
      {
        url: 'https://portfolio-x3ud.vercel.app/passport.jpg',
        width: 800,
        height: 800,
        alt: 'Allanagari Renuka Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allanagari Renuka — Full Stack Developer & AI Engineer',
    description:
      'Independent Full Stack Developer & AI Engineer building production web, mobile, and AI solutions.',
    images: ['https://portfolio-x3ud.vercel.app/passport.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#F7F7F2',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload and font-display: swap for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/passport.jpg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Allanagari Renuka',
              jobTitle: 'Full Stack Developer & AI Engineer',
              url: 'https://portfolio-x3ud.vercel.app',
              email: 'allanagarirenuka28@gmail.com',
              telephone: '+919392809600',
              sameAs: [
                'https://github.com/Allanagari-Renuka',
                'https://www.linkedin.com/in/allanagari-renuka-8a9346263/',
              ],
              alumniOf: 'G. Pullaiah College of Engineering & Technology',
              knowsAbout: [
                'Full Stack Development',
                'React',
                'Next.js',
                'Capacitor',
                'Android Development',
                'Node.js',
                'Python',
                'Artificial Intelligence',
                'Deep Learning',
                'Computer Vision',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-charcoal font-sans antialiased min-h-screen selection:bg-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
