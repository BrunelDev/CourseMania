"use client";
import { useState } from "react";
import { Chat } from "@/components/message";
import Lateralenavmentor from "@/components/lateralenavmentor";
export default function ChatPage() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(false);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [isScheduleSelected, setIsScheduleSelected] = useState(false);
  return (
    <div className="flex">
      <div className="h-full w-1/4">
        <Lateralenavmentor />
      </div>
      <Chat />
      <div></div>
    </div>
  );
}
