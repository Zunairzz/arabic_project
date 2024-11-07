import {Base} from "../component/Base";
import {HomeComponentOne} from "../component/HomeComponentOne";

export function Home() {
    return (
        <Base>
            <h1 className="text-center">الصفحة الرئيسية</h1>
            <HomeComponentOne/>
        </Base>
    )
}