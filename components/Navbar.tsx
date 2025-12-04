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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
                        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-blue-500 to-purple-600" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Enterprise Forge
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm border border-gray-100">
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-1.5 transition-colors rounded-full hover:bg-teal-300 hover:scale-105">
                        Solutions
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-1.5 transition-colors rounded-full hover:bg-teal-300 hover:scale-105">
                        Products
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-1.5 transition-colors rounded-full hover:bg-teal-300 hover:scale-105">
                        Company
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-1.5 transition-colors rounded-full hover:bg-teal-300 hover:scale-105">
                        Resources
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="#"
                        className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 md:block"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-500 hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
