import React, { useState } from "react";

const Dashboards = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Render content based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <HomeContent />;
      case "analytics":
        return <AnalyticsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <ul className="mt-6">
            <li className="py-2 hover:bg-gray-700">
              <button onClick={() => handlePageChange("home")} className="block">Home</button>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <button onClick={() => handlePageChange("analytics")} className="block">Analytics</button>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <button onClick={() => handlePageChange("settings")} className="block">Settings</button>
            </li>
            {/* Add more sidebar links */}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow bg-gray-200 p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h1>
        {/* Render content based on the current page */}
        {renderContent()}
      </main>
    </div>
  );
};

// Separate components for different pages
const HomeContent = () => {
  return <div>Home Page Content</div>;
};

const AnalyticsContent = () => {
  return <div>Analytics Page Content</div>;
};

const SettingsContent = () => {
  return <div>Settings Page Content</div>;
};

export default Dashboards;
