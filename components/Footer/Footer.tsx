"use client";

import React, { useState, useMemo } from "react";
import styles from "./Footer.module.scss";

// Helper function to get initial consent state
const getInitialConsent = (): boolean | null => {
  if (typeof window === "undefined") {
    return null; // SSR: return null, will be checked on client
  }
  const consent = localStorage.getItem("cookieConsent");
  return consent === null ? null : consent === "true";
};

export interface FooterProps {
  showNames?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showNames = true }) => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  // Initialize with localStorage check immediately (synchronously)
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(() =>
    getInitialConsent()
  );

  // Only show banner if we're on client and consent is actually null
  const shouldShowBanner = useMemo(() => {
    return typeof window !== "undefined" && cookieConsent === null;
  }, [cookieConsent]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "true");
    setCookieConsent(true);
    setShowCookieSettings(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "false");
    setCookieConsent(false);
    setShowCookieSettings(false);
  };

  const handleSavePreferences = () => {
    // In a real app, you'd save individual preferences here
    localStorage.setItem("cookieConsent", "true");
    setCookieConsent(true);
    setShowCookieSettings(false);
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            {showNames && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Hochzeit Julia & Joel</h3>
                <p className={styles.sectionText}>
                  Wir freuen uns auf einen unvergesslichen Tag mit euch!
                </p>
              </div>
            )}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Rechtliches</h3>
              <div className={styles.links}>
                <button
                  onClick={() => setShowCookieSettings(true)}
                  className={styles.link}
                >
                  Cookie-Einstellungen
                </button>
                <a href="/datenschutz" className={styles.link}>
                  Datenschutz
                </a>
                <a href="/impressum" className={styles.link}>
                  Impressum
                </a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} Julia & Joel. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {shouldShowBanner && (
        <div className={styles.cookieBanner}>
          <div className={styles.cookieBannerContent}>
            <div className={styles.cookieBannerText}>
              <p>
                Wir verwenden Cookies, um Ihren Anmeldestatus zu speichern. Wenn
                Sie Cookies nicht akzeptieren, können wir Ihr Passwort nicht
                speichern und Sie müssen sich bei jedem Besuch erneut anmelden.
              </p>
            </div>
            <div className={styles.cookieBannerActions}>
              <button onClick={handleAcceptAll} className={styles.acceptButton}>
                Alle akzeptieren
              </button>
              <button
                onClick={() => setShowCookieSettings(true)}
                className={styles.settingsButton}
              >
                Einstellungen
              </button>
              <button onClick={handleRejectAll} className={styles.rejectButton}>
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showCookieSettings && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowCookieSettings(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Cookie-Einstellungen</h2>
              <button
                className={styles.modalClose}
                onClick={() => setShowCookieSettings(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalContent}>
              <p className={styles.modalDescription}>
                Sie können Ihre Cookie-Präferenzen jederzeit anpassen. Bitte
                wählen Sie aus, welche Cookies Sie zulassen möchten.
              </p>
              <div className={styles.cookieCategory}>
                <div className={styles.cookieCategoryHeader}>
                  <h3 className={styles.cookieCategoryTitle}>
                    Notwendige Cookies
                  </h3>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className={styles.checkbox}
                  />
                </div>
                <p className={styles.cookieCategoryDescription}>
                  Diese Cookies sind für die grundlegende Funktionalität der
                  Website erforderlich, einschließlich der Speicherung Ihres
                  Anmeldestatus (Passwort). Ohne diese Cookies können Sie sich
                  nicht anmelden und die Website nicht nutzen.
                </p>
              </div>
              <div className={styles.cookieCategory}>
                <div className={styles.cookieCategoryHeader}>
                  <h3 className={styles.cookieCategoryTitle}>
                    Funktionale Cookies
                  </h3>
                  <input
                    type="checkbox"
                    defaultChecked={cookieConsent === true}
                    className={styles.checkbox}
                  />
                </div>
                <p className={styles.cookieCategoryDescription}>
                  Diese Cookies werden für die Anmeldung benötigt. Wenn Sie
                  diese Cookies ablehnen, können wir Ihr Passwort nicht
                  speichern und Sie müssen sich bei jedem Besuch erneut
                  anmelden.
                </p>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button
                onClick={handleSavePreferences}
                className={styles.saveButton}
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
