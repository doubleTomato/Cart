import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';
import { Outlet } from "react-router-dom";
export const MainLayout = () =>{
    return (
        <section>
            <Header/>
            <main className="mainLayout">
                <Outlet/>
            </main>
            <Footer/>
        </section>
    );
} 