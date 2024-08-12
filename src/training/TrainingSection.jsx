import React, { useState } from "react";
import { trainingSessions } from "../contants";

const TrainingSection = () => {
  // Sample training session data

  // State to track selected training session
  const [selectedSession, setSelectedSession] = useState(null);

  // Function to handle selection of a training session
  const handleSelectSession = (session) => {
    setSelectedSession(session);
  };

  // Function to handle registration for a training session
  const handleRegister = (session) => {
    // Implement registration logic here
    console.log("Registered for session:", session);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
        Training Sessions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {trainingSessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {session.title}
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Instructor:</strong> {session.instructor}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong> {session.date}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Time:</strong> {session.time}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> {session.location}
              </p>
              <p className="text-gray-700 mb-2">{session.description}</p>
            </div>
            <div>
              <button
                className="bg-secondary hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                onClick={() => handleSelectSession(session)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for registration */}
      {selectedSession && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Confirm Registration
            </h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to register for the session "{selectedSession.title}" with instructor {selectedSession.instructor} on {selectedSession.date} from {selectedSession.time}?
            </p>
            <div className="flex justify-between">
              <button
                className="bg-secondary hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                onClick={() => handleRegister(selectedSession)}
              >
                Register
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setSelectedSession(null)}
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

export default TrainingSection;
