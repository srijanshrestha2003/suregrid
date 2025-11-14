import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SmoothScroll } from '@/components/SmoothScroll'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { PageTransition } from '@/components/PageTransition'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import { ContactModal } from '@/components/ContactModal'
import { ExitIntentHandler } from '@/components/ExitIntentHandler'

export const metadata: Metadata = {
  title: 'Suregrid - Automated Trust Infrastructure for Modern Fintechs',
  description: 'Unified compliance, security, and penetration testing platform. SureComply, SurePilot, and SureHunt - powered by AI.',
  keywords: 'GRC, compliance automation, ISO 27001, SOC 2, penetration testing, security questionnaires, AI security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts for faster rendering */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased bg-[#0E111A] text-white" suppressHydrationWarning>
        <ContactModalProvider>
          <AnimatedBackground />
          <SmoothScroll />
          <ExitIntentHandler />
          <ContactModal />
          <div className="relative z-10">
            <Navbar />
            <PageTransition>
              <main>
                {children}
              </main>
            </PageTransition>
            <Footer />
          </div>
        </ContactModalProvider>
      </body>
    </html>
  )
}

