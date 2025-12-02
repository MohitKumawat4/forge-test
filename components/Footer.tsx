import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const navigation = {
    product: [
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "API", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Changelog", href: "#" },
    ],
    useCases: [
        { name: "Customer Support", href: "#" },
        { name: "Sales Automation", href: "#" },
        { name: "HR & Recruiting", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "Operations", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Contact", href: "#" },
    ],
    resources: [
        { name: "Community", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Status", href: "#" },
        { name: "Security", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
    ],
    social: [
        {
            name: "Twitter",
            href: "#",
            icon: Twitter,
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "#",
            icon: Github,
        },
        {
            name: "YouTube",
            href: "#",
            icon: Youtube,
        },
    ],
};

interface FooterProps {
    className?: string;
}

export function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={`bg-zinc-950 border-t border-white/10 ${className}`} aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                                <div className="h-4 w-4 rounded-sm bg-white" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">
                                Enterprise Forge
                            </span>
                        </div>
                        <p className="text-sm leading-6 text-zinc-400">
                            Empowering businesses with AI-powered automation and intelligent agents. Transform your operations and scale faster than ever.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Use Cases</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.useCases.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs leading-5 text-zinc-400">
                            &copy; 2024 Enterprise Forge, Inc. All rights reserved.
                        </p>
                        <div className="flex gap-x-6">
                            {navigation.legal.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs leading-5 text-zinc-400 hover:text-white transition-colors"
                                >
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
