import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

export const projects = [
    {
        title: "MusicHub",
        description: "A music streaming platform that allows users to listen to music, search for songs...",
        github: "https://github.com/r2hu1/MusicHub",
        image: "/musichub.png",
        link: "https://musichubs.vercel.app/",
    },
    {
        title: "E-Store",
        description: "An e-commerce that allows users to buy and sell products...",
        github: "https://github.com/r2hu1/EStore",
        image: "/estore.png",
        link: "https://estorez.vercel.app/",
    },
];

export default function Projects() {
    return (
        <div className="mb-14 px-3 md:w-fit mx-auto">
            <div className="border border-dashed rounded-md p-4 bg-background">
                <h1 className="text-lg font-medium text-center">
                    <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Projects</span><span className="text-primary">.</span>
                </h1>
                <p className="text-center mx-auto text-xs max-w-sm -mt-1 text-gray-600 dark:text-gray-200">Here are some<span className="text-primary">*</span> projects I have worked on.</p>
                <div className="mt-6">
                    <div className="grid md:grid-cols-2 mx-auto w-fit mb-5 gap-4 md:gap-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                    <div className="items-center justify-center flex">
                        <Button asChild size="sm" className="w-full text-xs border-dashed max-w-md" variant="outline"><Link href="/projects">View All</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}