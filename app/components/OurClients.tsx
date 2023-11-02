import React from "react";
import SecBtn from "../Reusable/SecBtn";

export default function OurClients() {
  const icons = [
    "/icons/microsoft-6 2.png",
    "/icons/xiaomi.png",
    "/icons/paypal-3 2.png",
    "/icons/lenovo-1 2.png",
    "/icons/Booking.png",
    "/icons/Dxsale.png",
  ];
  return (
    <div
      className='flex flex-col justify-start items-center relative w-[80%] mx-auto'
      id='clients'
    >
      <div className='absolute h-32 w-32 top-[20%] left-[-30%] z-0 gradient-02 ' />
      <div className='mt-16'>
        <SecBtn title='Our Clients' />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 relative gap-16 my-16 w-full'>
        {icons.map((x, i) => (
          <img key={i} className='w-full md:w-auto' alt='' src={x} />
        ))}
      </div>
    </div>
  );
}
