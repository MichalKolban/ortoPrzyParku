export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
  category,
}) => {
  return (
    <div>
      <h2>Szkolenie Ortodoncja przy Parku</h2>

      <p>
        <span> Imię i nazwisko </span>
        <strong>
          {firstName} {lastName}
        </strong>
      </p>
      <p>
        <span>Nazwa szkolenia</span>
        <strong>{category}</strong>
      </p>
      <p>
        <span> Adres Email </span>
        <strong>{email}</strong>
      </p>
      <p>
        <span> Wiadomość </span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};
