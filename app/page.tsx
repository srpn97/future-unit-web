"use client";

import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";
import { Work, GridLines, WidthProvider, useWidth } from "../components/Index";
// Inner component that uses the width context
const HomeContent = () => {
  const { titleRef } = useWidth();
  const [currentTime, setCurrentTime] = useState({
    india: "",
    sanFrancisco: "",
  });

  // Function to initialize opacity for elements
  useEffect(() => {
    const fadeInElements = () => {
      // Set a timeout to ensure everything has rendered
      setTimeout(() => {
        if (titleRef.current) titleRef.current.style.opacity = "1";

        const descriptionEl = document.querySelector(`.${styles.description}`);
        if (descriptionEl) (descriptionEl as HTMLElement).style.opacity = "1";

        document.querySelectorAll(`.${styles.footer} p`).forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
        });
      }, 500);
    };

    // Initially hide elements
    if (titleRef.current) titleRef.current.style.opacity = "0";

    const descriptionEl = document.querySelector(`.${styles.description}`);
    if (descriptionEl) (descriptionEl as HTMLElement).style.opacity = "0";

    document.querySelectorAll(`.${styles.footer} p`).forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
    });

    // Wait for fonts to load before fading in
    document.fonts.ready.then(fadeInElements);

    // Clean up
    return () => {
      // No cleanup needed for opacity changes
    };
  }, [titleRef]);

  useEffect(() => {
    const formatTimeWithAmPm = (date: Date): string => {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;
      return `${hours}:${minutesStr}${ampm}`;
    };

    const updateTimes = () => {
      const now = new Date();

      const indiaTime = new Date(now.getTime());
      indiaTime.setHours(now.getUTCHours() + 5);
      indiaTime.setMinutes(now.getUTCMinutes() + 30);

      const sfTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
      );

      setCurrentTime({
        india: formatTimeWithAmPm(indiaTime),
        sanFrancisco: formatTimeWithAmPm(sfTime),
      });
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <GridLines />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 ref={titleRef} className={styles.title}>
            <span>FUTURE</span> <span>UNIT</span>
          </h1>
          <p className={styles.description}>
            Future Unit is a creative studio combining industrial design,
            interaction design, and think tank research into one practice. We
            help early-stage startups turn emerging technologies into
            culture-shaping experiences. Big ideas become real and relevant
            today.
          </p>
        </div>
        <footer className={styles.footer}>
          <p>IND {currentTime.india || "--:--"}</p>
          <p>SF {currentTime.sanFrancisco || "--:--"}</p>
        </footer>
      </main>
      <Work />
    </>
  );
};

// Wrapper component that provides the WidthProvider
export default function Home() {
  return (
    <WidthProvider>
      <HomeContent />
    </WidthProvider>
  );
}
