import Footer from "./Footer";

export const Base = ({children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            {/*<HeaderComponent/>*/}
            {children}
            {/*  Footer  */}
            <Footer/>
        </div>
    );
};