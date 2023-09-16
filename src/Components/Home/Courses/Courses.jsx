import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from "prop-types";

Courses.propTypes = {
    handleSelectCourse: PropTypes.func.isRequired,
    checkCredit: PropTypes.bool,
};

function Courses({ handleSelectCourse, checkCredit }) {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div className="grid grid-cols-3 gap-6">
            {courses.map((course, idx) => (
                <Course
                    key={idx}
                    course={course}
                    handleSelectCourse={handleSelectCourse}
                    checkCredit={checkCredit}
                ></Course>
            ))}
        </div>
    );
}

export default Courses;
