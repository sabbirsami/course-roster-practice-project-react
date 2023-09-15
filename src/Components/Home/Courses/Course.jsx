import PropTypes from "prop-types";

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired,
};

function Course({ course, handleSelectCourse }) {
    const { name, img, description, price, credit } = course;
    return (
        <div className=" rounded-lg bg-base-100">
            <figure className=" p-3">
                <img src={img} className="w-full" alt="Shoes" />
            </figure>
            <div className="p-3 font-medium">
                <h2 className="text-xl font-semibold pb-2">{name}</h2>
                <p className="text-sm pb-2">{description}</p>
                <div className="pb-2 text-sm flex justify-between items-center">
                    <p>Price: {price}</p>
                    <p>Credit: {credit}</p>
                </div>
                <div className="items-end ">
                    <button
                        onClick={() => handleSelectCourse(course)}
                        className="btn btn-primary w-full"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Course;
