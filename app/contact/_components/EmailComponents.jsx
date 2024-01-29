export default function EmailComponents({ name, email, message }) {
    return (
        <div className="relative bg-background z-10 p-5 grid gap-3">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[200px] rounded-full bg-primary opacity-20 blur-[100px]"></div></div>
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
    )
}