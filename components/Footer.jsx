import { Github, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-7 relative mt-10 px-6 grid gap-2 overflow-x-clip">
            <div className="flex items-center justify-center gap-2">
                <a className="p-2 transition bg-secondary rounded-full hover:bg-primary hover:text-white" href="https://github.com/r2hu1" target="_blank"><Github className="w-4 h-4" /></a>
                <a className="p-2 transition bg-secondary rounded-full hover:bg-primary hover:text-white" href="https://instagram.com/r.rah_ul" target="_blank"><Instagram className="w-4 h-4" /></a>
            </div>
            <p className="text-xs text-center animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Built with <span className="text-red-500">❤️</span> by <a href="https://github.com/r2hu1" className="hover:text-primary">r2hu1</a><span className="text-primary">.</span></p>
            <div className="absolute inset-0 rotate-180 -z-10 h-[200px] -mt-32 w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[200px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
        </footer>
    )
}