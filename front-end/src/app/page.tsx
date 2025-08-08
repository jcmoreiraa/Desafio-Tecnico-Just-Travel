'use client'
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import TicketList from "@/components/Tickets/TicketList";

export default function Home() {
  return (
    <>
      <div className="px-[60px] mx-auto mt-8 mb-8">
        <SearchBar />
      </div>

      <main className="px-[60px] bg-[#F6F6F6] flex gap-8">
        <div className="flex w-[37%] h-full mt-8">
          <Filter />
        </div>
        
        <div className="mt-8 w-full">
          <TicketList />
        </div>
      </main>
    </>
  );
}