import Explore from "@/components/Explore";
import TechStack from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Hero  */}
      <div className="grid place-items-center gap-6 py-20 mb-5 px-6">
        <div className="absolute inset-0 -z-10 h-[550px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto -ml-14 md:-ml-[0] h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div></div>
        <div className="md:max-w-2xl max-w-xl">
          <h1 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-5xl">Hi<span className="text-primary">,</span> My name is Rahul a full stack <span className="text-primary">Developer</span> <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">from India</span><span className="text-primary">.</span></h1>
          <p className="text-center md:text-sm text-xs mt-1 text-gray-600 dark:text-gray-200">An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding<span className="text-primary">.</span></p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button asChild><Link href="https://github.com/r2hu1">My Github</Link></Button>
          <Explore variant="outline" scrollTo={400} />
        </div>
      </div>
      {/* TechStact */}
      <TechStack/>
    </main>
  )
}