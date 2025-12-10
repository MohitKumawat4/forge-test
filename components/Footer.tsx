import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const navigation = {
    products: [
        { name: "Pricing", href: "#" },
        { name: "Enterprise Forge for Service", href: "#" },
        { name: "Enterprise Forge for Sales", href: "#" },
        { name: "Integrations", href: "#" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Events", href: "#" },
        { name: "Help Center", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
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
        { name: "LinkedIn", href: "#", icon: Linkedin },
        { name: "GitHub", href: "#", icon: Github },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookies", href: "#" },
    ],
};

interface FooterProps {
    className?: string;
}

export function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={`bg-black text-white ${className}`} aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {/* Brand / Social Col */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <h3 className="text-xl font-bold tracking-tight text-white mb-6">
                            Enterprise Forge
                        </h3>
                        <div className="flex gap-4">
                            {navigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
                        <ul role="list" className="space-y-3">
                            {navigation.products.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
                        <ul role="list" className="space-y-3">
                            {navigation.resources.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
                        <ul role="list" className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Trending</h3>
                        <ul role="list" className="space-y-3">
                            {navigation.trending.map((item) => (
                                <li key={item.name} className="flex items-center gap-2">
                                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                    {item.badge && (
                                        <span className="inline-flex items-center rounded-md bg-lime-400/10 px-1.5 py-0.5 text-[10px] font-medium text-lime-400 ring-1 ring-inset ring-lime-400/20">
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
                    <div className="relative w-full overflow-hidden py-12 lg:py-16 flex flex-col items-center justify-center">
                        <h1 className="text-[10vw] leading-none font-bold tracking-tighter text-white whitespace-nowrap select-none font-sans opacity-90">
                            Enterprise Forge
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 gap-4">
                        <p className="text-xs text-zinc-500 font-sans">
                            &copy; {new Date().getFullYear()} Enterprise Forge, Inc.
                        </p>
                        <div className="flex gap-6">
                            {navigation.legal.map((item) => (
                                <Link key={item.name} href={item.href} className="text-xs text-zinc-500 hover:text-white transition-colors font-sans">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
