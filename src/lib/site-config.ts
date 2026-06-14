// ═══════════════════════════════════════════════════════════════════
// Site Configuration — Car Hire Tunisia
// Domain: carhiretunisia.com | EN | International
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
    lang: "en",

    brand: {
        name: "Car Hire Tunisia",
        nameShort: "CHT",
        nameUpper: "CAR HIRE TUNISIA",
        slug: "car-hire-tunisia",
        foundingYear: 2009,
        description: "Car hire Tunisia at the best price. Rent a car in Tunisia with free airport delivery, no credit card required, unlimited mileage, full insurance included.",
    },

    contact: {
        phone: {
            display: "+216 97 955 896",
            link: "+21697955896",
            whatsapp: "21697955896",
        },
        email: "nhrentcar.tn@gmail.com",
        address: {
            street: "Tunis-Carthage International Airport",
            city: "Tunis",
            region: "Tunis",
            postalCode: "2035",
            country: "TN",
            displayShort: "Tunis, Tunisia",
        },
        geo: {
            latitude: 36.8510,
            longitude: 10.2272,
        },
    },

    url: {
        domain: "carhiretunisia.com",
        baseUrl: "https://carhiretunisia.com",
        googleReview: "",
    },

    social: {
        facebook: "",
        instagram: "",
    },

    logo: {
        main: "/images/logo/logo.png",
        white: "/images/logo/logo-wh.png",
        external: "",
        ogImage: "/images/og-image.jpg",
    },

    rating: {
        value: 4.9,
        reviewCount: 210,
        bestRating: 5,
        worstRating: 1,
    },

    pricing: {
        currency: "TND",
        currencyDisplay: "DT",
        eurRate: 3.3,
        minPrice3Days: 324,
        minPrice3DaysEur: 98,
        maxPrice3Days: 1521,
        priceRange3Days: "324 DT - 1521 DT",
        priceRange3DaysEur: "€98 - €461",
        pricingLabel: "Price for 3 days",
    },

    seo: {
        titleDefault: "Car Hire Tunisia – Cheap Rentals, Free Airport Delivery",
        titleTemplate: "%s | Car Hire Tunisia",
        description: "Car hire Tunisia from 324 DT for 3 days. Free airport delivery, no credit card required, unlimited mileage, full insurance included. Book your Tunisia car hire online.",
        keywords: [
            "car hire tunisia",
            "car rental tunisia",
            "hire a car in tunisia",
            "cheap car hire tunisia",
            "tunisia car hire airport",
            "car hire tunis airport",
            "car hire djerba airport",
            "car hire hammamet",
            "car rental tunisie",
            "rent a car tunisia no credit card",
            "best car hire tunisia",
            "car hire tunisia free delivery",
        ],
        locale: "en_TN",
        language: "en",
        googleVerification: "",
    },

    booking: {
        storageKey: "cht-booking-storage",
        reviewStorageKey: "cht_reviewed",
        defaultLocation: "Tunis, Tunisia",
    },

    telegram: {
        botToken: "",
        chatId: "",
    },

    email: {
        to: "nhrentcar.tn@gmail.com",
    },

    content: {
        hero: {
            h1: "Car Hire Tunisia",
            subtitle: "Hire a car in Tunisia with free delivery to all airports and cities. No credit card required, unlimited mileage, full insurance included. From 324 DT for 3 days.",
            badge: "24/7 Service",
        },
        nav: {
            links: [
                { href: "/", label: "Home" },
                { href: "/nos-voitures", label: "Our Cars" },
                { href: "/tarifs", label: "Rates" },
                { href: "/contact", label: "Contact" },
            ],
            mobileAvailability: "Available 24/7",
            currencyLabel: "Currency:",
        },
        trust: {
            badges: [
                {
                    icon: "credit_card_off",
                    title: "No Credit Card",
                    desc: "Pay cash on delivery. 100% free booking with no commitment required.",
                },
                {
                    icon: "local_shipping",
                    title: "Free Airport Delivery",
                    desc: "We deliver your car directly to Tunis, Djerba, Monastir or Enfidha airport. Free.",
                },
                {
                    icon: "verified_user",
                    title: "Full Insurance",
                    desc: "All vehicles are fully insured. Drive with complete peace of mind.",
                },
            ],
        },
        footer: {
            tagline: "Car hire in Tunisia with free delivery to airports and hotels. No credit card, pay cash on arrival.",
            cityLinksHeading: "Car Hire by City",
            servicesHeading: "Our Services",
            serviceLinks: [
                { name: "Our Cars", href: "/nos-voitures" },
                { name: "Rates", href: "/tarifs" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
            ],
            allRightsReserved: "All rights reserved.",
        },
        promo: {
            badge: "Special Offer",
            h2: "Discover Tunisia in complete freedom",
            subtitle: "Enjoy our unbeatable rates to explore every corner of Tunisia. Free airport delivery included.",
            priceLabel: "From",
            priceSuffix: "/ 3 days",
            cta: "View offers",
        },
        home: {
            fleetLabel: "Our Fleet",
            fleetTitle: "Available Cars",
            viewAll: "View all",
            viewAllMobile: "View all cars",
            faqLabel: "Frequently Asked Questions",
            faqTitle: "Everything you need to know about car hire in Tunisia",
        },
        meta: {
            ogTitle: "Car Hire Tunisia – From 324 DT/3 Days | Free Airport Delivery",
            ogDesc: "Hire a car in Tunisia from 324 DT for 3 days. Free airport delivery, no credit card, unlimited mileage, full insurance.",
            ogImageAlt: "Car Hire Tunisia – Best Price Guaranteed",
        },
    },

    theme: {
        heroVariant: "split",   // "overlay" | "split"
        cardVariant: "default",   // "default" | "outlined"
        primary: "#0f172a",
        primaryContainer: "#1e293b",
        primaryFixed: "#dbe1ff",
        onPrimary: "#ffffff",
        onPrimaryContainer: "#7dd3fc",
        accent: "#0f172a",
        accentDark: "#1e293b",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        surfaceContainerLow: "#f2f4f7",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e0e3e6",
        onSurface: "#191c1e",
        onSurfaceVariant: "#444651",
        outlineVariant: "#c4c6d3",
        footerBg: "#020617",
    },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.whatsapp}`;
export const telUrl = `tel:${siteConfig.contact.phone.link}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;
export const ogImageUrl = `${siteConfig.url.baseUrl}${siteConfig.logo.ogImage}`;
export const logoFullUrl = `${siteConfig.url.baseUrl}/images/logo/logo.png`;
export const copyrightLine = (year: number) =>
    `© ${siteConfig.brand.foundingYear} - ${year} ${siteConfig.brand.name}. ${siteConfig.content.footer.allRightsReserved}`;

export type SiteConfig = typeof siteConfig;
