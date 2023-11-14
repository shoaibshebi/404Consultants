// @ts-nocheck

export const randomStyle = position => {
  const obj = {
    position: "absolute",
    ...position,
    width: `${Math.random() * 3 + 1}px`, // Random width between 1px and 4px
    height: "auto", // Keep the aspect ratio
    transform: `translate(-50%, -50%)`, // Center the star based on its top and left position
  };
  return obj;
};

export const getStars = (numberOfStars: any, position: any) => {
  const stars = Array.from({ length: numberOfStars }, (_, index) => {
    const rand = { ...randomStyle(position) };

    return (
      <img
        alt='Star'
        key={index}
        src='/icons/star1.svg'
        className='tailwind-class'
        style={rand}
      />
    );
  });

  return stars;
};
