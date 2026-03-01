import { useState } from "react";
import darkIcon from "./assets/darkIcon.svg";
import lightIcon from "./assets/lightIcon.svg";
import "./App.css";

type Theme = "light" | "dark";

interface ThemeButtonProps {
  theme: Theme;
  isActive: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, isActive, icon, label, onClick }) => {
  return (
    <button
      className={`button ${isActive ? 'active' : ''}`}
      onClick={onClick}
      aria-label={`Switch to ${label}`}
      aria-pressed={isActive}
    >
      <img
        src={icon}
        className={`${theme}-icon`}
        alt={`${label} icon`}
      />
      <span>{label}</span>
    </button>
  );
};

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  const updateTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  const currentThemeClassName = `layout ${currentTheme}`;

  return (
    <main className={currentThemeClassName} role="application" aria-label="Theme Switcher">
      <div className="buttons">
        <ThemeButton
          theme="light"
          isActive={currentTheme === "light"}
          icon={lightIcon}
          label="Light Theme"
          onClick={() => updateTheme("light")}
        />
        <ThemeButton
          theme="dark"
          isActive={currentTheme === "dark"}
          icon={darkIcon}
          label="Dark Theme"
          onClick={() => updateTheme("dark")}
        />
      </div>
    </main>
  );
}

export default App;
