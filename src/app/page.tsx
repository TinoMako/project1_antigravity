import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />

      {/* Footer placeholder */}
      <footer style={{ padding: '2rem', textAlign: 'center', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; 2024 Social Connect. All rights reserved.</p>
      </footer>
    </main>
  );
}
