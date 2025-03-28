// "use client";

// import styles from "./FormBuyCourse.module.css";

// import { useState } from "react";
// import { ShowInvoiceAnimation } from "../FramerMotion/ShowInvoiceAnimation";

// export const FormBuyCourse = () => {
//   // const [formData, setFormData] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   message: "",
//   //   category: "15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam",
//   // });

//   const [formData, setFormData] = useState({
//     firstNameLastName: "",
//     email: "",
//     category: "wybierz kurs",
//     doctorId: "",
//     message: "",
//     needInvoice: false,
//     companyName: "",
//     taxId: "",
//     address: "",
//     honeytrap: "",
//   });

//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.honeytrap) return; // Ignoruj jeśli bot wypełnił pole honeytrap
//     e.preventDefault();
//     setStatus("loading");

//     const response = await fetch("/api/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setStatus("success");
//       setFormData({
//         firstNameLastName: "",
//         lastName: "",
//         email: "",
//         message: "",
//         category: "",
//         doctorId: "",
//       });
//     } else {
//       setStatus("error");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (formData.honeytrap) return; // Ignoruj jeśli bot wypełnił pole honeytrap
//   //   console.log("Wysyłanie danych:", formData);
//   // };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.insideWrapper}>
//         <h2 className="text-xl font-bold mb-4">Spotkajmy się na szkoleniu</h2>
//         <form onSubmit={handleSubmit} className={styles.formWrapper}>
//           <label>Imię i Nazwisko</label>
//           <input
//             type="text"
//             name="firstNameLastName"
//             placeholder="Imię i Nazwisko"
//             required
//             className="form-input"
//             value={formData.firstNameLastName}
//             onChange={handleChange}
//           />
//           <label>E-mail</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="form-input"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <label>Wybierz kurs</label>
//           <select
//             name="category"
//             className="form-input"
//             value={formData.category}
//             onChange={handleChange}
//           >
//             <option value=""></option>
//             <option value="15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam">
//               15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam
//             </option>
//             <option value="4-5.04.2025 - Mikroimplanty jak zacząć">
//               4-5.04.2025 - Mikroimplanty jak zacząć
//             </option>
//           </select>
//           <label>Numer wykonywania zawodu</label>
//           <input
//             type="number"
//             name="doctorId"
//             placeholder="Numer prawa wykonywania zawodu"
//             required
//             className="form-input"
//             value={formData.doctorId}
//             onChange={handleChange}
//           />

//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="needInvoice"
//               checked={formData.needInvoice}
//               onChange={handleChange}
//             />
//             <label>Potrzebuję faktury</label>
//           </div>
//           <ShowInvoiceAnimation param={formData.needInvoice}>
//             {formData.needInvoice && (
//               <div className={styles.invoiceWrapper}>
//                 <label>Nazwa Firmy</label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   placeholder="Nazwa firmy"
//                   required={formData.needInvoice}
//                   className="form-input"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                 />
//                 <label>NIP</label>
//                 <input
//                   type="text"
//                   name="taxId"
//                   placeholder="NIP"
//                   required={formData.needInvoice}
//                   className="form-input"
//                   value={formData.taxId}
//                   onChange={handleChange}
//                 />
//                 <label>Adres Firmy</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Adres firmy"
//                   required={formData.needInvoice}
//                   className="form-input"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />

//                 <label>Kod pocztowy</label>
//                 <input
//                   type="numer"
//                   name="zipcode"
//                   placeholder="Kod pocztowy"
//                   required={formData.needInvoice}
//                   className="form-input"
//                   value={formData.zipcode}
//                   onChange={handleChange}
//                 />
//                 <label>Miejscowość</label>
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="Miejscowość"
//                   required={formData.needInvoice}
//                   className="form-input"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//           </ShowInvoiceAnimation>
//           <textarea
//             name="message"
//             placeholder="Twoja wiadomość"
//             required
//             className="form-input"
//             value={formData.message}
//             onChange={handleChange}
//           />

//           {/* Pole honeytrap - ukryte dla użytkowników */}
//           <input
//             type="text"
//             name="honeytrap"
//             className="hidden"
//             value={formData.honeytrap}
//             onChange={handleChange}
//           />

//           <button type="submit" className={styles.formBtn}>
//             Przejdź do płatności
//           </button>
//         </form>
//         {status === "success" && (
//           <p className="text-green-600 mt-2">Wiadomość wysłana!</p>
//         )}
//         {status === "error" && (
//           <p className="text-red-600 mt-2">Błąd wysyłania.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// "use client";

