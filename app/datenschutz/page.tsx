import React from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import styles from "./page.module.scss";

export default function DatenschutzPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Datenschutzerklärung</h1>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className={styles.subsectionTitle}>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className={styles.address}>
              <p>Julia und Joel Keck</p>
              <p>Seebronner Str. 8</p>
              <p>71149 Bondorf</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className={styles.subsectionTitle}>Cookies</h3>
            <p>
              Diese Website verwendet Cookies, um die Funktionalität zu
              gewährleisten. Cookies sind kleine Textdateien, die auf Ihrem
              Endgerät gespeichert werden.
            </p>
            <p>
              <strong>Authentifizierungs-Cookies:</strong> Wir verwenden
              Cookies, um Ihren Anmeldestatus zu speichern. Wenn Sie sich mit
              dem Passwort anmelden, wird ein Authentifizierungs-Cookie gesetzt,
              damit Sie während Ihres Besuchs angemeldet bleiben. Dieses Cookie
              ist erforderlich für die Nutzung der geschützten Bereiche dieser
              Website.
            </p>
            <p>
              <strong>Wichtig:</strong> Wenn Sie Cookies nicht akzeptieren,
              können wir Ihr Passwort nicht in einem Cookie speichern. In diesem
              Fall müssen Sie sich bei jedem Besuch der Website erneut anmelden.
            </p>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit in den
              Cookie-Einstellungen anpassen.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Externe Links und Dienste
            </h2>
            <h3 className={styles.subsectionTitle}>Microsoft Forms</h3>
            <p>
              Diese Website enthält Links zu Microsoft Forms, einem externen
              Dienst von Microsoft Corporation. Wenn Sie auf diese Links
              klicken, werden Sie zu den Microsoft Forms-Seiten weitergeleitet.
            </p>
            <p>
              Bitte beachten Sie, dass beim Besuch von Microsoft Forms die
              Datenschutzbestimmungen von Microsoft gelten. Wir haben keinen
              Einfluss auf die Datenverarbeitung durch Microsoft. Weitere
              Informationen finden Sie in der{" "}
              <a
                href="https://privacy.microsoft.com/de-de/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Datenschutzerklärung von Microsoft
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Hosting</h2>
            <h3 className={styles.subsectionTitle}>Vercel</h3>
            <p>
              Diese Website wird auf den Servern von Vercel Inc. gehostet.
              Vercel ist ein Hosting-Anbieter mit Sitz in den USA.
            </p>
            <p>
              Beim Aufruf dieser Website werden automatisch Verbindungsdaten
              (z.B. IP-Adresse, Datum und Uhrzeit des Zugriffs) an die Server
              von Vercel übermittelt. Diese Daten werden zur Bereitstellung und
              Sicherstellung der Funktionalität der Website benötigt.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Vercel finden
              Sie in der{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul>
              <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Widerspruchsrecht gegen die Datenverarbeitung</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
            </p>
            <div className={styles.contact}>
              <p>E-Mail: jj.haag@gmx.de</p>
            </div>
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
