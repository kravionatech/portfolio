export default function Footer() {
  return (
    <footer className="bg-[#0B0D12] border-t border-[#1F2430] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-[#F2F4F8]"
          >
            Kraviona<span className="text-[#3A66FF]">.</span>
          </a>
          <p className="text-[#9AA0AE] text-sm mt-2">
            Crafting premium digital experiences.
          </p>
        </div>

        <div className="text-[#9AA0AE] text-sm">
          © {new Date().getFullYear()} Kraviona. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
