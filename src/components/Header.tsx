import React from "react";

type HeaderProps = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ showForm, setShowForm }) => {
  const appDescription = "Talk Code, Any Language";

  return (
    <header className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="logo.png" className="w-[68px] h-[68px]" alt="logo" />
        <h1>{appDescription}</h1>
      </div>

      <button
        className="border-none font-[Coiny] leading-none uppercase text-[20px] px-8 py-[20px] pb-[17px] bg-gradient-to-br from-blue-500 via-red-500 via-green-600 to-yellow-400 text-inherit rounded-full cursor-pointer transition duration-300 hover:scale-[1.1] hover:-rotate-2"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Add a term"}
      </button>
    </header>
  );
};

export default Header;
