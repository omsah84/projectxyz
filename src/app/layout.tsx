// app/layout.tsx
import { Metadata } from "next";
import ThemeWrapper from "./ThemeWrapper"; // Import your client component
import Head from "next/head"; // Import Head for setting metadata
import "@/styles/globals.css"; // Global styles

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TopBarComponent from "@/root_components/TopBarComponent";
import AppBarComponent from "@/root_components/AppBarComponent";
import FooterComponent from "@/root_components/FooterComponent";

export const metadata: Metadata = {
  title: "Project - Home",
  description:
    "Explore our comprehensive solutions for web development, project management, and content writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Project - Home</title>
        <meta
          name="description"
          content="Explore our comprehensive solutions for web development, project management, and content writing."
        />
        <meta
          name="keywords"
          content="web development, project management, content writing, Next.js, MUI, SEO"
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Project - Home" />
        <meta
          property="og:description"
          content="Explore our comprehensive solutions for web development, project management, and content writing."
        />
        <meta property="og:image" content="URL_to_an_image_for_preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project - Home" />
        <meta
          name="twitter:description"
          content="Explore our comprehensive solutions for web development, project management, and content writing."
        />
        <meta name="twitter:image" content="URL_to_an_image_for_preview.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Company Name",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SY NO-101&156/2, Niladri, D Thogur",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560100",
              addressCountry: "India",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+917975230478",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Head>
      <body>
        <TopBarComponent />
        <AppBarComponent/>
        <ThemeWrapper>{children}</ThemeWrapper>
        <FooterComponent/>
      </body>
    </html>
  );
}
