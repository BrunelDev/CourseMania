import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { InputFile } from "./inputFichier"

export default function InputWithButton() {
    return (
        <div className="flex flex-col md:flex-row w-full items-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex w-full">
                <Input
                    type="text"
                    placeholder="Entrez votre requête..."
                    className="w-full md:w-[800px] md:ml-40"
                />
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
                <Button type="submit" className="bg-[#22B286] w-full md:w-auto">
                    <Send />
                </Button>
                <InputFile className="w-full md:w-auto" />
            </div>
        </div>
    )
}
