import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function TechStack() {
    return (
        <div className="mb-10 px-6 md:px-20 lg:px-32 w-fit mx-auto">
            <div className="border rounded-md px-5 py-4 bg-background">
                <h1 className="text-lg font-medium text-center">
                    My <span className="text-primary">Tech</span> Stack<span className="text-primary"></span>
                </h1>
                <div className="mt-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <li className="p-3 border rounded-md w-full md:w-auto">
                            <div className="flex flex-col">
                                <h1 className="text-lg"><IoLogoJavascript className="fill-yellow-400 w-8 h-8 hover:animate-pulse hover:fill-yellow-500" />JavaScript</h1>
                                <p className="text-xs -mt-1">A general-purpose, object-oriented scripting language.</p>
                            </div>
                        </li>

                        <li className="p-3 border rounded-md w-full md:w-auto">
                            <div className="flex flex-col">
                                <h1 className="text-lg"><SiTailwindcss className="fill-blue-400 w-8 h-8 hover:animate-pulse hover:fill-yellow-500" />TailwindCSS</h1>
                                <p className="text-xs -mt-1">A utility-first CSS framework for rapid UI development.</p>
                            </div>
                        </li>

                        <li className="p-3 border rounded-md w-full md:w-auto">
                            <div className="flex flex-col">
                                <h1 className="text-lg"><DiNodejs className="fill-green-400 w-8 h-8 hover:animate-pulse hover:fill-yellow-500" />NodeJS</h1>
                                <p className="text-xs -mt-1">A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                            </div>
                        </li>

                        <li className="p-3 border rounded-md w-full md:w-auto">
                            <div className="flex flex-col">
                                <h1 className="text-lg"><TbBrandNextjs className="w-8 h-8 hover:animate-pulse hover:fill-yellow-500" />NextJS</h1>
                                <p className="text-xs -mt-1">A React framework for server-side rendering.</p>
                            </div>
                        </li>

                        <li className="p-3 border rounded-md w-full md:w-auto">
                            <div className="flex flex-col">
                                <h1 className="text-lg"><IoLogoJavascript className="fill-yellow-400 w-8 h-8 hover:animate-pulse hover:fill-yellow-500" />JavaScript</h1>
                                <p className="text-xs -mt-1">A general-purpose, object-oriented scripting language.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}