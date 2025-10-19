import { useState, useEffect, useRef, useMemo, useCallback, Children, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface ZNavigatorProps {
  children: ReactNode;
}

export default function ZNavigator({ children }: ZNavigatorProps) {
  const pages = useMemo(() => Children.toArray(children), [children]);
  const total = pages.length;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const scrolling = useRef(false);

  const isMobile = useMemo(() => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent), []);

  // Navigation
  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total || scrolling.current || index === current) return;
      setDirection(index > current ? 1 : -1);
      scrolling.current = true;
      setCurrent(index);
    },
    [current, total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Variants Framer Motion
  const variants: Variants = useMemo(() => ({
    enter: (dir: number) =>
      isMobile
        ? { scale: dir === 1 ? 0.7 : 1.3, opacity: 0, y: dir === 1 ? 100 : -100 }
        : { scale: dir === 1 ? 0.7 : 1.3, opacity: 0, translateZ: dir === 1 ? 200 : -200 },
    center: isMobile
      ? { scale: 1, opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }
      : { scale: 1, opacity: 1, translateZ: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } },
    exit: (dir: number) =>
      isMobile
        ? { scale: dir === 1 ? 1.3 : 0.7, opacity: 0, y: dir === 1 ? -100 : 100, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }
        : { scale: dir === 1 ? 1.3 : 0.7, opacity: 0, translateZ: dir === 1 ? -200 : 200, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } },
  }), [isMobile]);

  // Event listeners
  useEffect(() => {
    let touchStartY = 0;
    let lastScrollTime = 0;
    const SCROLL_DELAY = 900;
    const MIN_DELTA = 50;

    const canScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return false;
      lastScrollTime = now;
      return true;
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (scrolling.current || !canScroll()) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < MIN_DELTA) return;
      if (deltaY > 0) next(); else prev();
    };

    const onWheelOrKey = (e: WheelEvent | KeyboardEvent) => {
      if (scrolling.current || !canScroll()) return;
      if ("deltaY" in e) {
        if (e.deltaY > 50) next();
        else if (e.deltaY < -50) prev();
      } else if ("key" in e) {
        if (e.key === "ArrowDown") next();
        else if (e.key === "ArrowUp") prev();
      }
    };

    window.addEventListener("wheel", onWheelOrKey, { passive: true });
    window.addEventListener("keydown", onWheelOrKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheelOrKey);
      window.removeEventListener("keydown", onWheelOrKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  return (
    <div className="relative w-screen h-screen overflow-hidden touch-none select-none" style={{ perspective: "1200px" }}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
          onAnimationComplete={() => { scrolling.current = false; }}
        >
          {pages[current]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-4 h-4 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-gray-400 opacity-70"}`}
          />
        ))}
      </div>
    </div>
  );
}
