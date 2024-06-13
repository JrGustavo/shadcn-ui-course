import {Badge} from "@/components/ui/badge";

export default function Page() {
    return (
        <div>
            <h1 className="flex gap-4">
                <Badge capitalize variant="destructive">destructive</Badge>
                <Badge capitalize variant="secondary">secondary</Badge>
                <Badge capitalize variant="outline">outline</Badge>
                <Badge capitalize variant="info">info</Badge>
                <Badge capitalize variant="success">success</Badge>
            </h1>
        </div>
    )
}

