"use client";

import styles from "./page.module.scss";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const [currentTime, setCurrentTime] = useState({
    india: "",
    sanFrancisco: "",
  });

  // Function to match description width with title width and show elements
  const adjustDescriptionWidth = () => {
    if (titleRef.current && descriptionRef.current) {
      // Add a small delay to ensure fonts are loaded and rendered correctly
      setTimeout(() => {
        const titleWidth = titleRef.current?.offsetWidth || 0;
        descriptionRef.current!.style.width = `${titleWidth}px`;
        descriptionRef.current!.style.maxWidth = `${titleWidth}px`;

        // Show elements after initial adjustment
        if (titleRef.current) titleRef.current.style.opacity = "1";
        if (descriptionRef.current) descriptionRef.current.style.opacity = "1";

        // Show time displays
        const timeElements = document.querySelectorAll(`.${styles.footer} p`);
        timeElements.forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
        });
      }, 300);
    }
  };

  // Handle description width adjustment
  useEffect(() => {
    // Track whether initial load has completed
    let initialLoadComplete = false;

    // Set initial opacity to 0 (backup in case CSS doesn't apply immediately)
    if (titleRef.current) titleRef.current.style.opacity = "0";
    if (descriptionRef.current) descriptionRef.current.style.opacity = "0";

    const timeElements = document.querySelectorAll(`.${styles.footer} p`);
    timeElements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
    });

    // Initial adjustment
    adjustDescriptionWidth();

    // Mark initial load as complete after first adjustment
    setTimeout(() => {
      initialLoadComplete = true;
    }, 500);

    // Adjust on window resize without hiding elements
    const handleResize = () => {
      // Only adjust the width, don't hide elements after initial load
      if (titleRef.current && descriptionRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        descriptionRef.current.style.width = `${titleWidth}px`;
        descriptionRef.current.style.maxWidth = `${titleWidth}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Adjust when fonts are loaded to ensure accurate measurements
    document.fonts.ready.then(() => {
      if (!initialLoadComplete) {
        adjustDescriptionWidth();
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Initialize with placeholder values to avoid hydration issues
  useEffect(() => {
    // Function to format time as HH:MMAM/PM
    const formatTimeWithAmPm = (date: Date): string => {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      // Convert hours to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      // Add leading zero to minutes if needed
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      return `${hours}:${minutesStr}${ampm}`;
    };

    // Function to update times
    const updateTimes = () => {
      // Current UTC time
      const now = new Date();

      // India Standard Time (UTC+5:30)
      const indiaTime = new Date(now.getTime());
      indiaTime.setHours(now.getUTCHours() + 5);
      indiaTime.setMinutes(now.getUTCMinutes() + 30);

      // San Francisco Time (Pacific Time - handles daylight saving automatically)
      const sfTime = new Date(
        now.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
        })
      );

      setCurrentTime({
        india: formatTimeWithAmPm(indiaTime),
        sanFrancisco: formatTimeWithAmPm(sfTime),
      });
    };

    // Update times immediately and set interval
    updateTimes();
    const intervalId = setInterval(updateTimes, 60000); // Update every minute

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          FUTURE UNIT
        </h1>
        <p ref={descriptionRef} className={styles.description}>
          Future Unit is a creative studio combining industrial design,
          interaction design, and think tank research into one practice. We help
          early-stage startups turn emerging technologies into culture-shaping
          experiences. Big ideas become real and relevant today.
        </p>
      </div>
      <footer className={styles.footer}>
        <p>IND {currentTime.india || "--:--"}</p>
        <p>SF {currentTime.sanFrancisco || "--:--"}</p>
      </footer>
    </main>
  );
}
