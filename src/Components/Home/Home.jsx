import { useState } from "react";
import Cart from "./Cart/Cart";
import Courses from "./Courses/Courses";

const Home = () => {
    const [selectCourses, setSelectCourses] = useState([]);
    const [checkCredit, setCheckCredit] = useState(false);
    console.log(checkCredit);
    const handleSelectCourse = (selectedCourse) => {
        const newSelectedCourse = [...selectCourses, selectedCourse];
        setSelectCourses(newSelectedCourse);
    };
    // const handleCheckCredit=()=>{
    //     setCheckCredit(true)
    // }

    // console.log(selectCourse);
    return (
        <>
            <div className=" bg-base-200 py-16">
                <div className="container mx-auto flex">
                    <div className="md:w-2/3 md:pe-6">
                        <Courses handleSelectCourse={handleSelectCourse} />
                    </div>
                    <div className="md:w-1/3 sticky top-0">
                        <Cart
                            selectCourses={selectCourses}
                            setCheckCredit={setCheckCredit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
