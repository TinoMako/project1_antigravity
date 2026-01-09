export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Social Connect</h1>
        <p style={{ fontSize: "1.25rem", color: "var(--text-muted)" }}>Connecting Social Workers with Communities in Need</p>
      </div>
      
      <div style={{ padding: "2rem", background: "var(--surface)", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <p>Project Setup Complete.</p>
        <p>Current Theme: <strong>Blue / Green</strong></p>
      </div>
    </main>
  );
}
