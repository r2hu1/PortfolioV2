import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Projects",
    description: "Showcase of my projects i have built in my journey.",
};

export const projects = [
    {
        title: "MusicHub",
        description: "A music streaming platform that allows users to listen to music, search for songs...",
        github: "https://github.com/r2hu1/MusicHub",
        image: "/musichub.png",
        link: "https://musichubs.vercel.app/",
    },
    {
        title:"TailwindBG",
        description:"A list of Talwind CSS background grids and gradients to use in your projects...",
        github:"https://github.com/r2hu1/tailwind-bg",
        image:"/tailwind-bg.png",
        link:"https://tailwind-bg.vercel.app/"
    },
    {
        title: "E-Store",
        description: "An e-commerce that allows users to buy and sell products...",
        github: "https://github.com/r2hu1/EStore",
        image: "/estore.png",
        link: "https://estorez.vercel.app/",
    },
    {
        title: "Zenpay",
        description: "An friction currency that allows users to send and receive money...",
        github: "https://github.com/r2hu1/Zenpay",
        image: "/zenpay.png",
        link: "https://zenpay.vercel.app/",
    },
    {
        title: "DrawIT",
        description: "A drawing app that allows users to draw on a canvas...",
        github: "https://github.com/r2hu1/DrawIT",
        image: "/drawit.png",
        link: "https://draw-it-orcin.vercel.app/",
    },
    {
        title: "DevPortfolio",
        description: "A portfolio website for developers to showcase their work and showcase their skills...",
        github: "https://github.com/r2hu1/DevPortfolio",
        image: "/devportfolio.png",
        link: "https://dev-portfolio-theta-gilt.vercel.app/",
    },
    {
        title: "Car Showcase",
        description: "An e-commerce that allows users to know about cars...",
        github: "https://github.com/r2hu1/Car-Showcase",
        image: "/car-showcase.png",
        link: "https://car-showcase-two-kappa.vercel.app/"
    },
    {
        title: "Sh2re",
        description: "An postimages alternative that allows users to upload and share images...",
        github: "https://github.com/r2hu1/Sh2re",
        image: "/sh2re.png",
        link: "https://sh2re.vercel.app/",
    },
    {
        title: "Bytes Studio",
        description: "A agancy website i built for a client for their agency...",
        github: "https://github.com/r2hu1/BytesStudio",
        image: "/bytes-studio.png",
        link: "https://bytesstudio.vercel.app/",
    }
];
export default function Page() {
    return (
        <div className="mt-10 mb-5 px-3 md:w-fit mx-auto">
            <div className="p-4">
                <h1 className="text-lg font-medium text-center">
                    <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Projects</span><span className="text-primary">.</span>
                </h1>
                <p className="text-center mx-auto text-xs max-w-sm -mt-1 text-gray-600 dark:text-gray-200">Here are some<span className="text-primary">*</span> projects I have worked on.</p>
                <div className="mt-6">
                    <div className="grid md:grid-cols-2 mb-5 gap-4 md:gap-3 w-fit mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                    <p className="text-xs mt-5 text-center h-10 w-full max-w-sm mx-auto border border-dashed flex items-center justify-center rounded-md bg-background">and many more...</p>
                </div>
            </div>
        </div>
    )
}
