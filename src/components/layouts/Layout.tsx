import { FunctionComponent } from "react";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import Features from "../elements/features-slider/Features";
import BackBlock from "../elements/BackBlock";
import MarqueeSignUp from "../elements/marqueeSignUp/MarqueeSignUp";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Features />
            <MarqueeSignUp />
            <div className="py-8">
                <BackBlock />
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;