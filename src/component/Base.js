import HeaderComponent from "./HeaderComponent";

const Base = ({children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            <HeaderComponent/>
            {/*  Footer  */}
        </div>
    );
};