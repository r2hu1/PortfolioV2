import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <h1 className="text-3xl font-bold flex items-center justify-center">
                R<span className="md:inline-flex-none animate-text-gradient hidden bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">ahul</span><span className="text-primary">.</span>
            </h1>
        </Link>
    )
}