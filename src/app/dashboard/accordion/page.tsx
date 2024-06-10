import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        id: "item-1",
        question: "Its it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern"
    },
    {
        id: "item-2",
        question: "Its it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern"
    },
    {
        id: "item-3",
        question: "Its it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern"
    },
];



export default function Page() {
    return (
        <div>
            <Accordion type="single"  className="w-full">
                {items.map((item) => (
                    <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
            ))}
            </Accordion>
        </div>
    )
}
