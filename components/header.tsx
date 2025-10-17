"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

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

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-10 text-sm font-medium [&_a:visited]:text-[#4169E1]">
                        <Link
                            href="#early-access"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get Early Access
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/support"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                        >
                            Help and Support
                        </Link>
                    </nav>
                    
                    <button
                        onClick={toggleTheme}
                        className="relative p-2.5 cursor-pointer rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 text-primary rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <Moon className="h-5 w-5 text-primary rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <span className="w-5 h-5 block opacity-0"></span>
                    </button>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden cursor-pointer flex flex-col gap-1.5 p-2 z-50"
                    aria-label="Menu"
                >
                    <span className="w-6 h-0.5 bg-foreground transition-all"></span>
                    <span className="w-6 h-0.5 bg-foreground transition-all"></span>
                    <span className="w-6 h-0.5 bg-foreground transition-all"></span>
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
                            className="w-6 h-6 text-foreground"
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

                    <nav className="flex flex-col gap-4 text-base font-medium">
                        <Link
                            href="#early-access"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                        >
                            Get Early Access
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/support"
                            className="text-[#4169E1] hover:text-[#1E40AF] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Help and Support
                        </Link>
                        
                        <div className="pt-4 border-t border-border">
                            <button
                                onClick={toggleTheme}
                                className="w-full flex cursor-pointer items-center justify-between p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-300"
                                aria-label="Toggle theme"
                            >
                                <span className="text-primary font-medium">Theme</span>
                                <div className="relative w-6 h-6">
                                    <Sun className="h-6 w-6 text-primary rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 absolute" />
                                    <Moon className="h-6 w-6 text-primary rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 absolute" />
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
