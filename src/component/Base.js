import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";

export  const Base = ({children}) => {
export const Base = ({children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            {/*<HeaderComponent/>*/}
            {children}
            <HeaderComponent/>

            {children}
            {/*  Footer  */}
            <Footer/>
        </div>
    );
};