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
  titleRef: MutableRefObject<HTMLDivElement | null>;
}

const WidthContext = createContext<WidthContextType | undefined>(undefined);

interface WidthProviderProps {
  children: ReactNode;
}

export const WidthProvider: React.FC<WidthProviderProps> = ({ children }) => {
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Set up a resize observer to update width when window size changes
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateWidth = () => {
      if (titleRef.current) {
        // Look for the actual img element to get its width
        const logoImgElement = titleRef.current.querySelector("img");

        // Measure what we can see
        const newWidth = logoImgElement
          ? logoImgElement.clientWidth
          : titleRef.current.clientWidth;

        if (newWidth > 0) {
          setTitleWidth(newWidth);
          setIsReady(true);

          // Also set as a CSS variable for global access
          document.documentElement.style.setProperty(
            "--title-width",
            `${newWidth}px`
          );
        }
      }
    };

    // Set up multiple measurements to ensure we catch when the image loads
    const setupMeasurements = () => {
      // Immediate check
      updateWidth();

      // Check after small delay (for image to possibly load)
      timeoutId = setTimeout(() => {
        updateWidth();

        // Check one more time after a longer delay
        timeoutId = setTimeout(updateWidth, 500);
      }, 100);
    };

    setupMeasurements();

    // Set up resize observer for the title element
    const resizeObserver = new ResizeObserver(() => {
      // Clear any existing timers
      clearTimeout(timeoutId);
      // Set new measurements
      setupMeasurements();
    });

    if (titleRef.current) {
      resizeObserver.observe(titleRef.current);
    }

    // Set up event listeners for image load
    const handleImageLoad = () => {
      clearTimeout(timeoutId);
      // Delay measurement slightly to ensure rendering completes
      timeoutId = setTimeout(updateWidth, 50);
    };

    const logoImg = titleRef.current?.querySelector("img");
    if (logoImg) {
      logoImg.addEventListener("load", handleImageLoad);
    }

    // Watch for window resize as well
    window.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);

    // Clean up
    return () => {
      clearTimeout(timeoutId);
      if (titleRef.current) {
        resizeObserver.unobserve(titleRef.current);
      }
      if (logoImg) {
        logoImg.removeEventListener("load", handleImageLoad);
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
