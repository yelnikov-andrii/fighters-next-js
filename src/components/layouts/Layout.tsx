import { FunctionComponent } from "react";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}
 
const MainLayout: FunctionComponent<MainLayoutProps> = ({children}) => {
    return ( 
        <>
            <Header />
            {children}
            <Footer />
        </>
     );
}
 
export default MainLayout;