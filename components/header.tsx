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
        <header className="w-full bg-background text-foreground relative z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 bg-background">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-30 sm:w-36 md:w-42 aspect-[182/90]">
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
                    <nav className="flex items-center gap-10 font-medium [&_a:visited]:text-[#0D1167]">
                        <Link
                            href="#early-access"
                            className="header-nav-link text-[#4169E1] hover:text-[#1E40AF] dark:text-[#242fe3] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get Early Access
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="header-nav-link text-[#4169E1] hover:text-[#1E40AF] dark:text-[#242fe3] dark:hover:text-[#C5F82A] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/support"
                            className="header-nav-link text-[#4169E1] hover:text-[#1E40AF] dark:text-[#242fe3] dark:hover:text-[#C5F82A] transition-colors"
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
                    className="md:hidden cursor-pointer z-50 relative"
                    aria-label="Menu"
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-9 h-9 text-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <div className="flex flex-col gap-1.5">
                            <span className="w-[30px] h-[4px] border border-[#5b5b5b] rounded-full bg-foreground transition-all"></span>
                            <span className="w-[30px] h-[4px] border border-[#5b5b5b] rounded-full bg-foreground transition-all"></span>
                            <span className="w-[30px] h-[4px] border border-[#5b5b5b] rounded-full bg-foreground transition-all"></span>
                        </div>
                    )}
                </button>
            </div>

            <div className={`md:hidden absolute top-full left-0 right-0 bg-background z-40 shadow-lg border-b border-border overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <nav className="flex flex-col gap-6 px-6 py-8 text-[28px] font-semibold">
                        <Link
                            href="#early-access"
                            className="header-nav-link-mobile dark:text-foreground hover:text-[#1E40AF] transition-colors"
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
                            className="header-nav-link-mobile dark:text-foreground hover:text-[#1E40AF] transition-colors"
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
                            className="header-nav-link-mobile dark:text-foreground hover:text-[#1E40AF] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        
                        <div className="pt-4">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-3 text-[24px] font-semibold text-foreground hover:text-[#1E40AF] transition-colors"
                                aria-label="Toggle theme"
                            >
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                    <Sun className="h-5 w-5 text-primary rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 absolute" />
                                    <Moon className="h-5 w-5 text-primary rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 absolute" />
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            
            {isMenuOpen && (
                <div 
                    className="fixed top-[120px] left-0 right-0 bottom-0 bg-black/20 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    )
}
