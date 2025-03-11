"use client";

const ChangeModeButton = () => {
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <button onClick={toggleDarkMode} className="toggle-button">
      Przełącz tryb
    </button>
  );
};
export default ChangeModeButton;
