import Courses from "./Courses/Courses";

const Home = () => {
    return (
        <>
            <div className=" bg-base-200 py-16">
                <div className="container mx-auto ">
                    <div className="md:w-2/3">
                        <Courses />
                    </div>
                    <div className="md:w-1/3">
                        <Courses />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
