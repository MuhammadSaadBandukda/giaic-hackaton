// components/SubHeader.tsx
import React from "react";

const SubHeader = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className=" relative flex flex-col justify-center pl-44 bg-slate-200 h-52 w-full text-2xl">
      <div className="text-blue-950">
        {pageTitle}
      </div>
      <div className="text-sm text-blue-950">
        <h1>Home.Pages. <span className="text-pink-600">{pageTitle}</span></h1>
      </div>
    </div>
  );
};

export default SubHeader;
