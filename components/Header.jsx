import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="px-6 py-5 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <Logo/>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button asChild><Link href="/contact">Contact Me</Link></Button>
                <ModeToggle/>
            </div>
        </header>
    )
}