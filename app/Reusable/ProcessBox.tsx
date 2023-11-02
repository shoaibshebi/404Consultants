import React from "react";

interface ProcessBoxProps {
  ind: number;
  phase: string;
  badgeIcon: string;
  title: string;
  desc: string;
  bdrclr: any;
  left?: boolean;
  right?: boolean;
  styles?: any;
  isNotMobile?: boolean;
}

const ProcessBox: React.FC<ProcessBoxProps> = ({
  ind,
  left,
  right,
  phase,
  bdrclr,
  title,
  desc,
  badgeIcon,
  isNotMobile,
}) => {
  return (
    <div className='relative'>
      <img
        src={badgeIcon}
        alt='Badge Icon'
        className='absolute z-10 top-[-15px] left-[-15px] w-8 h-8 rounded-full'
      />
      {isNotMobile && left && (
        <div
          className={`w-4 h-4 z-10 absolute left-[-6px] top-[30%] bg-white rounded-full`}
        />
      )}
      {isNotMobile && right && (
        <div
          className={`w-4 h-4 z-10 absolute right-[-6px] top-[30%] bg-white rounded-full`}
        />
      )}
      {isNotMobile && ind !== 2 && (
        <div
          className={`w-16 h-1 z-0 absolute right-[-60px] top-[32%] rounded-full`}
          style={{
            backgroundColor:
              phase === "1" ? "#2F80ED" : phase === "2" ? "#7209B7" : "#B409B7",
          }}
        />
      )}
      <div
        className={`relative border-[3px] overflow-x-auto h-[320px] md:max-h-[265px] md:h-[265px] max-w-[316px] ${bdrclr} bg-rich-blacks-main rounded-lg p-6`}
      >
        <div className='overflow-scroll '>
          <div className='flex items-center justify-start mb-4 '>
            <h2 className='text-2xl text-start font-bold '>{title}</h2>
          </div>
          <p className='text-whites-04 text-2xl sm:text-sm lg:text-3xl'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessBox;
