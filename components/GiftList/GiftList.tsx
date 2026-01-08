"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import styles from "./GiftList.module.scss";

export const GiftList: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);
  const wishlistUrl = "https://www.wishbob.com/qacsiuxbkr";

  return (
    <section className={styles.giftList} id="giftlist">
      <div className={styles.container}>
        <h2 className={styles.title}>Wunschliste</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            Das beste Geschenk ist eure Anwesenheit bei unserer Hochzeit! Es ist
            uns aber nicht entgangen, dass manch einen von euch trotzdem die
            Frage beschäftigt, welches Geschenk uns glücklich machen würde.
          </p>
          <p className={styles.text}>
            Wenn ihr erfahren möchtet, was wir uns wünschen, könnt ihr einen
            Blick auf unsere virtuelle Wunschliste werfen.
          </p>

          {!iframeError ? (
            <div className={styles.iframeContainer}>
              <iframe
                src={wishlistUrl}
                className={styles.iframe}
                title="Wunschliste"
                onError={() => setIframeError(true)}
                onLoad={(e) => {
                  // Check if iframe loaded successfully
                  try {
                    const iframe = e.target as HTMLIFrameElement;
                    // If we can't access content, it might be blocked
                    if (!iframe.contentWindow) {
                      setIframeError(true);
                    }
                  } catch {
                    // CORS will throw, but iframe might still work
                  }
                }}
              />
              <div className={styles.iframeFallback}>
                <p className={styles.fallbackText}>
                  Falls die Wunschliste nicht angezeigt wird,{" "}
                  <NextLink
                    href={wishlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fallbackLink}
                  >
                    öffne sie in einem neuen Tab
                  </NextLink>
                  .
                </p>
              </div>
            </div>
          ) : (
            <NextLink
              href={wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Zur Wunschliste
            </NextLink>
          )}
        </div>
      </div>
    </section>
  );
};
