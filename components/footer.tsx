import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Info } from "lucide-react"
import { FaTiktok, FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f5fe] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="relative w-36 mb-4 aspect-[182/90]">
            <Image
              src="/logots.svg"
              alt="Lebara Travel eSIM logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-[16px] text-[#231F20] font-[400] leading-relaxed">
            Stay connected anywhere with our revolutionary travel eSIM solution.
            One eSIM, endless journeys.
          </p>
        </div>

        <div>
          <h3 className="footer-support-heading font-semibold text-[16px] text-[#231F20] mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Info size={16} className="text-[#242FE3]" />
              <Link href="/support" className="footer-support-text hover:text-secondary transition-colors">
                Help and Support
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#242FE3]" />
              <a href="mailto:support@email.com" className="footer-support-text hover:text-secondary transition-colors">
                support@email.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#242FE3]" />
              <a href="tel:+7899078990" className="footer-support-text hover:text-secondary transition-colors">
                78990 78990
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="footer-support-heading font-semibold text-[16px] text-[#231F20] mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="footer-support-text hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="footer-support-text hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        {/* <div>
          <h3 className="font-semibold text-foreground mb-3">Follow us</h3>
          <div className="flex items-center gap-4 text-primary text-lg">
            <Link href="#"><FaTiktok /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaXTwitter /></Link>
            <Link href="#"><FaYoutube /></Link>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="text-center font-[500] footer-copyright py-4 pb-10">
        2025 © Lebara
      </div>
    </footer>
  )
}
