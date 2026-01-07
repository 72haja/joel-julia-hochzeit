"use client";

import React from "react";
import Image from "next/image";
import styles from "./ParticipationSection.module.scss";

interface ParticipationOption {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonHref?: string;
}

const options: ParticipationOption[] = [
  {
    id: "program",
    title: "Programm",
    description:
      "Du willst ein Programmpunkt vorbereiten? Dann melde dich bei Jakob & Jessica Haag! jj.haag@gmx.de",
    image: "/assets/WhatsApp Image 2026-01-06 at 16.43.14.jpeg",
    buttonText: "Schreibe eine Mail",
    buttonHref:
      "mailto:jj.haag@gmx.de?subject=Hochzeit Julia und Joel&body=Hallo Jessica und Jakob,%0D%0A%0D%0AIch möchte ein Programmpunkt vorbereiten!%0D%0A%0D%0AName: [Dein Name]%0D%0AProgrammpunkt: [Dein Programmpunkt]%0D%0A%0D%0AVielen Dank!",
  },
  {
    id: "champagne",
    title: "Sektempfang",
    description:
      "Du hast Freude am Backen? Dann freuen wir uns über einen Beitrag deiner Wahl zum Sektempfang. Melde dein Wunderwerk ganz einfach über den Button an!",
    image: "/assets/WhatsApp Image 2026-01-06 at 17.23.13.jpeg",
    buttonText: "Wunderwerk anmelden",
    buttonHref: "https://forms.office.com/e/mfH9pQyJSP",
  },
  {
    id: "salad",
    title: "Salatbar",
    description:
      "Du möchtest einen Salat mitbringen? Unsere abwechslungsreiche Salatbar freut sich!",
    image: "/assets/vegetables-752153.jpg",
    buttonText: "Salat anmelden",
    buttonHref: "https://forms.office.com/e/nXu7YpPJt2",
  },
];

export const ParticipationSection: React.FC = () => {
  return (
    <section className={styles.participation} id="participation">
      <div className={styles.container}>
        <h2 className={styles.title}>Du hast Lust dich zu beteiligen?</h2>
        <div className={styles.optionsGrid}>
          {options.map((option) => (
            <div key={option.id} className={styles.option}>
              <div className={styles.imageWrapper}>
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className={styles.image}
                />
              </div>
              <h3 className={styles.optionTitle}>{option.title}</h3>
              <p className={styles.optionDescription}>{option.description}</p>
              {option.buttonHref ? (
                <a href={option.buttonHref} className={styles.button}>
                  {option.buttonText}
                </a>
              ) : (
                <button className={styles.button} onClick={option.buttonAction}>
                  {option.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
