import React from "react";
import styles from "./WeddingHero.module.scss";
import Image from "next/image";
import NextLink from "next/link";
import { ScrollDownButton } from "./ScrollDownButton";

export const WeddingHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          width={1000}
          height={1000}
          src="/assets/PC120041.JPG"
          alt="Julia & Joel Wedding"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hochzeit</h1>
            <h2 className={styles.names}>Julia & Joel</h2>
            <p className={styles.description}>
              Wir freuen uns sehr auf diesen besonderen Tag mit Euch
              <br />
              und hoffen auf eine Zusage bis zum 01.05.2026.
            </p>
            <p className={styles.registrationLabel}>Anmeldung pro Person:</p>
            <NextLink
              href="https://forms.office.com/e/hN4qu8jPeL"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Anmelden
            </NextLink>
          </div>
          <ScrollDownButton />
        </div>
      </div>
    </section>
  );
};
