"use client";

import React, { useEffect, useState } from "react";
import styles from "./WeddingDetails.module.scss";

interface WeddingDetailsProps {
  lat: number;
  lon: number;
  title: string;
  address: string[];
  iframeDelay?: number;
}

export const WeddingDetails: React.FC<WeddingDetailsProps> = ({
  lat,
  lon,
  title,
  address,
  iframeDelay = 0,
}) => {
  const [showIframe, setShowIframe] = useState(iframeDelay === 0);
  const mapUrl = `https://www.google.com/maps?q=${lat},${lon}&hl=de&z=15&output=embed`;

  useEffect(() => {
    if (iframeDelay > 0) {
      const timer = setTimeout(() => {
        setShowIframe(true);
      }, iframeDelay);

      return () => clearTimeout(timer);
    }
  }, [iframeDelay]);

  return (
    <section className={styles.details}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{title}</h2>
        </div>
        <div className={styles.mapContainer}>
          {!showIframe && <div className={styles.mapSkeleton} />}
          {showIframe && (
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          )}
        </div>
        <div className={styles.footer}>
          <h3 className={styles.footerTitle}>Adresse</h3>
          <div className={styles.addressContainer}>
            {address.map((line, index) => (
              <p key={index} className={styles.addressLine}>
                {line.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
};
