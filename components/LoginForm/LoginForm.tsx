"use client";

import React, { FC, useState } from "react";
import { EyeIcon } from "@/components/EyeIcon";
import styles from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Reload the page to show the protected content
        window.location.reload();
      } else {
        setError(data.error || "Falsches Passwort");
      }
    } catch {
      setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Willkommen</h1>
        <p className={styles.subtitle}>Bitte geben Sie das Passwort ein</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              className={styles.input}
              required
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeButton}
              aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
            >
              <EyeIcon show={showPassword} />
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Prüfe..." : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
};
