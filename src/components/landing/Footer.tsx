import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '@/assets/unifungi-logo.png';

interface FooterProps {
  copyrightText: string;
  legalLinks: { text: string; url: string }[];
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
}

export const Footer = ({
  copyrightText,
  legalLinks,
  instagramUrl,
  facebookUrl,
  youtubeUrl
}: FooterProps) => {
  return (
    <footer className="bg-earth text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo y redes */}
          <div className="text-center mb-8">
            <img src={logo} alt="Unifungi" className="h-12 w-auto mx-auto mb-4 opacity-90" />
            
            <div className="flex justify-center gap-4 mb-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces legales */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-cream/60 border-t border-cream/10 pt-6">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
