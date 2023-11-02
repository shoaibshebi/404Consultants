import React from "react";

export default function PrimBtn({ title }: any) {
  return (
    <div className='w-fit h-12 justify-start items-start inline-flex cursor-pointer blue-glow'>
      <div className='px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-500 rounded-[10px] shadow blue-glow justify-center items-center gap-3 flex'>
        <div className='text-white text-base font-semibold font-404 leading-normal'>
          {title}
        </div>
      </div>
    </div>
  );
}
