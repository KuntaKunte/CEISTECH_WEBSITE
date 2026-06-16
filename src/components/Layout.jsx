import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-text">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
