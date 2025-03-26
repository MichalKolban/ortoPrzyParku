"use client";

import styles from "./FormBuyCourse.module.css";

import { useState } from "react";

export const FormBuyCourse = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    category: "15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam",
  });

  const [status, setStatus] = useState("idle");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeytrap) return; // Ignoruj jeśli bot wypełnił pole honeytrap
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
        firstNameLastName: "",
        lastName: "",
        email: "",
        message: "",
        category: "",
        doctorId: "",
      });
    } else {
      setStatus("error");
    }
  };

  // const [formData, setFormData] = useState({
  //   firstNameLastName: "",
  //   email: "",
  //   category: "15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam",
  //   doctorId: "",
  //   message: "",
  //   needInvoice: false,
  //   companyName: "",
  //   taxId: "",
  //   address: "",
  //   honeytrap: "",
  // });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.honeytrap) return; // Ignoruj jeśli bot wypełnił pole honeytrap
  //   console.log("Wysyłanie danych:", formData);
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.insideWrapper}>
        <h2 className="text-xl font-bold mb-4">Spotkajmy się na szkoleniu</h2>
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
          <label>Imię i Nazwisko</label>
          <input
            type="text"
            name="firstNameLastName"
            placeholder="Imię i Nazwisko"
            required
            className="form-input"
            value={formData.firstNameLastName}
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Wybierz kurs</label>
          <select
            name="category"
            className="form-input"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam">
              15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam
            </option>
            <option value="4-5.04.2025 - Mikroimplanty jak zacząć">
              4-5.04.2025 - Mikroimplanty jak zacząć
            </option>
          </select>
          <label>Numer wykonywania zawodu</label>
          <input
            type="number"
            name="doctorId"
            placeholder="Numer prawa wykonywania zawodu"
            required
            className="form-input"
            value={formData.doctorId}
            onChange={handleChange}
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="needInvoice"
              checked={formData.needInvoice}
              onChange={handleChange}
            />
            <label>Potrzebuję faktury</label>
          </div>

          {formData.needInvoice && (
            <div className={styles.invoiceWrapper}>
              <label>Nazwa Firmy</label>
              <input
                type="text"
                name="companyName"
                placeholder="Nazwa firmy"
                required={formData.needInvoice}
                className="form-input"
                value={formData.companyName}
                onChange={handleChange}
              />
              <label>NIP</label>
              <input
                type="text"
                name="taxId"
                placeholder="NIP"
                required={formData.needInvoice}
                className="form-input"
                value={formData.taxId}
                onChange={handleChange}
              />
              <label>Adres Firmy</label>
              <input
                type="text"
                name="address"
                placeholder="Adres firmy"
                required={formData.needInvoice}
                className="form-input"
                value={formData.address}
                onChange={handleChange}
              />

              <label>Kod pocztowy</label>
              <input
                type="numer"
                name="zipcode"
                placeholder="Kod pocztowy"
                required={formData.needInvoice}
                className="form-input"
                value={formData.zipcode}
                onChange={handleChange}
              />
              <label>Miejscowość</label>
              <input
                type="text"
                name="city"
                placeholder="Miejscowość"
                required={formData.needInvoice}
                className="form-input"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          )}

          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            required
            className="form-input"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Pole honeytrap - ukryte dla użytkowników */}
          <input
            type="text"
            name="honeytrap"
            className="hidden"
            value={formData.honeytrap}
            onChange={handleChange}
          />

          <button type="submit" className={styles.formBtn}>
            Wyślij
          </button>
        </form>
        {status === "success" && (
          <p className="text-green-600 mt-2">Wiadomość wysłana!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Błąd wysyłania.</p>
        )}
      </div>
    </div>
  );
};
