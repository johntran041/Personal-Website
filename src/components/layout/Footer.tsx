import meta from "@/data/meta";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-5xl mx-auto px-6 py-6 border-t border-[var(--border)]">
      <p className="font-inter text-sm text-text-muted">
        © {year} {meta.fullName}
      </p>
    </footer>
  );
}
