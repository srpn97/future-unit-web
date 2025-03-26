import React, { useState, useEffect, useRef } from "react";
import styles from "./CustomCursor.module.scss";

// type CursorType = "default" | "vision" | "about" | "ABOUT US";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [isPointer, setIsPointer] = useState(false);
  // const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle mouse movement to update cursor position
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Check if cursor is over clickable elements
    // const onMouseOver = (e: MouseEvent) => {
    //   const target = e.target as HTMLElement;

    //   // Check for the title spans
    //   if (
    //     target.tagName === "SPAN" &&
    //     target.parentElement?.className.includes("title")
    //   ) {
    //     const text = target.textContent?.trim().toUpperCase();
    //     if (text === "FUTURE") {
    //       setCursorType("vision");
    //     } else if (text === "UNIT") {
    //       setCursorType("ABOUT US");
    //     }
    //     setIsPointer(true);
    //   }
    //   // Check for work heading
    //   else if (
    //     target.tagName === "H2" &&
    //     target.textContent?.includes("WORK")
    //   ) {
    //     setCursorType("about");
    //     setIsPointer(true);
    //   } else {
    //     setCursorType("default");
    //     setIsPointer(false);
    //   }
    // };

    // Handle mouse leaving the window
    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Handle mouse entering the window
    const onMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", onMouseMove);
    // document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      // document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none";

    // Add hover listeners to title spans
    const titleSpans = document.querySelectorAll("h1.title span");
    const workHeading = document.querySelector("h2.heading");

    // Make elements non-selectable to avoid selection issues with custom cursor
    titleSpans.forEach((span) => {
      span.classList.add(styles.cursorTarget);
    });

    if (workHeading) {
      workHeading.classList.add(styles.cursorTarget);
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        ${styles.cursor} 
        ${isVisible ? styles.visible : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* ${isPointer ? styles.pointer : ""} 
        ${styles[cursorType]}  */}
      <div className={styles.circle}></div>
      {/* {cursorType === "vision" && (
        <div className={styles.content}>
          <div className={styles.text}>VISION +</div>
        </div>
      )}
      {cursorType === "ABOUT US" && (
        <div className={styles.content}>
          <div className={styles.text}>ABOUT US +</div>
        </div>
      )} */}
    </div>
  );
};

export default CustomCursor;
