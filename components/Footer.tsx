import { Container } from "./Container";
import { ORG } from "@/lib/site";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative mt-8 bg-[#0b0a13] text-white">
      {/* Subtle radial grid background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-20"
        aria-hidden
      />

      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo and socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="logo"
                className="h-14 w-14 rounded-full"
              />
              <div>
                <div className="text-lg font-semibold">{ORG.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href={ORG.socials.facebook} aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={ORG.socials.tiktok} aria-label="TikTok">
                <SiTiktok className="h-5 w-5" />
              </a>
              <a href={ORG.socials.youtube} aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={ORG.socials.whatsapp} aria-label="WhatsApp">
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a href={ORG.socials.instagram} aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xl font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="/privacy">
                  › Privacy Statement
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/terms">
                  › Terms and Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/feedback">
                  › Feedback
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/faq">
                  › FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xl font-semibold">Contact Us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4" /> {ORG.phone}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4" /> {ORG.email}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" /> {ORG.address}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom line */}
      <div className="relative border-t border-white/10">
        <Container className="py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {ORG.name}. {ORG.charityLine}
        </Container>
      </div>
    </footer>
  );
}
