import { getCars, Car } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { CarCard } from "@/components/car-card";
import { HeroSection } from "@/components/hero-section";
import { FloatingSearch } from "@/components/floating-search";
import { GoogleReviews } from "@/components/google-reviews";
import { LocalBusinessSchema, WebsiteSchema, FAQSchema } from "@/components/seo-schemas";
import { getFaqs } from "@/lib/get-site-data";
import Link from "next/link";

const HOW_IT_WORKS = [
    { step: "01", icon: "touch_app", title: "Choose your car", desc: "Browse our fleet and pick the vehicle that suits your trip. Economy, comfort or premium." },
    { step: "02", icon: "chat", title: "Book via WhatsApp", desc: "Send us a message with your dates and location. Instant confirmation. No credit card needed." },
    { step: "03", icon: "directions_car", title: "We deliver to you", desc: "Your car arrives at the airport, hotel or address of your choice. Free anywhere in Tunisia." },
];

const AIRPORTS = [
    { code: "TUN", name: "Tunis-Carthage", icon: "flight" },
    { code: "DJE", name: "Djerba-Zarzis", icon: "flight" },
    { code: "MIR", name: "Monastir Bourguiba", icon: "flight" },
    { code: "NBE", name: "Enfidha-Hammamet", icon: "flight" },
];

export default async function Home() {
    const [cars, faqs] = await Promise.all([getCars(), getFaqs()]);
    const featuredCars = cars.slice(0, 6);
    const displayFaqs = faqs.slice(0, 8);

    return (
        <div className="flex flex-col">
            <HeroSection />
            <FloatingSearch />

            {/* Stats Bar */}
            <section className="bg-gray-900 py-6 px-4">
                <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white text-center">
                    {[
                        { n: "200+", t: "Vehicles" },
                        { n: "4", t: "Airports served" },
                        { n: "15 yrs", t: "Experience" },
                        { n: "4.9★", t: "Customer rating" },
                    ].map(s => (
                        <div key={s.t} className="px-6 border-r border-white/20 last:border-0">
                            <span className="block text-2xl font-extrabold font-headline" style={{ color: 'var(--site-accent)' }}>{s.n}</span>
                            <span className="text-xs text-gray-400 font-body">{s.t}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-24 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>Simple &amp; Fast</p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">How it works</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {HOW_IT_WORKS.map((step) => (
                            <div key={step.step} className="relative text-center px-6">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 mx-auto relative" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 8%, white)', border: '2px solid color-mix(in srgb, var(--site-primary) 20%, white)' }}>
                                    <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--site-primary)' }}>{step.icon}</span>
                                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center font-body" style={{ backgroundColor: 'var(--site-primary)' }}>{step.step}</span>
                                </div>
                                <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                                <p className="font-body text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href={`https://wa.me/${siteConfig.contact.phone.whatsapp}?text=Hello, I'd like to hire a car in Tunisia`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--site-primary)' }}>
                            <span className="material-symbols-outlined">chat</span>
                            Book on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="bg-gray-50 py-24 px-4 md:px-12">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                                {siteConfig.content.home.fleetLabel}
                            </p>
                            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                                {siteConfig.content.home.fleetTitle}
                            </h2>
                        </div>
                        <Link href="/nos-voitures" className="hidden md:flex items-center gap-2 font-bold text-sm hover:gap-4 transition-all duration-300" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAll}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCars.map((car: Car) => (
                            <CarCard key={car.id} id={car.id} title={car.title} slug={car.slug} subtitle={car.subtitle} price3Days={car.price3Days} currency={car.currency} image={car.featured_image} category={car.category} seats={car.seats} doors={car.doors} transmission={car.transmission} fuel={car.fuel} caution={car.caution} freeCancellation={car.freeCancellation} />
                        ))}
                    </div>
                    <div className="text-center mt-10 md:hidden">
                        <Link href="/nos-voitures" className="inline-flex items-center gap-2 font-bold" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAllMobile}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Airport Coverage */}
            <section className="bg-white py-16 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>Airport Delivery</p>
                        <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-gray-900">We cover all major airports</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {AIRPORTS.map((a) => (
                            <div key={a.code} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                                <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--site-primary)' }}>{a.icon}</span>
                                <div>
                                    <div className="font-headline font-extrabold text-xl" style={{ color: 'var(--site-primary)' }}>{a.code}</div>
                                    <div className="font-body text-xs text-gray-500 mt-1">{a.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's included strip */}
            <section style={{ backgroundColor: 'var(--site-primary)' }} className="py-10 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <p className="text-center text-white font-headline font-bold text-lg mb-6">Every rental includes</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["Unlimited mileage", "Full insurance", "Free airport delivery", "No credit card", "24/7 support", "Free cancellation"].map(f => (
                            <div key={f} className="flex items-center gap-2 text-white font-body text-sm">
                                <span className="material-symbols-outlined text-lg opacity-90">check_circle</span>
                                {f}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GoogleReviews />

            {/* FAQ */}
            <section className="bg-gray-50 py-20 px-4 md:px-12">
                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.faqLabel}
                        </p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                            {siteConfig.content.home.faqTitle}
                        </h2>
                    </div>
                    <div className="space-y-2">
                        {displayFaqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="font-bold text-gray-900 text-left pr-4">{faq.question}</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 shrink-0" style={{ color: 'var(--site-primary)' }}>expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 leading-relaxed font-body text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <LocalBusinessSchema />
            <WebsiteSchema />
            <FAQSchema faqs={displayFaqs} />
        </div>
    );
}
