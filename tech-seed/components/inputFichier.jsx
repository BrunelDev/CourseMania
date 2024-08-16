import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <div className="w-full max-w-sm items-center gap-1.5 flex flex-row">
      <Input id="picture" type="file" />
      <img src="Vector (1).png" alt="" />
    </div>
  )
}
