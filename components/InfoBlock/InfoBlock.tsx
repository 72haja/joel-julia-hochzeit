import React, { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./InfoBlock.module.scss";

export const InfoBlock: FC = () => {
  return (
    <section className={styles.infoBlock}>
      <div className={styles.container}>
        <h1 className={styles.title}>Julia & Joel</h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/PC120042.JPG"
            alt="Julia & Joel"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <div className={styles.content}>
          <p className={styles.infoLine}>
            Wir freuen uns sehr auf diesen besonderen Tag mit Euch
          </p>
          <div className={styles.infoContainer}>
            <p className={styles.infoLine}>Julia und Joel Keck</p>
            <p className={styles.infoLine}>Seebronner Str. 8</p>
            <p className={styles.infoLine}>71149 Bondorf</p>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.telBlock}>
              <p className={styles.infoLine}>Julia: </p>
              <NextLink href="tel:+4915738153848" className={styles.telLink}>
                0157/ 38153848
              </NextLink>
            </div>
            <div className={styles.telBlock}>
              <p className={styles.infoLine}>Joel: </p>
              <NextLink href="tel:+4915756680685" className={styles.telLink}>
                0157/ 56680685
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