// import styles from "./FormBuyCourse.module.css";
// import { useState, useEffect } from "react";
// import { ShowInvoiceAnimation } from "../FramerMotion/ShowInvoiceAnimation";
// import Link from "next/link";

// export const FormBuyCourse = () => {
//   const [formData, setFormData] = useState({
//     firstNameLastName: "",
//     email: "",
//     category: "wybierz kurs",
//     doctorId: "",
//     message: "",
//     needInvoice: false,
//     companyName: "",
//     taxId: "",
//     address: "",
//     honeytrap: "",
//     acceptTerms: false,
//   });

//   const [status, setStatus] = useState("idle");
//   const [showTooltip, setShowTooltip] = useState(false);

//   useEffect(() => {
//     if (showTooltip) {
//       const timer = setTimeout(() => setShowTooltip(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showTooltip]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.acceptTerms) {
//       setShowTooltip(true);
//       return;
//     }

//     console.log("wszystko sie udalo teraz stripe");
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     if (name === "acceptTerms") {
//       setShowTooltip(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
//       <h2
//         style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
//       >
//         Spotkajmy się na szkoleniu
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//       >
//         <label>Imię i Nazwisko</label>
//         <input
//           type="text"
//           name="firstNameLastName"
//           placeholder="Imię i Nazwisko"
//           required
//           value={formData.firstNameLastName}
//           onChange={handleChange}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />

//         <label>E-mail</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />

//         <label>Wybierz kurs</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         >
//           <option value=""></option>
//           <option value="15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam">
//             15.03.2025 - Alignery termoformowalne i drukowane - zrób to sam
//           </option>
//           <option value="4-5.04.2025 - Mikroimplanty jak zacząć">
//             4-5.04.2025 - Mikroimplanty jak zacząć
//           </option>
//         </select>

//         <label>Numer wykonywania zawodu</label>
//         <input
//           type="number"
//           name="doctorId"
//           placeholder="Numer prawa wykonywania zawodu"
//           required
//           value={formData.doctorId}
//           onChange={handleChange}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />

//         <div
//           style={{
//             position: "relative",
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           <input
//             type="checkbox"
//             name="acceptTerms"
//             checked={formData.acceptTerms}
//             onChange={handleChange}
//           />
//           <label>Akceptuję regulamin</label>
//           {showTooltip && (
//             <span
//               style={{
//                 position: "absolute",
//                 top: "-20px",
//                 left: "0",
//                 backgroundColor: "red",
//                 color: "white",
//                 fontSize: "12px",
//                 padding: "4px 8px",
//                 borderRadius: "4px",
//               }}
//             >
//               Zaakceptuj regulamin
//             </span>
//           )}
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             backgroundColor: "blue",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Przejdź do płatności
//         </button>
//       </form>
//       {status === "success" && (
//         <p style={{ color: "green", marginTop: "10px" }}>Wiadomość wysłana!</p>
//       )}
//       {status === "error" && (
//         <p style={{ color: "red", marginTop: "10px" }}>Błąd wysyłania.</p>
//       )}
//     </div>
//   );
// };

"use client";

import styles from "./FormBuyCourse.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ShowInvoiceAnimation } from "../FramerMotion/ShowInvoiceAnimation";

export const FormBuyCourse = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstNameLastName: "",
    email: "",
    category: "wybierz kurs",
    doctorId: "",
    message: "",
    needInvoice: false,
    companyName: "",
    taxId: "",
    address: "",
    honeytrap: "",
    acceptTerms: false,
  });

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.acceptTerms ||
      !formData.firstNameLastName ||
      !formData.email ||
      !formData.doctorId ||
      formData.category === "wybierz kurs"
    ) {
      setShowTooltip(true);
      return;
    }

    console.log("wszystko sie udalo teraz stripe");
    router.push("/after");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "acceptTerms") {
      setShowTooltip(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Spotkajmy się na szkoleniu
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>Imię i Nazwisko</label>
        <input
          type="text"
          name="firstNameLastName"
          placeholder="Imię i Nazwisko"
          required
          value={formData.firstNameLastName}
          onChange={handleChange}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <label>Wybierz kurs</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="wybierz kurs"></option>
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
          value={formData.doctorId}
          onChange={handleChange}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
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
        <ShowInvoiceAnimation param={formData.needInvoice}>
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
        </ShowInvoiceAnimation>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          <label>Akceptuję regulamin</label>
          {showTooltip && (
            <span
              style={{
                position: "absolute",
                top: "-20px",
                left: "0",
                backgroundColor: "red",
                color: "white",
                fontSize: "12px",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Zaakceptuj regulamin i wypełnij wszystkie pola
            </span>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Przejdź do płatności
        </button>
      </form>
    </div>
  );
};
