export default function GoogleMap({ linkSrc }) {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src={linkSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
