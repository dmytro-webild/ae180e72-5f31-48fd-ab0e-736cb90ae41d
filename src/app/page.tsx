"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Box, Clock, Trash2 } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="DRs Hauling Services"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Junk Gone. Dumpsters Delivered."
      description="DRs Hauling removes clutter from your home or yard fast—starting at $60 in Porterville. Rent a dumpster for your project, delivered and picked up hassle-free."
      buttons={[
        {
          text: "Call Now 559-920-7414",
          href: "tel:5599207414",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-with-cardboard-boxes-their-new-home_23-2149086868.jpg",
          imageAlt: "Hauling debris from residential site",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-collects-garbage-garbage-bags-park_1157-27402.jpg",
          imageAlt: "Dumpster rental in driveway",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431600.jpg",
          imageAlt: "Professional hauling crew",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371949.jpg",
          imageAlt: "Construction site waste",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-rebel-teens-with-skateboard_23-2149854284.jpg",
          imageAlt: "Garage cleanout service",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-activist-grabbing-rubbish-with-claw-tool-forest_482257-91227.jpg",
          imageAlt: "Dumpster pickup",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Reliable Junk Removal & Dumpster Rentals in Tulare County",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/man-looking-woman-sealing-boxes_23-2147782405.jpg",
          alt: "Service vehicle",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Trash2,
          title: "Junk Removal",
          description: "Quick removal of furniture, appliances, yard debris, and construction waste from your property.",
        },
        {
          icon: Box,
          title: "Dumpster Rentals",
          description: "Flexible rental terms for small projects or large renovations, delivered directly to your job site.",
        },
        {
          icon: Clock,
          title: "Same-Day Service",
          description: "Need it gone today? Our team works fast to ensure your project stays on schedule.",
        },
      ]}
      title="Fast, Hassle-Free Hauling Services"
      description="We specialize in clearing clutter and providing reliable waste management for homes, job sites, and estates across Porterville and Tulare County."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Affordable",
          price: "$60+",
          subtitle: "Minimum Load",
          features: [
            "Quick site visit",
            "Flexible scheduling",
            "Porterville area only",
          ],
        },
        {
          id: "pro",
          badge: "Popular",
          price: "$135+",
          subtitle: "Medium Load",
          features: [
            "Full truck load",
            "Starting rate outside of Porterville ",
            "Fast removal",
          ],
        },
        {
          id: "enterprise",
          badge: "Best Value",
          price: "Custom",
          subtitle: "Dumpster Rentals",
          features: [
            "14 Yd - $160 per day ",
            "20 Yd - $360 3 day min. ",
            "Large capacity dumpsters",
          ],
        },
      ]}
      title="Transparent Local Pricing"
      description="We offer fair, location-based rates with no hidden fees. Call us for a custom quote for your specific haul."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="DRs Hauling cleared my entire garage in a few hours. The crew was fast, polite, and very professional. Highly recommended!"
      rating={5}
      author="Sarah Miller, Porterville"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-family-celebrating-birthday-together_23-2150598982.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134468.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/collaboration-two-carpenters-building_329181-15617.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-adult-moving-into-new-home_23-2149196331.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-crouching-admiring-child-basket-man-girl-cleaning_259150-59046.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Clear Your Clutter?"
      description="Call 559-920-7414 today or fill out the form below to receive a fast, free estimate for your project."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your project",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-man-engraving-wood_23-2149061683.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg"
      logoText="DRs Hauling"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Junk Removal",
              href: "#features",
            },
            {
              label: "Dumpster Rentals",
              href: "#features",
            },
            {
              label: "Same-Day Service",
              href: "#features",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
