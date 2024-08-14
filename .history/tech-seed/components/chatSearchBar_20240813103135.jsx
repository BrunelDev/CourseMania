import React from "react";
import { Search } from "lucide-react";
export function ChatSearchBar({ value, setValue }) {
  return (
    <div className="flex justify-between">
      <div>
        <input
          type="text"
          placeholder="Chercher"
          className="focus:outline-none w-full border border-gray-200"
        />
      </div>
      <Search />
    </div>
  );
}
