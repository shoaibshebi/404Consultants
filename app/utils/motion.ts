// @ts-nocheck

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 7,
    },
  },
};
export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = (delay) => ({
  hidden: {
    opacity: 0,
  },
  show: () => {
    return {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    };
  },
});

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const slideIn = (
  direction,
  type,
  delay,
  duration,
  nMargin = "-100%",
  pMargin = "100%"
) => ({
  hidden: {
    x: direction === "left" ? nMargin : direction === "right" ? pMargin : 0,
    y: direction === "up" ? nMargin : direction === "down" ? pMargin : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const _fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    scale: 0.7,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
export const fadeInFromHidden = (type, delay, duration) => ({
  hidden: {
    scale: 1,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x:
      direction === "left"
        ? 200
        : direction === "right"
        ? -200
        : direction === "lb"
        ? -200
        : direction === "rb"
        ? 200
        : direction === "lt"
        ? -200
        : direction === "rt"
        ? 200
        : 0,
    y:
      direction === "up"
        ? 200
        : direction === "down"
        ? -200
        : direction === "lb"
        ? -200
        : direction === "rb"
        ? -200
        : direction === "lt"
        ? 200
        : direction === "rt"
        ? 200
        : 0,

    opacity: 0,
    scale: 0.5,
  },
  show: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
