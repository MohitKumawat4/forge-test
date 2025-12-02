import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
    className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm ${className}`}>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
                        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Enterprise Forge
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 rounded-full border border-white/5 bg-white px-6 py-1 backdrop-blur-md">
                    <Link href="#" className="text-sm font-medium text-zinc-500 transition-colors hover:text-black rounded-full bg-white px-5 py-1.5  hover:bg-zinc-200 hover:scale-105 ">
                        Solutions
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-500 transition-colors hover:text-black rounded-full bg-white px-5 py-1.5  hover:bg-zinc-200 hover:scale-105 ">
                        Products
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-500 transition-colors hover:text-black rounded-full bg-white px-5 py-1.5  hover:bg-zinc-200 hover:scale-105 ">
                        Company
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-500 transition-colors hover:text-black rounded-full bg-white px-5 py-1.5  hover:bg-zinc-200 hover:scale-105 ">
                        Resources
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden text-sm font-medium text-zinc-800 transition-colors hover:text-white md:block"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
