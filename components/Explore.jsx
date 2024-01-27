"use client"

import { Button } from "./ui/button"

export default function Explore(props) {
    return (
        <Button {...props} onClick={() => { scrollTo(props.scrollTo, 0) }}>Explore</Button>
    )
}