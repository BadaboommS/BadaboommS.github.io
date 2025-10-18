import { useState, useEffect, useCallback, Children, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface ZNavigatorProps {
  children: ReactNode;
}

export default function ZNavigator({ children }: ZNavigatorProps) {
  const pages = Children.toArray(children);
  const total = pages.length;

  const [current, setCurrent] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total || scrolling || index === current) return;

      setDirection(index > current ? 1 : -1);
      setScrolling(true);
      setCurrent(index);
    },
    [total, scrolling, current]
  );

  const next = useCallback(() => {
    if (current < total - 1) goTo(current + 1);
  }, [current, goTo, total]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      if (scrolling) return;
      if (e.deltaY > 50) next();
      else if (e.deltaY < -50) prev();
    };

    const onKey = (e: KeyboardEvent) => {
      if (scrolling) return;
      if (e.key === "ArrowDown") next();
      else if (e.key === "ArrowUp") prev();
    };

    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [next, prev, scrolling]);

  const variants: Variants = {
    enter: (dir: number) => ({
      scale: dir === 1 ? 0.7 : 1.3,
      opacity: 0,
      translateZ: dir === 1 ? 200 : -200,
    }),
    center: {
      scale: 1,
      opacity: 1,
      translateZ: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: (dir: number) => ({
      scale: dir === 1 ? 1.3 : 0.7,
      opacity: 0,
      translateZ: dir === 1 ? -200 : 200,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-transparent perspective-[1200px]">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          className="absolute inset-0 flex items-center justify-center overflow-auto"
          style={{ transformStyle: "preserve-3d" }}
          onAnimationComplete={() => setScrolling(false)} // ✅ reset scrolling after animation
        >
          {pages[current]}
        </motion.div>
      </AnimatePresence>

      {/* Quick Nav */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-400 opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
