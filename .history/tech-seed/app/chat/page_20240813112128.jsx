"use client";
import { useState } from "react";
import { Chat } from "@/components/message";
import Lateralenavmentor from "@/components/lateralenavmentor";
export default function ChatPage() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(false);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [isScheduleSelected, setIsScheduleSelected] = useState(false);
  return (
    <div className="flex w-full">
      <div className="h-full w-1/4 w-fit">
        <Lateralenavmentor />
      </div>
      <Chat />
      <div></div>
    </div>
  );
}
