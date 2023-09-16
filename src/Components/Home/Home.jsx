import { useState } from "react";
import Cart from "./Cart/Cart";
import Courses from "./Courses/Courses";
import { ImWarning } from "react-icons/im";

const Home = () => {
    const [selectCourses, setSelectCourses] = useState([]);
    const [checkCredit, setCheckCredit] = useState(false);
    console.log(checkCredit);
    const handleSelectCourse = (selectedCourse) => {
        const isExist = selectCourses.find(
            (item) => item.id === selectedCourse.id
        );
        if (isExist) {
            document.getElementById("my_modal_3").showModal();
        } else {
            const newSelectedCourse = [...selectCourses, selectedCourse];
            setSelectCourses(newSelectedCourse);
        }
    };
    const handleCheckCredit = () => {
        setCheckCredit(true);
    };

    // console.log(selectCourse);
    return (
        <>
            {/* ERROR MODAL  */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <div className="py-14 text-center">
                        <h2 className="text-6xl ">
                            <ImWarning className="w-full text-red-500" />
                        </h2>
                        <p className="text-red-500 py-6">
                            {" "}
                            You already select this course
                        </p>
                    </div>
                </div>
            </dialog>
            <div className=" bg-base-200 py-16">
                <div className="container mx-auto flex">
                    <div className="md:w-2/3 md:pe-6">
                        <Courses
                            handleSelectCourse={handleSelectCourse}
                            checkCredit={checkCredit}
                        />
                    </div>
                    <div className="md:w-1/3 sticky top-0">
                        <Cart
                            selectCourses={selectCourses}
                            handleCheckCredit={handleCheckCredit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
