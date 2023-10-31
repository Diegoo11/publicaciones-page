import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Roboto_Slab } from 'next/font/google';
import NextAuth from './providers/NextAuth';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const roboto = Roboto_Slab({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuth>
          <div className="w-full flex flex-col justify-between h-full bg-[#fbfafb] min-h-screen">
            <NavBar />
            <main className="w-full flex flex-col justify-start items-start">
              {children}
            </main>
            <Footer />
          </div>
        </NextAuth>
      </body>
    </html>
  );
}