import React from "react";
import { Input } from "@/components/ui/input"

export function InputFile({onChangeFile}) {

  return (
    <div className=" items-center gap-1 flex flex-row">
      <img src="Vector (1).png" alt="" className="ml-2" />
      <Input id="picture" type="file" onChange={onChangeFile} placeholder="extension de fichier accepté: .txt, .pdf, .docx" accept=".txt, .pdf, .docx" className="w-full border-none"/>
    </div>
  )
}
