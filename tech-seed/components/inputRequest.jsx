import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { InputFile } from "./inputFichier"

export default function InputWithButton() {
    return (
        <div className="flex flex-col lg:flex-row w-full items-center space-y-2 lg:space-y-0 lg:space-x-2 lg: mx-auto">
            <div className="flex w-full">
                <Input
                    type="text"
                    placeholder="Entrez votre requête..."
                    className="w-full "
                />
            </div>
            <div className="flex space-x-2 w-full lg:w-auto">
                <Button type="submit" className="bg-[#22B286] w-full lg:w-auto">
                    <Send />
                </Button>
                <button className="border bg-white rounded-md pr-3">
                    <InputFile className="w-full lg:w-auto" />
                </button>
                
            </div>
        </div>
    )
}
