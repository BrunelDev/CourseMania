import { useState } from "react";
import { Chat } from "@/components/message";
export default function ChatPage() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(false);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [isScheduleSelected, setIsScheduleSelected] = useState(false);
  return (
    <div>
      <Chat />
    </div>
  );
}
