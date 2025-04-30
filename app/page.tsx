"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const [currentTime, setCurrentTime] = useState({
    ist: "",
    pst: "",
  });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1600
  );

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // IST (Indian Standard Time) - UTC+5:30
      const istTime = new Date(now.getTime());
      istTime.setHours(now.getUTCHours() + 5);
      istTime.setMinutes(now.getUTCMinutes() + 30);

      // PST (Pacific Standard Time) - UTC-8:00
      const pstTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
      );

      // Format times
      const istFormatted = formatTime(istTime);
      const pstFormatted = formatTime(pstTime);

      setCurrentTime({
        ist: istFormatted,
        pst: pstFormatted,
      });
    };

    // Format time to match screenshot format
    const formatTime = (date: Date): string => {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // Convert to 12-hour format
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

      return `${hours}:${minutesStr}${ampm}`;
    };

    // Initial call
    updateTime();

    // Set up interval
    const intervalId = setInterval(updateTime, 1000);

    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  // Track window resize for responsive adjustments
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine logo size based on screen width
  const getLogoSize = () => {
    if (windowWidth <= 480) return 70;
    if (windowWidth <= 1023) return 80;
    return 100;
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.svg"
                alt="Future Unit"
                width={100}
                height={100}
                priority
                className={styles.logo}
              />
            </div>

            <p className={styles.description}>
              Future Unit is a creative studio combining industrial design,
              interaction design, and think tank research into one practice. We
              help early-stage startups turn emerging technologies into
              culture-shaping experiences. Big ideas become real and relevant
              today.
            </p>

            <p className={styles.recentWork}>
              Recent Work - <span className={styles.workItem}>Gobi (2025)</span>
              , <span className={styles.workItem}>Truffles OS (2024)</span>
            </p>
          </div>
        </main>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <button className={styles.contactButton}>
            <span className={styles.buttonText}>
              Contact Us{" "}
              <img className={styles.buttonImage} src="/mail_icon.png" alt="" />
            </span>
          </button>

          <div className={styles.times}>
            <p className={styles.time}>IST {currentTime.ist}</p>
            <p className={styles.time}>PST {currentTime.pst}</p>
          </div>
        </div>
      </div>
    </>
  );
}
