"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  const [currentTime, setCurrentTime] = useState({
    ist: "",
    pst: "",
  });

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
              Recent Work -{" "}
              <Link
                href="https://itsalltruffles.com/"
                className={styles.workItemLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.workItem}>Truffles OS (2024)</span>
              </Link>
              ,{" "}
              <Link
                href="https://joingobi.com/"
                className={styles.workItemLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.workItem}>Gobi (2025)</span>
              </Link>
            </p>
          </div>
        </main>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <a
            href="mailto:info@futureunit.design"
            className={styles.contactButton}
          >
            <span className={styles.buttonText}>
              Contact Us{" "}
              <img className={styles.buttonImage} src="/mail_icon.png" alt="" />
            </span>
          </a>

          <div className={styles.times}>
            <p className={styles.time}>IST {currentTime.ist}</p>
            <p className={styles.time}>PST {currentTime.pst}</p>
          </div>
        </div>
      </div>
    </>
  );
}
