import { useState } from "react";

export const FormABC = () => {
  const [formData, setFormData] = useState({
    name: "test",
    email: "majkeleight@gmail.com",
    message: "asdasd",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email wysłany!");
      setFormData({
        name: "",
        email: "majkeleight@gmail.com",
        message: "asdads",
      });
    } else {
      alert("Błąd wysyłania e-maila.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Imię"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Wiadomość"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Wyślij</button>
    </form>
  );
};
