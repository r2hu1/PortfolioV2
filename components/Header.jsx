import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="px-6 py-5 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold flex items-center justify-center">
                    R<span className="md:inline-flex-none animate-text-gradient hidden bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">ahul</span><span className="text-primary">.</span>
                </h1>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button asChild><Link href="/contact">Contact Me</Link></Button>
                <ModeToggle/>
            </div>
        </header>
    )
}