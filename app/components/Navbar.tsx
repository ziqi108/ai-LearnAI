import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      padding: "15px 40px",
      background: "#fff",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <Link href="/" style={{ fontWeight: "bold" }}>
          AI Learn Hub
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/category/learning">Articles</Link>
      </div>
    </div>
  );
}