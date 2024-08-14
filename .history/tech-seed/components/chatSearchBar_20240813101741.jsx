import React from "react";
import { Search } from "lucide-react";
export function ChatSearchBar() {
  return (
    <div className="flex justify-between">
      <input type="text" />
      <Search />
    </div>
  );
}
