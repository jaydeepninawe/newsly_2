import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        {/* Top Black Navbar */}
        <div className="bg-black text-white relative h-20 flex items-center justify-center">
          <div className="absolute left-6 flex items-center">
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
          <h1 className="text-4xl font-extrabold text-cyan-400 italic tracking-wide">
            Newsly
          </h1>
          <div className="absolute right-6 flex items-center gap-5">
            <BsSun className="text-xl cursor-pointer" />
            <FiSearch className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Bottom White Nav */}
        <nav className="bg-white shadow py-3">
          <div className="flex justify-center">
            <ul className="flex flex-wrap justify-center items-center  text-5xl h-8 gap-10 font-semibold  sm:text-base uppercase">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Buy Theme</li>
              <li className="cursor-pointer">Entertainment</li>
              <li className="cursor-pointer">Politics</li>
              <li className="cursor-pointer">Fashion</li>
              <li className="cursor-pointer">Technology</li>
              <li className="cursor-pointer">Business</li>
            </ul>
          </div>
        </nav>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
