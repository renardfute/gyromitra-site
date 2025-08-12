export default function Footer() {
  return (
    <footer className="footer-line">
      <div className="container py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gyromitra Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
