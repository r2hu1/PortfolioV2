import ContactForm from "./_components/ContactForm";

export const metadata = {
    title: "Contact",
    description: "Contact me for any inquiries or collaboration opportunities.",
}

export default function Page() {
    return (
        <div className="py-20">
            <div className="text-center max-w-sm mx-auto mb-10 px-5">
                <h1 className="text-xl font-medium text-center">
                    <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Contact Me</span><span className="text-primary">.</span>
                </h1>
                <p className="text-center mx-auto text-xs max-w-sm -mt-1 text-gray-600 dark:text-gray-200">I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            <ContactForm />
        </div>
    )
}