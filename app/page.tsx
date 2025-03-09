"use client";

import styles from "./page.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { Work } from "../components/Index";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [currentTime, setCurrentTime] = useState({
    india: "",
    sanFrancisco: "",
  });

  const adjustDescriptionWidth = () => {
    if (titleRef.current && descriptionRef.current) {
      setTimeout(() => {
        const titleWidth = titleRef.current?.offsetWidth || 0;
        descriptionRef.current!.style.width = `${titleWidth}px`;
        descriptionRef.current!.style.maxWidth = `${titleWidth}px`;

        if (titleRef.current) titleRef.current.style.opacity = "1";
        if (descriptionRef.current) descriptionRef.current.style.opacity = "1";

        document.querySelectorAll(`.${styles.footer} p`).forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
        });
      }, 300);
    }
  };

  useEffect(() => {
    let initialLoadComplete = false;

    if (titleRef.current) titleRef.current.style.opacity = "0";
    if (descriptionRef.current) descriptionRef.current.style.opacity = "0";
    document.querySelectorAll(`.${styles.footer} p`).forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
    });

    adjustDescriptionWidth();
    setTimeout(() => {
      initialLoadComplete = true;
    }, 500);

    const handleResize = () => {
      if (titleRef.current && descriptionRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        descriptionRef.current.style.width = `${titleWidth}px`;
        descriptionRef.current.style.maxWidth = `${titleWidth}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    document.fonts.ready.then(() => {
      if (!initialLoadComplete) adjustDescriptionWidth();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

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
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 ref={titleRef} className={styles.title}>
            FUTURE UNIT
          </h1>
          <p ref={descriptionRef} className={styles.description}>
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
}
