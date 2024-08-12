import React, { useState } from "react";
import { coursesData } from "../contants";

// Sample course data

const CoursesSection = () => {
  // State to track the selected course for purchase
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to handle course selection
  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  // Function to handle course purchase
  const handlePurchaseCourse = (course) => {
    // Implement purchase logic here
    console.log("Purchased course:", course);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-gray-700 mb-2">
                Instructor: {course.instructor}
              </p>
              <p className="text-gray-700 font-semibold">
                Price: N{course.price}
              </p>
            </div>
            <div>
              <button
                className="bg-secondary hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => handleSelectCourse(course)}
              >
                Select Course
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for course purchase */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Confirm Purchase
            </h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to purchase the course "{selectedCourse.title}" for ${selectedCourse.price}?
            </p>
            <div className="flex justify-between">
              <button
                className="bg-secondary hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                onClick={() => handlePurchaseCourse(selectedCourse)}
              >
                Purchase
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setSelectedCourse(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      
    </div>
  );
};

export default CoursesSection;
