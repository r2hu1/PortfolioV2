import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectCard(props) {
    return(
        <div className="rounded-md border grid gap-3 p-3 w-fit bg-background">
            <div>
                <Image src={props.image} width={340} height={340} className="rounded-md bg-secondary aspect-video h-full w-full max-w-sm md:max-w-[370px] lg:w-[365px]"/>
            </div>
            <div>
                <h1 className="text-base font-medium text-gray-900 dark:text-gray-50">{props.title}</h1>
                <p className="max-w-[300px] text-xs -mt-1 text-gray-600 dark:text-gray-200">{props.description}</p>
            </div>
            <div>
                <Button className="w-full" size="sm" asChild><Link href={props.link || "/"}>View</Link></Button>
            </div>
        </div>
    )
}