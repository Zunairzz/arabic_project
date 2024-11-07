import Footer from "./Footer";
import HeaderComponent from "./HeaderComponent";

export const Base = ({title = "Welcome to our website", children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            <HeaderComponent/>
            {children}
            {/*  Footer  */}
            <Footer/>
        </div>
    );
};