import Filtro from "@/components/Filtro";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="px-[60px] mx-auto mt-8 mb-8 ">
        <SearchBar />
      </div>

      <main className="px-[60px]  bg-[#F6F6F6] flex  gap-10 ">
        <div className="flex max-w-[367px] mt-8">
          <Filtro />
          
        </div>
        <p>oiii</p>
      </main>
    </>
  );
}