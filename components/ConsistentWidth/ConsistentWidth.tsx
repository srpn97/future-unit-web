import React, { ReactNode } from "react";
import styles from "./ConsistentWidth.module.scss";

interface ConsistentWidthProps {
  children: ReactNode;
  className?: string;
}

/**
 * A wrapper component that ensures its children maintain the same width as the title.
 * Uses the CSS variable --title-width set by the WidthContext.
 */
const ConsistentWidth: React.FC<ConsistentWidthProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};

export default ConsistentWidth;
