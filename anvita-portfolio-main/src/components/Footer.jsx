export default function Footer() {
  return (
    <footer className="relative border-t border-bloom-brown/10 px-6 py-10 dark:border-night-mist/10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-sage-forest/50 dark:text-night-mist/40">
          © {new Date().getFullYear()} Anvita Dey. Grown with care.
        </p>
        <p className="font-mono text-xs text-sage-forest/50 dark:text-night-mist/40">
          Built in React, tended by hand.
        </p>
      </div>
    </footer>
  );
}
