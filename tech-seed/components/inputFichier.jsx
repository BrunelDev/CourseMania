import React from "react";
import { Input } from "@/components/ui/input"

export function InputFile({onFileChange}) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onFileChange({ name: file.name, content: reader.result });
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className=" items-center gap-1 flex flex-row">
      <img src="Vector (1).png" alt="" className="ml-2" />
      <Input id="picture" type="file" onChange={handleFileChange} accept=".txt, .pdf, .docx" className="w-fit border-none"/>
    </div>
  )
}
