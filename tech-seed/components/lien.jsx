import React from "react";
export default function Lien(){
    return(
        <div className="flex flex-row space-x-4 space-y-3 px-4 mt-12">
            <img src="Vector.png" alt="Message" className="w-6 h-6 mt-3" />
            <a href="#" className="text-white text-sm">
                Que veut dire un chat
            </a>
        </div>
    )
}