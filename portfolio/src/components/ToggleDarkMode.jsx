import React, { useState, useEffect } from "react";

function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Initialize theme on mount
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]); // Only runs on `darkMode` state change

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="d-flex justify-content-end">
      <button onClick={toggleDarkMode} className="btn btn-dark mt-3">
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default ToggleDarkMode;
