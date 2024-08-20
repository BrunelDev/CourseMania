import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <div className=" items-center gap-1.5 flex flex-row">
      <Input id="picture" type="file" className="w-36"/>
      <img src="Vector (1).png" alt="" />
    </div>
  )
}
