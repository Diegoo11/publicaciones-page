'use client';

import Image from 'next/image';
import Link from 'next/link';
import tikTok from '@/app/assets/tikTok.png';
import facebook from '@/app/assets/facebook.png';
import ButtonNavBar from './ButtonNavBar';
import NavBarMobile from './NavBarMobile';
import SearchModal from './ui/searchModal';

export default function NavBar() {
  return (
    <header className="flex w-full justify-between px-4 shadow-md sticky top-0 bg-one z-20 backdrop-blur-lg h-[70px] bg-background" id="header">
      <Link href="/" className="flex items-center justify-center">
        <img src="/logo.svg" alt="Home" className="w-14 h-14" />
      </Link>
      <nav id="navBarH" className="lg:flex items-center justify-center gap-4 text-lg hidden py-5">
        <ButtonNavBar>Inicio</ButtonNavBar>
        <ButtonNavBar href="/">Ofertas laborales</ButtonNavBar>
        <SearchModal />
        <ButtonNavBar href="/sobre-nosotros">Sobre nosotros</ButtonNavBar>
        <ButtonNavBar href="/publicaciones">Publicaciones</ButtonNavBar>
        <ButtonNavBar href="/sobre-nosotros" target>
          <Image
            src={tikTok}
            alt="https://www.tiktok.com/@miguelsalinasjuridico"
            width={34}
            height={34}
          />
        </ButtonNavBar>
        <ButtonNavBar href="https://www.facebook.com/migu.3110567" target>
          <Image
            src={facebook}
            alt="facebook"
            width={34}
            height={34}
          />
        </ButtonNavBar>
      </nav>
      <NavBarMobile />
    </header>
  );
}
