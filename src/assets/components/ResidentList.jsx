import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "./pagination";

const ResidentList = ({ residents }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const {inPageResidents, pages} = paginationLogic(currentPage, residents)
  
  return (
    <div className='bg-[url("./media/backgroundPage.png")]'>
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-5xl mx-auto py-6 px-4">
        {
          inPageResidents?.map((resident) => (
            <ResidentCard residentUrl ={resident} key={resident} />
            ))
          }
      </div>
      <section className="flex justify-center gap-4 flex-wrap pb-8">
          {
            pages?.map((page) => (
              <button className={`${page==currentPage?'  bg-green-700/40 ' :' bg-black/20'} text-white backdrop-blur-sm p-2 px-3 `} onClick={() => { setCurrentPage(page) }} key={page}>{page}</button>
            ))
          }
      </section>
    </div>
  );
};

export default ResidentList;
