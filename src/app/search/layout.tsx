import Backbtn from "@/components/control/backbtn";
import { SearchBar } from "@/components/search";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 pt-4">
        <SearchBar />
        <Backbtn />
        {children}       
    </div>    
  )
};