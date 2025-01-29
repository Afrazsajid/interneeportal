"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ComboboxProps {
  items: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function CosCombobox({ items, value, onChange }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-full justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setOpen(!open)}
      >
        {value ? items.find((item) => item.value === value)?.label : "Select framework..."}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      {open && (
        <div className="absolute w-full bg-white border border-green-300 mt-1 rounded-lg shadow-lg z-10">
          <div className="p-2">
            <Input
              placeholder="Search frameworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredItems.map((item) => (
              <div
                key={item.value}
                className="p-2 hover:bg-green-100 cursor-pointer transition duration-200"
                onClick={() => {
                  onChange(item.value);
                  setOpen(false);
                  setSearchTerm(""); // Clear search term after selection
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}