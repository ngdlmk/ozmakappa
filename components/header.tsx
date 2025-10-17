"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="w-full bg-background text-foreground border-b border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
                        href="/support"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        Help and Support
                    </Link>
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden cursor-pointer flex flex-col gap-1.5 p-2 z-50"
                    aria-label="Menu"
                >
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                </button>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col p-6 gap-6">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="self-end cursor-pointer p-2"
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <nav className="flex flex-col gap-6 text-base font-medium">
                        <Link
                            href="#early-access"
                            className="text-primary hover:text-secondary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Early Access
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-primary hover:text-secondary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/support"
                            className="text-primary hover:text-secondary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Help and Support
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
