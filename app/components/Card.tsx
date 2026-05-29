export default function Card({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
    }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} style={{ color: "#0070f3", textDecoration: "none" }}>
        Go →
      </a>
    </div>
  );
}