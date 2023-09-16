import PropTypes from "prop-types";

Course.propTypes = {
    course: PropTypes.object.isRequired,
    checkCredit: PropTypes.bool,
    handleSelectCourse: PropTypes.func.isRequired,
};

function Course({ course, handleSelectCourse, checkCredit }) {
    const { name, img, description, price, credit } = course;
    return (
        <div className=" rounded-lg bg-base-100">
            <div>
                <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                            Press ESC key or click the button below to close
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
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
                    {checkCredit ? (
                        <button
                            onClick={() =>
                                document
                                    .getElementById("my_modal_5")
                                    .showModal()
                            }
                            className="btn btn-primary w-full"
                        >
                            Select
                        </button>
                    ) : (
                        <button
                            onClick={() => handleSelectCourse(course)}
                            className="btn btn-primary w-full"
                        >
                            Select
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Course;
