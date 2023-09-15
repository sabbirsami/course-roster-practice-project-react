import { useEffect, useState } from "react";
import Course from "./Course";

function Courses() {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div className="grid grid-cols-3 gap-6">
            {courses.map((course, idx) => (
                <Course key={idx} course={course}></Course>
            ))}
        </div>
    );
}

export default Courses;
