import Link from "next/link";
import { CERTIFICATIONS, FOOTER_LINKS, SOCIALS } from "../_constants/Constants";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.8, ease: "easeOut" },
  }),
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // ✅ Transparent background — SplineElement ke blobs dikhenge through
    <footer className="relative bg-(--primary-dark) border-white/10 border-t overflow-hidden text-(--color-offWhite)">
      <div className="relative mx-auto px-6 pt-16 pb-8 max-w-7xl">
        {/* TOP SECTION */}
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo.svg"
                alt="Biafo Logo"
                width={130}
                height={130}
              />
            </div>

            {/* <p className="mb-6 max-w-xs text-white/50 text-sm leading-relaxed">
              Moving healthcare from reactive practice to predictive precision
              through AI, blockchain, and digital twins.
            </p> */}

            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex justify-center items-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] border border-white/10 hover:border-white/25 rounded-full w-9 h-9 text-white/60 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid lg:grid-cols-4 grid-cols-1 gap-45">
            {/* {Object.entries(FOOTER_LINKS).map(([category, links], colIdx) => (
              <div key={category}>
                <ul className="flex gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-(--color-offWhite) text-(--color-gray) text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
            <div className="lg:w-40 w-full">
              <h3 className="mb-3 font-bold text-white/40 text-xs uppercase tracking-widest">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutus">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">About</p>
                  </Link>
                </li>
                <li>
                  <Link href="/#platform-stack">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Platform</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Contact</p>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="lg:w-40 w-full">
              <h3 className="mb-3 font-bold text-white/40 text-xs uppercase tracking-widest">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">AI Diagnostics</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Digital Twins</p>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Virtual Trials</p>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="lg:w-40 w-full">
              <h3 className="mb-3 font-bold text-white/40 text-xs uppercase tracking-widest">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Security</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Compliance</p>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="lg:w-40 w-full">
              <h3 className="mb-3 font-bold text-white/40 text-xs uppercase tracking-widest">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p className="text-sm text-white/30 hover:text-white transition-all duration-300 cursor-pointer">Terms of Service</p>
                  </Link>
                </li>


              </ul>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        {/* <div className="bg-linear-to-r from-transparent via-white/15 to-transparent mb-8 w-full h-px" /> */}

        {/* CERTIFICATIONS */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.label}
              className="flex items-center gap-2 bg-[rgba(255,255,255,0.06)] px-4 py-2 border border-white/10 rounded-full"
            >
              <span className="font-medium text-white/50 text-xs">
                {cert.label}
              </span>
            </div>
          ))}
        </div> */}

        {/* DIVIDER */}
        <div className="bg-linear-to-r from-transparent via-white/10 to-transparent mb-6 w-full h-px" />

        {/* BOTTOM */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 text-white/30 text-xs">
          <p>© {currentYear} Biafo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
