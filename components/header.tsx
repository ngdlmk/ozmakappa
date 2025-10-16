"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full bg-background text-foreground border-b border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-36 sm:w-44 md:w-52 aspect-[182/90]">
                        <Image
                            src="/logots.svg"
                            alt="Lebara Travel eSIM logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium [&_a:visited]:text-primary">
                    <Link
                        href="#early-access"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        Get Early Access
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#help"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        Help and Support
                    </Link>
                </nav>
            </div>
        </header>
    )
}
