import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <div className=" items-center gap-1 flex flex-row">
      <Input id="picture" type="file" className="w-36 border-none"/>
      <img src="Vector (1).png" alt="" className="" />
    </div>
  )
}
