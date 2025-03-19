"use client";

import styles from "./Form.module.css";

import { useState } from "react";

export const FormABC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    category: "15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        category: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className="text-xl font-bold mb-4">Formularz kontaktowy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="Imię"
          required
          className={styles.formInput}
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          required
          className={styles.formInput}
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.formInput}
          value={formData.email}
          onChange={handleChange}
        />

        {/* Dropdown - wybór kategorii */}
        <select
          name="category"
          className={styles.formInput}
          value={formData.category}
          onChange={handleChange}
        >
          <option value="15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam">
            15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam
          </option>
          <option value=" 4-5.04.2025 - Mikroimplanty jak zacząć">
            4-5.04.2025 - Mikroimplanty jak zacząć
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Twoja wiadomość"
          required
          className={styles.formInput}
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className={styles.formInput}>
          {status === "loading" ? "Wysyłanie..." : "Wyślij"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-600 mt-2">Wiadomość wysłana!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">Błąd wysyłania.</p>
      )}
    </div>
  );
};
