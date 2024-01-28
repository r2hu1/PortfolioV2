"use client"

import { Button } from "./ui/button"

export default function Explore(props) {
    return (
        <Button {...props} onClick={() => { scrollTo(0, props.scrollTo) }}>Explore</Button>
    )
}