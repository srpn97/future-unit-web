// components/GridLines/GridLines.tsx
import React, { useEffect, useState, useRef } from "react";
import { useWidth } from "../WidthContext/Index";
import styles from "./GridLines.module.scss";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className = "" }) => {
  const { titleWidth } = useWidth();
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Calculate the gap between lines (3 equal spaces for 4 lines)
  const gap = titleWidth > 0 ? titleWidth / 3 : 0;

  // Set CSS variable for the work component to use the same gap
  useEffect(() => {
    if (gap > 0) {
      document.documentElement.style.setProperty("--grid-gap", `${gap}px`);
    }
  }, [gap]);

  // Handle scroll detection using deltaY from wheel events
  useEffect(() => {
    // Use wheel event which provides deltaY
    const handleWheel = (event: WheelEvent) => {
      if (!visible && Math.abs(event.deltaY) > 0) {
        setVisible(true);
      }
    };

    // Handle touch move for mobile
    const handleTouchMove = () => {
      if (!visible) {
        setVisible(true);
      }
    };

    // Passive is important for performance, especially on mobile
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [visible]);

  return (
    <div
      ref={gridRef}
      className={`${styles.gridContainer} ${className} ${
        visible ? styles.visible : ""
      }`}
      style={{ width: `${titleWidth}px` }}
    >
      <div className={`${styles.gridLine} ${styles.line1}`}></div>
      <div className={`${styles.gridLine} ${styles.line2}`}></div>
      <div className={`${styles.gridLine} ${styles.line3}`}></div>
      <div className={`${styles.gridLine} ${styles.line4}`}></div>
    </div>
  );
};

export default GridLines;
