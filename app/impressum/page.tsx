import React from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import styles from "./page.module.scss";

export default function ImpressumPage() {
  return (
    <>
      <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Impressum</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Angaben gemäß § 5 TMG</h2>
          <div className={styles.address}>
            <p>Julia und Joel Keck</p>
            <p>Seebronner Str. 8</p>
            <p>71149 Bondorf</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakt</h2>
          <div className={styles.contact}>
            <p>E-Mail: jj.haag@gmx.de</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Haftungsausschluss</h2>
          <h3 className={styles.subsectionTitle}>Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>

          <h3 className={styles.subsectionTitle}>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
        <div className={styles.backLink}>
          <Link href="/" className={styles.link}>
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

