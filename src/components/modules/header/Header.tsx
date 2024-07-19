import { FunctionComponent } from "react";
// components
import HeaderPromo from "./components/HeaderPromo";
import Sales from "./components/Sales";
import HeaderMain from "./components/HeaderMain/HeaderMain";

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
        </>
     );
}
 
export default Header;