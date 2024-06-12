"use client"

import {Button} from "@/components/ui/button";
import {log} from "node:util";


export default function Page() {
    return (
            <div className="grid grid-cols-5 gap-2">
                <Button>Default</Button>
                <Button variant='destructive'>Destructive</Button>
                <Button variant='ghost'>ghost</Button>
                <Button variant='link'>link</Button>
                <Button variant='outline'>outline</Button>
                <Button variant='secondary'>secondary</Button>
                <Button disabled>disabled</Button>
                <Button onClick={() => console.log("Hola Mundo")}>Click Me</Button>
                <Button variant="success">succes</Button>



            </div>

    )
}


