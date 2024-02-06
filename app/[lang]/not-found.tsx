import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className='bg-rich-blacks-main px-5 h-[400px] md:h-[500px] w-full flex flex-col justify-center items-center text-center font-404 md:px-2 sm:px-6 lg:px-32 max-w-[1536px] mx-auto'>
      <h1 className='text-21xl md:text-246xl-6'>404</h1>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
