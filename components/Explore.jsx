"use client"

import { Button } from "./ui/button"

export default function Explore(props,{children}) {
    return (
        <Button {...props} onClick={() => { scrollTo(0, props.scrollto) }}>Explore</Button>
    )
}