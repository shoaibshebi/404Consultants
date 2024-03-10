import React from "react";

const Container = ({ children }: any) => {
  return (
    <>
      <div className="bg-rich-blacks-main no-scrollbar h-full w-full flex flex-col justify-center items-center font-404 px-2 sm:px-6 lg:px-32 max-w-[1536px] mx-auto">
        <div className="container flex-grow">{children}</div>
      </div>
    </>
  );
};

export default Container;
