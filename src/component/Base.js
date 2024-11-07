import HeaderComponent from "./HeaderComponent";

export const Base = ({children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            <HeaderComponent/>

            {children}
            {/*  Footer  */}
        </div>
    );
};