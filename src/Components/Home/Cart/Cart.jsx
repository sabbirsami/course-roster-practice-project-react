import PropTypes from "prop-types";

Cart.propTypes = {
    selectCourses: PropTypes.array,
    handleCheckCredit: PropTypes.func,
};

function Cart({ selectCourses, handleCheckCredit }) {
    const totalCredit = selectCourses.reduce(
        (accumulator, currentValue) => accumulator + currentValue?.credit,
        0
    );
    const totalPrice = selectCourses.reduce(
        (accumulator, currentValue) => accumulator + currentValue?.price,
        0
    );
    const creditRemaining = 20 - totalCredit;
    if (totalCredit > 20) {
        handleCheckCredit();
    }

    return (
        <div>
            <div className="bg-base-100 py-6 rounded-lg p-4">
                <h1 className="font-semibold text-lg">
                    Credit Hour Remaining {creditRemaining} hr
                </h1>
                <hr className="py-3 mt-3" />
                <h1 className="font-semibold text-lg pb-3">Course Name</h1>

                <ol className="list-decimal list-inside ">
                    {selectCourses.map((selectCourse, idx) => (
                        <li key={idx}>{selectCourse.name}</li>
                    ))}
                </ol>
                <hr className="py-3 mt-3" />
                <p>Total Credit Hour : {totalCredit}</p>
                <hr className="py-3 mt-3" />
                <h1 className="font-semibold text-base pb-3">
                    Total Price : {totalPrice} TAKA
                </h1>
            </div>
        </div>
    );
}

export default Cart;
