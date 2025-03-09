// components/WidthContext/WidthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
} from "react";

// Create a context to share the width value across components
interface WidthContextType {
  titleWidth: number;
  setTitleWidth: (width: number) => void;
  // The key fix: use MutableRefObject<T | null> instead of RefObject<T>
  titleRef: MutableRefObject<HTMLHeadingElement | null>;
}

const WidthContext = createContext<WidthContextType | undefined>(undefined);

interface WidthProviderProps {
  children: ReactNode;
}

export const WidthProvider: React.FC<WidthProviderProps> = ({ children }) => {
  const [titleWidth, setTitleWidth] = useState<number>(0);
  // useRef returns MutableRefObject<T | null>, which is what we need
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Set up a resize observer to update width when window size changes
  useEffect(() => {
    const updateWidth = () => {
      if (titleRef.current) {
        const newWidth = titleRef.current.offsetWidth;
        setTitleWidth(newWidth);

        // Also set as a CSS variable for global access
        document.documentElement.style.setProperty(
          "--title-width",
          `${newWidth}px`
        );
      }
    };

    // Initialize on first render
    if (titleRef.current) {
      // Delay to ensure fonts are loaded
      setTimeout(updateWidth, 300);
    }

    // Set up resize observer for the title element
    const resizeObserver = new ResizeObserver(updateWidth);
    if (titleRef.current) {
      resizeObserver.observe(titleRef.current);
    }

    // Watch for window resize as well
    window.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);

    // Clean up
    return () => {
      if (titleRef.current) {
        resizeObserver.unobserve(titleRef.current);
      }
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, []);

  return (
    <WidthContext.Provider value={{ titleWidth, setTitleWidth, titleRef }}>
      {children}
    </WidthContext.Provider>
  );
};

// Custom hook to use the width context
export const useWidth = () => {
  const context = useContext(WidthContext);
  if (context === undefined) {
    throw new Error("useWidth must be used within a WidthProvider");
  }
  return context;
};

// Export the context for direct use
export default WidthContext;
