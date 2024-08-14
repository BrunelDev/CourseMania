import React from "react";
import { Search } from "lucide-react";
export function ChatSearchBar({ value, setValue }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Chercher..."
          className="focus:outline-none w-full border shadow py-1 px-2 rounded-md"
        />
      </div>
      <Search />
    </div>
  );
}
