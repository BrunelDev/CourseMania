"use client";
import React from "react";

export default function Pub({
    Image,
    TextColor,
    Content,
    Nom,
    Title,
    WebbgColor
}) {
    return (
        <div
            className="bg-cover bg-center p-8 rounded-lg shadow-md"
            style={{
                backgroundImage: `url(${Image})`,
            }}
        >
            <div>
                <h4 className={`${WebbgColor} p-2 rounded-md text-white`}>WEBINAR</h4>
                <h4 className="text-xl font-semibold text-white">{Nom}</h4>
                <h2 className="text-3xl font-bold text-white mb-4">{Title}</h2>
                <button className={`px-4 py-2 rounded-md ${TextColor}`}>
                    {Content}
                </button>
            </div>
        </div>
    );
}
