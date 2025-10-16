'use client'
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ContactUs() {
    const { setTheme } = useTheme()

    return (
        <div>
            <Button onClick={() => setTheme('dark')} variant='outline'>Change theme</Button>
        </div>
    )
} 