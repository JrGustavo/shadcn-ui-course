

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"



export default function Page() {
    return (
        <div>
            <Avatar className="h[500px] flex justify-center items-center">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="m-2">@shadcn</p>
        </div>
    )
}

