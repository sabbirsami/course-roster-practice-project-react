import PropTypes from "prop-types";

Cart.propTypes = {
    selectCourses: PropTypes.array,
    creditRemaining: PropTypes.number,
    totalUsedCredit: PropTypes.number,
    totalPrice: PropTypes.number,
};

function Cart({ selectCourses, creditRemaining, totalUsedCredit, totalPrice }) {
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
                <p>Total Credit Hour : {totalUsedCredit}</p>
                <hr className="py-3 mt-3" />
                <h1 className="font-semibold text-base pb-3">
                    Total Price : {totalPrice} TAKA
                </h1>
            </div>
        </div>
    );
}

export default Cart;
