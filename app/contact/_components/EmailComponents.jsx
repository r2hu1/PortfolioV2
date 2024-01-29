import { Tailwind } from "@react-email/components";

export default function EmailComponents({ name, email, message }) {
    return (
        <Tailwind>
            <div className="flex px-6 flex-col gap-6 absolute inset-0 -z-10 min-h-[600px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px] p-3">
                <div>
                    <h1 className="text-lg">{name}<span className="text-primary">.</span></h1>
                    <p className="text-xs -mt-1">{email}</p>
                </div>
                <div className="text-sm">
                    {message}<span className="text-primary">.</span>
                </div>
                <div>
                    <h3 className="text-base">From: <span className="text-primary text-sm">https://rahul.eu.org</span></h3>
                </div>
            </div>
        </Tailwind>
    )
}