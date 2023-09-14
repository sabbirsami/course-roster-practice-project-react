import logo from "../assets/logo.png";
import { GoArrowRight } from "react-icons/go";

function Header() {
    return (
        <div className="container mx-auto">
            <div className="py-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} className="w-16" alt="" />
                    <h1 className="text-3xl font-semibold ps-4">
                        Hero Courses
                    </h1>
                </div>
                <div className="">
                    <button className="btn">
                        Courses <GoArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
