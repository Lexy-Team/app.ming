import { useState } from "react";
import NewProject from "./NewProject";
import Projects from "@/components/Projects";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("");
  const handleActivePage = (e: string) => {
    setActivePage(e);
  };

  return (
    <div className="mx-auto container my-3 text-sm">
      <div className="flex items-center justify-between gap-2">
        <p className="text-md text-gray-600 font-semibold">
          /
          <span className="cursor-pointer" onClick={() => handleActivePage("")}>
            dashboard
          </span>
          {activePage}
        </p>
        <input
          type="text"
          placeholder="🔍 Search Projects..."
          className="flex-1 max-w-[30vw] border-b-2 focus:outline-none text-sm"
        />
        <button
          onClick={() => handleActivePage("/new_project")}
          className="bg-[#00FE67] text-black px-2 py-1 font-semibold cursor-pointer"
        >
          + Project
        </button>
      </div>

      {
        activePage === "" && <Projects/>
      }

      {activePage === "/new_project" && <NewProject />}
    </div>
  );
}
