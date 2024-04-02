import Backbtn from "@/components/control/backbtn";
import { SearchBar } from "@/components/search";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <Suspense>
        <SearchBar />
        <Backbtn />
        {children}
      </Suspense>
    </div>    
  )
};