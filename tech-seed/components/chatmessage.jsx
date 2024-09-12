"use client";
import React from "react"

export default function ChatMessage({ message, isUser }) {
    return (
        <div className={`flex ${isUser ? '  justify-end' : ' justify-start'} mb-2`}>
            <div className={`p-3 rounded-lg overflow- max-w-[80%] ${isUser ? `bg-[#22B286] text-white` : `bg-white text-black`}`}>
                {message}
            </div>
        </div>
    );
}
