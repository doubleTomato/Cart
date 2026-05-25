import '@/assets/css/main.scss';
import { useEffect, useState } from 'react';
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';
import { Outlet, useLocation } from "react-router-dom";
import { SideBarCart } from './SideBarCart';
export const MainLayout = () => {
    // 사이드바를 열고 닫기 위한 state
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const locationN = useLocation();

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [locationN.pathname]);
    return (
        <section>
            <Header onToggle={() => setIsSideBarOpen(!isSideBarOpen)}/>
            <SideBarCart isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}/>
            <main className="mainLayout">
                <Outlet/>
            </main>
            <Footer/>
        </section>
    );
} 