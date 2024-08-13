import React from "react";
import { Search } from "lucide-react";
export function ChatSearchBar({ value, setValue }) {
  return (
    <div className="flex justify-between">
      <input type="text" className="focus:outline-none w-full" />
      <Search />
    </div>
  );
}
