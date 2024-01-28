import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export const techstacks = [
    {
        icon: <IoLogoJavascript className="fill-yellow-400 w-7 h-7 hover:animate-pulse" />,
        title: "JavaScript",
        description: "A general-purpose, object-oriented scripting language."
    },
    {
        icon: <SiTailwindcss className="fill-sky-400 w-7 h-7 hover:animate-pulse" />,
        title: "TailwindCSS",
        description: "A utility-first CSS framework for rapid UI development."
    },
    {
        icon: <FaReact className="fill-sky-600 w-7 h-7 hover:animate-pulse" />,
        title: "ReactJS",
        description: "A JavaScript library for building user interfaces."
    },
    {
        icon: <TbBrandNextjs className="w-7 h-7 hover:animate-pulse" />,
        title: "NextJS",
        description: "A React framework for server-side rendering."
    },
    {
        icon: <DiNodejs className="fill-green-600 w-7 h-7 hover:animate-pulse" />,
        title: "NodeJS",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine."
    }
];
export default function TechStack() {
    return (
        <div className="mb-14 px-3 w-fit mx-auto">
            <div className="border border-dashed rounded-md p-4 bg-background w-full">
                <h1 className="text-lg font-medium text-center">
                    My <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Tech Stack</span><span className="text-primary">.</span>
                </h1>
                <p className="text-center mx-auto text-xs max-w-sm -mt-1 text-gray-600 dark:text-gray-200">Here are some<span className="text-primary">*</span> of the technologies I use for building my projects.</p>
                <div className="mt-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5">
                        {techstacks.map((techstack, index) => (
                            <li key={index} className="p-3 cursor-pointer transition border rounded-md w-full">
                                <div className="flex flex-col">
                                    {techstack.icon}
                                    <h1 className="text-base font-medium">{techstack.title}</h1>
                                    <p className="text-xs -mt-1">{techstack.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-center h-10 w-full max-w-md mx-auto border border-dashed flex items-center justify-center rounded-md">and many more...</p>
                </div>
            </div>
        </div>
    )
}