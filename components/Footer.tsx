import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, Instagram, Facebook } from "lucide-react";

const navigation = {
    products: [
        { name: "Pricing", href: "#" },
        { name: "Enterprise Forge for Service", href: "#" },
        { name: "Enterprise Forge for Sales", href: "#" },
        { name: "Enterprise Forge for Startups", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "System Status", href: "#" },
    ],
    features: [
        { name: "AI Agents", href: "#" },
        { name: "Workflow Automation", href: "#" },
        { name: "Real-time Analytics", href: "#" },
        { name: "Security & Compliance", href: "#" },
        { name: "Team Collaboration", href: "#" },
        { name: "Global Infrastructure", href: "#" },
    ],
    resources: [
        { name: "Security", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Training", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Events & Webinars", href: "#" },
        { name: "Help Center", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Inclusion & Belonging", href: "#" },
        { name: "Social Impact", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Legal", href: "#" },
    ],
    trending: [
        { name: "AI Trends 2025", href: "#", badge: "NEW" },
        { name: "Customer Experience", href: "#" },
        { name: "Future of Work", href: "#" },
        { name: "Sustainability Report", href: "#" },
    ],
    social: [
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "Facebook", href: "#", icon: Facebook },
        { name: "LinkedIn", href: "#", icon: Linkedin },
        { name: "YouTube", href: "#", icon: Youtube },
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "GitHub", href: "#", icon: Github },
    ],
    legal: [
        { name: "Terms of Use", href: "#" },
        { name: "Privacy Notice", href: "#" },
        { name: "Cookie Notice", href: "#" },
        { name: "Trust Center", href: "#" },
    ],
};

interface FooterProps {
    className?: string;
}

export function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={`bg-black text-white overflow-hidden ${className}`} aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                {/* Top Section: Contact & Social */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-sans">
                            How can we help? <Link href="#" className="text-blue-500 hover:text-blue-400 underline decoration-2 underline-offset-4 transition-colors">Contact us</Link>
                        </h3>
                    </div>
                    <div className="flex gap-6">
                        {navigation.social.map((item) => (
                            <Link key={item.name} href={item.href} className="text-white hover:text-blue-400 transition-colors">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
                    <div>
                        <h3 className="text-p1-apple font-bold text-white mb-6">Products</h3>
                        <ul role="list" className="space-y-4">
                            {navigation.products.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-body-apple text-zinc-400 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-p1-apple font-bold text-white mb-6">Features</h3>
                        <ul role="list" className="space-y-4">
                            {navigation.features.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-body-apple text-zinc-400 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-p1-apple font-bold text-white mb-6">Resources</h3>
                        <ul role="list" className="space-y-4">
                            {navigation.resources.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-body-apple text-zinc-400 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-p1-apple font-bold text-white mb-6">Company</h3>
                        <ul role="list" className="space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-body-apple text-zinc-400 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-p1-apple font-bold text-white mb-6">Trending</h3>
                        <ul role="list" className="space-y-4">
                            {navigation.trending.map((item) => (
                                <li key={item.name} className="flex items-center gap-2">
                                    <Link href={item.href} className="text-body-apple text-zinc-400 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                    {item.badge && (
                                        <span className="inline-flex items-center rounded-md bg-lime-400/10 px-2 py-1 text-xs font-medium text-lime-400 ring-1 ring-inset ring-lime-400/20">
                                            {item.badge}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Huge Text & Legal */}
            <div className="w-full border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative w-full overflow-hidden py-12 flex flex-col items-center justify-center">
                        <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap select-none font-sans">
                            Enterprise Forge
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 gap-4">
                        <div className="flex gap-6 flex-wrap justify-center">
                            {navigation.legal.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm text-zinc-500 hover:text-white transition-colors font-sans">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-zinc-500 font-sans">
                            &copy; {new Date().getFullYear()} Enterprise Forge, Inc.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
