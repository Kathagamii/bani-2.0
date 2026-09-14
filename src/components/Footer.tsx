export default function Footer() {
  return (
    <footer className="border-t border-linen/10 bg-ink py-6">
      <div className="container-edit text-[12px] text-linen/35">
        © {new Date().getFullYear()} Авторские бани · Екатеринбург
      </div>
    </footer>
  );
}
