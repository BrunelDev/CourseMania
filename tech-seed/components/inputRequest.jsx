import React, {useState} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { InputFile } from "./inputFichier"

export default function InputWithButton({value, onChange, onClick, onFileUpload}) {
    const [selectFile, setSelectFile] = useState(null);
    const handleFileChange = (file) => {
        setSelectFile(file);
        onFileUpload(file);
    }
    return (
        <div className="flex flex-col lg:flex-row w-full items-center space-y-2 lg:space-y-0 lg:space-x-2 lg: mx-auto">
            <div className="flex w-full">
                <Input
                    type="text"
                    placeholder="Entrez votre requête..."
                    className="w-full "
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className="flex space-x-2 w-full lg:w-auto">
                <Button type="submit" className="bg-[#22B286] w-full lg:w-auto" onClick={onClick}>
                    <Send/>
                </Button>
                <button className="border bg-white rounded-md ">
                    <InputFile className="w-full lg:w-auto mx-6" onFileChange={handleFileChange} />
                </button>
                
            </div>
        </div>
    )
}
