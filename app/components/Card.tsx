export default function Card({ title, desc, link }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
    }}>
      <h3>{title}</h3>
      <p>{desc}</p>

      Go</a>
    </div>
  );
}