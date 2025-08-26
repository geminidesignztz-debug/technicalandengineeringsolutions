import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInit from '@/components/AOSInit';

export const metadata = {
  title: 'Technical & Engineering Solutions',
  description: 'Professional engineering services including infrared thermography, power quality analysis, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <AOSInit />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
