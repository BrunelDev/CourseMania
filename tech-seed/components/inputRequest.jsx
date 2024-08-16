import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function InputWithButton() {
    return (
        <div className="flex w-full  items-center space-x-2 bg-[#D6BC97]">
            <Input type="text" placeholder="Entrez votre requête..." />
            <Button type="submit  bg-[#22B286] ">
            <Send />
            </Button>
        </div>
    )
}
