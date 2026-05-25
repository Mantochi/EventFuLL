import {FaFacebook, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { useState } from "react";
import FooterAccordion from "./FooterAccordion";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <footer className="bg-gray-700 text-gray-200 pt-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-start">

        <FooterAccordion
          title="USE EVENTHUB"
          sectionKey="use"
          open={open}
          onToggle={toggle}
          items={[
            { label: "Events Creation", href: "/" },
            { label: "Events Management", href: "/" },
            { label: "Event Marketing", href: "/" },
            { label: "Ticketing", href: "/" },
            { label: "Community Guidelines", href: "/" },
            { label: "FAQs", href: "/faq" },
            { label: "Sitemap", href: "/sitemap" },
          ]}
        />

        <FooterAccordion
          title="QUICK LINKS"
          sectionKey="quick"
          open={open}
          onToggle={toggle}
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "All Events", href: "/events" },
            { label: "Blog", href: "/blog" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Professional Services", href: "/services" },
            { label: "Help", href: "/help" },
          ]}
        />

        <FooterAccordion
          title="SUPPORT"
          sectionKey="support"
          open={open}
          onToggle={toggle}
          items={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Refund Policy", href: "/refund" },
            { label: "Security", href: "/security" },
            { label: "Cookies", href: "/cookies" },
            { label: "Developer", href: "/developer" },
            { label: "Contact Support", href: "/contact" },
          ]}
        />

        <FooterAccordion
          title="CONNECT WITH US"
          sectionKey="connect"
          open={open}
          onToggle={toggle}
          items={[
            { label: "Contact Sales", href: "/sales" },
            { label: "Facebook", href: "https://facebook.com" },
            { label: "Instagram", href: "https://instagram.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "X (Twitter)", href: "https://x.com" },
          ]}
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-400 py-6 text-sm text-gray-500">
        <p className="text-base font-semibold text-gray-200 text-center">
          &copy; {new Date().getFullYear()} EventHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


           