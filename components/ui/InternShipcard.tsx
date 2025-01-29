"use Client"
import { Internship } from "@/sanity.types";
import { useState } from "react";


export default function Postcard({ internship }: { internship: Internship }) {
  const [isSaved, setIsSaved] = useState(false);
    return (
      <div
      className={`relative w-80 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 transition-all duration-300 
      ${!internship.isActive ? "opacity-50 blur-sm" : "opacity-100"}`}
    >
        {/* Save Button */}
        <button
        className="absolute top-3 right-3"
        onClick={() => setIsSaved(!isSaved)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isSaved ? "black" : "none"}  // Fill black when saved
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l7-5 7 5V3z" />
        </svg>
      </button>
  
        {/* Company Name */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{internship.companyname || "Unknown Company"}</h2>
  
        {/* Internship Title */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{internship.title || "No Title Available"}</p>
  
        {/* Status Badge */}
        <span
          className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full 
          ${internship.status === "paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {internship.status}
        </span>
  
        {/* Description */}
        <p className="mt-2 text-gray-700 dark:text-gray-400 text-sm line-clamp-2">
          {internship.description || "No description provided."}
        </p>
  
        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Created: {new Date(internship._createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }
  