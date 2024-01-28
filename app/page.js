import Explore from "@/components/Explore";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Hero  */}
      <div className="grid place-items-center gap-6 py-20 mb-5">
        <div className="md:max-w-2xl max-w-xl px-6">
          <h1 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-4xl">Hi<span className="text-primary">,</span> My name is Rahul a full stack <span className="text-primary">Developer</span> <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">from India</span><span className="text-primary">.</span></h1>
          <p className="text-center md:text-sm text-xs mt-1 text-gray-600 dark:text-gray-200">An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding<span className="text-primary">.</span></p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button asChild><Link href="https://github.com/r2hu1">My Github</Link></Button>
          <Explore variant="outline" scrollto={400} />
        </div>
      </div>
      {/* TechStact */}
      <TechStack />
      {/* Projects */}
      <Projects />
    </main>
  )
}