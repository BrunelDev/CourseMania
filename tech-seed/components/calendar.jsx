"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarComponent() {
  const [date, setDate] = useState();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
