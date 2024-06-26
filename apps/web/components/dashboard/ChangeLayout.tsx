"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBookmarkLayout } from "@/lib/userLocalSettings/bookmarksLayout";
import { updateBookmarksLayout } from "@/lib/userLocalSettings/userLocalSettings";
import { Check, LayoutDashboard, LayoutGrid, LayoutList } from "lucide-react";

type LayoutType = "masonry" | "grid" | "list";

const iconMap = {
  masonry: LayoutDashboard,
  grid: LayoutGrid,
  list: LayoutList,
};

export default function SidebarProfileOptions() {
  const layout = useBookmarkLayout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {React.createElement(iconMap[layout], { size: 18 })}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {Object.keys(iconMap).map((key) => (
          <DropdownMenuItem
            key={key}
            className="cursor-pointer justify-between"
            onClick={async () => await updateBookmarksLayout(key as LayoutType)}
          >
            <div className="flex items-center gap-2">
              {React.createElement(iconMap[key as LayoutType], { size: 18 })}
              <span className="capitalize">{key}</span>
            </div>
            {layout == key && <Check className="ml-2 size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
