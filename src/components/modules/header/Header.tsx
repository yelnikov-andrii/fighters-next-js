import { FunctionComponent } from "react";
// components
import HeaderPromo from "./components/HeaderPromo";
import Sales from "./components/Sales";
import HeaderMain from "./components/HeaderMain/HeaderMain";
import { CartSide } from "./components/CartSide";

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <>
        <header className="visible">
            <Sales />
            <HeaderPromo />
        </header>
        <HeaderMain />
        <CartSide />
        </>
     );
}
 
export default Header;