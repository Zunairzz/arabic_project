import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";

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