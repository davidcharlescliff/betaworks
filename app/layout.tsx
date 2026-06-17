import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beta Works',
  description: 'Simple web tools for small businesses.',
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.betaworks.co.uk/#organization",
      "name": "Beta Works",
      "legalName": "Beta Works",
      "url": "https://www.betaworks.co.uk",
      "logo": "https://www.betaworks.co.uk/logo.png",
      "description": "Beta Works helps small and medium-sized businesses replace spreadsheets, paperwork and manual admin with simple web-based tools built around the way they already work. Tools are hosted, maintained and supported for a simple monthly subscription.",
      "foundingLocation": { "@type": "Place", "name": "York, England" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Innovation Centre, Innovation Way, Heslington",
        "addressLocality": "York",
        "postalCode": "YO10 5DG",
        "addressCountry": "GB",
        "addressRegion": "England"
      },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "knowsAbout": [
        "Business process automation",
        "Custom web applications",
        "Small business software",
        "Workflow management tools",
        "Internal business tools"
      ],
      "slogan": "Replace repetitive admin, spreadsheets and workarounds with simple web tools.",
      "priceRange": "££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": "Monthly subscription",
      "sameAs": ["https://www.betaworks.co.uk"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer enquiries",
        "areaServed": "GB",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.betaworks.co.uk/#website",
      "url": "https://www.betaworks.co.uk",
      "name": "Beta Works",
      "description": "Simple web tools for small and medium-sized businesses. Built around the way you work, hosted and supported for a monthly subscription.",
      "publisher": { "@id": "https://www.betaworks.co.uk/#organization" },
      "inLanguage": "en-GB"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body style={{ fontFamily: "'Figtree', sans-serif" }}>{children}</body>
    </html>
  )
}
