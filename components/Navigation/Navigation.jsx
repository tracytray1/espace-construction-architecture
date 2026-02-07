'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './Navigation.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="navigation" id="wrap">
      <Link className="logo-container" href="/home">
        <Image
          src="/logo-espace-construction.svg"
          alt="Atelier ECA"
          width={200}
          height={50}
          className="logo"
          priority
        />
      </Link>

      {/* Bouton hamburger */}
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Liens navigation */}
      <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
        <Link
          href="/home"
          className={`nav-link ${isActive('/home') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Références
        </Link>

        <Link
          href="/a-propos"
          className={`nav-link ${isActive('/a-propos') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          À Propos
        </Link>

        <Link
          href="/contact"
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
