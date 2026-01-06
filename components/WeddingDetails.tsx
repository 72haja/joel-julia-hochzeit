import React from "react";
import styles from "./WeddingDetails.module.scss";

interface WeddingDetailsProps {
  lat: number;
  lon: number;
  title: string;
  address: string[];
}

export const WeddingDetails: React.FC<WeddingDetailsProps> = ({
  lat,
  lon,
  title,
  address,
}) => {
  // Google Maps embed URL using coordinates
  const mapUrl = `https://www.google.com/maps?q=${lat},${lon}&hl=de&z=15&output=embed`;

  return (
    <section className={styles.details}>
      <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{title}</h2>
      </div>
      <div className={styles.mapContainer}>
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
