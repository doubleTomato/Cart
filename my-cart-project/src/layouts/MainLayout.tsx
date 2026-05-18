import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';
import { Outlet } from "react-router-dom";
import { SideBarCart } from './SideBarCart';
export const MainLayout = () =>{
    return (
        <section>
            <Header/>
            <SideBarCart/>
            <main className="mainLayout">
                <Outlet/>
            </main>
            <Footer/>
        </section>
    );
} 