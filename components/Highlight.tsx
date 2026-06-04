export function Highlight({ children }: any) {
  return (
    <div
      style={{
        background: "#e0f2fe",
        padding: "15px",
        borderRadius: "10px",
        margin: "20px 0",
      }}
    >
      {children}
    </div>
  );
}